import { useState } from "react";
import { ThemeCont } from "../../contexts/ThemeContext";


const Card= ({businessName, description, image, link, Live, git, Github, fullimage}) => {
  const { colors } = ThemeCont();
  const [fullImage, setFullImage] = useState(false);
  const view = () => {
 setFullImage(!fullImage) };

  return (
    <div className="p-4 max-h-fit max-w-[420px] shadow-lg rounded-lg items-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.border}` }}>
     <div className="space-y-3 flex flex-col">
     <h3 className="text-xl font-semibold" style={{ color: colors.text }}>{businessName}</h3>
     <div> 
      {fullImage ?  <div className="border rounded-lg w-[100%] h-[100%]" style={{ borderColor: colors.border }}>
      <img  className="w-[100%] h-[100%]" src={image} alt="Best Web Developer and marketerWeb Designer and Development, Digital Marketing, Front End Developer, Email Marketing, SEO Experts, Ads Specialist, Leads Generation, Graphic Designs in ibadan Nigeria" />
     </div> :
     <div  className="border rounded-lg h-[220px]   max-w-[390px]   overflow-hidden object-cover" style={{ borderColor: colors.border }}>
      <img className="w-[100%] h-[100%]" src={image} alt="Best Web Developer and marketerWeb Designer and Development, Digital Marketing, Front End Developer, Email Marketing, SEO Experts, Ads Specialist, Leads Generation, Graphic Designs in ibadan Nigeria" />
     </div> }
     </div>
    <p style={{ color: colors.text }}>{description}</p>
    <p onClick={()=> setFullImage(view) } className="font-semibold hover:opacity-70 cursor-pointer" style={{ color: colors.accent }}>{fullimage}</p>
    <div className="flex gap-5">
    <a className="hover:opacity-70 font-semibold" style={{ color: colors.accent }} href={link}>{Live}</a>
    <a className="hover:opacity-70 font-semibold" style={{ color: colors.accent }} href={git}> {Github}</a>
   </div>
    </div>
    </div>
  )
}

export default Card;