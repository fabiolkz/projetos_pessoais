let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');
 
/* VARIAVEIS DE CONTROLE */

let etapaAtual = 0; 
let numero = '';
let votoBranco = true;
let votos = [];
let chegouNoFinal = false;

const comecarEtapa = () => {

    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    numero = '';
    votoBranco = false;

    for( let i = 0; i < etapa.numeros; i++ ) { 
        if ( i === 0 ) {
            numeroHTML += '<div class="numero pisca"></div>'
        } else {
            numeroHTML += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

const atualizaInterface = () => { 
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });

    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Pardido: ${candidato.partido}`;

        let fotosHTML = '';
        for(let i in candidato.fotos) { 
            if (candidato.fotos[i].small) {
                fotosHTML += `<div class='d-1-image small'><img src='images/${candidato.fotos[i].url}' alt=''>${candidato.fotos[i].legenda}</div>`
            } else {
                fotosHTML += `<div class='d-1-image'><img src='images/${candidato.fotos[i].url}' alt=''>${candidato.fotos[i].legenda}</div>`
            }
            
        }
    
        lateral.innerHTML = fotosHTML;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.style.display = 'flex';
        descricao.style.alignItems = 'center';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }

}

const clicou = (n) => {
    let elNumero = document.querySelector('.numero.pisca');



    if(elNumero !== null) {

        let audio_click = document.querySelector('#audio_click');

        audio_click.play();

        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }

    }

}

const branco = () => {
    if ( numero === '' ) {
        votoBranco = true;

        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        
        descricao.style.display = 'flex';
        descricao.style.alignItems = 'flex-start';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    } 
}

const corrige = () => {
    if (!chegouNoFinal) {
        comecarEtapa();
    }
}

const confirma = () => {

    if(!chegouNoFinal) {
        let etapa = etapas[etapaAtual];

        let votoConfirmado = false;
    
        if ( votoBranco === true) {
            votoConfirmado = true;
            votos.push({
                etapa: etapas[etapaAtual].titulo,
                voto: 'branco'
            });
        } else if (numero.length === etapa.numeros) {
            votoConfirmado = true;
            votos.push({
                etapa: etapas[etapaAtual].titulo, 
                voto: numero
            });
        }
    
        if ( votoConfirmado ) { 
            etapaAtual++;
            if (etapas[etapaAtual] !== undefined) { 
                comecarEtapa();
            } else {

                let audio_fim = document.querySelector('#audio_fim');

                audio_fim.play();

                document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
                chegouNoFinal = true;
            }
        }
    }

}

comecarEtapa();