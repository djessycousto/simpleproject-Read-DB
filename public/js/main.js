// footer

// date

const d = new Date();

let thisYear = d.getFullYear();
const date = document.querySelector(".footer-box .date");
date.textContent = `  ${thisYear} `;

//   <!-- nav -->

const toggleNav = document.querySelector(".toggle-menu");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// the height

toggleNav.addEventListener("click", () => {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// window.addEventListener("resize", () => {
//   // Recalculate and set the height if the navigation menu is open
//   if (linksContainer.style.height !== "0px") {
//     setLinksContainerHeight();
//   }
// });

// Close the menu when clicking outside the menu or toggle button
document.addEventListener("click", (event) => {
  const isClickInsideMenu = linksContainer.contains(event.target);
  // console.log(isClickInsideMenu);
  // console.log(event.target);
  const isClickOnToggleNav = toggleNav.contains(event.target);
  // console.log(isClickOnToggleNav);

  if (!isClickInsideMenu && !isClickOnToggleNav) {
    // Click outside the menu or toggle button, close the menu
    linksContainer.style.height = 0;
  }
});

// linksContainer.style.height = 0;

// <!-- ###### Section  numbers #####  -->

const numbs = [...document.querySelectorAll(".numb")];
// const updateCount

const updateCount = (element) => {
  let initialvalue = 0;
  // get dataset

  //   const value = parseInt(element.dataset.value); //
  const value = parseInt(element.dataset.value); //

  // #####  increment value ############

  const increment = Math.ceil(value / 1000);

  // setInterval

  const increaseCount = setInterval(() => {
    initialvalue += increment;

    if (initialvalue > value) {
      element.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    element.textContent = `${initialvalue}+`;
  }, 1);
};

numbs.forEach((numb) => {
  updateCount(numb);
});

//############ email  ################
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = {
    name: username.value,
    email: email.value,
    // subject: subject.value,
    message: message.value,
  };
  // console.log(formData);

  try {
    const response = await axios.post("/blogs/contact", formData);
    console.log(response.data);
    // Handle success, e.g., show a success message to the user
  } catch (error) {
    console.error("Error:", error);
    // Handle error, e.g., show an error message to the user
  }
});

// ############image page one ################

// function displayImages() {
//   const displayImage = dataFile
//     .map(function (data) {
//       return ` <div class="box-home-container-right section2-container-left ">

//       <div class="container-text-image-left">
//           <div class="image-box-home-right image-container-left">
//               <img src="./images/sct-2-1.jpg" alt="" class="img-home-2 img-sect2-left">
//           </div>
//           <div class="text-box-home-left">

//               <div class="vertical-text-left">
//                   <div></div>
//                   <h2>Place holder title</h2>

//               </div>
//               <div class="normal-text-left ">
//                   <h4>${data.title}</h4>
//                   <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. </p>
//                   <a href="">Cta line </a>

//               </div>
//           </div>
//       </div>
//   </div>

//   <!-- right -->

//   <div class="box-home-container-right section2-container-right ">

//       <div class="container-text-image-right">
//           <div class="image-box-home-right image-container-right">
//               <img src="./images/sct-2-2jpg.jpg" alt="" class="img-home-2 img-sect2-right">
//           </div>
//           <div class="text-box-home-right">

//               <div class="vertical-text-right">
//                   <div></div>
//                   <h2>Place holder title</h2>
//               </div>
//               <div class="normal-text-right ">
//                   <h4>${data.title}</h4>
//                   <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. </p>
//                   <a href="">Cta line </a>
//               </div>
//           </div>
//       </div>
//   </div>
// `;
//     })
//     .join("");

//   // console.log(domCenter);
//   const domCenter = document.querySelector(".section2-box-center");
//   domCenter.innerHTML = displayImage;
// }

// displayImages();

// function displayImages() {
//   const uniqueCombinations = new Set();

//   const displayImage = dataFile.reduce(function (value, data) {
//     const leftSection = `<div class="box-home-container-right section2-container-left ">
//     <div class="container-text-image-left">
//         <div class="image-box-home-right image-container-left">
//             <img src="${data.image}" alt="" class="img-home-2 img-sect2-left">
//         </div>
//         <div class="text-box-home-left">
//             <div class="vertical-text-left">
//                 <div></div>
//                 <h2>${data.bodyTitle}</h2>
//             </div>
//             <div class="normal-text-left ">
//                 <h4>${data.title}</h4>
//                 <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. </p>
//                 <a href="">Cta line </a>
//             </div>
//         </div>
//     </div>
//   </div>`;

//     // Right section
//     const rightSection = `<div class="box-home-container-right section2-container-right ">
//     <div class="container-text-image-right">
//         <div class="image-box-home-right image-container-right">
//             <img src="${data.image}" alt="" class="img-home-2 img-sect2-right">
//         </div>
//         <div class="text-box-home-right">
//             <div class="vertical-text-right">
//                 <div></div>
//                 <h2>${data.bodyTitle}</h2>
//             </div>
//             <div class="normal-text-right ">
//                 <h4>${data.title}</h4>
//                 <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. </p>
//                 <a href="">Cta line </a>
//             </div>
//         </div>
//     </div>
//   </div>`;

//     const combinationKey = `${data.image}_${data.bodyTitle}_${data.title}`;

//     if (!uniqueCombinations.has(combinationKey)) {
//       uniqueCombinations.add(combinationKey);

//       // Add either left or right section based on some condition (e.g., index, odd/even, etc.)
//       if (uniqueCombinations.size % 2 === 1) {
//         value.push(leftSection);
//       } else {
//         value.push(rightSection);
//       }
//     }

//     return value;
//   }, []);

//   const domCenter = document.querySelector(".section2-box-center");
//   domCenter.innerHTML = displayImage.join("");
// }
// displayImages();
