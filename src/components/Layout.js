import ScrollProgressBar from "../components/ScrollProgressBar"
import Header from "../pages/Header"
import Footer from "../pages/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
