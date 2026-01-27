import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di"
import { SiCanva, SiGooglesearchconsole, SiMeta, SiNodedotjs, SiReact, SiTypescript, SiVite, SiTailwindcss, SiFigma, SiAdobephotoshop } from "react-icons/si"
import { ThemeCont } from "../contexts/ThemeContext"

const Tools = () => {
  const { colors } = ThemeCont();

  const toolCategories = [
    {
      title: "Frontend Development",
      tools: [
        { icon: DiHtml5, name: "HTML5" },
        { icon: DiCss3, name: "CSS3" },
        { icon: DiJavascript1, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiVite, name: "Vite" }
      ]
    },
  
    {
      title: "Design & Marketing",
      tools: [
        { icon: SiCanva, name: "Canva" },
        { icon: SiFigma, name: "Figma" },
        { icon: SiAdobephotoshop, name: "Photoshop" },
        { icon: SiGooglesearchconsole, name: "Google Search Console" },
        { icon: SiMeta, name: "Meta Ads" }
      ]
    }
  ];

  return (
    <div className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>TECH STACK</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: colors.text }}>
            My Development & Marketing Toolbox
          </h2>
        </div>

        <div className="space-y-16">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.text }}>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 justify-items-center">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="group flex flex-col items-center p-6 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: colors.cardBg }}
                  >
                    <tool.icon
                      className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: colors.secondary }}
                    />
                    <span className="text-sm font-medium text-center" style={{ color: colors.text }}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools