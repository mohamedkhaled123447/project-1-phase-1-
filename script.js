let allcourses;
let filter = "Pythoncourses";
fetch("http://myjson.dit.upm.es/api/bins/2hqw")
  .then((response) => response.json())
  .then((json) => {
    allcourses = json;
    viewCources(allcourses["Pythoncourses"],undefined);
  });
document.querySelector(".form-button").addEventListener("click", (event) => {
  event.preventDefault();
});
document.querySelector(".form-input").addEventListener("input", (event) => {
   document.querySelector(".cards").innerHTML="";
  viewCources(allcourses[filter],event);
});
let print = (input) => {
  filter = input;
  document.querySelector(".cards").innerHTML = "";
  viewCources(allcourses[input],undefined);
};
let viewCources = (courses,event) => {
  let cards = document.querySelector(".cards");
  for (let i = 0; i < courses.length; i++) {
    if(event!==undefined){
      let str = courses[i].title.toLowerCase();
      let substr = event.target.value.toLowerCase();
      if (str.includes(substr) === false) continue;
    }
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
};
