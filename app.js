const btn = document.querySelector("#button");
const canvas = document.querySelector("#canvas");


const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
  //returns color
};

btn.addEventListener("click", colorChange);


function colorChange(){
  // document.style.background = randomColor();
  canvas.style.background = randomColor();
}