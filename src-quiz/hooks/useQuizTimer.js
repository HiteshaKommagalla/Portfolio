// hooks/useQuizTimer.js
import { useEffect } from "react";

export default function useQuizTimer(state, dispatch) {
  useEffect(() => {
    if (state.timeLeft <= 0) {
      dispatch({ type: "SUBMIT_QUIZ" });
      return;
    }

    const timer = setInterval(() => {
      dispatch({ type: "DECREMENT_TIMER" });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.timeLeft, dispatch]);
}
