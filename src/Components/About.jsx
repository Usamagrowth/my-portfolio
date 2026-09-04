import { ThemeCont } from "../contexts/ThemeContext";
import { Award, Users, Code, TrendingUp, Zap, Target, BarChart } from "lucide-react";

const About = () => {
  const { colors } = ThemeCont();

  const stats = [
    { icon: Code, label: "Projects Completed", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: TrendingUp, label: "Marketing Campaigns", value: "15+" },
    { icon: Award, label: "Years Experience", value: "2+" }
  ];

  return (
    <div id="about" className="py-20 px-6" style={{ backgroundColor: colors.cardBg }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>ABOUT ME</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: colors.text }}>
            Building Digital Growth Systems
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed" style={{ color: colors.text }}>
                I help businesses build complete digital growth systems that combine Web Development, Digital Marketing, and AI Automation. My approach focuses on creating practical solutions that drive real business outcomes.
              </p>
              <p className="text-xl leading-relaxed" style={{ color: colors.text }}>
                Instead of treating these as separate services, I integrate them into a cohesive system: BUILD your digital presence, ATTRACT qualified leads, and AUTOMATE repetitive operations. This holistic approach helps businesses operate more efficiently and grow sustainably.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: colors.text }}>How I Think About Business Problems</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: colors.secondary }}>
                    <Zap className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: colors.text }}>Technology + Business Strategy</h4>
                    <p className="text-sm opacity-80" style={{ color: colors.text }}>I don't just build websites; I build systems that support your business goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: colors.secondary }}>
                    <Target className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: colors.text }}>Results-Driven Approach</h4>
                    <p className="text-sm opacity-80" style={{ color: colors.text }}>Every solution is designed to generate leads, drive sales, or improve efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: colors.secondary }}>
                    <BarChart className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: colors.text }}>Data-Informed Decisions</h4>
                    <p className="text-sm opacity-80" style={{ color: colors.text }}>I use analytics and performance data to continuously optimize and improve results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: colors.background }}>
                <stat.icon className="w-12 h-12 mx-auto mb-4" style={{ color: colors.accent }} />
                <div className="text-4xl font-bold mb-2" style={{ color: colors.text }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: colors.text }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;