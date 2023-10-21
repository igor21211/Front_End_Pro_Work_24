const image = document.querySelector(".image");
const btnRandom = document.querySelector(".btn--random");

const randomPicture = () => {
  let index = Math.trunc(Math.random() * 10 + 1);
  image.src = `img/mounth-${index}.jpg`;
};

btnRandom.addEventListener("click", randomPicture);
