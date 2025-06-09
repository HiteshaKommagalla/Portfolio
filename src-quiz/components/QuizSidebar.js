import React from "react";

export default function QuizSidebar({ state }) {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="flex flex-col gap-4 w-full md:w-64">
            <div className="bg-white rounded-lg p-4 text-center" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>
                <div className="text-3xl font-bold text-indigo-900">{formatTime(state.timeLeft)}</div>
            </div>

            <div className="bg-white rounded-lg p-4 space-y-2" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>
                <div className="flex items-center">
                    <span className="text-red-500 mr-2">★</span>
                    <span className="text-gray-900 font-medium">Score:</span>
                </div>

                <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-300 mr-2 rounded-sm"></div>
                    <span>Total Marks of paper: {state.quizStats.totalMarks}</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-300 mr-2 rounded-sm"></div>
                    <span>Total Marks of correct ans: {state.quizStats.correctAnswers}</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-300 mr-2 rounded-sm"></div>
                    <span>Total attempts: {Object.keys(state.answers).length}</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 mr-2 rounded-sm"></div>
                    <span>Correct attempts: {state.quizStats.correctAttempts}</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 mr-2 rounded-sm"></div>
                    <span>Wrong attempts: {state.quizStats.wrongAttempts}</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-300 mr-2 rounded-sm"></div>
                    <span>Skipped: {state.quizStats.skippedQuestions}</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-300 mr-2 rounded-sm"></div>
                    <span>Bookmarks: {state.bookmarkedQuestions.length}</span>
                </div>
            </div>
        </div>

    );
}
