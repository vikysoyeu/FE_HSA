// src/pages/HistoryPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar.jsx";
import { examAttempts } from "../mock/historyData.js";

export default function HistoryPage() {
  const navigate = useNavigate();

  const history = examAttempts; // dùng mock

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <DashboardNavbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-extrabold mb-8">Lịch sử làm bài</h1>

        <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-neutral-100 px-6 py-3 text-sm font-semibold">
            <div className="col-span-4">Name</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Score</div>
            <div className="col-span-2">Time</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1 text-right"></div>
          </div>

          {history.map((h, i) => (
            <div
              key={h.id}
              className={`grid grid-cols-12 items-center px-6 py-4 text-sm md:text-base ${
                i !== history.length - 1 ? "border-b border-neutral-100" : ""
              }`}
            >
              {/* Name */}
              <div className="col-span-12 md:col-span-4">
                <div className="font-medium">{h.testName}</div>
                <div className="mt-1 text-xs text-neutral-500 md:hidden">
                  {h.date} • {h.score} / {h.totalScore} • {h.time}
                </div>
              </div>

              {/* Date */}
              <div className="hidden md:block md:col-span-2">{h.date}</div>

              {/* Score */}
              <div className="hidden md:block md:col-span-2 font-semibold">
                {h.score} / {h.totalScore} ({h.correct}/{h.totalQuestions})
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
                  onClick={() => navigate(`/history/${h.id}`)} // "attempt-1"
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