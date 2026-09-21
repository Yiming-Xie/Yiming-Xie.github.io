(() => {
const preference = window.matchMedia('(prefers-color-scheme: dark)');
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (_) {}
const apply = (theme) => {
 document.documentElement.dataset.theme = theme;
 const button = document.getElementById('theme-toggle');
 if (button) { button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); button.setAttribute('aria-pressed', String(theme === 'dark')); }
};
apply(saved === 'dark' || saved === 'light' ? saved : (preference.matches ? 'dark' : 'light'));
document.addEventListener('DOMContentLoaded', () => {
 apply(document.documentElement.dataset.theme);
 document.getElementById('theme-toggle').addEventListener('click', () => {
  saved = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  apply(saved); try { localStorage.setItem('theme', saved); } catch (_) {}
 });
});
preference.addEventListener('change', () => { if (saved !== 'light' && saved !== 'dark') apply(preference.matches ? 'dark' : 'light'); });
})();
