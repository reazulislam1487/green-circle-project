import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); // default to light mode

  useEffect(() => {
    const theme = isDark ? "synthwave" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  return (
    <label className="swap swap-rotate cursor-pointer">
      {/* This hidden checkbox controls the state */}
      <input
        type="checkbox"
        onChange={() => setIsDark(!isDark)}
        checked={isDark}
      />

      {/* Sun icon (light mode) */}
      <svg
        className="swap-off h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71..." />
      </svg>

      {/* Moon icon (dark mode) */}
      <svg
        className="swap-on h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1..." />
      </svg>
    </label>
  );
}

export default ThemeToggle;
