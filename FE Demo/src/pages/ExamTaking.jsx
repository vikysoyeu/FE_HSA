import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Component này dùng để lấy 'id' từ URL (ví dụ: /exam/dot-thi-1)
export default function ExamTaking() {
  // Lấy id kỳ thi từ URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Hàm xử lý khi nộp bài
  const handleSubmitExam = () => {
    // Xử lý logic nộp bài ở đây...
    
    // Sau khi nộp, chuyển hướng người dùng về trang Dashboard
    alert('Bạn đã nộp bài thi!');
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Đang làm bài thi: {id}
      </h1>
      
      {/* Nội dung bài thi sẽ ở đây */}
      <div className="bg-white p-6 rounded-lg shadow-md min-h-[400px]">
        <h2 className="text-xl font-semibold mb-4">Câu hỏi 1: ...</h2>
        <p className="text-gray-700">
          Nội dung câu hỏi và các lựa chọn đáp án sẽ được hiển thị ở đây.
          (Đây là giao diện mẫu).
        </p>
        {/* ... Thêm các câu hỏi khác ... */}
      </div>

      {/* Nút nộp bài */}
      <div className="mt-6 text-right">
        <button 
          onClick={handleSubmitExam}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
        >
          Nộp bài
        </button>
      </div>
    </div>
  );
}