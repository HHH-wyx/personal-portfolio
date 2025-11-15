export default function TestPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>测试页面</h1>
      <p>如果您能看到这个页面，说明 Next.js 基本功能正常。</p>
      <p>时间: {new Date().toLocaleString('zh-CN')}</p>
    </div>
  );
}

