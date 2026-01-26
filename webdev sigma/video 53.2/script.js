/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("nav-dark");
  } else {
    nav.classList.remove("nav-dark");
  }
});


/* =========================
   FAQ ACCORDION
========================= */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach(i => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});


/* =========================
   EMAIL VALIDATION
========================= */
const emailInput = document.querySelector(".hero-form input");
const startBtn = document.querySelector(".hero-form button");

if (emailInput && startBtn) {
  startBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
    } else {
      alert("Welcome! This is a Netflix clone 😄");
      emailInput.value = "";
    }
  });
}


/* =========================
   HOVER EFFECT (DESKTOP ONLY)
========================= */
const cards = document.querySelectorAll(".card");

if (window.innerWidth > 768) {
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });
}


/* =========================
   SAFE LOG (DEBUG)
========================= */
console.log("Netflix clone JS loaded ✔");
