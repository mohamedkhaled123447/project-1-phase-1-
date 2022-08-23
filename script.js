let allcourses;
let filter="Pythoncourses";
fetch("http://myjson.dit.upm.es/api/bins/2hqw")
  .then((response) => response.json())
  .then((json) => {
    allcourses = json;
    let courses = allcourses["Pythoncourses"];
    for (let i = 0; i < courses.length; i++) {
      let div = document.createElement("div");
      div.className = "card";
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
      document.querySelector(".cards").appendChild(div);
    }
  });
document.querySelector(".form-button").addEventListener("click", (event) => {
  event.preventDefault();
});
document.querySelector(".form-input").addEventListener("input", (event) => {
  let cards = document.querySelector(".cards");
  cards.innerHTML = "";
  let courses = allcourses[filter];
  for (let i = 0; i < courses.length; i++) {
    let str = courses[i].title.toLowerCase();
    let substr = event.target.value.toLowerCase();
    if (str.includes(substr) === false) continue;
    let div = document.createElement("div");
    div.className = "card";
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
});
let print = (input) => {
  filter=input;
  let cards = document.querySelector(".cards");
  cards.innerHTML = "";
  let courses = allcourses[input];
  for (let i = 0; i < courses.length; i++) {
    let div = document.createElement("div");
    div.className = "card";
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
    document.querySelector(".cards").appendChild(div);
  }
};
