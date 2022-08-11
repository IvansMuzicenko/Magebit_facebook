import { getRandomDesc, getRandomName, getRandomImg } from "./api.js";

const openMenu = function (evt) {
  document
    .querySelector(".navbar__general")
    .classList.toggle("navbar__general--show");
};
const closeMenu = function (evt) {
  document
    .querySelector(".navbar__general")
    .classList.remove("navbar__general--show");
};

setTimeout(() => {
  document.querySelector(".show").classList.add("hide");
  document.querySelector(".show").classList.remove("show");
  document.querySelector(".hide").classList.remove("hide");
  document.querySelector(".hide").classList.add("hide");
}, 3000);

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        createPost();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  }
);

const createPost = async function () {
  const area = document.querySelector(".posts");
  const template = document.querySelector(".posts__post");

  const newPost = document.createElement("div");
  newPost.innerHTML = template.innerHTML;
  newPost.classList.add("posts__post");

  newPost.querySelector(".posts__post__info__author__name").textContent =
    await getRandomName();

  newPost.querySelector(".posts__post__info__desc").textContent =
    await getRandomDesc();
  newPost.querySelector(".posts__post__images__image").src =
    await getRandomImg();

  area.append(newPost);
  const lastPost = document.querySelector(".posts").lastChild;
  observer.observe(lastPost);
};
createPost();
