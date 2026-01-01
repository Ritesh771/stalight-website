// Theme enhancements: reveal animations + marquee pause

function initReveal() {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  } as IntersectionObserverInit;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => observer.observe(el));
}

function initMarqueePause() {
  const marquees = document.querySelectorAll('.animate-marquee');
  marquees.forEach((m) => {
    m.addEventListener('mouseenter', () => {
      // Pause by setting animationPlayState
      (m as HTMLElement).style.animationPlayState = 'paused';
    });
    m.addEventListener('mouseleave', () => {
      (m as HTMLElement).style.animationPlayState = 'running';
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initMarqueePause();
  });
} else {
  initReveal();
  initMarqueePause();
}

export {};
