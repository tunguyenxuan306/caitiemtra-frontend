import React, { useEffect, useState } from 'react';
import BillTemplateEditor from '../components/BillTemplateEditor';
import { getTemplate, updateTemplate } from '../api/payment';

function AdminDashboard() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');

  useEffect(() => {
    getTemplate().then(data => {
      setHtml(data.html);
      setCss(data.css);
    });
  }, []);

  return (
    <div>
      <h2>Chỉnh sửa mẫu hóa đơn</h2>
      <BillTemplateEditor html={html} css={css} onSave={updateTemplate} />
    </div>
  );
}

export default AdminDashboard;