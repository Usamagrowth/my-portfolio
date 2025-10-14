import { Star } from "lucide-react";

const User = ({profile, userName, message, industry}) => {
  return (
    <div className="max-w-sm mx-auto bg-[#004600] rounded-2xl border-2 border-opacity-10 shadow-md overflow-hidden p-6 text-center">
    <div className="w-25 h-25  mx-auto rounded-full object-cover border-4 border-white">
    <img
        className="w-[100%] h-[100%] mx-auto rounded-full"
        src={profile}
        alt="Happy Client"
      />
    </div>  
    <div className="flex flex-col gap-4 items-center">
      <h2 className="mt-4 text-white text-xl font-bold ">{userName}</h2>
      <p className="text-sm  text-white">{message} </p>
      <div className="flex gap-2 text-[#FFD700]"> <Star /> <Star /> <Star /> <Star /> <Star /></div> 
      <p className=" font-semibold text-white">{industry}</p>
      </div>
    </div>
  )
}

export default User;