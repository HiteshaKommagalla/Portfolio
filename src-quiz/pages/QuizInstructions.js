import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import TimerCard from "../components/TimerCard"
import ScoreCard from "../components/ScoreCard"
import InstructionCard from "../components/InstructionCard"

export default function QuizInstructionsPage() {
  const navigate = useNavigate()
  const { courseId } = useParams();

  const handleStartTest = () => {
    navigate(`/quiz/${courseId}`)
  }

  return (
    <div className="container py-8 px-14">
      <Header />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-80 flex flex-col space-y-4">
          <TimerCard />
          <ScoreCard />
        </div>

        <div className="flex-1">
          <InstructionCard onStart={handleStartTest} />
        </div>
      </div>
    </div>

  )
}
