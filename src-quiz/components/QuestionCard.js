import React from "react";

export default function QuestionCard({ questionData, selectedOption, onSelect }) {
  const { question, options } = questionData;

  return (
    <div className="bg-white rounded-lg p-8" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-indigo-900">
          {question}
        </h2>
      </div>

      <div className="space-y-4 mb-8">
        {Object.entries(options).map(([key, option]) => (
          <div key={key} className="flex items-center">
            <input
              type="radio"
              id={key}
              name="option"
              className="mr-2 ml-10"
              checked={selectedOption === key}
              onChange={() => onSelect(key)}
            />
            <label htmlFor={key} className="text-gray-900">
              {Object.values(option)[0]}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
