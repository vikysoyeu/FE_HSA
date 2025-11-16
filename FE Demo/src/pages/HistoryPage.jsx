import React from "react";

export default function HistoryPage() {
  // Demo data lấy từ backend khi hoàn thiện 
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
    <div className="max-w-6xl mx-auto mt-6 px-4 pb-10">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Lịch sử làm bài
      </h1>

      {/* Card tổng */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-3 font-medium">Bài thi</th>
                <th className="py-3 font-medium">Ngày làm</th>
                <th className="py-3 font-medium">Điểm</th>
                <th className="py-3 font-medium">Đúng / Tổng</th>
                <th className="py-3 font-medium">Thời gian</th>
                <th className="py-3 font-medium">Trạng thái</th>
                <th className="py-3 font-medium">Thao tác</th>
              </tr>
            </thead>

            <tbody>
              {history.map((h) => (
                <tr key={h.id} className="border-b hover:bg-gray-50">
                  <td className="py-4">{h.name}</td>
                  <td>{h.date}</td>
                  <td className="font-semibold">{h.score}</td>
                  <td>
                    {h.correct}/{h.total}
                  </td>
                  <td>{h.time}</td>
                  <td>
                    {h.status === "Completed" ? (
                      <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                        Completed
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                        In progress
                      </span>
                    )}
                  </td>
                  <td>
                    <button className="px-3 py-1.5 text-sm bg-black text-white rounded-md hover:bg-gray-900">
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}