import { Play } from "lucide-react";
import Awriter from "./Awriter";
const Hero = () => {

  return (
    <div className="flex pb-16 pt-5 px-20 flex-col gap-5">
    <span>
    <div className="lg:flex justify-between items-center">
    <div>
   <p className="pb-5">I'M</p>
     <h1 className="text-3xl font-bold pb-9">Usama</h1>
     <Awriter />
     </div>
     <div className="w-[400px] h-[400px] shadow-lg pl-5 pb-5 rounded-xl bg-[#004600]">
      <img className="w-[100%] h-[100%]" src="usama1.png" alt="Best Web Developer and marketerWeb Designer and Development, Digital Marketing, Front End Developer, Email Marketing, SEO Experts, Ads Specialist, Leads Generation, Graphic Designs in ibadan Nigeria " />
     </div>
     </div>
     </span>
     <span>
     <div className="flex gap-9 item-center">
     <p className="text-white cursor-pointer bg-[#004600] py-1 px-3 rounded-[40px] font-semibold">Hire Me</p> 
     <span className="flex gap-1 cursor-pointer items-center text-xl text-white bg-[#004600] py-1 px-3 rounded-[40px]"><Play /> <p className="font-semibold">Testimonia</p></span>
     </div>
     </span>
    </div>
  )
}

export default Hero;