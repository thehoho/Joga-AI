document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('.section-animate');

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.92;
    animatedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < trigger) {
        section.classList.add('visible');
        // Animate feature cards
        if (section.classList.contains('features-section')) {
          const cards = section.querySelectorAll('.feature-card');
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 120);
          });
        }
        // Animate how steps
        if (section.classList.contains('how-it-works')) {
          const steps = section.querySelectorAll('.how-step');
          steps.forEach((step, i) => {
            setTimeout(() => step.classList.add('visible'), i * 180);
          });
        }
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});