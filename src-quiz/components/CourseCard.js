import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

export default function CourseCard({ course }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/quiz-instructions/${course.course_code}`)
  }

  return (
    <div
      className="bg-white rounded-lg p-6 shadow-card cursor-pointer hover:shadow-lg transition-shadow" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div
          className={`w-10 h-10 rounded-md flex items-center justify-center mr-4 ${course.course === "graduate" ? "bg-yellow-100" : "bg-blue-100"
            }`}
        >
          <span className={`text-xl ${course.course === "graduate" ? "text-yellow-800" : "text-blue-800"}`}>
            {course.course === "graduate" ? "👨‍🎓" : "💻"}
          </span>
        </div>
        <h2 className="text-lg font-medium text-gray-800">
          Aptitude Test for {course.course === "graduate" ? "Graduates" : "MCA-CET"}
        </h2>
      </div>

    </div>
  )
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    course_code: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
}

