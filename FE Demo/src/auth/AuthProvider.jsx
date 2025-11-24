import React, { createContext, useContext, useMemo, useState } from "react";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {email}
  const isAuthenticated = !!user;

  // giả lập API login 
  const login = async (email, password) => {
    // TODO: gọi API thật rồi kiểm tra token
    await new Promise(r => setTimeout(r, 400));
    if (!email || !password) throw new Error("Vui lòng nhập email và mật khẩu.");
    // ví dụ: thành công
    setUser({ email, name: "Hiếu" });
    // localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem("token");
  };

  const value = useMemo(() => ({ user, isAuthenticated, login, logout }), [user, isAuthenticated]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
