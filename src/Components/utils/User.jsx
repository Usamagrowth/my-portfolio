import { FaStar } from "react-icons/fa6";
import { ThemeCont } from "../../contexts/ThemeContext";

const User = ({profile, userName, message, industry}) => {
  const { colors } = ThemeCont();

  return (
    <div className="flex flex-col max-w-[350px] mx-auto rounded-2xl border-2 shadow-lg overflow-hidden p-6 items-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
    <div className="max-w-[240px] max-h-[240px]  rounded-full object-cover overflow-hidden border-4" style={{ borderColor: colors.primary }}>
    <img
        className="w-[100%] h-[100%] mx-auto rounded-full"
        src={profile}
        alt="Happy Client"
      />
    </div>  
    <div className="flex flex-col gap-4 items-center">
      <h2 className="mt-4 text-xl font-bold" style={{ color: colors.text }}>{userName}</h2>
      <p className="text-sm text-center" style={{ color: colors.text }}>{message} </p>
      <div className="flex gap-2" style={{ color: colors.accent }}> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div> 
      <p className="font-semibold" style={{ color: colors.accent }}>{industry}</p>
      </div>
    </div>
  )
}

export default User;