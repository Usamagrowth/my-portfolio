import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {

const [mobile, setMobile] = useState(false);

const mobileNav = () => {
  setMobile(!mobile);
}

  return (
    <div className="px-10 bg-[#004600] w-[100%] fixed" > 
     <nav className="flex justify-between h-[110px] items-center">
    <div className="w-[80px] h-[80px]">
        <img className="w-[100%] h-[100%] rounded-xl" src="favicon.jpg" alt="Best Web Designer and Development, Digital Marketing, Front End Developer, SEO Experts, Leads Generation, Logo and Flyers Designs in Ibadan Nigerial" />
      </div>
      <div onClick={mobileNav} className="lg:hidden cursor-pointer">
       {mobile  ? <X  className="text-white" /> :
      <Menu className="text-white" />}
      </div>
      <div className="hidden lg:flex">
        <ul className="flex gap-9">
           <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Home</li>
         <a href="#about"> <li className="cursor-pointer text-l font-semibold text-white hover:text-gray-400">About</li></a>
         <a href="#service"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Service</li></a>
         <a href="#portfolio"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Portfolio</li></a>
        <a href="https://usamagrowthsolutions.blogspot.com/">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Blog</li></a>
        <a href="#contact">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Contact</li></a>
        </ul>
      </div>
     </nav>
     
     { mobile && 
     <aside>
     <div className="lg:hidden py-5 flex">
      <ul className="flex flex-col gap-5">
          <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Home</li>
          <a href="#about"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">About</li></a>
         <a href="#service"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Service</li></a>
         <a href="#portfolio"> <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Portfolio</li></a>
        <a href="https://usamagrowthsolutions.blogspot.com/">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Blog</li></a>
        <a href="#contact">  <li className="cursor-pointer text-l font-semibold  text-white hover:text-gray-400">Contact</li></a>
        </ul>
     </div>
     </aside>
     }
  
    </div>
  )
}

export default Navbar;