import React from "react"

export default function ResultActions({ onFinish, onViewResult }) {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={onViewResult}
        className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Result
      </button>
      <button
        onClick={onFinish}
        className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Finish
      </button>
    </div>
  )
}
