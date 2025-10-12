

const Card= ({businessName, description, image, link, Live, git, Github}) => {
  return (
    <div className="p-3 shadow-sm rounded-lg bg-[#004600] items-center">
     <div className="space-y-4 flex flex-col">
     <h3 className="text-xl text-[#44e944] font-semibold">{businessName}</h3>
     <div className="border border-white rounded-lg w-[350px] h-[200px] overflow-hidden object-cover">
      <img className="w-[100%] h-[100%]" src={image} alt="Best Web Developer and marketerWeb Designer and Development, Digital Marketing, Front End Developer, Email Marketing, SEO Experts, Ads Specialist, Leads Generation, Graphic Designs in ibadan Nigeria" />
     </div>
     <p className="text-white">{description}</p>
    <div className="flex gap-5">
    <a className="text-[#44e944] font-semibold" href={link}>{Live}</a>
    <a className="text-[#44e944] font-semibold" href={git}> {Github}</a>
    </div>
    </div>
    </div>
  )
}

export default Card;