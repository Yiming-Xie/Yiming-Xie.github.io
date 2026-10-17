(() => {
  const counter = document.querySelector('.visitor-counter');
  if (!counter) return;
  // Only count the canonical public site, never localhost or preview deployments.
  const site = new URL(counter.dataset.siteUrl);
  if (window.location.hostname !== site.hostname) {
    counter.title = 'Visitor statistics are available on the live site.';
    return;
  }
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  // Keep the footer quiet if the external statistics service is unavailable.
  script.addEventListener('error', () => { counter.hidden = true; });
  document.head.appendChild(script);
})();
