(function () {
  'use strict';
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (!burger || !mobileNav) return;

  function setOpen(open) {
    mobileNav.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    mobileNav.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  }

  burger.addEventListener('click', () => setOpen(!mobileNav.classList.contains('open')));
  if (backdrop) backdrop.addEventListener('click', () => setOpen(false));
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
})();
