import React, { useState } from 'react';
import './bill.css';

export default function BillTemplateEditor({ html, css, onSave }) {
  const [templateHtml, setHtml] = useState(html);
  const [templateCss, setCss] = useState(css);

  return (
    <div className="template-editor">
      <textarea value={templateHtml} onChange={e => setHtml(e.target.value)} />
      <textarea value={templateCss} onChange={e => setCss(e.target.value)} />
      <button onClick={() => onSave({ html: templateHtml, css: templateCss })}>Lưu</button>
    </div>
  );
}
