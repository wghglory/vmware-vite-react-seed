import {useTheme} from '@/core/context/ThemeContext';

import style from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useTheme(); // 'light' | 'dark'

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button
      className={`${style.themeToggle} ${theme === 'light' ? '' : style.themeToggleChecked}`}
      onClick={changeTheme}
    >
      <div className={style.themeToggleTrack}>
        <div className={style.themeToggleTrackCheck}>
          <span className={style.toggle}>🌜</span>
        </div>
        <div className={style.themeToggleTrackX}>
          <span className={style.toggle}>🌞</span>
        </div>
      </div>
      <div className={style.themeToggleThumb}></div>
      <input type="checkbox" aria-label="Dark mode toggle" className={style.themeToggleScreenReaderOnly} />
    </button>
  );
}
