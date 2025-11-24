// src/pages/HistoryPage.jsx
import React from "react";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

export default function HistoryPage() {
  // Demo data – sau nối API thì thay bằng dữ liệu thật
  const history = [
    {
      id: 1,
      name: "HSA Math Practice #1",
      date: "2025-01-20",
      score: "720 / 800",
      correct: 38,
      total: 40,
      time: "18m 22s",
      status: "Completed",
    },
    {
      id: 2,
      name: "SAT Reading Mock #2",
      date: "2025-01-18",
      score: "645 / 800",
      correct: 32,
      total: 40,
      time: "22m 14s",
      status: "In progress",
    },
    {
      id: 3,
      name: "Writing Section #3",
      date: "2025-01-15",
      score: "800 / 800",
      correct: 40,
      total: 40,
      time: "16m 05s",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* thanh bar trên cùng */}
      <DashboardNavbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* tiêu đề giống “Test” */}
        <h1 className="text-5xl font-extrabold mb-8">Lịch sử làm bài</h1>

        {/* card trắng + header xám giống Tests */}
        <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 overflow-hidden">
          {/* Header bảng – y xì style Tests.jsx */}
          <div className="hidden md:grid grid-cols-12 bg-neutral-100 px-6 py-3 text-sm font-semibold">
            <div className="col-span-4">Name</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Score</div>
            <div className="col-span-2">Time</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1 text-right"></div>
          </div>

          {/* Rows */}
          {history.map((h, i) => (
            <div
              key={h.id}
              className={`grid grid-cols-12 items-center px-6 py-4 text-sm md:text-base ${
                i !== history.length - 1 ? "border-b border-neutral-100" : ""
              }`}
            >
              {/* Name */}
              <div className="col-span-12 md:col-span-4">
                <div className="font-medium">{h.name}</div>
                {/* labels cho mobile */}
                <div className="mt-1 text-xs text-neutral-500 md:hidden">
                  {h.date} • {h.score} • {h.time}
                </div>
              </div>

              {/* Date */}
              <div className="hidden md:block md:col-span-2">{h.date}</div>

              {/* Score */}
              <div className="hidden md:block md:col-span-2 font-semibold">
                {h.score} ({h.correct}/{h.total})
              </div>

              {/* Time */}
              <div className="hidden md:block md:col-span-2">{h.time}</div>

              {/* Status */}
              <div className="hidden md:block md:col-span-1">
                {h.status === "Completed" ? (
                  <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    In progress
                  </span>
                )}
              </div>

              {/* Action */}
              <div className="col-span-12 md:col-span-1 md:text-right mt-3 md:mt-0">
                <button
                  className="px-4 py-1.5 rounded-md text-white text-sm font-semibold
                             bg-indigo-600 hover:bg-indigo-700
                             focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}