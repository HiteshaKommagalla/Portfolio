// Sample questions data
const sampleQuestions = [
  {
    id: 1,
    topic_code: "LOGIC",
    topic_name: "Logical Reasoning",
    question: "Which loop is guaranteed to execute at least once?",
    options: [{ a: "for loop" }, { b: "while loop" }, { c: "do-while loop" }, { d: "None" }],
    correct_ans: "c",
    marks: 1,
  },
  {
    id: 2,
    topic_code: "LOGIC",
    topic_name: "Logical Reasoning",
    question: "If all squares are rectangles and some rectangles are circles, then can some squares be circles?",
    options: [{ a: "Yes" }, { b: "No" }, { c: "It depends on the size of the shapes" }, { d: "Cannot be determined" }],
    correct_ans: "a",
    marks: 1,
  },
  {
    id: 3,
    topic_code: "LOGIC",
    topic_name: "Logical Reasoning",
    question:
      "A man is 25 years older than his son. In 10 years, he will be twice as old as his son. How old is the son?",
    options: [{ a: "10 years" }, { b: "15 years" }, { c: "20 years" }, { d: "25 years" }],
    correct_ans: "b",
    marks: 1,
  },
  {
    id: 4,
    topic_code: "MATH",
    topic_name: "Mathematics",
    question: "What is the value of 25% of 200?",
    options: [{ a: "25" }, { b: "40" }, { c: "50" }, { d: "60" }],
    correct_ans: "c",
    marks: 1,
  },
  {
    id: 5,
    topic_code: "MATH",
    topic_name: "Mathematics",
    question: "Solve for x: 5x - 10 = 0",
    options: [{ a: "1" }, { b: "2" }, { c: "3" }, { d: "4" }],
    correct_ans: "b",
    marks: 1,
  },
]

// Function to generate questions based on course ID
export function generateQuestions(courseId) {
  const generatedQuestions = []
  for (let i = 0; i < 20; i++) {
    const question = { ...sampleQuestions[i % sampleQuestions.length] }
    question.id = i + 1

    if (courseId.includes("MCA")) {
      question.topic_code = question.topic_code === "LOGIC" ? "MCA001" : "MCA002"
    } else {
      question.topic_code = question.topic_code === "LOGIC" ? "GRAD001" : "GRAD002"
    }

    generatedQuestions.push(question)
  }

  // Calculate total marks
  const totalMarks = generatedQuestions.reduce((sum, q) => sum + q.marks, 0)

  return { questions: generatedQuestions, totalMarks }
}
