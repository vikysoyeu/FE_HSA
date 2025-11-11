import React from 'react';
// Outlet là component của React Router để render các route con
import { Outlet } from 'react-router-dom'; 
// Thử import mà không có đuôi file .jsx, để Vite tự động tìm
import Header from './Header'; 

export default function Layout() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Header sẽ luôn hiển thị ở đây */}
      <Header />
      
      {/* Nội dung của từng trang (Home, Dashboard,...) sẽ được render ở đây */}
      <main>
        <Outlet />
      </main>
      
      {/* (Bạn có thể thêm Footer ở đây) */}
      {/* <Footer /> */}
    </div>
  );
}