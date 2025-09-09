document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const mobileServicesButton = document.getElementById('mobile-services-button');
  const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
  const mobileServicesArrow = document.getElementById('mobile-services-arrow');

  const desktopServicesButton = document.getElementById('desktop-services-button');
  const desktopServicesDropdown = document.getElementById('desktop-services-dropdown');
  const desktopServicesArrow = document.getElementById('desktop-services-arrow');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Close dropdown when mobile menu is toggled
    mobileServicesDropdown.classList.add('hidden');
    mobileServicesArrow.classList.remove('rotate-180');
  });

  mobileServicesButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileServicesDropdown.classList.toggle('hidden');
    mobileServicesArrow.classList.toggle('rotate-180');
  });

  desktopServicesButton.addEventListener('click', (e) => {
    e.preventDefault();
    desktopServicesDropdown.classList.toggle('hidden');
    desktopServicesArrow.classList.toggle('rotate-180');
  });

  // Close dropdowns when clicking outside
  window.addEventListener('click', (e) => {
    if (!mobileServicesButton.contains(e.target) && !mobileServicesDropdown.contains(e.target)) {
      mobileServicesDropdown.classList.add('hidden');
      mobileServicesArrow.classList.remove('rotate-180');
    }
    if (!desktopServicesButton.contains(e.target) && !desktopServicesDropdown.contains(e.target)) {
      desktopServicesDropdown.classList.add('hidden');
      desktopServicesArrow.classList.remove('rotate-180');
    }
  });

  const parallaxImage = document.querySelector('.parallax-bg');

  if (parallaxImage) {
    const parallaxFactor = 1; // Altere este valor para controlar a intensidade do efeito

    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX - window.innerWidth / 2) * parallaxFactor;
      const y = (e.clientY - window.innerHeight / 2) * parallaxFactor;
      
      parallaxImage.style.transform = `translate(-${x}px, -${y}px) translateZ(0)`;
    });
  }

  // Nova lógica do Parallax para corrigir o espaço vazio
  const parallaxBg = document.getElementById('background-image');
  
  if (window.innerWidth >= 640 && parallaxBg) {
    const parallaxFactor = 0.03; // Ajuste este valor para controlar a intensidade do efeito

    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX - window.innerWidth / 2) * parallaxFactor;
      const y = (e.clientY - window.innerHeight / 2) * parallaxFactor;
      
      // Aplicamos o transform ao elemento, movendo-o dentro do seu contêiner maior
      parallaxBg.style.transform = ` translate(${x}px, ${y}px)`;
    });
  }
});