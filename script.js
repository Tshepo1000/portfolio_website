var i = 0;
var txt = 'Hello World';
var speed = 100;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greet").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

const textElement = document.getElementById('text');
const texts = ['Software Engineer', 'Web Developer', 'Full-Stack Developer', 'Cloud Admninistrator', 'Security Analyst']; // Array of texts
let textIndex = 0; // Index of the current text
let charIndex = 0; // Index of the current character

function type() {
  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    textElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Typing speed (milliseconds)
  } else {
    setTimeout(erase, 1000); // Delay before erasing (milliseconds)
  }
}

function erase() {
  if (charIndex > 0) {
    const currentText = texts[textIndex];
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Erasing speed (milliseconds)
  } else {
    textIndex = (textIndex + 1) % texts.length; // Move to the next text
    setTimeout(type, 500); // Delay before typing next text (milliseconds)
  }
}

type(); // Start typewriter effect