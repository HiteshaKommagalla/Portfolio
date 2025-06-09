import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import QuizInstructions from "./pages/QuizInstructions"
import Quiz from "./pages/Quiz"
import QuizResult from "./pages/QuizResult"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz-instructions/:courseId" element={<QuizInstructions />} />
        <Route path="/quiz/:courseId" element={<Quiz />} />
        <Route path="/quiz-result/:courseId" element={<QuizResult />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

