import React from "react";

export default function QuestionNavigation({ state, handleQuestionNavigation }) {
    return (
        <div className="grid grid-cols-12 gap-2">
            {state.questions.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleQuestionNavigation(index)}
                    className={`py-2 rounded-md text-center text-sm font-medium ${state.currentQuestionIndex === index ? "bg-pink-500 text-white" : state.bookmarkedQuestions.includes(index) ? "bg-purple-200 text-purple-800" : state.answers[index] ? "bg-gray-300 text-gray-800" : "bg-white text-gray-600 border"}`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}
