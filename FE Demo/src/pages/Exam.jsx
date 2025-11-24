import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

/** Mock dữ liệu bài thi (thay bằng API sau) */
const MOCK_EXAM = {
  title: "HSA Total Skill #2",
  durationSec: 60 * 60, // 60 phút
  sections: [
    {
      id: "math2",
      name: "Mathematic Test #2",
      questions: Array.from({ length: 10 }, (_, i) => ({
        id: `m${i + 1}`,
        text: `Câu ${i + 1}: (MATH) Chọn phương án đúng nhất…`,
        options: ["A", "B", "C", "D"].map((k) => ({
          key: k,
          text: `Phương án ${k}`,
        })),
      })),
    },
    {
      id: "reading2",
      name: "Reading Test #2",
      questions: Array.from({ length: 8 }, (_, i) => ({
        id: `r${i + 1}`,
        text: `Câu ${i + 1}: (READ) Chọn phương án đúng nhất…`,
        options: ["A", "B", "C", "D"].map((k) => ({
          key: k,
          text: `Phương án ${k}`,
        })),
      })),
    },
    {
      id: "writing2",
      name: "Writing Test #2",
      questions: Array.from({ length: 6 }, (_, i) => ({
        id: `w${i + 1}`,
        text: `Câu ${i + 1}: (WRITE) Chọn phương án đúng nhất…`,
        options: ["A", "B", "C", "D"].map((k) => ({
          key: k,
          text: `Phương án ${k}`,
        })),
      })),
    },
  ],
};

export default function Exam() {
  const { id } = useParams(); // id bài thi (hsa-math-1, hsa-total-2, …)
  const navigate = useNavigate();

  // dữ liệu — sau này thay bằng fetch theo id
  const exam = useMemo(() => MOCK_EXAM, [id]);

  // trạng thái phần/câu hiện tại
  const [secIdx, setSecIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);

  // đáp án: { [questionId]: "A" | "B" | "C" | "D" }
  const [answers, setAnswers] = useState({});

  // đếm ngược
  const [left, setLeft] = useState(exam.durationSec);

  useEffect(() => {
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  // hết giờ tự nộp
  useEffect(() => {
    if (left === 0) doSubmit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left]);

  const section = exam.sections[secIdx];
  const question = section.questions[qIdx];

  const setAnswer = (qid, key) =>
    setAnswers((a) => ({ ...a, [qid]: a[qid] === key ? undefined : key }));

  const jump = (sIdx, qIndex = 0) => {
    setSecIdx(sIdx);
    setQIdx(qIndex);
  };

  const fmtTime = (s) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
  };

  const doSubmit = (auto = false) => {
    // gom kết quả submit
    const payload = {
      examId: id,
      answers,
      spent: exam.durationSec - left,
    };
    console.log("SUBMIT", payload);
    alert(auto ? "Hết giờ! Bài đã được nộp." : "Đã nộp bài.");
    navigate("/tests");
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <DashboardNavbar />

      {/* thời gian + tiêu đề + nút nộp */}
      <div className="sticky top-[56px] z-30 bg-neutral-200/70 backdrop-blur border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="text-sm font-medium">
            <span className="inline-block rounded px-2 py-1 bg-neutral-900 text-white">
              {fmtTime(left)}
            </span>
          </div>
          <div className="font-semibold">{exam.title}</div>
          <button
            onClick={() => doSubmit(false)}
            className="px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-black"
          >
            Nộp bài
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-12 gap-4">
        {/* Sidebar trái */}
        <aside className="col-span-12 md:col-span-3">
          {exam.sections.map((s, i) => (
            <div key={s.id} className="mb-3 rounded border border-neutral-300">
              {/* Header section */}
              <button
                onClick={() => jump(i, 0)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-semibold ${
                  i === secIdx ? "bg-neutral-200" : "bg-neutral-100 hover:bg-neutral-200"
                }`}
              >
                <span>{s.name}</span>
                <span className="text-neutral-500">▾</span>
              </button>

              {/* Lưới câu hỏi */}
              <div className="p-2 grid grid-cols-10 gap-1 bg-white">
                {s.questions.map((q, idx) => {
                  const ans = answers[q.id];
                  const isCurrent = i === secIdx && idx === qIdx;
                  const cls = ans
                    ? "bg-emerald-200 border-emerald-400"
                    : "bg-neutral-100 border-neutral-300";
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setSecIdx(i);
                        setQIdx(idx);
                      }}
                      className={`h-7 rounded text-[11px] border ${cls} ${
                        isCurrent ? "ring-2 ring-neutral-600" : ""
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </aside>

        {/* Khu vực câu hỏi */}
        <main className="col-span-12 md:col-span-9">
          <div className="rounded-xl bg-white ring-1 ring-neutral-200 shadow-sm p-5">
            <div className="text-sm text-neutral-600 mb-2">
              Câu {qIdx + 1}/{section.questions.length}
            </div>

            {/* Text câu hỏi (demo theo ảnh) */}
            <div className="space-y-2">
              <div className="font-semibold">
                Câu {qIdx + 1}: {question.text}
              </div>
            </div>

            {/* Lựa chọn */}
            <div className="mt-4 space-y-3">
              {question.options.map((op) => {
                const checked = answers[question.id] === op.key;
                return (
                  <label
                    key={op.key}
                    className="flex items-start gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"     // hiển thị giống ảnh
                      className="mt-1 h-4 w-4"
                      checked={checked}
                      onChange={() => setAnswer(question.id, op.key)}
                    />
                    <span>
                      <span className="font-semibold mr-1">{op.key}.</span>
                      {op.text}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Điều hướng câu tiếp/ trước */}
            <div className="mt-6 flex items-center justify-between">
              <button
                disabled={qIdx === 0}
                onClick={() => setQIdx((x) => Math.max(0, x - 1))}
                className="px-3 py-1.5 rounded-md ring-1 ring-neutral-300 bg-white disabled:opacity-50"
              >
                ← Trước
              </button>
              <div className="text-sm text-neutral-500">
                {section.name}
              </div>
              <button
                onClick={() => {
                  if (qIdx < section.questions.length - 1) {
                    setQIdx((x) => x + 1);
                  } else if (secIdx < exam.sections.length - 1) {
                    // sang section tiếp
                    setSecIdx((s) => s + 1);
                    setQIdx(0);
                  }
                }}
                className="px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-black"
              >
                Tiếp →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
