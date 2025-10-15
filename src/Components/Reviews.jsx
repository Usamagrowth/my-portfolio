import User from "./User"
import stephen from "../assets/stephen browing.jpg"
import dana from "../assets/Dana.jpg"
import bianca from "../assets/Bianca Shanise.jpg"
const Reviews = () => {
  return (
   <div className="flex flex-col px-10 pb-16 gap-4 items-start">
    <div className="flex flex-col gap-4">
    <p className="text-[#004600]">__Reviews__</p>
    <h3 className="text-2xl font-bold">What Clients Say</h3>
    </div>
    <div className="flex flex-wrap gap-3">
     <User 
     profile={dana}
     userName="Diana"
     message="Usama growth solutions is definitely a company of knowledge, professionalism and kindness. Make sure you reach out to this company for your business needs. Websites, social media, flyers etc. I'll be bask for more services. Thank you Usama Growth Solutions."
     industry="Finance Industry"
    />
     <User 
     profile={stephen}
     userName="Stephen Browing"
     message="Yes he did a great work Thanks so much."
     industry="Insurance Industry"
    />
     <User 
     profile={bianca}
     userName="Bianca Shanise"
     message="Yes I appreciate the services provided.. very nice and friendly. Very communicative with me and what I needed done. Thanks so much."
     industry="Tax Industry"
    />
    </div>
   </div>
  )
}

export default Reviews