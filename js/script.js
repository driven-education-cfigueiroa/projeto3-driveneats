var food = false;
var drink = false;
var desert = false;

const card = document.querySelectorAll(".card");
// const food = [0, 1, 2];
// const drink = [3, 4, 5];
// const desert = [6, 7, 8];

for (let i = 0; card.length; i++) {
    card[i].addEventListener("click", () => {
        if (i <= 2) {
            console.log("food activated")
            card[0].classList.remove('card-selected');
            card[0].classList.remove('icon-display');
            card[1].classList.remove('card-selected');
            card[1].classList.remove('icon-display');
            card[2].classList.remove('card-selected');
            card[2].classList.remove('icon-display');
            card[i].classList.add('card-selected');
            card[i].classList.add('icon-display');
            food = true;
        } else if (i <= 5) {
            console.log("drink activated")
            card[3].classList.remove('card-selected');
            card[3].classList.remove('icon-display');
            card[4].classList.remove('card-selected');
            card[4].classList.remove('icon-display');
            card[5].classList.remove('card-selected');
            card[5].classList.remove('icon-display');
            card[i].classList.add('card-selected');
            card[i].classList.add('icon-display');
            drink = true;
        } else {
            console.log("desert activated")
            card[6].classList.remove('card-selected');
            card[6].classList.remove('icon-display');
            card[7].classList.remove('card-selected');
            card[7].classList.remove('icon-display');
            card[8].classList.remove('card-selected');
            card[8].classList.remove('icon-display');
            card[i].classList.add('card-selected');
            card[i].classList.add('icon-display');
            desert = true;
        }
        if (food == true && drink == true && desert == true) {
            const btn = document.querySelector("button");
            btn.innerText = "Fechar pedido";
            btn.style.backgroundColor = "#32b72f";
            let baseUrl = "https://wa.me/5521970148339?text=";
            let inputText = `Olá, gostaria de fazer o pedido:
            - Prato: Frango Yin Yang
            - Bebida: Coquinha Gelada
            - Sobremesa: Pudim
            Total: R$ 27.70`;
            let completeUrl = baseUrl + encodeURIComponent(inputText);
            btn.addEventListener('click', () => { location.href = completeUrl });
        }
    })
}

