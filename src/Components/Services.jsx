import { CodeSquareIcon, Dessert, LucideDatabase, MarsIcon } from "lucide-react"

const Services = () => {
  return (
    <div id="service" className="flex flex-col px-20 pb-16 gap-4">
    <p className="text-[#004600]">__What I do__</p>
    <h3 className="text-3xl font-bold">Awesome Quality Services</h3>
    <div className="grid lg:grid-cols-2 gap-7">
    <div className="flex text-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 bg-[#004600] p-3 hover:text-white">
    <CodeSquareIcon  /> <h3 className="text-2xl font-semibold">Frontend Developer</h3>
     <p>I'm a Experience developer with a passion for crafting stunning, user-friendly websites and Applications. I specialize in creating responsive websites and web app that look great and professional</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <Dessert /> <h3 className="text-2xl font-semibold">Web Design & Development</h3>
    <p>I'm a skilled web designer and developer with a passion for crafting stunning, user-friendly websites. I specialize in creating responsive websites that look great on all devices..</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <MarsIcon /> <h3 className="text-2xl font-semibold">Digital Marketing</h3>
    <p>I'm a skilled digital marketing professional with a passion for driving growth and engagement. I specialize in crafting and executing comprehensive digital marketing strategies, including PPC, social media marketing, and email marketing.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <LucideDatabase /> <h3 className="text-2xl font-semibold">Leads Generations</h3>
    <p>I'm a skilled lead generation specialist focused on driving high-quality leads and boosting sales. I leverage a variety of strategies, including inbound marketing, content marketing, and paid advertising (Meta and Googles Ads), to attract and convert potential customers.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <h3 className="text-xl font-semibold">SEO Experts</h3>
    <p>I'm a dedicated SEO expert with a proven track record of boosting online visibility and driving organic traffic. I specialize in crafting effective SEO strategies, including audit, keyword research, off-page, on-page optimization, and link building.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <h3 className="text-xl font-semibold">Graphic Design</h3>
    <p>I'm a skilled Graphic Designer focused on designing stunning, attension grabbing design</p>
    </div>
    </div>
    </div>
  )
}

export default Services