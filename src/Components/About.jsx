import { ThemeCont } from "../contexts/ThemeContext";
import { Award, Users, Code, TrendingUp } from "lucide-react";

const About = () => {
  const { colors } = ThemeCont();

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: TrendingUp, label: "Marketing Campaigns", value: "25+" },
    { icon: Award, label: "Years Experience", value: "2+" }
  ];

  return (
    <div id="about" className="py-20 px-6" style={{ backgroundColor: colors.cardBg }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>ABOUT ME</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: colors.text }}>
            Crafting Digital Excellence
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed" style={{ color: colors.text }}>
                I specialize in the convergence of high-performance Frontend Development and strategic Digital Marketing. My goal is simple: to create exceptional digital experiences and robust online brands.
              </p>
              <p className="text-xl leading-relaxed" style={{ color: colors.text }}>
                Whether delivering a highly optimized, captivating website or scaling a targeted advertising campaign, I focus on innovative, measurable solutions that drive success.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: colors.text }}>Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Node.js', 'SEO', 'Analytics', 'UI/UX', 'Marketing'].map((skill, index) => (
                  <div key={index} className="px-4 py-2 rounded-lg text-center font-medium" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
                    {skill}
                  </div>
                ))}
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