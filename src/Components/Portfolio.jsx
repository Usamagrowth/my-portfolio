import Card from "./Card"
import uptora from "../assets/uptora.png"
import seo from "../assets/seo.png"
import tiana from "../assets/tiana.png"
import hungryLionz from "../assets/Hungrylionz.png"
const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col px-20 pb-16 gap-3">
     <p className="text-[#004600]">__My Portfolio__</p>
     <h3 className="text-2xl font-bold">My Excellent Portfolio</h3>
     <div className="flex gap-3">
      <h3 className="font-bold  cursor-pointer text-[#004600]">Website Design |</h3> 
      <h3 className="font-bold cursor-pointer text-[#004600]">Graphics Design |</h3> 
      <h3 className="font-bold cursor-pointer text-[#004600]">Marketing |</h3>
      <h3 className="font-bold cursor-pointer text-[#004600]">SEO</h3>
    </div>
     <div className="grid lg:grid-cols-3 gap-5 ">
      <Card 
       businessName="Uptora Electronic Store"
       image={uptora}
       description="A website build for Uptora Electronic Store for there electronic Products
       Tech Stack: React.jsx | Vite | Tailwind CSS | JS"
       link="https://coachmeeshaenterprise.com/"
       Live="Live Site"
       git=""
       Github="Github"
      />

     <Card 
       businessName="Insurance Website"
       image={seo}
       description="A website build for Traveling and Hotel Booking.
       Tech Stack: React.jsx | Vite | Tailwind CSS | JS"
       link="https://"
       Live="Live Site"
       git=""
       Github="Github"
      />

      <Card 
       businessName="Tax Website"
       image={uptora}
        description="A website build for Uptora Electronic Store for there electronic Products
       Tech Stack: React.jsx | Vite | Tailwind CSS | JS"
       link="https://"
        Live="Go Live"
       git=""
       Github="Github"
      />

       <Card 
       businessName="Real Estate Flyer"
       image={tiana}
        description="A Flyer design with Canva "
        Live="View Full Image"
      />

       <Card 
       businessName="Real Estate Flyer"
       image={hungryLionz}
       description="A Flyer design with Canva "
       link="https://"
        Live="View Live Image"
      />

     </div>
    </div>
  )
}

export default Portfolio