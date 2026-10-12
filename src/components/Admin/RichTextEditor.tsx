import React, { useEffect, useRef } from 'react';

interface Props { value: string; onChange: (value: string) => void; }

export default function RichTextEditor({ value, onChange }: Props): JSX.Element {
  const editor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (editor.current && editor.current.innerHTML !== value) editor.current.innerHTML = value || '';
  }, [value]);

  const command = (name: string, argument?: string) => {
    editor.current?.focus();
    document.execCommand(name, false, argument);
    onChange(editor.current?.innerHTML || '');
  };
  const addLink = () => {
    const url = window.prompt('Nhập đường dẫn liên kết (https://...)');
    if (url) command('createLink', url);
  };
  const addTable = () => {
    const rows = Math.min(20, Math.max(1, Number(window.prompt('Số dòng', '3')) || 3));
    const cols = Math.min(10, Math.max(1, Number(window.prompt('Số cột', '3')) || 3));
    const cells = Array.from({ length: rows }, (_, r) => `<tr>${Array.from({ length: cols }, (_, c) => r === 0 ? `<th>Tiêu đề ${c + 1}</th>` : '<td>Nội dung</td>').join('')}</tr>`).join('');
    command('insertHTML', `<div class="table-scroll"><table><tbody>${cells}</tbody></table></div><p><br></p>`);
  };
  const addImage = (file?: File) => {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) return void window.alert('Ảnh trong nội dung không được vượt quá 2 MB.');
    const reader = new FileReader();
    reader.onload = () => command('insertImage', String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div className="rte-wrap">
      <div className="rte-toolbar">
        <button type="button" onClick={() => command('formatBlock', 'h2')}>H2</button>
        <button type="button" onClick={() => command('formatBlock', 'h3')}>H3</button>
        <button type="button" onClick={() => command('formatBlock', 'p')}>Đoạn</button>
        <button type="button" onClick={() => command('bold')}><b>B</b></button>
        <button type="button" onClick={() => command('italic')}><i>I</i></button>
        <button type="button" onClick={() => command('underline')}><u>U</u></button>
        <button type="button" onClick={() => command('insertUnorderedList')}>• Danh sách</button>
        <button type="button" onClick={() => command('insertOrderedList')}>1. Danh sách</button>
        <button type="button" onClick={addLink}>Liên kết</button>
        <button type="button" onClick={addTable}>Bảng</button>
        <label className="rte-upload">Ảnh<input type="file" accept="image/*" onChange={e => addImage(e.target.files?.[0])} /></label>
        <button type="button" onClick={() => command('removeFormat')}>Xóa định dạng</button>
      </div>
      <div ref={editor} className="rte-editor" contentEditable suppressContentEditableWarning onInput={e => onChange(e.currentTarget.innerHTML)} />
    </div>
  );
}
