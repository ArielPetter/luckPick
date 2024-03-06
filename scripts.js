const button = document.querySelector(".main-button");
const input1 = document.querySelector(".input-min");
const input2 = document.querySelector(".input-max");
const inputResult = document.querySelector(".input-result");

button.addEventListener("click", generatorNumber);
input1.addEventListener("focus", resetResult);
input2.addEventListener("focus", resetResult);

function generatorNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  if (min >= max) {
    alert("Digite um número maior no segundo campo");
    return;
  }else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const inputResult = document.querySelector(".input-result");
    inputResult.value = result;
  }
}

function resetResult(){
  inputResult.value = "";
  inputResult.placeholder = "número sorteado";
}


