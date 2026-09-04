import { BarChart, CodeSquareIcon, Globe, PenTool, Target, TrendingUp, Bot, Layout, Search, Mail, Zap, Database, Smartphone } from "lucide-react"
import { ThemeCont } from "../contexts/ThemeContext"
import { SiN8N } from "react-icons/si";

const Services = () => {
  const { colors } = ThemeCont();

  const serviceCategories = [
    {
      title: "01 — WEB DEVELOPMENT",
      description: "Build digital experiences that help businesses establish credibility and convert visitors.",
      icon: CodeSquareIcon,
      services: [
        {
          icon: Layout,
          title: "Business Websites",
          description: "Professional, responsive websites that establish your online presence and convert visitors into customers."
        },
        {
          icon: Smartphone,
          title: "Landing Pages",
          description: "High-converting landing pages designed for specific campaigns and lead generation."
        },
        {
          icon: Globe,
          title: "E-commerce Solutions",
          description: "Complete online stores with secure payment processing and inventory management."
        },
        {
          icon: CodeSquareIcon,
          title: "React / Next.js Development",
          description: "Modern, fast, and scalable web applications using cutting-edge technologies."
        },
        {
          icon: Layout,
          title: "Responsive Design",
          description: "Websites that work flawlessly across all devices and screen sizes."
        },
        {
          icon: PenTool,
          title: "UI/UX Design",
          description: "User-centered design that enhances engagement and drives conversions."
        },
        {
          icon: Zap,
          title: "Website Optimization",
          description: "Performance optimization for faster load times and better user experience."
        }
      ]
    },
    {
      title: "02 — DIGITAL MARKETING",
      description: "Help businesses attract the right audience and generate qualified leads.",
      icon: TrendingUp,
      services: [
        {
          icon: Search,
          title: "SEO",
          description: "Improve your search rankings and drive organic traffic to your website."
        },
        {
          icon: Globe,
          title: "Local SEO / Google Business Profile",
          description: "Optimize your local presence to attract customers in your area."
        },
        {
          icon: Target,
          title: "Social Media Marketing",
          description: "Strategic social media campaigns that build brand awareness and engagement."
        },
        {
          icon: BarChart,
          title: "Meta Ads",
          description: "Targeted advertising on Facebook and Instagram to reach your ideal customers."
        },
        {
          icon: TrendingUp,
          title: "Google Ads",
          description: "Pay-per-click campaigns that drive qualified leads and maximize ROI."
        },
        {
          icon: Target,
          title: "Lead Generation",
          description: "Comprehensive strategies to capture and nurture high-quality leads."
        },
        {
          icon: BarChart,
          title: "Conversion Optimization",
          description: "Data-driven improvements to increase conversion rates and maximize results."
        },
        {
          icon: PenTool,
          title: "Content Strategy",
          description: "Strategic content creation that attracts, engages, and converts your audience."
        }
      ]
    },
    {
      title: "03 — AI AUTOMATION",
      description: "Help businesses reduce repetitive work and improve their processes.",
      icon: SiN8N,
      services: [
        {
          icon: Bot,
          title: "AI Workflows",
          description: "Intelligent automation workflows that handle complex business processes."
        },
        {
          icon: SiN8N,
          title: "n8n Automation",
          description: "Custom automation solutions using n8n to connect and streamline your tools."
        },
        {
          icon: Bot,
          title: "AI Agents",
          description: "Intelligent agents that handle customer service, data processing, and more."
        },
        {
          icon: Target,
          title: "Lead Qualification",
          description: "Automated lead scoring and qualification to focus on high-value prospects."
        },
        {
          icon: Mail,
          title: "Automated Follow-up",
          description: "Intelligent email sequences that nurture leads and drive conversions."
        },
        {
          icon: Database,
          title: "CRM Automation",
          description: "Streamline your CRM processes with automated data entry and management."
        },
        {
          icon: Mail,
          title: "WhatsApp / Email Automation",
          description: "Automated messaging campaigns that engage customers at the right time."
        },
        {
          icon: Zap,
          title: "API Integrations",
          description: "Connect your tools and services to create seamless automated workflows."
        },
        {
          icon: BarChart,
          title: "Business Process Automation",
          description: "End-to-end automation of repetitive business tasks and operations."
        }
      ]
    }
  ];

  return (
    <div id="service" className="py-20 px-6" style={{ backgroundColor: colors.cardBg }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>SERVICES</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.text }}>
            How I Help Businesses Grow
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: colors.text }}>
            A comprehensive approach combining BUILD → ATTRACT → AUTOMATE to drive business growth
          </p>
        </div>

        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: colors.secondary }}>
                    {categoryIndex === 2 ? (
                      <SiN8N className="w-8 h-8" style={{ color: colors.primary }} />
                    ) : (
                      <category.icon className="w-8 h-8" style={{ color: colors.primary }} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: colors.text }}>
                      {category.title}
                    </h3>
                    <p className="text-lg opacity-80" style={{ color: colors.text }}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 relative hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-emerald-200"
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 group-hover:bg-emerald-50 transition-colors duration-300">
                        <service.icon
                          className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-3 group-hover:text-emerald-700 transition-colors duration-300" style={{ color: colors.text }}>
                      {service.title}
                    </h4>

                    <p className="leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 text-sm" style={{ color: colors.text }}>
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6 opacity-90" style={{ color: colors.text }}>
            Ready to build, attract, or automate?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 bg-emerald-500 text-white hover:bg-emerald-600 transform"
          >
            Start a Project
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