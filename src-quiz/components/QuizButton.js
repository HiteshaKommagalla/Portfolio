// components/QuizActions.js
import React from "react";

export default function QuizActions({ handleNext, handleBookmark, handleSubmit, state }) {
  return (
    <div className="flex space-x-4 mb-6 mt-10 mx-2">
      <button
        onClick={handleNext}
        className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
      >
        Next
      </button>
      <button
        onClick={handleBookmark}
        className={`bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition ${state.bookmarkedQuestions.includes(state.currentQuestionIndex) ? "bg-purple-700" : ""}`}
      >
        BookMark
      </button>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
}
