import { FacebookIcon, GithubIcon, InstagramIcon } from "lucide-react"

const Footer = () => {
  return (
    <div className="flex items-center gap-8 px-20 pb-5 justify-between items-center">
    <div className="flex flex-col gap-2">
     <h1 className="text-2xl font-bold">Usama Growth Solutions</h1>
     <p className="text-xl">usamagrowthsolutions@gmail.com</p>
     <p className="text-xl">© Usama Growth Solutions</p>
     </div>
     <div className="flex gap-3">
     <a href=""><FacebookIcon /></a> 
     <a href=""><InstagramIcon /></a>
     <a href=""><GithubIcon /></a>
     <a href="linkdin"></a>
     </div>
    </div>
  )
}

export default Footer