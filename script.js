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

// setTimeout(() => {
//   document.querySelector(".show").classList.add("hide");
//   document.querySelector(".show").classList.remove("show");
//   document.querySelector(".hide").classList.remove("hide");
//   document.querySelector(".hide").classList.add("hide");
// }, 1000);

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        createPost();
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }
);

const createPost = async function () {
  const area = document.querySelector(".posts");
  const template = document.querySelector(".posts__post");
  const skeleton = document.querySelector(".skeleton");
  const newSkelet = document.createElement("div");

  newSkelet.classList.add("posts__post");
  newSkelet.classList.add("skeleton");
  newSkelet.innerHTML = skeleton.innerHTML;

  area.append(newSkelet);

  const newPost = document.createElement("div");
  newPost.innerHTML = template.innerHTML;
  newPost.classList.add("posts__post");

  newPost.querySelector(".posts__post__info__author__name").textContent =
    await getRandomName();

  newPost.querySelector(".posts__post__info__desc").textContent =
    await getRandomDesc();
  newPost.querySelector(".posts__post__images__image").src =
    await getRandomImg();

  const image = newPost.querySelector(".posts__post__images__image");

  image.onload = function () {
    newSkelet.remove();
  };
  area.append(newPost);
  const lastPost = document.querySelector(".posts").lastChild;
  observer.observe(lastPost);
};
createPost();
