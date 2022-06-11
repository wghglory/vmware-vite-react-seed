import {createContext, useCallback, useContext, useState} from 'react';

export type Theme = 'light' | 'dark';

export const defaultTheme = (localStorage.getItem('cds-theme') === 'dark' ? 'dark' : 'light') as Theme;

const ThemeContext = createContext<[theme: Theme, setTheme: (t: Theme) => void]>(['light', t => void 0]);
ThemeContext.displayName = 'ThemeContext';

function ThemeProvider(props: any) {
  const [theme, setThemeState] = useState(() => defaultTheme);
  updateDOM(theme);

  const setTheme = useCallback(
    (t: Theme) => {
      // 1. localStorage and update theme state
      localStorage.setItem('cds-theme', t);
      setThemeState(t);

      // update theme by interacting with DOM
      updateDOM(t);
    },
    [setThemeState],
  );

  function updateDOM(t: Theme) {
    // 3. Clarity update theme body attribute
    document.body.setAttribute('cds-theme', t);

    // 4. tailwind
    setTailwindTheme(t);
  }

  const value = [theme, setTheme];

  return <ThemeContext.Provider value={value} {...props} />;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
}

// https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
function setTailwindTheme(theme: Theme) {
  if (
    theme === 'dark'
    // || (!('cds-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export {ThemeProvider, useTheme};
