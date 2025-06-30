const products = [
    {
        img: "/images/student portal.png",
        category: "JavaScript",
        name: "Skillshelf Student Portal",
        description: `A student portal web app where users can log in, enroll in courses, track attendance, and view assignments. Built with JavaScript and Firebase, this project gave me hands-on experience with dynamic content rendering and backend integration.`,
        link: "https://skillshelf.netlify.app/",
    },
    {
        img: "/images/HACKATHON.png",
        category: "HTML & CSS",
        name: "SMIT HACKATHON (HTML & CSS)",
        description: `I participated in the SMIT HTML & CSS Hackathon where I showcased my skills in creating responsive layouts and clean user interfaces. It was a great opportunity to apply my HTML and CSS knowledge in a competitive setting.`,
        link: "https://syedhumzasalman.github.io/SMIT-Hackathon/",
    },
    {
        img: "/images/Quiz app.png",
        category: "JavaScript",
        name: "Quiz App",
        description: `An interactive quiz application with timed questions, score tracking, and instant feedback. It was developed to practice JavaScript functions, event listeners, and array handling.`,
        link: "https://smit-quizz.netlify.app/",
    },
    {
        img: "/images/Firebase Authentication.png",
        category: "JavaScript",
        name: "Firebase Authentication App",
        description: `This project uses Firebase Authentication to register, login, and logout users securely. It helped me learn user management, auth state changes, and real-time form validation.`,
        link: "https://firebase-first-assignment.netlify.app/",
    },
    {
        img: "/images/Product Rendering.png",
        category: "JavaScript",
        name: "Product Rendering",
        description: `This project demonstrates dynamic product rendering using JavaScript. It fetches and displays product data in real time, helping me understand DOM manipulation and data-driven UI creation.`,
        link: "https://smit-store.netlify.app/",
    },
    {
        img: "/images/Github-api.png",
        category: "JavaScript",
        name: "GitHub API Integration",
        description: `This project integrates the GitHub API to fetch and display user profiles and repositories. It improved my skills in using APIs, handling JSON data, and updating the UI dynamically.`,
        link: "https://github-api-pro.netlify.app/",
    },
    {
        img: "/images/Weather ForeCast.png",
        category: "JavaScript",
        name: "Weather Forecast App",
        description: `A real-time weather app built using a public weather API. Users can search for any city to get temperature, humidity, and weather conditions. This project helped me understand API integration and asynchronous JavaScript.`,
        link: "https://weather-web-app-smit.netlify.app/",
    },
    {
        img: "/images/post app.png",
        category: "JavaScript",
        name: "JS Connect - Post App",
        description: `This app allows users to post and view messages in a dynamic feed. It was created to practice event handling, DOM updates, and local data storage using JavaScript.`,
        link: "https://js-connect.netlify.app/",
    },
    {
        img: "/images/admin panel.png",
        category: "JavaScript",
        name: "Restaurant Admin Panel",
        description: `A custom admin panel for managing restaurant orders, menu items, and categories. This project strengthened my understanding of modular code structure and CRUD operations using JavaScript.`,
        link: "https://resturant-admin-panel.netlify.app/",
    },
    {
        img: "/images/News app.png",
        category: "JavaScript",
        name: "News App",
        description: `A JavaScript-powered news application that fetches and displays top headlines using a news API. It features category filters and a responsive layout, ideal for learning data fetching and rendering lists.`,
        link: "https://news-app-team-h-a-s-f.netlify.app/",
    },
    {
        img: "/images/check blodd.png",
        category: "JavaScript",
        name: "Check Your Blood Type",
        description: `An interactive app where users can input blood donor and recipient types to check compatibility. This project helped me apply conditional logic and form handling in JavaScript.`,
        link: "https://check-blood-type.netlify.app/",
    },
    {
        img: "/images/password generator.png",
        category: "JavaScript",
        name: "Password Generator",
        description: `This app generates secure, random passwords based on user-selected criteria like length and character type. It was built to explore string methods and randomization in JavaScript.`,
        link: "https://generate-easy-passwords.netlify.app/",
    },
    {
        img: "/images/car website.png",
        category: "JavaScript",
        name: "Car Website",
        description: `A car-themed website that showcases different vehicle models with images, specs, and pricing. The site uses JavaScript for navigation and interactivity.`,
        link: "https://humza-autos.netlify.app/",
    },
    {
        img: "/images/fughting game.png",
        category: "JavaScript",
        name: "Street Warriors - Fighting Game",
        description: `A 2D JavaScript fighting game where players choose characters and engage in street battles. This fun project deepened my understanding of animation, game logic, and canvas rendering.`,
        link: "https://street-warriors-karachi.netlify.app/",
    },
    {
        img: "/images/Enviromental.png",
        category: "HTML & CSS",
        name: "Enviromental Protection Protocol",
        description: `This project highlights key environmental issues through a simple and clean UI built with HTML and CSS. It focuses on climate change, pollution, and conservation efforts in a visually informative layout.`,
        link: "https://environmental-protection-protocol.netlify.app/",
    },
    {
        img: "/images/Foodpanda.png",
        category: "HTML & CSS",
        name: "Foodpanda Home Page UI Clone",
        description: `This is a front page clone of the Foodpanda website built using HTML and CSS. The project helped me understand real-world layout structures and enhanced my UI/UX implementation skills.`,
        link: "https://foodpanda-assignment.netlify.app/",
    },
    {
        img: "/images/NASA.png",
        category: "HTML & CSS",
        name: "NASA Home Page UI Clone",
        description: `A UI clone of the official NASA homepage designed with HTML and CSS. This project strengthened my frontend development skills by focusing on structured layout and responsive design techniques.`,
        link: "https://nasa-assignment.netlify.app/",
    },
    {
        img: "/images/Protonic.png",
        category: "HTML & CSS",
        name: "Protonic Home Page UI Clone",
        description: `This is a clone of the Protonic homepage created to replicate their clean and modern layout using HTML and CSS. The design emphasizes responsive components and consistent branding.`,
        link: "https://portronics.netlify.app/",
    },
    {
        img: "/images/FigmaDesign1.png",
        category: "HTML & CSS",
        name: "Figma design 01",
        description: `I translated a Figma UI design into code using HTML and CSS. This project improved my ability to convert design files into fully functional web pages while maintaining design accuracy.`,
        link: "https://smit-assignment-six.netlify.app/",
    },
    {
        img: "/images/FigmaDesign2.png",
        category: "HTML & CSS",
        name: "Figma design 02",
        description: `A pixel-perfect HTML and CSS conversion of a Figma design prototype. It helped me strengthen my attention to detail and layout precision when working from UI design tools.`,
        link: "https://smit-assignment-5.netlify.app/",
    },
    {
        img: "/images/FigmaDesign3.png",
        category: "HTML & CSS",
        name: "Figma designs 03",
        description: `This project involved recreating a complex UI from a Figma mockup using only HTML and CSS. It tested my skills in layout structuring, typography, and component-based design.`,
        link: "https://figmadesign-assignment.netlify.app/",
    },

];



document.addEventListener("DOMContentLoaded", function () {
    allCategory()
})


const btn = ["HTML & CSS", "JavaScript",];

let BtnDisplay = document.querySelector("#BtnDisplay");
let cardDisplay = document.querySelector("#cardDisplay");

btn.map((item, index) => {

    // console.log(item);
    BtnDisplay.innerHTML += `<button class="btn btn-primary" onclick="btnCick(${index})"> ${item} </button>`;
});

function displayCards(call) {
    cardDisplay.innerHTML = "";

    call.map((pro) => {
        cardDisplay.innerHTML += `
<div class="col-md-4 mb-4">
  <div class="card h-100 border-0 shadow-sm overflow-hidden" style="
    border-radius: 12px;
    transition: all 0.3s ease;
  ">
    <!-- Image with hover zoom -->
    <div class="overflow-hidden" style="height: 160px;">
      <img src="${pro.img}" class="w-100 h-100 object-fit-cover card-img-top" alt="${pro.name}" 
           style="transition: transform 0.5s ease;">
    </div>
    
    <!-- Card Body -->
    <div class="card-body p-3">
      <!-- Category ribbon -->
      <div class="d-flex justify-content-between align-items-start mb-2">
        <span class="badge rounded-pill py-2 px-3" style="
          background-color: #f0f7ff;
          color: #3a86ff;
          font-size: 0.7rem;
          font-weight: 600;
        ">
          ${pro.category}
        </span>
        <i class="bi bi-box-arrow-up-right text-muted"></i>
      </div>
      
      <!-- Title -->
      <h5 class="card-title fw-bold mb-2" style="font-size: 1rem;">${pro.name}</h5>
      
      <!-- Description (truncated) -->
      <p class="card-text text-muted mb-3" style="
        font-size: 0.8rem;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      ">
        ${pro.description}
      </p>
      
      <!-- Footer with button -->
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-1">
          <span class="badge bg-light text-dark border" style="font-size: 0.6rem;">${pro.category}</span>
          <span class="badge bg-light text-dark border" style="font-size: 0.6rem;"></span>
        </div>
        <a href="${pro.link}" target="_blank" class="btn btn-sm btn-primary py-1 px-3" style="
          font-size: 0.75rem;
          border-radius: 20px;
        ">
          View Project
        </a>
      </div>
    </div>
    
    <!-- Hover overlay -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-10" 
         style="opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"></div>
  </div>
</div>
`;

        // Add hover effects
        const style = document.createElement('style');
        style.textContent = `
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}
.card:hover img {
  transform: scale(1.05);
}
.card:hover .bg-opacity-10 {
  opacity: 1 !important;
}
`;
        document.head.appendChild(style);
    });
}

function allCategory() {
    displayCards(products);
}

function btnCick(index) {
    //  console.log(btn[index]);

    let filterPro = products.filter((item) => {
        // console.log(item.category);
        return item.category === btn[index];
    });
    //  console.log(filterPro);

    displayCards(filterPro);
}