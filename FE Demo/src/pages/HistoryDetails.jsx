// src/pages/HistoryDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar.jsx";
import { examAttempts } from "../mock/historyData.js";

export default function HistoryDetail() {
  const { attemptId } = useParams(); // "attempt-1"
  const navigate = useNavigate();

  const attempt = examAttempts.find((a) => a.id === attemptId);

  if (!attempt) {
    return (
      <div className="min-h-screen bg-neutral-50 text-neutral-900">
        <DashboardNavbar />
        <main className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-red-600 font-semibold mb-4">
            Không tìm thấy dữ liệu cho bài làm này.
          </p>
          <button
            onClick={() => navigate("/history")}
            className="px-4 py-2 rounded-md bg-neutral-900 text-white text-sm"
          >
            ← Quay lại lịch sử
          </button>
        </main>
      </div>
    );
  }

  const accuracy = Math.round(
    (attempt.correct / attempt.totalQuestions) * 100
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <DashboardNavbar />

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Kết quả bài làm
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              {attempt.testName} • Ngày làm: {attempt.date}
            </p>
          </div>
          <button
            onClick={() => navigate("/history")}
            className="px-3 py-1.5 rounded-md bg-neutral-900 text-white text-xs md:text-sm"
          >
            ← Quay lại lịch sử
          </button>
        </div>

        {/* Summary cards */}
        <section className="grid gap-4 md:grid-cols-4">
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-500">
              Score
            </h2>
            <p className="text-2xl font-bold mt-1">
              {attempt.score} / {attempt.totalScore}
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-500">
              Accuracy
            </h2>
            <p className="text-2xl font-bold mt-1">
              {accuracy}% ({attempt.correct}/{attempt.totalQuestions})
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-500">
              Time
            </h2>
            <p className="text-2xl font-bold mt-1">{attempt.time}</p>
          </div>
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-500">
              Status
            </h2>
            <span
              className={`inline-flex mt-2 px-2.5 py-1 text-xs font-semibold rounded-full ${
                attempt.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {attempt.status}
            </span>
          </div>
        </section>

        {/* Questions */}
        <section className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
          <h2 className="text-sm font-semibold mb-3">Chi tiết từng câu hỏi</h2>

          {attempt.questions.length === 0 ? (
            <p className="text-sm text-neutral-500">
              Hiện chưa có mock câu hỏi chi tiết cho bài này. Sau này sẽ lấy từ
              API backend.
            </p>
          ) : (
            <div className="space-y-3 text-sm">
              {attempt.questions.map((q) => {
                const isCorrect = q.chosenIndex === q.correctIndex;
                return (
                  <div
                    key={q.no}
                    className={`border rounded-md px-3 py-2 ${
                      isCorrect
                        ? "border-emerald-200 bg-emerald-50/60"
                        : "border-red-200 bg-red-50/60"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold">
                        Câu {q.no}: {q.topic} ({q.difficulty})
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isCorrect ? "text-emerald-700" : "text-red-700"
                        }`}
                      >
                        {isCorrect ? "Đúng" : "Sai"}
                      </span>
                    </div>

                    <p className="mb-2">{q.content}</p>

                    <ol className="list-decimal list-inside space-y-0.5 mb-2">
                      {q.options.map((opt, idx) => {
                        const chosen = idx === q.chosenIndex;
                        const correct = idx === q.correctIndex;
                        return (
                          <li
                            key={idx}
                            className={`text-xs md:text-sm ${
                              correct
                                ? "font-semibold text-emerald-800"
                                : chosen && !correct
                                ? "text-red-700 line-through"
                                : ""
                            }`}
                          >
                            {opt}
                            {correct ? " (Đáp án đúng)" : ""}
                            {chosen && !correct ? " (Bạn chọn)" : ""}
                          </li>
                        );
                      })}
                    </ol>

                    {q.explanation && (
                      <p className="text-xs text-neutral-600">
                        <span className="font-semibold">Giải thích:</span>{" "}
                        {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}