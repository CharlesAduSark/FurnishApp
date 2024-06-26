import Navbar from "../../Components/navbar"
import About from "./components/about"
import Collection from "./components/collection"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Production from "./components/production"
import Services from "./components/services"
import Statistics from "./components/statistics"
import Testimonial from "./components/testimonial"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Collection/>
        <Statistics/>
        <Testimonial/>
        <Production/>
        <Footer/>
    </div>
  )
}

export default Home