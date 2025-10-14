import About from "../Components/About"
import Contact from "../Components/Contact"
import Discount from "../Components/Discount"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Portfolio from "../Components/Portfolio"
import Reviews from "../Components/Reviews"
import Services from "../Components/Services"
import Tools from "../Components/Tools"

const Home = () => {
  return (
    <div className="flex flex-col py-2">
     <Navbar />
     <Hero />
     <About />
     <Services />
     <Tools />
     <Discount />
     <Portfolio />
     <Reviews />
     <Contact />
     <Footer />
    </div>
  )
}

export default Home