let allcourses;
let filter = "Pythoncourses";
fetch("https://api.npoint.io/830705350ef9c9f8e2d0")
  .then((response) => response.json())
  .then((json) => {
    allcourses = json;
    viewCources(allcourses["Pythoncourses"], undefined);
  });
document.querySelector(".form-button").addEventListener("click", (event) => {
  event.preventDefault();
});
document.querySelector(".form-input").addEventListener("input", (event) => {
  document.querySelector(".swiper-wrapper").innerHTML = "";
  viewCources(allcourses[filter], event);
});
let print = (input) => {
  filter = input;
  document.querySelector(".swiper-wrapper").innerHTML = "";
  viewCources(allcourses[input], undefined);
};
let viewCources = (courses, event) => {
  let cards = document.querySelector(".swiper-wrapper");
  for (let i = 0; i < courses.length; i++) {
    if (event !== undefined) {
      let str = courses[i].title.toLowerCase();
      let substr = event.target.value.toLowerCase();
      if (str.includes(substr) === false) continue;
    }
    let div = document.createElement("div");
    div.classList.add("swiper-slide", "card");
    let image = document.createElement("img");
    let a = document.createElement("a");
    let author_span = document.createElement("span");
    let price_span = document.createElement("span");
    author_span.className = "author";
    price_span.className = "price";
    author_span.appendChild(document.createTextNode(courses[i].author));
    price_span.innerHTML = "&#69;&#163;";
    price_span.appendChild(document.createTextNode(courses[i].price));
    image.src = courses[i].image;
    a.href = courses[i].link;
    a.appendChild(image);
    a.appendChild(document.createTextNode(courses[i].title));
    a.appendChild(author_span);
    a.appendChild(price_span);
    div.append(a);
    cards.appendChild(div);
  }
};

// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
      slidesPerGroup: 4,
    }
  },
});
