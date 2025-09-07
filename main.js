const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');


burger.addEventListener('click', (e) => {
e.stopPropagation();
mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});


document.addEventListener('click', (e) => {
if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
mobileMenu.style.display = 'none';
}
});
//////////////////////////////////////////////////////////
document.querySelectorAll('.business-item').forEach(item => {
  const btn = item.querySelector('.btn-item');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
///////////////////////////////////////////////////////////////////

const popup = document.querySelector('.svg-inner-box');
const svg = document.querySelector('.business-svg');

function showPopup() {
  popup.classList.add('active');
  setTimeout(() => {
    popup.classList.remove('active');
  }, 4000); // зникне через 4 секунди
}

//При завантаженні сторінки
window.addEventListener('load', () => {
  showPopup();

   //повторювати кожні 10 секунд
  setInterval(showPopup, 10000);
});

// При кліку на SVG
svg.addEventListener('click', showPopup);
////////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // щоб анімація запускалась лише раз
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
////////////////////////////////

// Анімація при скролі
const section = document.querySelector('.produktiv');
window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add('show');
  }
});

// Лічильник
function animateCounter(el, target) {
  let current = 0;
  const step = target / 100; // швидкість
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(current);
  }, 20);
}

document.addEventListener("DOMContentLoaded", () => {
  animateCounter(document.querySelector(".new-span"), 228);
  animateCounter(document.querySelector(".rate-span"), 135); // 1.35 → 135 (можна потім поділити на 100)
});
//////////////////////////////////////////////
document.querySelectorAll('.btn-item').forEach(btn => {
  const icon = btn.querySelector('.icon');

  btn.addEventListener('click', () => {
    if (icon.textContent === "+") {
      icon.textContent = "×"; // міняємо на хрестик
    } else {
      icon.textContent = "+"; // міняємо назад на плюс
    }
  });
});


////////////////////////////////////////////////////////////////////


