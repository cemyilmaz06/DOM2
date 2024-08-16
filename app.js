const bgDiv = document.querySelector(".bgDiv");
const colorDiv = document.querySelector(".colorDiv");
const copy = document.getElementById("copy");
const colorInput = document.getElementById("colorInput");
const colorText = document.getElementById("colorText");
const btnClick = document.querySelector(".btn-click");
const btnOver = document.querySelector(".btn-over");

btnClick.addEventListener("click", () => {
  getRandomColor();
  setRandomColor();

  function getRandomColor() {
    // Renk kodu üretmek için rastgele bir sayı oluşturulur
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor() {
    const colorInput = document.getElementById("colorInput");
    const randomColor = getRandomColor();
    colorInput.value = randomColor;

    colorText.textContent = colorInput.value;
    document.body.style.backgroundColor = randomColor;
    // getRandomColor();
    // setRandomColor();
  }
});

btnOver.addEventListener("mouseover", () => {
  getRandomColor();
  setRandomColor();
  function getRandomColor() {
    // Renk kodu üretmek için rastgele bir sayı oluşturulur
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor() {
    const colorInput = document.getElementById("colorInput");
    const randomColor = getRandomColor();
    colorInput.value = randomColor;

    colorText.textContent = colorInput.value;
    document.body.style.backgroundColor = randomColor;
    // getRandomColor();
  }
});
