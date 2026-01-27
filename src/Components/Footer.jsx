import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, Mail, ExternalLink } from "lucide-react"
import { ThemeCont } from "../contexts/ThemeContext"

const Footer = () => {
  const { colors } = ThemeCont();

  return (
    <footer className="py-12 px-6 border-t" style={{ backgroundColor: colors.cardBg, borderColor: colors.border, color: colors.text }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ color: colors.text }}>Usama</h3>
            <p className="leading-relaxed" style={{ color: colors.text }}>
              Expert React Developer & Digital Marketing Specialist crafting exceptional digital experiences that drive results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: colors.text }}>Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#service', label: 'Services' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block hover:text-opacity-80 transition-colors duration-200"
                  style={{ color: colors.text }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: colors.text }}>Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:usamagrowthsolutions@gmail.com"
                className="flex items-center gap-2 hover:text-opacity-80 transition-colors duration-200"
                style={{ color: colors.text }}
              >
                <Mail className="w-4 h-4" />
                usamagrowthsolutions@gmail.com
              </a>

              <div className="flex gap-4">
                <a
                  href="https://web.facebook.com/profile.php?id=61563565417559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-all duration-200"
                  style={{ color: colors.secondary }}
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Usamagrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-all duration-200"
                  style={{ color: colors.secondary }}
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/usama_growth_solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-all duration-200"
                  style={{ color: colors.secondary }}
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/usama-o-53161535b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-all duration-200"
                  style={{ color: colors.secondary }}
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: colors.border }}>
          <p style={{ color: colors.text }}>
            © {new Date().getFullYear()} Usama Growth Solutions. All rights reserved.
          </p>
          <a
            href="https://usamagrowthsolutions.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-opacity-80 transition-colors duration-200"
            style={{ color: colors.accent }}
          >
            Visit Blog <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer