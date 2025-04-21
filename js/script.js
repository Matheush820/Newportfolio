// Animação das seções ao rolar
const sections = document.querySelectorAll('.section');

const checkSections = () => {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top + scrollY;
    const sectionHeight = section.offsetHeight;

    if (scrollY + windowHeight > sectionTop + 100 && scrollY < sectionTop + sectionHeight) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
};

// Inicializar animação nas seções ao rolar
window.addEventListener('scroll', checkSections);

// Inicializar animação das seções na carga da página
window.addEventListener('load', checkSections);

// Menu de navegação - rolar suavemente para as seções
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth',
    });
  });
});

// Efeito de animação de ícones ao passar o mouse
const skillIcons = document.querySelectorAll('.icon');

skillIcons.forEach(icon => {
  icon.addEventListener('mouseover', function () {
    icon.classList.add('icon-hover');
  });

  icon.addEventListener('mouseout', function () {
    icon.classList.remove('icon-hover');
  });
});

// Animação de elementos com class "hidden" ao entrar na viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
      }
    });
  }, {
    threshold: 0.15
  });
  

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));



