import { ThemeCont } from "../contexts/ThemeContext"
import { ArrowRight } from "lucide-react"

const Discount = () => {
  const { colors } = ThemeCont();

  return (
    <div className="py-16 px-6" style={{ backgroundColor: colors.cardBg }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-emerald-100 text-emerald-800">
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Get A Special Quote
            </h2>

            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-700">
              Enjoy <span className="font-bold text-emerald-600">15% Off</span> Your First Order or Service.
              Don't miss out on this incredible deal to kickstart your digital transformation!
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-emerald-500 text-white hover:bg-emerald-600"
            >
              Get Your Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount;