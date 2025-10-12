import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {

const [mobile, setMobile] = useState(false);

const mobileNav = () => {
  setMobile(!mobile);
}

  return (
    <div className="px-20 bg-gray-100" > 
     <nav className="flex justify-between  items-center">
    <div className="w-[100px] h-[100px]">
        <img className="w-[100%] h-[100%]" src="ulogo.png" alt="Best Web Designer and Development, Digital Marketing, Front End Developer, SEO Experts, Leads Generation, Logo and Flyers Designs in Ibadan Nigerial" />
      </div>
      <div onClick={mobileNav} className="lg:hidden cursor-pointer">
       {mobile  ? <X /> :
      <Menu />}
      </div>
      <div className="hidden lg:flex">
        <ul className="flex gap-9">
           <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Home</li>
         <a href="#about"> <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">About</li></a>
         <a href="#service"> <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Service</li></a>
         <a href="#portfolio"> <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Portfolio</li></a>
        <a href="#">  <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Blog</li></a>
        <a href="#contact">  <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Contact</li></a>
        </ul>
      </div>
     </nav>
     
     { mobile && 
     <aside>
     <div className="lg:hidden pt-28 flex">
      <ul className="flex flex-col gap-5">
          <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Home</li>
          <a href="#about"> <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">About</li></a>
         <a href="#service"> <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Service</li></a>
         <a href="#portfolio"> <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Portfolio</li></a>
        <a href="#">  <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Blog</li></a>
        <a href="#contact">  <li className="cursor-pointer text-l font-semibold hover:text-[#004600]">Contact</li></a>
        </ul>
     </div>
     </aside>
     }
  
    </div>
  )
}

export default Navbar;