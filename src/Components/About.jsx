import Awriter from "./Awriter"
import Sprogress from "./Sprogress"

const About = () => {
  return (
    <div id="about" className="px-20 pb-16"> 
     <div className="flex flex-col gap-3">
     <p className="text-[#004600]">__Learn About Me__</p>
     <h1 className="text-3xl font-bold">Vast Years Experience</h1>
     <p>I'm passionate about creating exceptional digital experiences. With a keen eye for design and a deep understanding of digital marketing, I help businesses build strong online brands. Whether it's designing a captivating website or implementing a targeted advertising campaign, I'm committed to delivering innovative solutions that drive success</p>
    </div>
    <Sprogress />
    </div>


  )
}

export default About