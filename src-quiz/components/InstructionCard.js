export default function InstructionCard({ onStart }) {
    return (
      <div className="flex-1 bg-white rounded-lg p-6 mr-14" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">Quiz Instruction</h1>
        <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-900">
          <li>Total number of questions: 20</li>
          <li>You have 10 minutes to complete the quiz.</li>
          <li>A countdown timer will be displayed.</li>
          <li>Select the correct answer for each question.</li>
          <li>You can use number button for checking questions.</li>
          <li>Submit your answers before the timer runs out.</li>
          <li>Your score will be displayed at the end of the quiz.</li>
        </ol>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onStart}
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Your Test
          </button>
        </div>
      </div>
    )
  }
  