// helpers/submitQuiz.js
export default function submitQuiz(state, courseId, navigate) {
    let correctAnswers = 0;
    let totalAttempts = 0;
    let correctAttempts = 0;
    let wrongAttempts = 0;
    let skippedQuestions = 0;
  
    state.questions.forEach((question, index) => {
      const userAnswer = state.answers[index];
  
      if (userAnswer) {
        totalAttempts++;
        if (userAnswer === question.correct_ans) {
          correctAnswers += question.marks;
          correctAttempts++;
        } else {
          wrongAttempts++;
        }
      } else {
        skippedQuestions++;
      }
    });
  
    const results = {
      totalMarks: state.quizStats.totalMarks,
      correctAnswers,
      totalAttempts,
      correctAttempts,
      wrongAttempts,
      skippedQuestions,
      bookmarks: state.bookmarkedQuestions.length,
    };
  
    localStorage.setItem("quizResults", JSON.stringify(results));
    navigate(`/quiz-result/${courseId}`);
  }
  