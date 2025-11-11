// src/pages/Tests.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

const ROWS = [
  { id: "hsa-math-1",  name: "HSA Mathematics Practise Test #1", type: "Adaptive", duration: 75,  target: 50,  action: "Start"  },
  { id: "hsa-read-1",  name: "HSA Reading Practise Test #1",     type: "Fixed",    duration: 60,  target: 50,  action: "Start"  },
  { id: "hsa-write-3", name: "HSA Writing Practise Test #3",     type: "Adaptive", duration: 60,  target: 50,  action: "Resume" },
  { id: "hsa-total-2", name: "HSA Total Skill Test #2",          type: "Fixed",    duration: 195, target: 150, action: "Start"  },
];

export default function Tests() {
  const nav = useNavigate();
  const goDetail = (id) => nav(`/exam/${id}`);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900"> {/* đổi nền sang trắng ngà */}
      <DashboardNavbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-extrabold mb-8">Test</h1>

        <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 overflow-hidden">
          {/* Header bảng */}
          <div className="hidden md:grid grid-cols-12 bg-neutral-100 px-6 py-3 text-sm font-semibold">
            <div className="col-span-6">Name</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Duration</div>
            <div className="col-span-1">Target Score</div>
            <div className="col-span-1 text-right"></div>
          </div>

          {/* Rows */}
          {ROWS.map((r, i) => (
            <div
              key={r.id}
              className={`grid grid-cols-12 items-center px-6 py-4 text-sm md:text-base ${
                i !== ROWS.length - 1 ? "border-b border-neutral-100" : ""
              }`}
            >
              {/* Name */}
              <div className="col-span-12 md:col-span-6">
                <div className="font-medium">{r.name}</div>
                {/* labels cho mobile */}
                <div className="mt-1 text-xs text-neutral-500 md:hidden">
                  {r.type} • {r.duration} min • Target {r.target}
                </div>
              </div>

              {/* Type */}
              <div className="hidden md:block md:col-span-2">{r.type}</div>

              {/* Duration */}
              <div className="hidden md:block md:col-span-2">{r.duration} min</div>

              {/* Target */}
              <div className="hidden md:block md:col-span-1">{r.target}</div>

              {/* Action */}
              <div className="col-span-12 md:col-span-1 md:text-right mt-3 md:mt-0">
                <button
                  onClick={() => goDetail(r.id)}
                  className={`px-4 py-1.5 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-200
                    ${r.action === "Resume" ? "bg-indigo-400 hover:bg-indigo-500" : "bg-indigo-600 hover:bg-indigo-700"}`}
                >
                  {r.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
