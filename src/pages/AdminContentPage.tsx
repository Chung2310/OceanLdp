import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, BookOpen, CalendarDays, FileText, GraduationCap, LogOut, Pencil, Plus, Save, Search, Trash2, X } from 'lucide-react';
import RichTextEditor from '../components/Admin/RichTextEditor';
import { adminApi, ContentType, defaultContent, ManagedSchedule } from '../services/contentService';
import { Course, NewsPost, ResourceItem } from '../types';
import { newsCategories } from '../data/newsData';
import { resourceCategories } from '../data/resourcesData';
import { courseCategories } from '../data/coursesData';

type Tab = ContentType;
type ManagedItem = NewsPost | ResourceItem | ManagedSchedule | Course;
const emptyNews: NewsPost = { id: '', category: 'green-ocean', categoryName: 'Tin Tức Green Ocean', title: '', slug: '', date: '', author: 'Ban Chuyên Môn Green Ocean', views: '0', image: '', excerpt: '', content: '', layoutType: 'standard' };
const emptyResource: ResourceItem = { id: '', category: 'tu-vung', categoryName: 'Từ Vựng Tiếng Trung', title: '', slug: '', format: 'PDF', size: '', downloads: '0', author: 'Ban Chuyên Môn Green Ocean', image: '', desc: '', date: '', views: '0', content: '' };
const emptySchedule: ManagedSchedule = { id: '', branchId: 'co-so-1', branchName: 'Cơ sở 1: Hàn Thuyên – Đại Phúc', badgeName: 'CƠ SỞ 1: HÀN THUYÊN', region: 'co-so-1', regionLabel: 'Cơ sở 1 (Hàn Thuyên)', address: '', hotline: '', courseName: '', commitment: '', startDate: '', days: '', time: '', timeSlot: 'toi', note: '' };
const emptyCourse: Course = { id: '', category: 'hsk', title: '', slug: '', badge: '', format: 'Trực tiếp & Online', rating: 5, reviewsCount: 0, studentsCount: '0', duration: '', schedule: '', classSize: '', originalPrice: 0, salePrice: 0, image: '', thumbnail: '', shortDesc: '', targetAudience: [], outcomes: [], curriculum: [], textbook: '', gifts: [] };
const slugify = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const dateParts = (date: string) => { const [day = '', month = ''] = date.split('/'); return { day, month: month ? `Th${Number(month)}` : '' }; };
const dateToInput = (value = '') => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [day, month, year] = value.split('/');
  return day && month && year ? `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}` : '';
};
const dateFromInput = (value: string) => {
  const [year, month, day] = value.split('-');
  return year && month && day ? `${day}/${month}/${year}` : '';
};

export default function AdminContentPage(): JSX.Element {
  const [checking, setChecking] = useState(true), [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(''), [password, setPassword] = useState(''), [loginError, setLoginError] = useState('');
  const [tab, setTab] = useState<Tab>('news');
  const [data, setData] = useState<Record<Tab, ManagedItem[]>>({ news: defaultContent.news, resources: defaultContent.resources, schedules: defaultContent.schedules, courses: defaultContent.courses });
  const [query, setQuery] = useState(''), [editing, setEditing] = useState<ManagedItem | null>(null), [notice, setNotice] = useState('');
  const [saving, setSaving] = useState(false);
  useEffect(() => { adminApi.session().then(() => setAuthenticated(true)).catch(() => {}).finally(() => setChecking(false)); }, []);
  useEffect(() => { if (!authenticated) return; Promise.all([adminApi.load('news', defaultContent.news), adminApi.load('resources', defaultContent.resources), adminApi.load('schedules', defaultContent.schedules), adminApi.load('courses', defaultContent.courses)]).then(([news, resources, schedules, courses]) => setData({ news, resources, schedules, courses })); }, [authenticated]);
  const items = data[tab];
  const filtered = useMemo(() => items.filter(item => JSON.stringify(item).toLowerCase().includes(query.toLowerCase())), [items, query]);
  const flash = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(''), 3000); };
  const login = async (event: React.FormEvent) => { event.preventDefault(); setLoginError(''); try { await adminApi.login(username, password); setAuthenticated(true); setPassword(''); } catch (error) { setLoginError(error instanceof Error ? error.message : 'Không thể đăng nhập.'); } };
  const logout = async () => { await adminApi.logout().catch(() => {}); setAuthenticated(false); };
  const startNew = () => setEditing(tab === 'news' ? { ...emptyNews } : tab === 'resources' ? { ...emptyResource } : tab === 'courses' ? { ...emptyCourse } : { ...emptySchedule });
  const saveItem = async (item: ManagedItem, originalId?: string) => {
    if (!item.id || !('title' in item ? item.title : item.courseName)) return void flash('Vui lòng nhập đủ mã và tên nội dung.');
    const duplicate = items.some(current => current.id === item.id && current.id !== originalId);
    if (duplicate) return void flash('Mã nội dung đã tồn tại. Vui lòng chọn mã khác.');
    setSaving(true); const next = [...items]; const index = next.findIndex(current => current.id === (originalId || item.id));
    if (index >= 0) next[index] = item; else next.unshift(item);
    try { const result = await adminApi.save(tab, next); setData(current => ({ ...current, [tab]: result.items })); setEditing(null); flash('Đã lưu nội dung và cập nhật trang chính.'); }
    catch (error) { flash(error instanceof Error ? error.message : 'Lưu thất bại.'); } finally { setSaving(false); }
  };
  const removeItem = async (item: ManagedItem) => {
    const label = 'title' in item ? item.title : item.courseName;
    if (!window.confirm(`Xóa “${label}”? Thao tác này không thể hoàn tác.`)) return;
    try { const result = await adminApi.save(tab, items.filter(current => current.id !== item.id)); setData(current => ({ ...current, [tab]: result.items })); flash('Đã xóa nội dung.'); }
    catch (error) { flash(error instanceof Error ? error.message : 'Xóa thất bại.'); }
  };
  if (checking) return <div className="admin-loading">Đang kiểm tra phiên đăng nhập…</div>;
  if (!authenticated) return <div className="admin-login-page"><form className="admin-login-card" onSubmit={login}>
    <div className="admin-brand">GREEN OCEAN</div><h1>Đăng nhập quản trị</h1><p>Tài khoản được khởi tạo từ biến môi trường của máy chủ.</p>
    <label>Tên đăng nhập<input autoFocus autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} required /></label>
    <label>Mật khẩu<input type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
    {loginError && <div className="admin-error">{loginError}</div>}<button className="admin-primary" type="submit">Đăng nhập</button><Link href="/" className="admin-back"><ArrowLeft size={15} /> Về trang chính</Link>
  </form></div>;
  return <div className="admin-shell"><aside className="admin-sidebar"><div><div className="admin-brand">GREEN OCEAN</div><small>QUẢN TRỊ NỘI DUNG</small></div><nav>
    <button className={tab === 'news' ? 'active' : ''} onClick={() => { setTab('news'); setEditing(null); }}><FileText size={18} /> Tin tức</button>
    <button className={tab === 'schedules' ? 'active' : ''} onClick={() => { setTab('schedules'); setEditing(null); }}><CalendarDays size={18} /> Lịch khai giảng</button>
    <button className={tab === 'resources' ? 'active' : ''} onClick={() => { setTab('resources'); setEditing(null); }}><BookOpen size={18} /> Thư viện</button>
    <button className={tab === 'courses' ? 'active' : ''} onClick={() => { setTab('courses'); setEditing(null); }}><GraduationCap size={18} /> Khóa học</button>
  </nav><div className="admin-side-footer"><Link href="/"><ArrowLeft size={16} /> Xem website</Link><button onClick={logout}><LogOut size={16} /> Đăng xuất</button></div></aside>
  <main className="admin-main"><header className="admin-header"><div><h1>{tab === 'news' ? 'Tin tức' : tab === 'resources' ? 'Thư viện tài liệu' : tab === 'courses' ? 'Khóa học' : 'Lịch khai giảng'}</h1><p>{items.length} nội dung đang quản lý</p></div><button className="admin-primary" onClick={startNew}><Plus size={17} /> Thêm mới</button></header>
    {notice && <div className="admin-notice">{notice}</div>}<div className="admin-search"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Tìm kiếm nội dung…" /></div>
    <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Nội dung</th><th>{tab === 'schedules' ? 'Khai giảng' : 'Danh mục / Ngày'}</th><th>Thao tác</th></tr></thead><tbody>
      {filtered.map(item => <tr key={item.id}><td><strong>{'title' in item ? item.title : item.courseName}</strong><small>{'excerpt' in item ? item.excerpt : 'desc' in item ? item.desc : 'shortDesc' in item ? item.shortDesc : `${item.branchName} · ${item.days} · ${item.time}`}</small></td><td>{'startDate' in item ? item.startDate : <>{'categoryName' in item ? item.categoryName : item.category}<small>{'date' in item ? item.date : 'salePrice' in item ? `${item.salePrice.toLocaleString('vi-VN')}đ` : ''}</small></>}</td><td><div className="admin-actions"><button title="Sửa" onClick={() => setEditing({ ...item })}><Pencil size={16} /></button><button className="danger" title="Xóa" onClick={() => removeItem(item)}><Trash2 size={16} /></button></div></td></tr>)}
      {!filtered.length && <tr><td colSpan={3} className="admin-empty">Không có dữ liệu phù hợp.</td></tr>}
    </tbody></table></div></main>{editing && <EditorModal type={tab} item={editing} saving={saving} onClose={() => setEditing(null)} onSave={saveItem} />}</div>;
}

function EditorModal({ type, item, saving, onClose, onSave }: { type: Tab; item: ManagedItem; saving: boolean; onClose: () => void; onSave: (item: ManagedItem, originalId?: string) => void }) {
  const [draft, setDraft] = useState<any>(item);
  const set = (key: string, value: any) => setDraft((current: any) => ({ ...current, [key]: value }));
  const titleChanged = (value: string) => setDraft((current: any) => {
    const previousGeneratedCode = slugify(current.title || '');
    const generatedCode = slugify(value);
    const isNewItem = !item.id;
    return {
      ...current,
      title: value,
      slug: isNewItem && (!current.slug || current.slug === previousGeneratedCode) ? generatedCode : current.slug,
      id: isNewItem && (!current.id || current.id === previousGeneratedCode) ? generatedCode : current.id
    };
  });
  const dateChanged = (value: string) => { const formatted = dateFromInput(value); setDraft((current: any) => ({ ...current, date: formatted, ...dateParts(formatted) })); };
  const categoryChanged = (value: string) => { const categories = type === 'news' ? newsCategories : resourceCategories; setDraft((current: any) => ({ ...current, category: value, categoryName: categories.find(c => c.id === value)?.name || value })); };
  const imageFile = (file?: File) => { if (!file) return; if (file.size > 3 * 1024 * 1024) return void window.alert('Ảnh đại diện không được vượt quá 3 MB.'); const reader = new FileReader(); reader.onload = () => { set('image', String(reader.result)); if (type === 'courses') set('thumbnail', String(reader.result)); }; reader.readAsDataURL(file); };
  const submitDraft = () => {
    const result = { ...draft };
    if (type === 'courses') {
      try {
        const curriculum = JSON.parse(result.__curriculumJson ?? JSON.stringify(result.curriculum || []));
        if (!Array.isArray(curriculum)) throw new Error();
        result.curriculum = curriculum;
      } catch { return void window.alert('Lộ trình JSON không hợp lệ. Vui lòng sửa trước khi lưu.'); }
      delete result.__curriculumJson;
    }
    onSave(result, item.id || undefined);
  };
  return <div className="admin-modal-backdrop"><form className="admin-modal" onSubmit={e => { e.preventDefault(); submitDraft(); }}><div className="admin-modal-head"><div><h2>{item.id ? 'Chỉnh sửa' : 'Thêm nội dung mới'}</h2><p>Mọi thay đổi sau khi lưu sẽ hiển thị trên website.</p></div><button type="button" onClick={onClose}><X size={21} /></button></div><div className="admin-form-grid">
    {type === 'schedules' ? <ScheduleFields draft={draft} set={set} /> : type === 'courses' ? <CourseFields draft={draft} set={set} titleChanged={titleChanged} imageFile={imageFile} /> : <>
      <label className="wide">Tiêu đề *<input value={draft.title} onChange={e => titleChanged(e.target.value)} required /></label><label>Mã nội dung *<input value={draft.id} onChange={e => set('id', slugify(e.target.value))} required /></label><label>Đường dẫn (slug) *<input value={draft.slug || ''} onChange={e => set('slug', slugify(e.target.value))} required /></label>
      <label>Danh mục<select value={draft.category} onChange={e => categoryChanged(e.target.value)}>{(type === 'news' ? newsCategories : resourceCategories).filter(c => c.id !== 'all').map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label><label>Ngày đăng<input type="date" value={dateToInput(draft.date || '')} onChange={e => dateChanged(e.target.value)} /></label><label>Tác giả<input value={draft.author || ''} onChange={e => set('author', e.target.value)} /></label><label>Lượt xem<input value={draft.views || ''} onChange={e => set('views', e.target.value)} /></label>
      {type === 'resources' && <><label>Định dạng<input value={draft.format || ''} onChange={e => set('format', e.target.value)} placeholder="PDF Ebook" /></label><label>Dung lượng<input value={draft.size || ''} onChange={e => set('size', e.target.value)} placeholder="15 MB" /></label><label>Lượt tải<input value={draft.downloads || ''} onChange={e => set('downloads', e.target.value)} /></label></>}{type === 'news' && <label>Kiểu hiển thị<select value={draft.layoutType || 'standard'} onChange={e => set('layoutType', e.target.value)}><option value="standard">Có ảnh đại diện</option><option value="text-only">Chỉ văn bản</option></select></label>}
      <label className="wide">Ảnh đại diện (URL hoặc tải ảnh)<div className="admin-image-input"><input value={draft.image || ''} onChange={e => set('image', e.target.value)} placeholder="https://..." /><label className="admin-file">Chọn ảnh<input type="file" accept="image/*" onChange={e => imageFile(e.target.files?.[0])} /></label></div>{draft.image && <img className="admin-image-preview" src={draft.image} alt="Xem trước" />}</label>
      <label className="wide">Mô tả ngắn<textarea rows={3} value={type === 'news' ? draft.excerpt : draft.desc} onChange={e => set(type === 'news' ? 'excerpt' : 'desc', e.target.value)} /></label><label className="wide">Nội dung chi tiết<RichTextEditor value={draft.content || ''} onChange={value => set('content', value)} /></label>
    </>}</div><div className="admin-modal-foot"><button type="button" className="admin-secondary" onClick={onClose}>Hủy</button><button className="admin-primary" disabled={saving}><Save size={16} /> {saving ? 'Đang lưu…' : 'Lưu nội dung'}</button></div></form></div>;
}

const listText = (value?: string[]) => (value || []).join('\n');
const textList = (value: string) => value.split('\n').map(item => item.trim()).filter(Boolean);

function CourseFields({ draft, set, titleChanged, imageFile }: { draft: Course; set: (key: string, value: any) => void; titleChanged: (value: string) => void; imageFile: (file?: File) => void }) {
  const [curriculumJson, setCurriculumJson] = useState(() => JSON.stringify(draft.curriculum || [], null, 2));
  const updateCurriculum = () => {
    try { const parsed = JSON.parse(curriculumJson); if (!Array.isArray(parsed)) throw new Error(); set('curriculum', parsed); }
    catch { window.alert('Lộ trình JSON không hợp lệ. Dữ liệu cũ được giữ nguyên.'); setCurriculumJson(JSON.stringify(draft.curriculum || [], null, 2)); }
  };
  const setSkill = (key: 'listen' | 'speak' | 'read' | 'write', value: string) => set('skills', { ...(draft.skills || { listen: '', speak: '', read: '', write: '' }), [key]: value });
  const setList = (key: keyof Course, value: string) => set(key, textList(value));
  return <>
    <label className="wide">Tên khóa học *<input value={draft.title} onChange={e => titleChanged(e.target.value)} required /></label>
    <label>Mã khóa học *<input value={draft.id} onChange={e => set('id', slugify(e.target.value))} required /></label>
    <label>Đường dẫn (slug) *<input value={draft.slug} onChange={e => set('slug', slugify(e.target.value))} required /></label>
    <label>Danh mục<select value={draft.category} onChange={e => set('category', e.target.value)}>{courseCategories.filter(c => c.id !== 'all').map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
    <label>Nhãn nổi bật<input value={draft.badge || ''} onChange={e => set('badge', e.target.value)} placeholder="Khóa học cốt lõi" /></label>
    <label>Mã lớp<input value={draft.classCode || ''} onChange={e => set('classCode', e.target.value)} /></label>
    <label>Hình thức học<input value={draft.format} onChange={e => set('format', e.target.value)} /></label>
    <label>Thời lượng<input value={draft.duration} onChange={e => set('duration', e.target.value)} /></label>
    <label>Tổng số buổi<input value={draft.totalSessions || ''} onChange={e => set('totalSessions', e.target.value)} /></label>
    <label>Thời lượng mỗi buổi<input value={draft.sessionDuration || ''} onChange={e => set('sessionDuration', e.target.value)} /></label>
    <label>Lịch học<input value={draft.schedule} onChange={e => set('schedule', e.target.value)} /></label>
    <label>Sĩ số lớp<input value={draft.classSize} onChange={e => set('classSize', e.target.value)} /></label>
    <label>Số học viên<input value={draft.studentsCount} onChange={e => set('studentsCount', e.target.value)} /></label>
    <label>Học phí gốc<input type="number" min="0" value={draft.originalPrice} onChange={e => set('originalPrice', Number(e.target.value))} /></label>
    <label>Học phí ưu đãi<input type="number" min="0" value={draft.salePrice} onChange={e => set('salePrice', Number(e.target.value))} /></label>
    <label>Điểm đánh giá<input type="number" min="0" max="5" step="0.1" value={draft.rating} onChange={e => set('rating', Number(e.target.value))} /></label>
    <label>Số lượt đánh giá<input type="number" min="0" value={draft.reviewsCount} onChange={e => set('reviewsCount', Number(e.target.value))} /></label>
    <label className="wide">Ảnh khóa học (URL hoặc tải ảnh)<div className="admin-image-input"><input value={draft.image || ''} onChange={e => { set('image', e.target.value); set('thumbnail', e.target.value); }} placeholder="https://..." /><label className="admin-file">Chọn ảnh<input type="file" accept="image/*" onChange={e => imageFile(e.target.files?.[0])} /></label></div>{draft.image && <img className="admin-image-preview" src={draft.image} alt="Xem trước" />}</label>
    <label className="wide">Mô tả ngắn<textarea rows={3} value={draft.shortDesc} onChange={e => set('shortDesc', e.target.value)} /></label>
    <label className="wide">Giáo trình<textarea rows={2} value={draft.textbook} onChange={e => set('textbook', e.target.value)} /></label>
    <label className="wide">Thông tin học bổng<textarea rows={2} value={draft.scholarshipText || ''} onChange={e => set('scholarshipText', e.target.value)} /></label>
    <label className="wide">Đối tượng học viên — mỗi dòng một mục<textarea rows={4} value={listText(draft.targetAudience)} onChange={e => setList('targetAudience', e.target.value)} /></label>
    <label className="wide">Mục tiêu khóa học — mỗi dòng một mục<textarea rows={4} value={listText(draft.objectives)} onChange={e => setList('objectives', e.target.value)} /></label>
    <label className="wide">Nội dung học — mỗi dòng một mục<textarea rows={5} value={listText(draft.contentTopics)} onChange={e => setList('contentTopics', e.target.value)} /></label>
    <label className="wide">Chuẩn đầu ra — mỗi dòng một mục<textarea rows={4} value={listText(draft.outcomes)} onChange={e => setList('outcomes', e.target.value)} /></label>
    <label className="wide">Quà tặng — mỗi dòng một mục<textarea rows={4} value={listText(draft.gifts)} onChange={e => setList('gifts', e.target.value)} /></label>
    <label className="wide">Tóm tắt các giai đoạn — mỗi dòng một mục<textarea rows={4} value={listText(draft.contentPhasesSummary)} onChange={e => setList('contentPhasesSummary', e.target.value)} /></label>
    <label>Kỹ năng nghe<textarea rows={3} value={draft.skills?.listen || ''} onChange={e => setSkill('listen', e.target.value)} /></label>
    <label>Kỹ năng nói<textarea rows={3} value={draft.skills?.speak || ''} onChange={e => setSkill('speak', e.target.value)} /></label>
    <label>Kỹ năng đọc<textarea rows={3} value={draft.skills?.read || ''} onChange={e => setSkill('read', e.target.value)} /></label>
    <label>Kỹ năng viết<textarea rows={3} value={draft.skills?.write || ''} onChange={e => setSkill('write', e.target.value)} /></label>
    <label className="wide">Lộ trình chi tiết (JSON)<textarea className="admin-code-field" rows={12} value={curriculumJson} onChange={e => { setCurriculumJson(e.target.value); set('__curriculumJson', e.target.value); }} onBlur={updateCurriculum} /><small>Dạng: [{`{"phase":"Chặng 1","topics":["Nội dung 1"]}`}]. Nội dung được kiểm tra khi rời ô và trước khi lưu.</small></label>
  </>;
}

function ScheduleFields({ draft, set }: { draft: ManagedSchedule; set: (key: string, value: any) => void }) { return <>
  <label>Mã lớp *<input value={draft.id} onChange={e => set('id', e.target.value)} required /></label><label>Mã cơ sở *<input value={draft.branchId} onChange={e => { set('branchId', e.target.value); set('region', e.target.value); }} required /></label><label className="wide">Tên khóa học *<input value={draft.courseName} onChange={e => set('courseName', e.target.value)} required /></label><label className="wide">Cam kết khóa học<input value={draft.commitment} onChange={e => set('commitment', e.target.value)} /></label>
  <label>Tên cơ sở<input value={draft.branchName} onChange={e => set('branchName', e.target.value)} /></label><label>Nhãn cơ sở<input value={draft.badgeName} onChange={e => set('badgeName', e.target.value)} /></label><label className="wide">Địa chỉ<input value={draft.address} onChange={e => set('address', e.target.value)} /></label><label>Hotline<input value={draft.hotline} onChange={e => set('hotline', e.target.value)} /></label><label>Tên bộ lọc cơ sở<input value={draft.regionLabel} onChange={e => set('regionLabel', e.target.value)} /></label>
  <label>Ngày khai giảng<input type="date" value={dateToInput(draft.startDate)} onChange={e => set('startDate', dateFromInput(e.target.value))} /></label><label>Ngày học<input value={draft.days} onChange={e => set('days', e.target.value)} placeholder="Tối T2, 4, 6" /></label><label>Giờ học<input value={draft.time} onChange={e => set('time', e.target.value)} placeholder="18:00 - 20:00" /></label><label>Buổi học<select value={draft.timeSlot} onChange={e => set('timeSlot', e.target.value as any)}><option value="sang">Sáng</option><option value="chieu">Chiều</option><option value="toi">Tối</option></select></label><label>Ghi chú<input value={draft.note || ''} onChange={e => set('note', e.target.value)} /></label>
</>; }
