function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
        sequenciaSons.push(elemento);
    } else {
        alert('Elemento não encontrado ou seletor inválido');
    }

}

function tocarMusica() {
    if(intervaloMusica === null) {
        intervaloMusica = setInterval(musica, 300);
        teclaPlay.textContent = 'Pause';
    } else {
        zerar();
    }
}

function musica() {
    if(contador < sequenciaSons.length) {
        sequenciaSons[contador].play();
        contador++;
    } else {
        contador = 0;
        sequenciaSons = [];
        zerar();
    }
}

function zerar() {
    clearInterval(intervaloMusica);
    intervaloMusica = null;
    teclaPlay.textContent = 'Play';
}

let intervaloMusica = null;
let contador = 0;
const listaDeTeclas = document.querySelectorAll('.tecla');
const teclaPlay = document.querySelector('.tecla_play');
let sequenciaSons = [];

listaDeTeclas.forEach((tecla) => {

    const instrumento = tecla.classList[1];
    const idElementoAudio = '#som_' + instrumento;

    if(tecla.classList.contains('tecla_play')) {
        tecla.onclick = tocarMusica;
    } else {
        tecla.onclick = () => {
            tocaSom(idElementoAudio); 
        }
    }

    tecla.onkeydown = (evento) => {

        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

    }

);

