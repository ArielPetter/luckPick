const button = document.querySelector(".main-button");
const min = document.querySelector(".input-min")

button.addEventListener("click", generatorNumber);

function generatorNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  const inputResult = document.querySelector(".input-result");

  inputResult.value = result;
  
}

