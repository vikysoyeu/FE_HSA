// src/pages/Stats.jsx
import React from "react";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

export default function Stats() {
  // Mock data – sau nối backend/AI thì thay bằng dữ liệu thật
  const overview = {
    overallScore: 1280,
    mathScore: 640,
    rwScore: 640,
    highestScore: 1350,
    highestScoreDate: "2025-01-18",
    testsTaken: 12,
    questionsAnswered: 860,
    totalStudyTimeHours: 42,
    avgDailyMinutes: 38,
  };

  const scoreHistory = [
    { date: "01/10", overall: 1150, math: 580, rw: 570 },
    { date: "05/10", overall: 1200, math: 600, rw: 600 },
    { date: "12/10", overall: 1230, math: 610, rw: 620 },
    { date: "20/10", overall: 1260, math: 630, rw: 630 },
    { date: "28/10", overall: 1280, math: 640, rw: 640 },
  ];

  const skillDiagnostics = [
    {
      area: "Algebra & Linear Equations",
      domain: "Math",
      accuracy: 78,
      speed: "45s/câu",
      level: "Intermediate",
    },
    {
      area: "Problem Solving & Data Analysis",
      domain: "Math",
      accuracy: 68,
      speed: "55s/câu",
      level: "Beginner",
    },
    {
      area: "Geometry & Measurement",
      domain: "Math",
      accuracy: 82,
      speed: "50s/câu",
      level: "Proficient",
    },
    {
      area: "Information & Ideas",
      domain: "Reading & Writing",
      accuracy: 75,
      speed: "40s/câu",
      level: "Intermediate",
    },
    {
      area: "Standard English Conventions",
      domain: "Reading & Writing",
      accuracy: 88,
      speed: "35s/câu",
      level: "Advanced",
    },
  ];

  const timeAnalytics = {
    avgTimePerQuestion: {
      math: "48s",
      reading: "42s",
      writing: "38s",
    },
    avgTimePerTest: "63 phút",
    recommendedTimePerTest: "60 phút",
    weeklyStudyHeatmap: [
      // độ “đậm” giả lập 0–3
      [1, 0, 2, 3, 1, 0, 0],
      [0, 1, 2, 2, 2, 1, 0],
      [0, 0, 1, 3, 2, 1, 1],
    ],
  };

  const mistakePatterns = [
    {
      type: "Sai khái niệm (conceptual)",
      description: "Thường sai ở bài toán tỉ lệ và bảng dữ liệu trong Data Analysis.",
    },
    {
      type: "Sai đọc đề",
      description: "Một số câu Reading bỏ sót từ khóa 'NOT', 'EXCEPT'.",
    },
    {
      type: "Sai tính toán",
      description: "Lỗi cộng/trừ nhầm ở các câu tính nhẩm dài.",
    },
    {
      type: "Thiếu thời gian",
      description: "5–7 câu cuối của bài Math hay làm vội trong 5 phút cuối.",
    },
  ];

  const testsBreakdown = [
    {
      id: "hsa-math-1",
      name: "HSA Math Practice #1",
      date: "2025-01-20",
      score: 1270,
      math: 650,
      rw: 620,
      accuracy: "82%",
      time: "62 phút",
    },
    {
      id: "hsa-rw-2",
      name: "SAT Reading & Writing Mock #2",
      date: "2025-01-18",
      score: 1290,
      math: 640,
      rw: 650,
      accuracy: "85%",
      time: "59 phút",
    },
    {
      id: "hsa-full-3",
      name: "Full SAT Simulation #3",
      date: "2025-01-10",
      score: 1350,
      math: 690,
      rw: 660,
      accuracy: "88%",
      time: "63 phút",
    },
  ];

  const aiRecommendation = {
    predictedScore: "≈ 1320 ± 30",
    focusAreas: [
      "Luyện thêm 20–30 câu Problem Solving & Data Analysis mỗi ngày.",
      "Dành ít nhất 15 phút luyện đọc đoạn dài (long passages) để giảm thời gian đọc.",
      "Ôn lại khái niệm tỉ lệ, phần trăm thay đổi và biểu đồ dữ liệu.",
    ],
    weeklyGoals: [
      "Hoàn thành tối thiểu 3 bài mini-quiz Math (10–15 câu).",
      "Làm 50 câu Reading Hard trong tuần này.",
      "Duy trì 30 phút luyện đề mỗi ngày.",
    ],
  };

  const learningNotes = [
    "Bài full test ngày 10/01: mất nhiều thời gian ở phần bảng dữ liệu, cần luyện thêm.",
    "Khi đọc passage dài nên gạch chân keyword, tránh bỏ sót 'NOT', 'EXCEPT'.",
    "Math: hay sai bước cuối cùng (tính nhẩm), nên kiểm tra lại kết quả trước khi chọn.",
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <DashboardNavbar />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-2">Thống kê</h1>
        <p className="text-sm text-neutral-500 mb-4">
          Tổng quan điểm số, tiến độ và gợi ý học tập cá nhân hóa dựa trên lịch sử làm bài của bạn.
        </p>

        {/* 1. OVERVIEW CARDS */}
        <section className="grid gap-4 md:grid-cols-4">
          {/* Overall score */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase text-neutral-500 mb-1">
                Overall SAT Score
              </h2>
              <p className="text-3xl font-bold">{overview.overallScore}</p>
              <p className="text-xs text-neutral-500">out of 1600</p>
            </div>
            <div className="mt-3 text-xs">
              <span className="inline-flex px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                On track
              </span>
            </div>
          </div>

          {/* Section scores */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-500 mb-2">
              Section scores
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Math</span>
                <span className="font-semibold">{overview.mathScore}</span>
              </div>
              <div className="w-full h-1.5 rounded bg-neutral-100 overflow-hidden">
                <div
                  className="h-full bg-indigo-500"
                  style={{ width: `${(overview.mathScore / 800) * 100}%` }}
                />
              </div>

              <div className="flex justify-between mt-2">
                <span>Reading & Writing</span>
                <span className="font-semibold">{overview.rwScore}</span>
              </div>
              <div className="w-full h-1.5 rounded bg-neutral-100 overflow-hidden">
                <div
                  className="h-full bg-purple-500"
                  style={{ width: `${(overview.rwScore / 800) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Highest score */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4 space-y-2">
            <h2 className="text-xs font-semibold uppercase text-neutral-500">
              Highest score
            </h2>
            <p className="text-3xl font-bold">{overview.highestScore}</p>
            <p className="text-xs text-neutral-500">
              Đạt được ngày {overview.highestScoreDate}
            </p>
            <p className="text-xs text-emerald-600 mt-2">
              +{overview.highestScore - 1100} điểm so với điểm xuất phát ước tính
            </p>
          </div>

          {/* Practice volume */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4 space-y-3 text-sm">
            <h2 className="text-xs font-semibold uppercase text-neutral-500">
              Practice overview
            </h2>
            <p>
              <span className="font-semibold">{overview.testsTaken}</span> bài thi thử
              đã hoàn thành
            </p>
            <p>
              <span className="font-semibold">{overview.questionsAnswered}</span> câu
              hỏi đã luyện tập
            </p>
            <p>
              <span className="font-semibold">{overview.totalStudyTimeHours} giờ</span>{" "}
              luyện đề tổng cộng ({overview.avgDailyMinutes} phút/ngày)
            </p>
          </div>
        </section>

        {/* 2. PROGRESS CHARTS (placeholder layout) */}
        <section className="grid gap-4 md:grid-cols-2">
          {/* Score history */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">Score progress (30 ngày)</h2>
              <span className="text-xs text-neutral-500">Line chart (placeholder)</span>
            </div>
            {/* Mô phỏng line chart đơn giản bằng list */}
            <div className="space-y-2 text-xs">
              {scoreHistory.map((p) => (
                <div key={p.date} className="flex items-center gap-2">
                  <div className="w-12 text-neutral-500">{p.date}</div>
                  <div className="flex-1 h-1 rounded bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full bg-indigo-500"
                      style={{ width: `${(p.overall / 1600) * 100}%` }}
                    />
                  </div>
                  <div className="w-12 text-right font-semibold">{p.overall}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accuracy by topic */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">Accuracy by topic</h2>
              <span className="text-xs text-neutral-500">Bar chart (placeholder)</span>
            </div>
            <div className="space-y-2 text-xs">
              {skillDiagnostics.slice(0, 4).map((s) => (
                <div key={s.area}>
                  <div className="flex justify-between">
                    <span>{s.area}</span>
                    <span className="font-semibold">{s.accuracy}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500"
                      style={{ width: `${s.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SKILL DIAGNOSTICS */}
        <section className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
          <h2 className="text-sm font-semibold mb-3">Phân tích kỹ năng (Skill diagnostics)</h2>
          <div className="hidden md:grid grid-cols-12 text-xs font-semibold text-neutral-500 border-b border-neutral-100 pb-2 mb-2">
            <div className="col-span-4">Kỹ năng</div>
            <div className="col-span-2">Nhóm</div>
            <div className="col-span-2">Accuracy</div>
            <div className="col-span-2">Speed</div>
            <div className="col-span-2">Level</div>
          </div>
          <div className="space-y-2 text-sm">
            {skillDiagnostics.map((s, i) => (
              <div
                key={s.area}
                className={`grid grid-cols-12 items-center ${
                  i !== skillDiagnostics.length - 1 ? "border-b border-neutral-100 pb-2" : ""
                }`}
              >
                <div className="col-span-12 md:col-span-4">
                  <div className="font-medium">{s.area}</div>
                  <div className="md:hidden text-xs text-neutral-500">
                    {s.domain} • {s.accuracy}% • {s.speed} • {s.level}
                  </div>
                </div>
                <div className="hidden md:block md:col-span-2">{s.domain}</div>
                <div className="hidden md:block md:col-span-2">{s.accuracy}%</div>
                <div className="hidden md:block md:col-span-2">{s.speed}</div>
                <div className="hidden md:block md:col-span-2">{s.level}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TIME ANALYTICS + HEATMAP */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4 text-sm space-y-2">
            <h2 className="text-sm font-semibold mb-2">Thống kê thời gian & tốc độ</h2>
            <p>
              Thời gian trung bình mỗi câu – <span className="font-semibold">Math:</span>{" "}
              {timeAnalytics.avgTimePerQuestion.math},{" "}
              <span className="font-semibold">Reading:</span>{" "}
              {timeAnalytics.avgTimePerQuestion.reading},{" "}
              <span className="font-semibold">Writing:</span>{" "}
              {timeAnalytics.avgTimePerQuestion.writing}.
            </p>
            <p>
              Thời gian trung bình mỗi bài thi:{" "}
              <span className="font-semibold">{timeAnalytics.avgTimePerTest}</span>{" "}
              (khuyến nghị: {timeAnalytics.recommendedTimePerTest}).
            </p>
          </div>

          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4 text-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold">Heatmap thời gian học</h2>
              <span className="text-xs text-neutral-500">Giờ trong tuần (demo)</span>
            </div>
            <div className="grid grid-rows-3 gap-1">
              {timeAnalytics.weeklyStudyHeatmap.map((row, i) => (
                <div key={i} className="grid grid-cols-7 gap-1">
                  {row.map((level, j) => (
                    <div
                      key={j}
                      className="h-4 rounded-sm"
                      style={{
                        backgroundColor:
                          level === 0
                            ? "#e5e7eb"
                            : level === 1
                            ? "#bfdbfe"
                            : level === 2
                            ? "#60a5fa"
                            : "#1d4ed8",
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MISTAKE PATTERNS */}
        <section className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
          <h2 className="text-sm font-semibold mb-3">Lỗi thường gặp (Mistake patterns)</h2>
          <div className="space-y-2 text-sm">
            {mistakePatterns.map((m) => (
              <div
                key={m.type}
                className="border border-neutral-100 rounded-md px-3 py-2 bg-neutral-50/60"
              >
                <p className="font-semibold">{m.type}</p>
                <p className="text-xs text-neutral-600 mt-1">{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. TEST-BY-TEST BREAKDOWN */}
        <section className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4">
          <h2 className="text-sm font-semibold mb-3">Chi tiết theo từng bài test</h2>
          <div className="hidden md:grid grid-cols-12 text-xs font-semibold text-neutral-500 border-b border-neutral-100 pb-2 mb-2">
            <div className="col-span-4">Test</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Score</div>
            <div className="col-span-2">Accuracy</div>
            <div className="col-span-2 text-right">Time</div>
          </div>
          <div className="space-y-1 text-sm">
            {testsBreakdown.map((t, i) => (
              <div
                key={t.id}
                className={`grid grid-cols-12 items-center ${
                  i !== testsBreakdown.length - 1 ? "border-b border-neutral-100 pb-2" : ""
                }`}
              >
                <div className="col-span-12 md:col-span-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="md:hidden text-xs text-neutral-500">
                    {t.date} • {t.score} • {t.accuracy} • {t.time}
                  </div>
                </div>
                <div className="hidden md:block md:col-span-2">{t.date}</div>
                <div className="hidden md:block md:col-span-2">
                  {t.score} (M:{t.math} / RW:{t.rw})
                </div>
                <div className="hidden md:block md:col-span-2">{t.accuracy}</div>
                <div className="hidden md:block md:col-span-2 text-right">
                  {t.time}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. AI RECOMMENDATIONS + LEARNING JOURNAL */}
        <section className="grid gap-4 md:grid-cols-2">
          {/* AI recommendations */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold">Gợi ý học tập cá nhân hóa (AI)</h2>
            <p className="text-xs text-neutral-500">
              Dựa trên lịch sử điểm, độ chính xác và tốc độ làm bài.
            </p>
            <p className="text-sm">
              Dự đoán điểm SAT hiện tại của bạn:{" "}
              <span className="font-semibold text-indigo-600">
                {aiRecommendation.predictedScore}
              </span>
            </p>
            <div>
              <p className="font-semibold mb-1 text-xs uppercase text-neutral-500">
                Bạn nên tập trung vào
              </p>
              <ul className="list-disc list-inside space-y-1">
                {aiRecommendation.focusAreas.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1 text-xs uppercase text-neutral-500">
                Mục tiêu tuần này
              </p>
              <ul className="list-disc list-inside space-y-1">
                {aiRecommendation.weeklyGoals.map((g, idx) => (
                  <li key={idx}>{g}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning journal */}
          <div className="bg-white rounded-md shadow-md ring-1 ring-neutral-200 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold">Nhật ký học tập</h2>
            <p className="text-xs text-neutral-500">
              Ghi lại điều bạn học được sau mỗi bài test để không lặp lại lỗi cũ.
            </p>
            <div className="space-y-2">
              {learningNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-100 rounded-md px-3 py-2 bg-neutral-50/80 text-xs"
                >
                  {note}
                </div>
              ))}
            </div>
            {/* Sau này có thể chuyển thành textarea + lưu backend */}
            <button className="mt-2 inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-900 text-white hover:bg-neutral-800">
              + Thêm ghi chú mới
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}