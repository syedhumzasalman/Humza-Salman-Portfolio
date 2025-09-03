const products = [
  {
    img: "/images/reactecommerce.png",
    category: "React",
    name: "Shopfinity - E-Commerce Website",
    description: "A modern and fully responsive e-commerce platform built with React, featuring product browsing, category filtering, and a seamless shopping experience.",
    link: "https://shopfinity-online.netlify.app/",
  },
  {
    img: "/images/namaz-tracker.png",
    category: "JavaScript",
    name: "Namaz Tracking App",
    description: `A Namaz Tracking web app that allows users to log daily prayers, view completed, pending, Qaza, and missing Namaz records, and track progress over time. Built with JavaScript and Firebase, the app features real-time updates, Firestore integration, and a smooth user experience focused on spiritual accountability.`,
    link: "https://namaz-tracker.netlify.app/",
  },
  {
    img: "/images/reactgithubapi.png",
    category: "React",
    name: "GitHub API",
    description: "A React app that integrates with the GitHub API to fetch and display user profiles, including repositories, followers, and other details in a clean UI",
    link: "https://github-api-integration-react.netlify.app/",
  },
  {
    img: "/images/todo.png",
    category: "JavaScript",
    name: "ToDo Web App",
    description: `A simple and efficient ToDo web app where users can add, update, and delete tasks. Built using JavaScript and Firebase, it offers real-time data storage, user authentication, and a clean interface to help users stay organized and productive.`,
    link: "https://fire-base-todolist.netlify.app/",
  },
  {
    img: "/images/reacttodoapp.png",
    category: "React",
    name: "React To-Do App",
    description: "A simple yet efficient task management app built with React, allowing users to add, edit, and delete tasks with a clean and responsive interface.",
    link: "https://myreact-todo-web-app.netlify.app/",
  },
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


const btn = ["HTML & CSS", "JavaScript", "React"];

let BtnDisplay = document.querySelector("#BtnDisplay");
let cardDisplay = document.querySelector("#cardDisplay");

// Buttons render
btn.map((item, index) => {
  BtnDisplay.innerHTML += `
    <button class="btn btn-outline-primary me-2 mb-2" onclick="btnClick(${index})">
      ${item}
    </button>`;
});

// Card rendering
function displayCards(call) {
  cardDisplay.innerHTML = "";

  call.map((pro) => {
    cardDisplay.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm project-card">
          
          <!-- Image -->
          <div class="overflow-hidden" style="height: 180px; border-top-left-radius: 12px; border-top-right-radius: 12px;">
            <img src="${pro.img}" class="w-100 h-100 object-fit-cover card-img-top" alt="${pro.name}">
          </div>

          <!-- Body -->
          <div class="card-body p-3 d-flex flex-column">
            <span class="badge bg-light text-primary fw-semibold mb-2" style="font-size: 0.75rem;">
              ${pro.category}
            </span>

            <h5 class="card-title fw-bold mb-2" style="font-size: 1.05rem;">${pro.name}</h5>

            <p class="card-text text-muted flex-grow-1" style="
              font-size: 0.85rem;
              line-height: 1.4;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;">
              ${pro.description}
            </p>

            <div class="d-flex justify-content-between align-items-center mt-3">
              <a href="${pro.link}" target="_blank" class="btn btn-sm btn-primary px-3" style="border-radius: 20px;">
                View Project
              </a>
              <i class="bi bi-box-arrow-up-right text-muted"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

// Default display
function allCategory() {
  displayCards(products);
}

// Filtered display
function btnClick(index) {
  if (btn[index] === "All") {
    displayCards(products);
    return;
  }
  let filterPro = products.filter((item) => item.category === btn[index]);
  displayCards(filterPro);
}

// styles
const style = document.createElement("style");
style.textContent = `
.project-card {
  border-radius: 12px;
  transition: all 0.3s ease;
}
.project-card img {
  transition: transform 0.4s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.12) !important;
}
.project-card:hover img {
  transform: scale(1.08);
}
`;
document.head.appendChild(style);