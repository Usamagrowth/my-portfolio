import { Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeCont } from "../contexts/ThemeContext"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "https://usamagrowthsolutions.blogspot.com/", external: true },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { isDark, toggleTheme, colors } = ThemeCont();
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = '' };
  }, [mobile]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="px-10 fixed w-[100%] z-50"
      style={{
        backgroundColor: colors.primary,
        boxShadow: scrolled ? '0 10px 30px rgba(2,6,23,0.08)' : 'transparent',
      }}
    >
      <nav className="flex justify-between h-20 items-center">
        <a href="#" className="w-14 h-14 z-[200]">
          <img className="w-full h-full rounded-xl" src="favicon.jpg" alt="logo" />
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <ul className="flex gap-9">
              {navLinks.map((link) => (
                <li key={link.label} className="cursor-pointer text-l font-semibold hover:opacity-70" style={{ color: colors.secondary }}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button onClick={toggleTheme} className="p-2 rounded-full" style={{ color: colors.secondary }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div onClick={() => setMobile(!mobile)} className="lg:hidden z-[200] cursor-pointer">
            {mobile ? <X style={{ color: colors.secondary }} className="h-9 w-9" /> : <Menu style={{ color: colors.secondrary }} className="h-9 w-9" />}
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay - shows theme icon and left-aligned links */}
      {mobile && (
        <aside className="lg:hidden fixed inset-0 z-50 pt-24 px-6" style={{ backgroundColor: colors.primary }}>
          <div className="absolute top-5 right-6 px-16 ">
            <button onClick={toggleTheme} className="p-2 rounded-full" style={{ color: colors.secondary }}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
         <ul className="flex flex-col gap-4 items-start px-5">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full">
                {link.external ? (
                  <a
                    onClick={() => setMobile(false)}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-left py-2 font-semibold text-lg"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    onClick={() => setMobile(false)}
                    href={link.href}
                    className="block text-left py-2 font-semibold text-lg"
                    style={{ color: colors.text}}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  )
}

export default Navbar;