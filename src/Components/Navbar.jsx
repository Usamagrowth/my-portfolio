import { Menu, X, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { ThemeCont } from "../contexts/ThemeContext"

const Navbar = () => {
  const { isDark, toggleTheme, colors } = ThemeCont();
  const [mobile, setMobile] = useState(false);

  const mobileNav = () => {
    setMobile(!mobile);
  }

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md border-b" style={{ backgroundColor: colors.primary + '80', borderColor: colors.border }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img className="w-12 h-12 rounded-xl shadow-lg" src="favicon.jpg" alt="Usama - React Developer & Digital Marketing" />
            <span className="text-xl font-bold hidden sm:block" style={{ color: colors.text }}>Usama</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {[
                { href: '#', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#service', label: 'Services' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: 'https://usamagrowthsolutions.blogspot.com/', label: 'Blog' },
                { href: '#contact', label: 'Contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="font-medium hover:text-opacity-80 transition-colors duration-200"
                    style={{ color: colors.text }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-opacity-20 transition-all duration-200"
              style={{ color: colors.secondary }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full"
              style={{ color: colors.secondary }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={mobileNav} className="p-2">
              {mobile ?
                <X style={{ color: colors.text }} size={24} /> :
                <Menu style={{ color: colors.text }} size={24} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <div className="lg:hidden absolute top-full left-0 w-full shadow-xl" style={{ backgroundColor: colors.cardBg }}>
          <div className="px-6 py-4">
            <ul className="space-y-4">
              {[
                { href: '#', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#service', label: 'Services' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: 'https://usamagrowthsolutions.blogspot.com/', label: 'Blog' },
                { href: '#contact', label: 'Contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setMobile(false)}
                    className="block py-2 font-medium hover:text-opacity-80 transition-colors duration-200"
                    style={{ color: colors.text }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;