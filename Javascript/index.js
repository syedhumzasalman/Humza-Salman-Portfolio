
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



function showQuote() {
  Swal.fire({
    title: '',
    text: "You can view this on mobile as well",
    imageUrl: '/images/qr-code.png',
    imageWidth: 500,
    imageHeight: 350,
    imageAlt: 'Qari Quote Image',
    background: '#fefefe',
    color: '#1a1a1a',
    confirmButtonColor: '#3085d6'
  });
}