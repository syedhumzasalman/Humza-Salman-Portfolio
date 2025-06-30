
const nameArr = [
  `I'm SYED HUMZA SALMAN`,
  `I'm a Frontend Developer`,
  `I build modern websites using JavaScript`,
  "Creating responsive & user-friendly UIs",

];

const textDisplay = document.getElementById("textDisplay");
let currentIndex = 0;

function renderNextLine() {
  textDisplay.textContent = ""; // Clear previous
  let line = nameArr[currentIndex];
  let charIndex = 0;

  const typing = setInterval(() => {
    if (charIndex < line.length) {
      textDisplay.textContent += line[charIndex];
      charIndex++;
    } else {
      clearInterval(typing);
      // Wait 2 seconds, then render the next line
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % nameArr.length;
        renderNextLine();
      }, 2000);
    }
  }, 50); // typing speed
}

// Start the animation
renderNextLine();