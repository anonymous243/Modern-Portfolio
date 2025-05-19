const typingElement = document.getElementById('typing');
const roles = [
  "Civil Engineer",
  "Power BI Analyst",
  "Excel Expert",
  "Interior Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = roles[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingElement.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();
