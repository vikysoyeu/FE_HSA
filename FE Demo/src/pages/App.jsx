// src/pages/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import FigmaDashboard from "./FigmaDashboard.jsx";
import Tests from "./Tests.jsx";
import Feedback from "./Feedback.jsx";
import Settings from "./Settings.jsx";
import Exam from "./Exam.jsx";
import HistoryPage from "./HistoryPage.jsx";
import Stats from "./Stats.jsx";
import HistoryDetail from "./HistoryDetails.jsx";
import Guide from "./Guide.jsx";

// Route guard
import ProtectedRoute from "../routes/ProtectedRoute.jsx";

export default function App() {
  return (
    <Routes>
      {/* Trang mặc định: Home */}
      <Route path="/" element={<Home />} />

      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/huong-dan" element={<Guide />} />

      {/* Private (cần ProtectedRoute) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <FigmaDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tests"
        element={
          <ProtectedRoute>
            <Tests />
          </ProtectedRoute>
        }
      />
      <Route
        path="/exam/:id"
        element={
          <ProtectedRoute>
            <Exam />
          </ProtectedRoute>
        }
      />
      <Route
        path="/feedback"
        element={
          <ProtectedRoute>
            <Feedback />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* History: CHO DEMO nên để public – không bọc ProtectedRoute */}
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/history/:attemptId" element={<HistoryDetail />} />

      {/* Stats: vẫn có thể giữ là private nếu muốn */}
      <Route
        path="/stats"
        element={
          <ProtectedRoute>
            <Stats />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}