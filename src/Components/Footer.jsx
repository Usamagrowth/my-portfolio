import { FacebookIcon, GithubIcon, InstagramIcon,  LinkedinIcon } from "lucide-react"

const Footer = () => {
  return (
    <div className="flex gap-8 px-20 py-5 bg-[#004600] flex-col lg:flex-row lg:justify-between lg:items-center">
    <div className="flex flex-col gap-2">
     <h1 className="text-2xl font-bold text-white">Usama Growth Solutions</h1>
     <p className="text-xl text-white">usamagrowthsolutions@gmail.com</p>
     <p className="text-xl text-white">© Usama Growth Solutions</p>
     </div>
     <div className="flex gap-3">
     <a className=" text-white rounded-xl" href="https://web.facebook.com/profile.php?id=61563565417559"><FacebookIcon /></a> 
    <a className=" text-white rounded-xl" href="https://github.com/Usamagrowth"><GithubIcon /></a>
    <a className=" text-white rounded-xl" href="https://www.instagram.com/usama_growth_solutions/"><InstagramIcon /></a>
     <a className=" text-white rounded-xl" href="https://linkedin.com/in/usama-o-53161535b/"><LinkedinIcon /></a>
     </div>
    </div>
  )
}

export default Footer