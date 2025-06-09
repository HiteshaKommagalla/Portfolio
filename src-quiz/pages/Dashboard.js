import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import CourseCard from "../components/CourseCard"

const coursesData = [
  {
    id: 1,
    course_code: "grad01",
    course: "graduate",
    icon: "fa-brands fa-book",
  },
  {
    id: 2,
    course_code: "MCA01",
    course: "MCA_CET",
    icon: "fa-brands fa-laptop",
  },
]

export default function Dashboard() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setCourses(coursesData)
        setLoading(false)
      } catch (err) {
        setError('Failed to load courses.')
        setLoading(false)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="bg-blue-50 p-14 rounded-lg mb-8">
          <h1 className="text-2xl font-bold text-blue-700 mb-2">Welcome back</h1>
          <p className="text-gray-700 mb-2">You have completed 80% of the task</p>
          <p className="text-gray-700">Progress very good!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : loading ? (
            <p>Loading courses...</p>
          ) : (
            courses.map((course) => <CourseCard key={course.id} course={course} />)
          )}

        </div>
      </div>
    </div>
  )
}

