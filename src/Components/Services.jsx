import { BarChart,  CodeSquareIcon, Globe, PenTool, Target, TrendingUp } from "lucide-react"
const Services = () => {
  return (
    <div id="service" className="flex flex-col px-10 pb-16 gap-4">
    <p className="text-[#004600]">__What I do__</p>
    <h3 className="text-3xl font-bold">Awesome Quality Services</h3>
    <div className="grid lg:grid-cols-2 gap-7">
    <div className="flex text-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 bg-[#004600] p-3 hover:text-white">
    <CodeSquareIcon  /> <h3 className="text-2xl font-semibold">Frontend Developer</h3>
     <p>I create engaging, high-performance web experiences with a keen eye for detail and user satisfaction. My focus is on building responsive, intuitive, and accessible interfaces using modern JavaScript frameworks like React, HTML5, and CSS3, ensuring seamless functionality across all devices.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <Globe /> <h3 className="text-2xl font-semibold">Web Design & Development</h3>
    <p>I build compelling websites from concept to launch, focusing on aesthetic appeal, intuitive user experience, and robust functionality. My services include custom website design, responsive development (WordPress/Custom CMS), e-commerce solutions, and ongoing maintenance to ensure your online presence stands out.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <TrendingUp /> <h3 className="text-2xl font-semibold">Digital Marketing</h3>
    <p>As a results-driven digital marketer, I specialize in crafting comprehensive strategies that elevate brands, drive targeted traffic, and maximize conversions. My expertise spans SEO, SEM, content strategy, social media campaigns, and analytics-driven optimization to achieve measurable business growth.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <Target /> <h3 className="text-2xl font-semibold">Leads Generations</h3>
    <p>I design and implement robust lead generation funnels that consistently deliver high-quality prospects. Utilizing a blend of inbound marketing, targeted advertising (Google Ads, Social Media), email automation, and CRM integration, I convert interest into actionable sales opportunities.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
    <BarChart /> <h3 className="text-xl font-semibold">SEO Experts</h3>
    <p>I boost online visibility and organic search performance through meticulous SEO strategies. From in-depth keyword research and technical SEO audits to on-page optimization and link-building campaigns, I help businesses rank higher and attract their ideal customers effectively.</p>
    </div>
    <div className="flex bg-white shadow-md rounded-md border-2 border-opacity-10 flex-col gap-3 hover:bg-[#004600] p-3 hover:text-white">
   <PenTool /> <h3 className="text-xl font-semibold">Graphic Design</h3>
    <p>I craft impactful visual identities and engaging graphic content that resonates with target audiences. My design expertise covers branding (logos, style guides), marketing collateral (banners, social media graphics), UI/UX elements, and print materials, ensuring every visual communicates your message effectively.</p>
    </div>
    </div>
    </div>
  )
}

export default Services