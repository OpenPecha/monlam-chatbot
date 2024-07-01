function ThemeSwitch() {
  function handleThemeSwitch() {
    const stylesheet = document.getElementById("stylesheet");
    // const darkModeIcon = document.getElementById('dark-mode-icon');

    if (stylesheet?.getAttribute("href") === "stylesdark.css") {
      stylesheet.setAttribute("href", "styles.css");
      // darkModeIcon.style.display = 'block';
      // lightModeIcon.style.display = 'none';
    } else {
      stylesheet?.setAttribute("href", "stylesdark.css");
      // darkModeIcon.style.display = 'none';
      // lightModeIcon.style.display = 'block';
    }
  }

  return (
    <button id="switch-style" onClick={handleThemeSwitch}>
      <img
        id="light-mode-icon"
        src="icons/moon.png"
        alt="Light Mode"
        style={{ position: "relative", top: 2, width: 30 }}
      />
    </button>
  );
}

export default ThemeSwitch;
