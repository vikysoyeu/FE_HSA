import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider.jsx";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

export default function FigmaDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goTests = () => navigate("/tests");
  const goTestDetail = (id) => navigate(`/tests/${id}`);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <DashboardNavbar />

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* KPI cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "SCORE", value: "750 / 800" },
            { label: "ABILITY (θ)", value: "+ 0.45" },
            { label: "AVG TIME", value: "22.2s / câu" },
            { label: "ACCURACY / TOTAL", value: "87% / 12 tests" },
          ].map((k, i) => (
            <div
              key={i}
              className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 shadow-md transition hover:ring-neutral-300 hover:shadow-lg"
            >
              <div className="text-neutral-500 text-xs font-medium">{k.label}</div>
              <div className="mt-2 text-3xl font-bold text-neutral-900">{k.value}</div>
            </div>
          ))}
        </section>

        {/* Next recommended test */}
        <section className="rounded-xl bg-white ring-1 ring-neutral-200 p-5 shadow-md transition hover:ring-neutral-300 hover:shadow-lg flex items-center justify-between">
          <div>
            <div className="text-neutral-500 text-sm">Bài thi gợi ý tiếp theo</div>
            <div className="text-lg font-semibold">Toán – Phần 3 • HSA</div>
          </div>
          <button
            onClick={goTests}
            className="px-4 py-2 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-black focus:outline-none focus:ring-2 focus:ring-neutral-300"
          >
            Bắt đầu ngay
          </button>
        </section>

        {/* Available tests */}
        <section className="rounded-xl bg-white ring-1 ring-neutral-200 p-5 shadow-md">
          <h3 className="mb-3 text-neutral-700 font-semibold">Bài thi có sẵn</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5 space-y-2 shadow-md transition hover:ring-neutral-300 hover:shadow-lg">
              <div className="font-semibold">HSA Math Practice #1</div>
              <div className="text-sm text-neutral-500">Adaptive • Fixed</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => goTestDetail("hsa-math-1")}
                  className="px-3 py-1.5 rounded-md bg-neutral-900 text-white text-sm font-semibold hover:bg-black focus:outline-none focus:ring-2 focus:ring-neutral-300"
                >
                  Start Test
                </button>
                <button
                  onClick={goTests}
                  className="px-3 py-1.5 rounded-md bg-white text-neutral-900 text-sm ring-1 ring-neutral-300 hover:bg-neutral-50 hover:ring-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300/60"
                >
                  Xem danh sách
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5 space-y-2 shadow-md transition hover:ring-neutral-300 hover:shadow-lg">
              <div className="font-semibold">SAT Reading Mock #2</div>
              <div className="text-sm text-neutral-500">Target: 720 pts</div>
              <div className="mt-2 flex gap-2 items-center">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-neutral-900 text-white">
                  In progress
                </span>
                <button
                  onClick={goTests}
                  className="px-3 py-1.5 rounded-md bg-white text-neutral-900 text-sm ring-1 ring-neutral-300 hover:bg-neutral-50 hover:ring-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300/60"
                >
                  Xem danh sách
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5 space-y-2 shadow-md transition hover:ring-neutral-300 hover:shadow-lg">
              <div className="font-semibold">Writing Section #3</div>
              <div className="text-sm text-neutral-500">Status: Completed</div>
              <div className="mt-2 flex gap-2 items-center">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-neutral-900 text-white">
                  Confirmed
                </span>
                <button
                  onClick={goTests}
                  className="px-3 py-1.5 rounded-md bg-white text-neutral-900 text-sm ring-1 ring-neutral-300 hover:bg-neutral-50 hover:ring-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300/60"
                >
                  Xem danh sách
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Charts placeholders */}
        <section className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-xl bg-white ring-1 ring-neutral-200 p-5 shadow-md">
            <div className="font-semibold mb-2 text-neutral-700">Skill Accuracy by Domain</div>
            <div className="h-56 grid place-items-center text-neutral-400">(Radar chart placeholder)</div>
          </div>
          <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5 shadow-md">
            <div className="font-semibold mb-2 text-neutral-700">Progress overtime</div>
            <div className="h-56 grid place-items-center text-neutral-400">(Line chart placeholder)</div>
          </div>
        </section>
        {/* (Đã xóa) */}
      </main>
    </div>
  );
}
