const toggleMenu = () => document.body.classList.toggle("open");


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
var sec1 = document.getElementById("aboutSectionID");
var sec = document.getElementById("homeSection");
var sec2 = document.getElementById("servicesID");
var sec3= document.getElementById("my-skillsID");
var sec4 = document.getElementById("projectsID");

var hire_me_button = document.getElementById("hire_me");
var projects_button = document.getElementById("projects");

var skillsContainerID = document.getElementById("skills-containerID");

function showDiv() {
  s.style.display = (s.style.display == 'none') ? 'block' : 'block';
  
  sec2.style.opacity = "0.5";
  sec.style.opacity = "0.5";
  sec1.style.opacity = "0.5";
  sec3.style.opacity = "0.5";
  sec4.style.opacity = "0.5";

  hire_me_button.style.pointerEvents = "none";
  projects_button.style.pointerEvents = "none";
  hire_me_button.style.cursor = "not-allowed";
  projects_button.style.cursor = "not-allowed";

  skillsContainerID.style.cursor = "not-allowed";
  skillsContainerID.style.pointerEvents = "none";
}

//hide message box on click
var h = document.getElementById("closeDiv");

function hideDiv(){
  s.style.display = (s.style.display == 'block') ? 'none' : 'none';

  sec.style.opacity = "1";
  sec1.style.opacity = "1";
  sec2.style.opacity = "1";
  sec3.style.opacity = "1";
  sec4.style.opacity = "1";

  hire_me_button.style.pointerEvents = "auto";
  projects_button.style.pointerEvents = "auto";
  hire_me_button.style.cursor = "pointer";
  projects_button.style.cursor = "pointer";

  skillsContainerID.style.cursor = "auto";
  skillsContainerID.style.pointerEvents = "auto";
}

//input fields on focus events
var fname_input = document.getElementById("fname");
var email_input = document.getElementById("email");
var message_input = document.getElementById("message");
var subject_input = document.getElementById("subject");
function focusEvents(){
  fname_input.style.outline = "none";
  email_input.style.outline = "none";
  message_input.style.outline = "none";
  subject_input.style.outline = "none";
}

//clear button functions
var clear_button = document.getElementById("clear-message");
function clearEntries(){
  fname_input.value = "";
  email_input.value = "";
  message_input.value = "";
  subject_input.value = "";
}

clear_button.addEventListener("click", clearEntries);

// Prevent the default button behavior of clear button
clear_button.addEventListener("click", function(event) {
  event.preventDefault(); 
});

const textElement1 = document.getElementById("myText");
const texts1 = ['Software Engineer', 'Web Developer', 'Full-Stack Developer', 'Cloud Admninistrator', 'Security Analyst']; // Array of texts
let textIndex1 = 0; // Index of the current text
let charIndex1 = 0; // Index of the current character

function type1() {
  const currentText1 = texts1[textIndex1];
  if (charIndex1 < currentText1.length) {
    textElement1.textContent += currentText1.charAt(charIndex1);
    charIndex1++;
    setTimeout(type1, 100); // Typing speed (milliseconds)
  } else {
    setTimeout(erase1, 1000); // Delay before erasing (milliseconds)
  }
}

function erase1() {
  if (charIndex1 > 0) {
    const currentText1 = texts1[textIndex1];
    textElement1.textContent = currentText1.substring(0, charIndex1 - 1);
    charIndex1--;
    setTimeout(erase1, 50); // Erasing speed (milliseconds)
  } else {
    textIndex1 = (textIndex1 + 1) % texts1.length; // Move to the next text
    setTimeout(type1, 500); // Delay before typing next text (milliseconds)
  }
}

type1(); // Start typewriter effect

// JavaScript to handle scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
  });
});