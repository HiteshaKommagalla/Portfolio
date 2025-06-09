import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import QuizSummary from "../components/QuizSummary"
import Result from "../components/Result"
import { fetchQuizResults } from "../hooks/uselocalStorage"

export default function QuizResult() {
  const navigate = useNavigate()
  const [state, setState] = useState(null)

  useEffect(() => {
    const results = fetchQuizResults()
    if (results) {
      setState(results)
    } else {
      navigate("/")
    }
  }, [navigate])

  if (!state) {
    return <div className="flex justify-center items-center min-h-screen">Loading results...</div>
  }

  return (
    <div className="min-h-screen bg-white py-6 px-20">
      <div className="container mx-auto px-4 py-6">
        <Header />
      </div>

      <h1 className="text-3xl font-bold text-pink-500 mb-12 text-center">Report</h1>

      <QuizSummary state={state} />

      <Result onFinish={() => navigate("/")} onViewResult={() => navigate("/")} />
    </div>
  )
}
