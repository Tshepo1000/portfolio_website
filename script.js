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

//show message box on click
var s = document.getElementById("messageDivID");
var sec = document.getElementById("homeSection");
var hire_me_button = document.getElementById("hire_me");
var projects_button = document.getElementById("projects");

function showDiv() {
  s.style.display = (s.style.display == 'none') ? 'block' : 'block';
  sec.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.3)50%, rgba(0, 0, 0, 0.3)50%)";
  sec.style.opacity = "0.5";
  hire_me_button.style.pointerEvents = "none";
  projects_button.style.pointerEvents = "none";
  hire_me_button.style.cursor = "not-allowed";
  projects_button.style.cursor = "not-allowed";
}

//hide message box on click
var h = document.getElementById("closeDiv");

function hideDiv(){
  s.style.display = (s.style.display == 'block') ? 'none' : 'none';
  sec.style.background = "white";
  sec.style.opacity = "1";
  hire_me_button.style.pointerEvents = "auto";
  projects_button.style.pointerEvents = "auto";
  hire_me_button.style.cursor = "pointer";
  projects_button.style.cursor = "pointer";
}

//input fields on focus events
var fname_input = document.getElementById("fname");
function focusEvents(){
  fname_input.style.border = "none";
  fname_input.style.borderBottom = "2px solid black";
}