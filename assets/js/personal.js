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

// Keep the single-page navigation in sync with the section being read.
document.addEventListener('DOMContentLoaded', () => {
  const sections = [...document.querySelectorAll('.home > section[id]')];
  if (!sections.length) return;
  const links = [...document.querySelectorAll('.nav-link')];
  let queued = false;
  const update = () => {
    const threshold = document.querySelector('.site-header').offsetHeight + 60;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1].id;
    }
    for (const link of links) {
      const active = link.hash === '#' + current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    queued = false;
  };
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
});
