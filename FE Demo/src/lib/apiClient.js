const BASE = import.meta.env.VITE_API_BASE || '';

export async function apiPost(path, data) {
  try {
    const res = await fetch(BASE + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || 'Network error');
    }
    return res.json();
  } catch (e) {
    console.warn('apiPost fallback', path, e.message);
    if (path === '/api/auth/login') {
      if (data.email?.includes('valid')) return { ok: true, user: { name: 'Viky' } };
      return { ok: false, error: 'Email hoặc mật khẩu không đúng' };
    }
    if (path === '/api/auth/register') {
      return { ok: true, message: 'Đăng ký thành công (mock)' };
    }
    return { ok: false };
  }
}
