const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};

button.addEventListener('click', () => {
  let hexColor = '#';
  const hexColorLength = 6;

  for(i=0; i<hexColorLength; i++) {
    const randomNumber = getRandomNumber(hex.length);
    hexColor += hex[randomNumber];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});