import { ThemeCont } from "../contexts/ThemeContext";
import { Search, Code, Rocket, BarChart, TrendingUp } from "lucide-react";

const Process = () => {
  const { colors } = ThemeCont();

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Understand the business, goals, audience, and problems. I dive deep into your current situation to identify opportunities and challenges."
    },
    {
      icon: Code,
      title: "Strategize",
      description: "Determine the right digital, marketing, or automation solution. I create a tailored roadmap that aligns with your business objectives."
    },
    {
      icon: Rocket,
      title: "Build",
      description: "Develop the website, campaign, workflow, or system. I execute the strategy with attention to quality and performance."
    },
    {
      icon: BarChart,
      title: "Optimize",
      description: "Test, improve, and refine based on performance. I continuously monitor results and make data-driven improvements."
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Help the business generate more opportunities and operate more efficiently. I ensure long-term success and scalability."
    }
  ];

  return (
    <div id="process" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>MY PROCESS</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.text }}>
            How I Work With You
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: colors.text }}>
            A proven approach to building digital growth systems that deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="pt-8 pb-6 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full" style={{ backgroundColor: colors.cardBg }}>
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.secondary }}>
                    <step.icon className="w-7 h-7" style={{ color: colors.primary }} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>
                  {step.title}
                </h3>

                <p className="leading-relaxed opacity-90" style={{ color: colors.text }}>
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed" style={{ borderColor: colors.secondary }}></div>
              )}
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
            Let's Work Together
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Process;