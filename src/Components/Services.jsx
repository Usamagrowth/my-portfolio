import { BarChart, CodeSquareIcon, Globe, PenTool, Target, TrendingUp } from "lucide-react"
import { ThemeCont } from "../contexts/ThemeContext"

const Services = () => {
  const { colors } = ThemeCont();

  const services = [
    {
      icon: CodeSquareIcon,
      title: "Frontend Development",
      description: "Creating engaging, high-performance web experiences with React, HTML5, and CSS3. Building responsive, intuitive, and accessible interfaces that work seamlessly across all devices.",
      featured: true
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Building compelling websites from concept to launch. Custom design, responsive development, e-commerce solutions, and ongoing maintenance for outstanding online presence."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Results-driven strategies that elevate brands and drive conversions. SEO, SEM, content strategy, social media campaigns, and analytics-driven optimization."
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Robust lead generation funnels delivering high-quality prospects. Inbound marketing, targeted advertising, email automation, and CRM integration."
    },
    {
      icon: BarChart,
      title: "SEO Optimization",
      description: "Boosting online visibility through meticulous SEO strategies. Keyword research, technical audits, on-page optimization, and link-building campaigns."
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Crafting impactful visual identities and engaging content. Branding, marketing collateral, UI/UX elements, and print materials that communicate effectively."
    }
  ];

  return (
    <div id="service" className="py-20 px-6" style={{ backgroundColor: colors.cardBg }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>SERVICES</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.text }}>
            What I Do Best
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: colors.text }}>
            Comprehensive digital solutions to elevate your brand and drive results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg- shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border border-gray-100 hover:border-emerald-200"
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white group-hover:bg-emerald-600 transition-colors duration-300">
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gray-50 group-hover:bg-emerald-50 transition-colors duration-300">
                  <service.icon
                    className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-700 transition-colors duration-300" style={{ color: colors.text }}>
                  {service.title}
                </h3>
              </div>

              <p className="leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300" style={{ color: colors.text }}>
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6 opacity-90" style={{ color: colors.text }}>
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 bg-emerald-500 text-white hover:bg-emerald-600 transform"
          >
            Get In Touch
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services