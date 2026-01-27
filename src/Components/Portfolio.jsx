import Card from "./utils/Card"
import { ThemeCont } from "../contexts/ThemeContext"
import { useState } from "react"
import { X, ZoomIn } from "lucide-react"
import voyager from "../assets/voyager.png"
import uptora from "../assets/uptora.png"
import seo from "../assets/seo.png"
import tiana from "../assets/tiana.png"
import hungryLionz from "../assets/Hungrylionz.png"
import bd from "../assets/bdtax1.jpg"
import bdtax from "../assets/bdtax.jpg"
import jamo from  "../assets/Jamoskido.png"
import seo1 from "../assets/usamaseo.jpeg"
const Portfolio = () => {
  const { colors } = ThemeCont();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (image, title) => {
    setSelectedImage({ image, title });
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const categories = [
    {
      title: "Web Development",
      projects: [
        {
          businessName: "Voyager Travelling Website",
          image: voyager,
          description: "A comprehensive travel and hotel booking platform with modern UI/UX design.",
          tech: "React.jsx | Vite | Tailwind CSS | JS",
          link: "https://travelsandtourvoyage.com",
          git: "https://github.com/Usamagrowth/Voyager-travelling",
          featured: true
        },
        {
          businessName: "Uptora Electronic Store",
          image: uptora,
          description: "E-commerce platform for electronic products with responsive design.",
          tech: "React.jsx | Vite | Tailwind CSS | JS",
          link: "https://uptora-electronics-store-ymcl.vercel.app/",
          git: "https://github.com/Usamagrowth/Uptora-electronics-store"
        }
      ]
    },
    {
      title: "Marketing & SEO",
  
      projects: [
        {
          businessName: "Website SEO Optimization",
          image: seo,
          description: "Complete SEO optimization for tax preparation business.",
          tech: "SEO | Analytics | Content Strategy"
        },
        {
          businessName: "Website & Local SEO",
          image: seo1,
          description: "Comprehensive SEO strategy for Usama Growth Solutions.",
          tech: "Local SEO | Content Marketing | Analytics"
        }
      ]
    },
    {
      title: "Graphic Design",
      projects: [
        {
          businessName: "Real Estate Flyer",
          image: tiana,
          description: "Professional flyer design for real estate agent Tiana Clarke.",
          tech: "Canva | Graphic Design"
        },
        {
          businessName: "Restaurant Flyer",
          image: hungryLionz,
          description: "Eye-catching promotional flyer for Hungry Lionz restaurant.",
          tech: "Canva | Branding"
        },
        {
          businessName: "Tax Services Flyer",
          image: bdtax,
          description: "Professional marketing flyer for BD Tax and Financial Services.",
          tech: "Canva | Print Design"
        },
        {
          businessName: "Tax Logo Design",
          image: bd,
          description: "Custom logo design for BD Tax and Financial Services.",
          tech: "Canva | Logo Design"
        },
        {
          businessName: "Arts & Painting Logo",
          image: jamo,
          description: "Creative logo design for arts and painting business.",
          tech: "Canva | Branding"
        }
      ]
    }
  ];

  return (
    <div id="portfolio" className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: colors.secondary }}></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: colors.accent }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>PORTFOLIO</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: colors.text }}>
            My Work Speaks
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Showcasing projects that blend creativity, technology, and strategic thinking
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-3xl font-bold" style={{ color: colors.text }}>
                {category.title}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.projects.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                    project.featured ? 'border-emerald-200 scale-105' : 'border-gray-100'
                  }`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.businessName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {project.businessName}
                    </h4>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <p className="text-xs font-medium mb-4 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                      {project.tech}
                    </p>

                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 bg-emerald-500 text-white hover:bg-emerald-600"
                        >
                          Live Site
                        </a>
                      )}
                      {project.git && (
                        <a
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 px-4 rounded-lg font-medium border-2 transition-all duration-200 hover:scale-105 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                        >
                          GitHub
                        </a>
                      )}
                      {!project.link && !project.git && (
                        <button 
                          onClick={() => openImageModal(project.image, project.businessName)}
                          className="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 bg-emerald-500 text-white hover:bg-emerald-600 flex items-center justify-center gap-2"
                        >
                          <ZoomIn className="w-4 h-4" />
                          View Full Image
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-green-400/0 group-hover:from-emerald-400/5 group-hover:to-green-400/5 transition-all duration-500 rounded-3xl pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6 text-gray-600">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-5xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-500">
                <h3 className="text-xl font-bold text-white text-center">
                  {selectedImage.title}
                </h3>
              </div>
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio