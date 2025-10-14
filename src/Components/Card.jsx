import { useState } from "react";


const Card= ({businessName, description, image, link, Live, git, Github, fullimage}) => {
  const [fullImage, setFullImage] = useState(false);
  const view = () => {
 setFullImage(!fullImage) };

  return (
    <div className="p-3 shadow-sm rounded-lg bg-[#004600] items-center">
     <div className="space-y-3 flex flex-col">
     <h3 className="text-xl text-[#44e944] font-semibold">{businessName}</h3>
     <div> 
      {fullImage ? <div className="border border-white rounded-lg w-[100%] h-[100%] overflow-hidden object-cover">
      <img onClick={()=>setFullImage(fullImage)} className="w-[100%] h-[100%]" src={image} alt="Best Web Developer and marketerWeb Designer and Development, Digital Marketing, Front End Developer, Email Marketing, SEO Experts, Ads Specialist, Leads Generation, Graphic Designs in ibadan Nigeria" />
     </div> :
     <div className="border border-white rounded-lg lg:w-[380px] lg:h-[220px] overflow-hidden object-cover">
      <img className="w-[100%] h-[100%]" src={image} alt="Best Web Developer and marketerWeb Designer and Development, Digital Marketing, Front End Developer, Email Marketing, SEO Experts, Ads Specialist, Leads Generation, Graphic Designs in ibadan Nigeria" />
     </div> 
     }
     </div>
    <p className="text-white">{description}</p>
    <p onClick={view} className="text-[#44e944] font-semibold  hover:text-gray-400 cursor-pointer">{fullimage}</p>
    <div className="flex gap-5">
    <a className="text-[#44e944]  hover:text-gray-400 font-semibold" href={link}>{Live}</a>
    <a className="text-[#44e944]  hover:text-gray-400 font-semibold" href={git}> {Github}</a>
   </div>
    </div>
    </div>
  )
}

export default Card;