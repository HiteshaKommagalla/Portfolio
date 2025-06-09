export default function ScoreCard() {
    const stats = [
      { color: "teal-300", text: "Total Marks of paper: 0" },
      { color: "green-300", text: "Total Marks of correct ans: 0" },
      { color: "blue-300", text: "Total attempts: 0" },
      { color: "green-500", text: "Total of Correct attempts: 0" },
      { color: "red-500", text: "Total of Wrong attempts: 0" },
      { color: "orange-300", text: "Total questions Skipped: 0" },
      { color: "purple-300", text: "Bookmark: 0" },
    ]
  
    return (
      <div className="bg-white rounded-lg p-4 ml-14" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-red-500 mr-2">★</span>
            <span className="text-gray-900">Score:</span>
          </div>
          {stats.map(({ color, text }, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-3 h-3 bg-${color} mr-2`}></div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  