import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di"
import { SiCanva, SiGooglesearchconsole, SiMeta, SiNodedotjs, SiReact, SiTypescript, SiVite } from "react-icons/si"

const Tools = () => {
  return (
    <div className="px-10 pb-16">
     <h3 className="text-2xl font-bold">My Development & Marketing Toolbox</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 space-y-5 pt-7 items-center">
    <DiHtml5 className="w-20 h-20 text-[#004600]" />
    <DiCss3 className="w-20 h-20 text-[#004600]" />
    <DiJavascript1 className="w-20 h-20 text-[#004600]" />
    <SiReact className="w-20 h-20 text-[#004600]" />
    <SiNodedotjs className="w-20 h-20 text-[#004600]" />
    <SiVite className="w-20 h-20 text-[#004600]" />
    <SiCanva className="w-20 h-20 text-[#004600]" />
    <SiTypescript className="w-20 h-20 text-[#004600]" />
    <SiGooglesearchconsole className="w-20 h-20 text-[#004600]" />
    <SiMeta className="w-20 h-20 text-[#004600]" />
    </div>
    </div>
  )
}

export default Tools