// src/pages/Stats.jsx
import React from "react";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

export default function Stats() {
  // Demo data – sau nối API thì thay bằng dữ liệu thật
  const stats = [
    {
      id: "hsa-math-1",
      name: "HSA Math Practice #1",
      attempts: 3,
      bestScore: "780 / 800",
      avgScore: "742 / 800",
      totalTime: "54m 12s",
      lastTaken: "2025-01-20",
    },
    {
      id: "hsa-read-1",
      name: "SAT Reading Mock #2",
      attempts: 2,
      bestScore: "690 / 800",
      avgScore: "670 / 800",
      totalTime: "44m 08s",
      lastTaken: "2025-01-18",
    },
    {
      id: "hsa-write-3",
      name: "Writing Section #3",
      attempts: 1,
      bestScore: "800 / 800",
      avgScore: "800 / 800",
      totalTime: "16m 05s",
      lastTaken: "2025-01-15",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <DashboardNavbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-extrabold mb-8">Thống kê</h1>

        <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 overflow-hidden">
          {/* Header – match Tests / History */}
          <div className="hidden md:grid grid-cols-12 bg-neutral-100 px-6 py-3 text-sm font-semibold">
            <div className="col-span-4">Name</div>
            <div className="col-span-2">Attempts</div>
            <div className="col-span-2">Best score</div>
            <div className="col-span-2">Average score</div>
            <div className="col-span-2">Last taken</div>
          </div>

          {stats.map((s, i) => (
            <div
              key={s.id}
              className={`grid grid-cols-12 items-center px-6 py-4 text-sm md:text-base ${
                i !== stats.length - 1 ? "border-b border-neutral-100" : ""
              }`}
            >
              <div className="col-span-12 md:col-span-4">
                <div className="font-medium">{s.name}</div>
                <div className="mt-1 text-xs text-neutral-500 md:hidden">
                  {s.attempts} lượt • Best {s.bestScore} • Avg {s.avgScore}
                </div>
              </div>

              <div className="hidden md:block md:col-span-2">{s.attempts}</div>

              <div className="hidden md:block md:col-span-2 font-semibold">
                {s.bestScore}
              </div>

              <div className="hidden md:block md:col-span-2">
                {s.avgScore}
              </div>

              <div className="hidden md:block md:col-span-2">
                {s.lastTaken}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}