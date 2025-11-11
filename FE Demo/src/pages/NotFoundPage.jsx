import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center text-center min-h-[calc(100vh-80px)]">
      <div>
        <h1 className="text-9xl font-bold text-green-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Trang không tồn tại</h2>
        <p className="text-gray-600 mt-2">Rất tiếc, chúng tôi không tìm thấy trang bạn yêu cầu.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition duration-200">
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}