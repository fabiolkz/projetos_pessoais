const lista = ['JB', 'JB30', 'EX15', 'EX30', 'EXF', 'EXV', 'EPV', 'A15', 'A', 'AP6', 'AP', 'AP30', 'AP630', 'AF', 'AV', 'B', 'BP', 'BF', 'BV', 'C', 'SUJINHO', 'BALDE', 'INDUSTRIAL'];
const listaCodigos = ['0301', '0303', '0502', '0503', '0531', '0603', '0619', '0702', '0703', '0716', '0717', '0720', '0722', '0734', '0803', '0903', '0917', '0933', '1003', '1103', '1603', '1764', '1800'];  
const listaDescricao = [
    'Jumbo Branco - Cx 20 Dz - 240 Ovos c/ 12 Band. 20 Ovos', 
    'Jumbo Branco - Cx 30 Dz - 360 Ovos c/ 12 Band. 30 Ovos', 
    'Extra Branco - Cx 15 Dz - 180 Ovos c/ 06 Band. 30 Ovos',
    'Extra Branco - Cx 30 Dz - 360 Ovos c/ 12 Band. 30 Ovos', 
    'Extra Branco - Cx 16,6 Dz - 200 Ovos c/ 10 Band. PVC 20 Ovos', 
    'Extra Vermelho - Cx 30 Dz - 360 Ovos c/12 Band. 30 Ovos', 
    'Extra Vermelho - Cx 20 Dz - 240 Ovos c/ 20 Est. Transp 12 Ovos', 
    'Grande Branco - Cx 15 Dz - 180 Ovos c/ 06 Band. 30 Ovos', 
    'Grande Branco - Cx 30 Dz - 360 Ovos c/ 12 Band. 30 Ovos', 
    'Grande Branco - Cx 20 Dz - 240 Ovos c/ 40 Est. Polpa 06 Ovos', 
    'Grande Branco - Cx 20 Dz - 240 Ovos c/ 20 Est. Polpa 12 Ovos', 
    'Grande Branco - Cx 30 Dz - 360 Ovos c/ 30 Est. Polpa 12 Ovos', 
    'Grande Branco - Cx 30 Dz - 360 Ovos c/ 60 Est. Polpa 06 Ovos', 
    'Grande Branco - Cx 25 Dz - 300 Ovos c/ 10 Conj 30 Ovos', 
    'Grande Vermelho - Cx 30 Dz - 360 Ovos c/12 Band. 30 Ovos', 
    'Médio Branco - Cx 30 Dz - 360 Ovos c/ 12 Band. 30 Ovos', 
    'Médio Branco - Cx 20 Dz - 240 Ovos c/ 20 Est. Polpa 12 Ovos', 
    'Médio Branco - Cx 25 Dz - 300 Ovos c/ 10 Band. PVC 30 Ovos', 
    'Médio Vermelho - Cx 30 Dz - 360 Ovos c/ 12 Band. 30 Ovos', 
    'Pequeno Branco - Cx 30 Dz - 360 Ovos c/ 12 Band. 30 Ovos', 
    'Categoria B - Cx 30 Dz - c/ 12 Band. 30 Ovos', 
    'Ovo Liquido Congelado - Balde 18 kg', 
    'Ovos Tipo Industrial Branco Categoria B'
    ];

const validarCodigos = () => {
    let inText = document.querySelector('#inText');
    let outResposta = document.querySelector('.outResposta');
    let outResposta2 = document.querySelector('.outResposta2');
    let outResposta1 = document.querySelector('.outResposta1');


    let item = (inText.value).toUpperCase();

    console.log(lista.length);
    console.log(listaCodigos.length);
    console.log(listaDescricao.length);

    for (i = 0; i < lista.length; i++) {

        let index = lista.indexOf(item);

        if(lista.indexOf(item) >= 0) {
            outResposta2.style.padding = '10px';
            outResposta1.innerHTML = lista[index];
            outResposta.innerHTML = `O código do Item é: <strong>${listaCodigos[index]}</strong>`;
            outResposta2.innerHTML = listaDescricao[index];
            inText.value = "";
            inText.focus();
        } else {
            outResposta2.style.padding = '0px';
            outResposta.innerHTML = 'Item não encontrado!';
            outResposta1.innerHTML = "";
            outResposta2.innerHTML = "";
            inText.value = "";
            inText.focus();
        }
    }

}

const limpar = () => {
    let inText = document.querySelector('#inText');
    let outResposta = document.querySelector('.outResposta');
    let outResposta2 = document.querySelector('.outResposta2');
    let outResposta1 = document.querySelector('.outResposta1');


    inText.innerHTML = "";
    outResposta.innerHTML = "";
    outResposta2.innerHTML = "";
    outResposta1.innerHTML = "";
    outResposta2.style.padding = '0px';

}

let button = document.querySelector('#btSearch');
button.addEventListener('click', validarCodigos);

let buttonClear = document.querySelector('#btClear');
btClear.addEventListener('click', limpar)


