// hooks/useQuizReducer.js
const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  selectedOption: null,
  bookmarkedQuestions: [],
  timeLeft: 600,
  quizStats: {
    totalMarks: 0,
    correctAnswers: 0,
    totalAttempts: 0,
    correctAttempts: 0,
    wrongAttempts: 0,
    skippedQuestions: 0,
    bookmarks: 0,
  },
  answers: {},
  loading: true,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload.questions,
        quizStats: {
          ...state.quizStats,
          totalMarks: action.payload.totalMarks,
        },
        loading: false,
      };
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
        answers: {
          ...state.answers,
          [state.currentQuestionIndex]: action.payload,
        },
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedOption: state.answers[state.currentQuestionIndex + 1] || null,
      };
    case "TOGGLE_BOOKMARK":
      const isBookmarked = state.bookmarkedQuestions.includes(state.currentQuestionIndex);
      return {
        ...state,
        bookmarkedQuestions: isBookmarked
          ? state.bookmarkedQuestions.filter((q) => q !== state.currentQuestionIndex)
          : [...state.bookmarkedQuestions, state.currentQuestionIndex],
        quizStats: {
          ...state.quizStats,
          bookmarks: isBookmarked
            ? state.quizStats.bookmarks - 1
            : state.quizStats.bookmarks + 1,
        },
      };
    case "DECREMENT_TIMER":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    case "NAVIGATE_TO_QUESTION":
      return {
        ...state,
        currentQuestionIndex: action.payload,
        selectedOption: state.answers[action.payload] || null,
      };
    default:
      return state;
  }
}

export { quizReducer, initialState };
