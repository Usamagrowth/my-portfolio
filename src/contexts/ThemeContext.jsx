import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeCont = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ThemeCont must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    colors: {
      primary: isDark ? '#0f172a' : '#f9fafb', // Dark slate vs light gray
      secondary: isDark ? '#10b981' : '#0f172a', // Emerald green vs dark slate
      accent: isDark ? '#059669' : '#10b981', // Darker emerald vs emerald
      background: isDark ? '#1e293b' : '#f8fafc', // Slate vs light gray
      text: isDark ? '#f1f5f9' : '#1e293b', // Light slate vs dark slate
      input: isDark ? '#000000' : '#0000000',
      cardBg: isDark ? '#334155' : '#f9fafb', // Darker slate vs light gray
      border: isDark ? '#475569' : '#e2e8f0', // Medium slate vs light border
      gradient: isDark ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #f9fafb 100%)',
    },
    toggleTheme,
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;
  }, [theme.colors]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};