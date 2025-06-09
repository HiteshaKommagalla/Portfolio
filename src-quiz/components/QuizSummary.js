import React from "react"

export default function QuizSummary({ state }) {
  const Data = [
    { label: "Total Marks of paper", value: state.totalMarks, color: "text-pink-500" },
    { label: "Total Marks of correct ans", value: state.correctAnswers, color: "text-green-500" },
    { label: "Total attempts", value: state.totalAttempts, color: "text-pink-500" },
    { label: "Total of Correct attempts", value: state.correctAttempts, color: "text-green-500" },
    { label: "Total of Wrong attempts", value: state.wrongAttempts, color: "text-pink-500" },
    { label: "Total questions Skipped", value: state.skippedQuestions, color: "text-pink-500" },
    { label: "Bookmark", value: state.bookmarks, color: "text-pink-500" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      {Data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-4 text-center" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>
          <h3 className="text-indigo-900 text-md font-bold mb-2">{item.label}</h3>
          <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
        </div>
      ))}
    </div>
  )
}
