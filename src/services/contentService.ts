import { useEffect, useState } from 'react';
import { Branch, Course, NewsPost, ResourceItem } from '../types';
import { newsData } from '../data/newsData';
import { resourcesData } from '../data/resourcesData';
import { CampusScheduleCard, campusScheduleCards } from '../data/scheduleData';
import { coursesData } from '../data/coursesData';
import { branchesData } from '../data/branchesData';

export type ContentType = 'news' | 'resources' | 'schedules' | 'courses' | 'branches';

export interface ManagedSchedule {
  id: string;
  branchId: string;
  branchName: string;
  badgeName: string;
  region: string;
  regionLabel: string;
  address: string;
  hotline: string;
  courseName: string;
  commitment: string;
  startDate: string;
  days: string;
  time: string;
  timeSlot: 'sang' | 'chieu' | 'toi';
  note?: string;
}

export const flattenSchedules = (cards: CampusScheduleCard[]): ManagedSchedule[] => cards.flatMap(card =>
  card.courses.flatMap(course => course.rows.map(row => ({
    ...row,
    branchId: card.id,
    branchName: card.branchName,
    badgeName: card.badgeName,
    region: card.region,
    regionLabel: card.regionLabel,
    address: card.address,
    hotline: card.hotline,
    courseName: course.courseName,
    commitment: course.commitment
  })))
);

export const groupSchedules = (rows: ManagedSchedule[]): CampusScheduleCard[] => {
  const cards = new Map<string, CampusScheduleCard>();
  rows.forEach(row => {
    if (!cards.has(row.branchId)) cards.set(row.branchId, {
      id: row.branchId, branchName: row.branchName, badgeName: row.badgeName,
      region: row.region, regionLabel: row.regionLabel, address: row.address,
      hotline: row.hotline, courses: []
    });
    const card = cards.get(row.branchId)!;
    let course = card.courses.find(item => item.courseName === row.courseName);
    if (!course) {
      course = { courseName: row.courseName, commitment: row.commitment, rows: [] };
      card.courses.push(course);
    }
    course.rows.push({ id: row.id, startDate: row.startDate, days: row.days, time: row.time, timeSlot: row.timeSlot, note: row.note });
  });
  return [...cards.values()];
};

export const defaultContent = {
  news: newsData,
  resources: resourcesData,
  schedules: flattenSchedules(campusScheduleCards),
  courses: coursesData,
  branches: branchesData
};

const cache = new Map<string, { value: any; expires: number }>();
const pending = new Map<string, Promise<any>>();
const CACHE_MS = 30000;
async function publicRequest(url: string): Promise<any> {
  const hit = cache.get(url);
  if (hit && hit.expires > Date.now()) return hit.value;
  if (pending.has(url)) return pending.get(url);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  const work = fetch(url, { signal: controller.signal, cache: 'no-cache' }).then(async response => {
    if (!response.ok) throw new Error('Content request failed');
    const value = await response.json();
    if (cache.size >= 100) cache.delete(cache.keys().next().value);
    cache.set(url, { value, expires: Date.now() + CACHE_MS });
    return value;
  }).finally(() => { clearTimeout(timer); pending.delete(url); });
  pending.set(url, work);
  return work;
}
export async function fetchContent<T>(type: ContentType, fallback: T[]): Promise<T[]> {
  try {
    const result = await publicRequest('/api/content/' + type + ((type === 'news' || type === 'resources') ? '?view=summary' : ''));
    return result.initialized ? result.items : fallback;
  } catch { return fallback; }
}
export function useManagedContent<T>(type: ContentType, fallback: T[]): T[] {
  const url = '/api/content/' + type + ((type === 'news' || type === 'resources') ? '?view=summary' : '');
  const hit = cache.get(url);
  const [items, setItems] = useState<T[]>(hit?.value.initialized ? hit.value.items : fallback);
  useEffect(() => {
    let active = true;
    fetchContent(type, fallback).then(value => { if (active) setItems(value); });
    return () => { active = false; };
  }, [type]);
  return items;
}
function useContentDetail<T extends { id: string; slug?: string }>(type: ContentType, key: string, fallback: T[]): T | null | undefined {
  const url = '/api/content/' + type + '/' + encodeURIComponent(key);
  const [state, setState] = useState<{ key: string; item: T | null } | null>(null);
  useEffect(() => {
    let active = true;
    publicRequest(url).then(result => {
      if (active) setState({ key, item: result.initialized ? result.item : fallback.find(item => item.id === key || item.slug === key) || null });
    }).catch(() => { if (active) setState({ key, item: fallback.find(item => item.id === key || item.slug === key) || null }); });
    return () => { active = false; };
  }, [url]);
  if (state?.key === key) return state.item;
  return fallback.find(item => item.id === key || item.slug === key);
}
export const useNews = () => useManagedContent<NewsPost>('news', newsData);
export const useResources = () => useManagedContent<ResourceItem>('resources', resourcesData);
export const useNewsDetail = (slug: string) => useContentDetail('news', slug, newsData);
export const useResourceDetail = (slug: string) => useContentDetail('resources', slug, resourcesData);
export const useScheduleCards = () => groupSchedules(useManagedContent<ManagedSchedule>('schedules', defaultContent.schedules));
export const useCourses = () => useManagedContent<Course>('courses', coursesData);
export const useBranches = () => useManagedContent<Branch>('branches', branchesData);

async function adminRequest(path: string, options: RequestInit = {}) {
  const response = await fetch(path, { ...options, headers: { 'Content-Type': 'application/json', ...(options.headers || {}) } });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || 'Không thể kết nối máy chủ.');
  return result;
}

export const adminApi = {
  session: () => adminRequest('/api/admin/session'),
  login: (username: string, password: string) => adminRequest('/api/admin/login', { method: 'POST', body: JSON.stringify({ username, password }) }),
  logout: () => adminRequest('/api/admin/logout', { method: 'POST' }),
  load: async <T,>(type: ContentType, fallback: T[]): Promise<T[]> => {
    const result = await adminRequest('/api/admin/content/' + type);
    return result.initialized ? result.items : fallback;
  },
  save: async <T,>(type: ContentType, items: T[]) => {
    const result = await adminRequest(`/api/admin/content/${type}`, { method: 'PUT', body: JSON.stringify({ items }) });
    cache.clear();
    return result;
  }
};
