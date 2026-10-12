import { useEffect, useState } from 'react';
import { Course, NewsPost, ResourceItem } from '../types';
import { newsData } from '../data/newsData';
import { resourcesData } from '../data/resourcesData';
import { CampusScheduleCard, campusScheduleCards } from '../data/scheduleData';
import { coursesData } from '../data/coursesData';

export type ContentType = 'news' | 'resources' | 'schedules' | 'courses';

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
  courses: coursesData
};

export async function fetchContent<T>(type: ContentType, fallback: T[]): Promise<T[]> {
  try {
    const response = await fetch(`/api/content/${type}`, { cache: 'no-store' });
    if (!response.ok) return fallback;
    const result = await response.json();
    return result.initialized ? result.items : fallback;
  } catch {
    return fallback;
  }
}

export function useManagedContent<T>(type: ContentType, fallback: T[]): T[] {
  const [items, setItems] = useState<T[]>(fallback);
  useEffect(() => { fetchContent(type, fallback).then(setItems); }, [type]);
  return items;
}

export const useNews = () => useManagedContent<NewsPost>('news', newsData);
export const useResources = () => useManagedContent<ResourceItem>('resources', resourcesData);
export const useScheduleCards = () => groupSchedules(useManagedContent<ManagedSchedule>('schedules', defaultContent.schedules));
export const useCourses = () => useManagedContent<Course>('courses', coursesData);

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
  load: <T,>(type: ContentType, fallback: T[]) => fetchContent(type, fallback),
  save: <T,>(type: ContentType, items: T[]) => adminRequest(`/api/admin/content/${type}`, { method: 'PUT', body: JSON.stringify({ items }) })
};
