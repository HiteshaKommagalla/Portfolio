// ScrollToTopButton.js
import { useState, useEffect } from "react"

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-3 right-8 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 text-white border-none rounded-full text-2xl font-bold cursor-pointer shadow-lg transition-all duration-300 z-50 hover:-translate-y-1 hover:shadow-xl"
    >
      ↑
    </button>
  )
}

export default ScrollToTopButton
