const whatsappNumber = '5514996308553';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  const message = link.dataset.whatsapp;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});

document.querySelectorAll('[data-service]').forEach((link) => {
  const service = link.dataset.service;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, James! Gostaria de agendar o serviço: ${service}.`)}`;
});

const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('maison-theme');
if (savedTheme === 'light' || savedTheme === 'dark') document.documentElement.dataset.theme = savedTheme;
const updateThemeToggle = () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', `Ativar tema ${isDark ? 'claro' : 'escuro'}`);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.innerHTML = `<span aria-hidden="true">${isDark ? '☼' : '☾'}</span> Tema ${isDark ? 'claro' : 'escuro'}`;
};
updateThemeToggle();
themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('maison-theme', nextTheme);
  updateThemeToggle();
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const galleryImages = [
  { src: 'img/galeria2.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galeria3.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galeria4.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galkeria5.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galeria7.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galeria8.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galeria10.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galeria12.jpeg', alt: 'Corte de cabelo' },
  { src: 'img/galeria13.jpeg', alt: 'Corte de cabelo' },
];
let currentImage = 0;
const image = document.querySelector('#gallery-image');
const count = document.querySelector('#gallery-count');
const dots = document.querySelector('#gallery-dots');
const renderGallery = () => {
  const item = galleryImages[currentImage];
  image.src = item.src;
  image.alt = item.alt;
  count.textContent = `${String(currentImage + 1).padStart(2, '0')} / ${String(galleryImages.length).padStart(2, '0')}`;
  dots.querySelectorAll('button').forEach((dot, index) => dot.classList.toggle('active', index === currentImage));
};
galleryImages.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Ir para imagem ${index + 1}`);
  dot.addEventListener('click', () => { currentImage = index; renderGallery(); });
  dots.append(dot);
});
document.querySelector('.prev').addEventListener('click', () => { currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length; renderGallery(); });
document.querySelector('.next').addEventListener('click', () => { currentImage = (currentImage + 1) % galleryImages.length; renderGallery(); });
let touchStart = 0;
document.querySelector('.carousel-stage').addEventListener('touchstart', (event) => { touchStart = event.changedTouches[0].screenX; }, { passive: true });
document.querySelector('.carousel-stage').addEventListener('touchend', (event) => {
  const delta = event.changedTouches[0].screenX - touchStart;
  if (Math.abs(delta) > 40) document.querySelector(delta > 0 ? '.prev' : '.next').click();
});
renderGallery();

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeLightbox = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); };
document.querySelector('.expand-button').addEventListener('click', () => {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
});
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });