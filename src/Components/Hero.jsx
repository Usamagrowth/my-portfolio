import { Badge, ArrowRight } from "lucide-react";
import Awriter from "./utils/Awriter";
import { ThemeCont } from "../contexts/ThemeContext";

const Hero = () => {
  const { colors } = ThemeCont();

  return (
    <div className="flex items-center justify-center px-6 py-20" style={{ background: colors.gradient }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 pt-3">
            <div className="space-y-2">
              <p className="font-medium tracking-wide text-lg" style={{ color: colors.accent }}>HI, I'M USAMA</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: colors.text }}>
                I Build Digital Growth Systems That Generate Leads, Drive Sales & Automate Operations.
              </h1>
            </div>

            <Awriter />
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: colors.secondary, color: colors.primary }}
              >
                <Badge className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span>Start a Project</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: colors.secondary, color: colors.secondary }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4" style={{ borderColor: colors.secondary }}>
                <img
                  className="w-full h-full object-cover"
                  src="usama01.png"
                  alt="Usama - Digital Growth Systems Expert"
                  loading="eager"
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