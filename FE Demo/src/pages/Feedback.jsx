// src/pages/Feedback.jsx
import React, { useMemo, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

const QUESTIONS = [
  "4 × 5 + 7 = ?",
  "Tốc độ trung bình là…",
  "Chọn đáp án đúng nhất",
  "Câu đọc hiểu #12",
];

export default function Feedback() {
  const [question, setQuestion] = useState(QUESTIONS[0]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState("");
  const [err, setErr] = useState("");

  const disabled = useMemo(
    () => !comment.trim() || rating === 0 || sending,
    [comment, rating, sending]
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    if (disabled) return;
    setSending(true);
    setOk("");
    setErr("");
    try {
      // TODO: gọi API thật tại đây
      await new Promise((r) => setTimeout(r, 500));
      setOk("Đã gửi phản hồi. Cảm ơn bạn!");
      setComment("");
      setRating(0);
    } catch (e) {
      setErr(e.message || "Gửi phản hồi thất bại");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <DashboardNavbar />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <form
          onSubmit={onSubmit}
          className="mx-auto w-full max-w-xl bg-neutral-100 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h1 className="text-2xl font-bold text-center mb-6">Phản hồi</h1>

          <div className="mb-5">
            <label className="block text-lg font-semibold mb-2">Question</label>
            <select
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
            >
              {QUESTIONS.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-lg font-semibold mb-2">Comment</label>
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment"
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Rating</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setRating(n)}
                  aria-label={`Rating ${n}`}
                  className={`h-9 w-9 rounded-full grid place-items-center border transition
                    ${
                      rating >= n
                        ? "bg-yellow-400/90 text-yellow-950 border-yellow-500"
                        : "bg-white text-neutral-500 border-neutral-300"
                    }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {err && <div className="text-red-600 text-sm mb-3">{err}</div>}
          {ok && <div className="text-emerald-600 text-sm mb-3">{ok}</div>}

          <button
            type="submit"
            disabled={disabled}
            className={`w-full rounded-lg px-4 py-3 font-semibold transition
              ${
                disabled
                  ? "bg-neutral-300 text-white/90 cursor-not-allowed"
                  : "bg-neutral-900 hover:bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutral-300"
              }`}
          >
            {sending ? "Đang gửi..." : "Gửi"}
          </button>
        </form>
      </main>
    </div>
  );
}
