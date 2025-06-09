export const fetchQuizResults = () => {
    const result = localStorage.getItem("quizResults")
    if (result) {
      try {
        return JSON.parse(result)
      } catch (error) {
        console.error("Error in results:", error)
        return null
      }
    }
    return null
  }
  