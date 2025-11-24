// src/mock/historyData.js

export const examAttempts = [
  {
    id: "attempt-1",
    testId: "hsa-math-1",
    testName: "HSA Math Practice #1",
    date: "2025-01-20",
    score: 720,
    totalScore: 800,
    correct: 38,
    totalQuestions: 40,
    time: "18m 22s",
    status: "Completed",
    questions: [
      {
        no: 1,
        content: "2 + 2 = ?",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        chosenIndex: 3,
        topic: "Algebra",
        difficulty: "Easy",
        explanation: "2 + 2 = 4 là phép cộng cơ bản.",
      },
      {
        no: 2,
        content: "Hàm số y = 2x + 1 có hệ số góc là:",
        options: ["1", "2", "x", "Không xác định"],
        correctIndex: 1,
        chosenIndex: 0,
        topic: "Algebra",
        difficulty: "Easy",
        explanation: "Hệ số góc là hệ số đứng trước x, ở đây là 2.",
      },
      // ... thêm câu nếu thích
    ],
  },
  {
    id: "attempt-2",
    testId: "sat-rw-2",
    testName: "SAT Reading Mock #2",
    date: "2025-01-18",
    score: 645,
    totalScore: 800,
    correct: 32,
    totalQuestions: 40,
    time: "22m 14s",
    status: "In progress",
    questions: [
      // mock tương tự
    ],
  },
];