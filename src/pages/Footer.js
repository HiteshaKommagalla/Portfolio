// Footer.js
import FooterContent from "../components/FooterContent"
import ScrollToTopButton from "../components/ScrollToTopButton"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 dark:bg-gray-900 text-white pb-3 relative transition-colors duration-500">
      <FooterContent />
      <ScrollToTopButton />
    </footer>
  )
}

export default Footer
