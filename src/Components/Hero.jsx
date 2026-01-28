import { Badge, ArrowRight } from "lucide-react";
import Awriter from "./utils/Awriter";
import { ThemeCont } from "../contexts/ThemeContext";

const Hero = () => {
  const { colors } = ThemeCont();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20" style={{ background: colors.gradient }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-3 pt-3">
            <div className="space-y-2 flex items-center lg:justify-start justify-center gap-3">
              <p className="font-medium tracking-wide text-xl" style={{ color: colors.accent }}>HI, I'M</p>
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight" style={{ color: colors.text }}>
                Usama
              </h1>
            </div>

            <Awriter />

            <p className="text-xl leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ color: colors.text }}>
              Expert React Developer & Digital Marketing Specialist crafting exceptional digital experiences that drive results.
            </p>

            <div className="flex flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://upwork.com/freelancers/usamao3"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: colors.secondary, color: colors.primary }}
              >
                <Badge className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Hire Me</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: colors.secondary, color: colors.secondary }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4" style={{ borderColor: colors.secondary }}>
                <img
                  className="w-full h-full object-cover"
                  src="usama01.png"
                  alt="Usama - Expert React Developer & Digital Marketing Specialist"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: colors.accent }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-30" style={{ backgroundColor: colors.secondary }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;