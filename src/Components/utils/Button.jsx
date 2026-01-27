import { ThemeCont } from "../../contexts/ThemeContext";

const Button = ({ctaButton}) => {
  const { colors } = ThemeCont();

  return (
    <div>
    <button className="py-2 px-4 rounded-full shadow-lg hover:opacity-80 transition-all duration-300 font-semibold" style={{ backgroundColor: colors.primary, color: colors.secondary }}>{ctaButton}</button>
    </div>
  )
}

export default Button