import Card from "./Card"
import voyager from "../assets/voyager.png"
import uptora from "../assets/uptora.png"
import seo from "../assets/seo.png"
import tiana from "../assets/tiana.png"
import hungryLionz from "../assets/Hungrylionz.png"
const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col px-10 pb-16 gap-3">
     <p className="text-[#004600]">__My Portfolio__</p>
     <h3 className="text-2xl font-bold">My Excellent Portfolio</h3>
     <h3 className="font-semibold  text-2xl">Website Design & Development</h3> 
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
      <Card 
       businessName="Voyager Travelling Website"
       image={voyager}
       description="A website build for Traveling, Tours and Hotel Booking to make travelling easier.
       Tech Stack: React.jsx | Vite | Tailwind CSS | JS"
       link="" 
       Live="Live Site"
       git=""
       Github="Github"
      />

      <Card 
       businessName="Uptora Electronic Store"
       image={uptora}
       description="A website build for Uptora Electronic Store for there electronic Products
       Tech Stack: React.jsx | Vite | Tailwind CSS | JS"
       link="https://uptora-electronics-store-82fac8mrx-usama-s-projects-9ae190d4.vercel.app/"
       Live="Live Site"
       git=""
       Github="Github"
      />

      </div>

    <h3 className="font-semibold text-2xl">Graphics Design </h3> 
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
       <Card 
       businessName="Real Estate Flyer"
       image={tiana}
        description="A Flyer design with Canva "
        fullimage="View Full Image"
      />

       <Card 
       businessName="Real Estate Flyer"
       image={hungryLionz}
       description="A Flyer design with Canva "
       link="https://"
       fullimage="View Full Image"
      />
    </div>

     <h3 className="font-semibold text-2xl">Marketing & SEO</h3>
     <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
      <Card 
       businessName="Real Estate Flyer"
       image={tiana}
        description="A Flyer design with Canva "
        fullimage="View Full Image"
      />
      
      <Card 
       businessName="Insurance Agency Website"
       image={seo}
       description="A website build for insurance agency "
       link=""
       Live="Live Site"
       git=""
       Github="Github"
      />

     </div>
    </div>
  )
}

export default Portfolio