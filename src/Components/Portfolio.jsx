import Card from "./Card"
import voyager from "../assets/voyager.png"
import uptora from "../assets/uptora.png"
import seo from "../assets/seo.png"
import tiana from "../assets/tiana.png"
import hungryLionz from "../assets/Hungrylionz.png"
import bd from "../assets/bdtax1.jpg"
import bdtax from "../assets/bdtax.jpg"
import jamo from  "../assets/Jamoskido.png"
import seo1 from "../assets/seo3.png"
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
       link="https://travelandtourvoyage.com" 
       Live="Live Site"
       git="https://github.com/Usamagrowth/Voyager-travelling"
       Github="Github"
      />

      <Card 
       businessName="Uptora Electronic Store"
       image={uptora}
       description="A website build for Uptora Electronic Store for there electronic Products
       Tech Stack: React.jsx | Vite | Tailwind CSS | JS"
       link="https://uptora-electronics-store-ymcl.vercel.app/"
       Live="Live Site"
       git="https://github.com/Usamagrowth/Uptora-electronics-store"
       Github="Github"
      />
      </div>

     <h3 className="font-semibold text-2xl">Marketing & SEO</h3>
     <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
      <Card 
       businessName="Website SEO "
       image={seo}
        description="A Seo Optimization for a tax preparer"
        fullimage="View Full Image"
      />
      
      <Card 
       businessName="Website and Local SEO"
       image={seo1}
       description="A website seo for usama growth solutions "
       fullimage="View Full Image"
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
       businessName="Restaurant Flyer"
       image={hungryLionz}
       description="A Flyer design with Canva "
       fullimage="View Full Image"
      />
      
       <Card 
       businessName="Tax Flyer"
       image={bdtax}
       description="A Flyer design with Canva "
       fullimage="View Full Image"
      />

       <Card 
       businessName="Tax Logo For BD"
       image={bd}
       description="A logo design with Canva "
       fullimage="View Full Image"
      />
      
       <Card 
       businessName="Arts and Panting Logo"
       image={jamo}
       description="A logo design with Canva "
       fullimage="View Full Image"
      />

    </div>
    </div>
  )
}

export default Portfolio