let food = -1;
let drink = -1;
let desert = -1;
const section = document.querySelectorAll("section");
const cards = [...section].map((cards) => cards.querySelector(".cards"));
const card = [...cards].map((card) => card.querySelectorAll(".card"));

function main() {
  for (var i = 0; i < card.length; i++) {
    for (var j = 0; j < card[i].length; j++) {
      newAddEventListener(i, j);
    }
  }
}

function newAddEventListener(i, j) {
  card[i][j].addEventListener("click", (e) => {
    card[i].forEach((element) => {
      element.classList.remove("card-selected");
      element.classList.remove("icon-display");
    });
    card[i][j].classList.add("card-selected");
    card[i][j].classList.add("icon-display");
    switch (i) {
      case 0:
        food = j;
        break;
      case 1:
        drink = j;
        break;
      case 2:
        desert = j;
        break;
      default:
        break;
    }
    if (food >= 0 && drink >= 0 && desert >= 0) {
      enableBtn();
    }
  });
}

function enableBtn() {
  let prato = card[0][food];
  let bebida = card[1][drink];
  let sobremesa = card[2][desert];
  let pratoName = prato.querySelector("p").innerText;
  let pratoValue = prato.querySelector(".card-content-bot > p").innerText;
  let bebidaName = bebida.querySelector("p").innerText;
  let bebidaValue = bebida.querySelector(".card-content-bot > p").innerText;
  let sobremesaName = sobremesa.querySelector("p").innerText;
  let sobremesaValue = sobremesa.querySelector(
    ".card-content-bot > p"
  ).innerText;

  const btn = document.querySelector("button");
  btn.innerText = "Fechar pedido";
  btn.style.backgroundColor = "#32b72f";
  let baseUrl = "https://wa.me/5521970148339?text=";
  let inputText = `Olá, gostaria de fazer o pedido:
              - Prato: ${pratoName}
              - Bebida: ${bebidaName}
              - Sobremesa: ${sobremesaName}
              Total: R$ ${currencyFormat(
                treatValue(pratoValue) +
                  treatValue(bebidaValue) +
                  treatValue(sobremesaValue)
              )};`;
  let completeUrl = baseUrl + encodeURIComponent(inputText);
  btn.addEventListener("click", () => {
    location.href = completeUrl;
  });
}

function treatValue(str) {
  return Number(str.slice(3).replace(",", "."));
}

function currencyFormat(num) {
  return String(num.toFixed(2)).replace(".", ",");
}

main();
