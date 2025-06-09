import { useReducer, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { quizReducer, initialState } from "../hooks/useQuizReducer";
import useQuizTimer from "../hooks/useQuizTimer";
import QuizButton from "../components/QuizButton";
import Navigation from "../components/Navigation";
import QuizSidebar from "../components/QuizSidebar";
import { generateQuestions } from "../sampleqs/questionGenerator";
import QuestionCard from "../components/QuestionCard";
import submitQuiz from "../helpers/submitQuiz";

export default function Quiz() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Timer countdown
  useQuizTimer(state, dispatch);

  useEffect(() => {
    const { questions, totalMarks } = generateQuestions(courseId);
    dispatch({
      type: "SET_QUESTIONS",
      payload: { questions, totalMarks },
    });
  }, [courseId]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNext = () => {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  const handleBookmark = () => {
    dispatch({ type: "TOGGLE_BOOKMARK" });
  };

  const handleQuestionNavigation = (index) => {
    dispatch({ type: "NAVIGATE_TO_QUESTION", payload: index });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (state.loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  const currentQuestion = state.questions[state.currentQuestionIndex];
  const options = currentQuestion.options;

  return (
    <div className="min-h-screen bg-white px-20">
      <div className="container mx-auto px-4 py-6">
        <Header />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Component */}
          <QuizSidebar state={state} />

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <QuestionCard
                questionData={{
                  question: `${state.currentQuestionIndex + 1}: ${currentQuestion.question}`,
                  options: currentQuestion.options
                }}
                selectedOption={state.selectedOption}
                onSelect={handleOptionSelect}
              />

              <QuizButton
                handleNext={handleNext}
                handleBookmark={handleBookmark}
                handleSubmit={() => {
                  if (!state.loading && state.questions.length > 0) {
                    submitQuiz(state, courseId, navigate);
                  }
                }}
                state={state}
              />
            </div>
            <Navigation
              state={state}
              handleQuestionNavigation={handleQuestionNavigation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
