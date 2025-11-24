import React from 'react';
import { Link } from 'react-router-dom';

export default function ExamList() {
  // Dữ liệu giả, thay bằng API sau
  const exams = [
    { id: 'dot-thi-1', title: 'Đợt thi HSA-2501' },
    { id: 'dot-thi-2', title: 'Đợt thi HSA-2502' },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Danh sách kỳ thi</h1>
      <div className="space-y-4">
        {exams.map(exam => (
          <div key={exam.id} className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">{exam.title}</h2>
            <Link to={`/exam/${exam.id}`} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Vào thi
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}