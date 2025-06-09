import Logo from "./Logo"

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6 mx-14">
      <Logo />
      <div className="flex items-center">
        <div className="bg-red-400 rounded-full w-7 h-7 flex items-center justify-center mr-2">
          <span className="text-white text-sm font-bold">?</span>
        </div>
        <span className="text-indigo-950 mr-4 font-semibold text-lg">Total questions: 20</span>
        <button className="flex items-center text-pink-500">
          <span className="mr-1 w-8">📝</span>
          <span className="font-semibold text-lg">View Instructions</span>
        </button>
      </div>
    </div>
  )
}
