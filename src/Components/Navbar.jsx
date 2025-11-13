import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {

const [mobile, setMobile] = useState(false);

const mobileNav = () => {
  setMobile(!mobile);
}

  return (
    <div id="home" className="px-10 bg-[#004600] w-[100%] " > 
     <nav className="flex justify-between h-[110px] items-center ">
     <div className="w-[80px] h-[80px] z-[200]">
        <img className="w-[100%] h-[100%] rounded-xl" src="favicon.jpg" alt="Best Web Designer and Development, Digital Marketing, Front End Developer, SEO Experts, Leads Generation, Logo and Flyers Designs in Ibadan Nigerial" />
      </div>
      <div onClick={mobileNav} className="lg:hidden z-[200] cursor-pointer">
       {mobile  ? 
      <X  className="text-white" /> :
      <Menu className="text-white" />}
      </div> 
        <div className="hidden lg:flex">
        <ul className="flex gap-9">
          <a href="#home"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Home</li></a>
         <a href="#about"> <li className="cursor-pointer text-l font-semibold text-white hover:text-gray-400">About</li></a>
         <a href="#service"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Service</li></a>
         <a href="#portfolio"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Portfolio</li></a>
        <a href="https://usamagrowthsolutions.blogspot.com/">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Blog</li></a>
        <a href="#contact">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Contact</li></a>
        </ul>
      </div>
     </nav>
  
     {mobile && 
     <aside>
     <div className="lg:hidden bg-[#004600] flex w-full h-[600px] fixed inset-0 z-50">
      <ul className="flex flex-col gap-5 pt-32 px-10 ">
         <a onClick={()=> setMobile(false)} href="#home"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Home</li></a>
          <a onClick={()=> setMobile(false)} href="#about"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">About</li></a>
         <a onClick={mobileNav} href="#service"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Service</li></a>
         <a onClick={mobileNav} href="#portfolio"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Portfolio</li></a>
        <a onClick={mobileNav} href="https://usamagrowthsolutions.blogspot.com/">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Blog</li></a>
        <a onClick={()=> setMobile(false)} href="#contact">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Contact</li></a>
        </ul>
     </div>
     </aside>
     }
    </div>
  )
}

export default Navbar;