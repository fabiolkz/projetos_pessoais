
let numeroSorteado = Math.floor((Math.random() * 11));
let chances = 3;


const numeroSorte = () => {
    let inNumber = document.querySelector('#inNumber');
    let imagem = document.querySelector('img');
    let numero = Number(inNumber.value);
    let numeroChances = document.querySelector('#numeroChances');


    let indexRandom1 = Math.floor((Math.random() * 2));
    let indexRandom2 = Math.floor((Math.random() * 4));

    let imagensStitch = {
        stitchFeliz: ['imagem/stichFeliz1.jpg', 'imagem/stichFeliz2.jpg' ],
        stichTriste: ['imagem/stichTriste1.jpg', 'imagem/stichTriste2.jpg', 'imagem/stichTriste3.jpg', 'imagem/stichTriste4.jpg', 'imagem/stichTriste5.jpg']
    }; 

    chances--;

    numeroChances.textContent = `Voce tem: ${chances} chances`;

    if (chances == -1) {
        alert(`Infelizmente suas chances acabaram, o numero sorteado era ${numeroSorteado}, vamos tentar de novo?`);
        location.reload();
    } else if (chances == 1) {
        numeroChances.textContent = `Voce tem: ${chances} chance`;
    }


    if (numero === numeroSorteado && chances > -1) { 
        alert(`Parabens, o numero sorteado era ${numeroSorteado}`);
        imagem.setAttribute('src',imagensStitch.stitchFeliz[indexRandom1]);
        inNumber.value = "";

    } else if (numero > numeroSorteado && chances > -1) {
        alert(`Seu chute foi acima do numero sorteado, tente novamente`);
        imagem.setAttribute('src',imagensStitch.stichTriste[indexRandom2]);
        inNumber.value = "";
        inNumber.focus();
        return;
    } else if (numero < numeroSorteado && chances > -1) {
        alert(`Seu chute foi abaixo do numero sorteado, tente novamente`);
        imagem.setAttribute('src',imagensStitch.stichTriste[indexRandom2]);
        inNumber.value = "";
        inNumber.focus();
        return;
    }

}

let btChutar = document.querySelector('#btChutar');
btChutar.addEventListener('click', numeroSorte);

const gerarNovoNumero = () => {
    location.reload();
}

let btGerarNumero = document.querySelector('#btGerarNumero');
btGerarNumero.addEventListener('click', gerarNovoNumero);

