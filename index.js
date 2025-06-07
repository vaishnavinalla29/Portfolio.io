function toggleTheme() {
  const root = document.documentElement;
  const current = getComputedStyle(root).getPropertyValue('--bg-color').trim();

  if (current === '#ffffff') {
    root.style.setProperty('--bg-color', '#0f0f0f');
    root.style.setProperty('--text-color', '#ffffff');
  } else {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
  }
}
 