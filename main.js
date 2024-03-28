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
    } else {
        clearInterval(intervaloMusica);
        intervaloMusica = null;
    }
}

function musica() {
    if(contador < sequenciaSons.length) {
        sequenciaSons[contador].play();
        contador++;
    } else {
        clearInterval(intervaloMusica);
        intervaloMusica = null;
        contador = 0;
        sequenciaSons = [];
    }
}

let intervaloMusica = null;
let contador = 0;
const listaDeTeclas = document.querySelectorAll('.tecla');
let sequenciaSons = [];

listaDeTeclas.forEach((tecla) => {

    const instrumento = tecla.classList[1];
    const idElementoAudio = '#som_' + instrumento;

    if(tecla.classList.contains('tecla_play')) {
        tecla.onclick = () => {
            tocarMusica();
        }
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

