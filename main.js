function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach((tecla) => {

    const instrumento = tecla.classList[1];
    const idElementoAudio = '#som_' + instrumento;

    tecla.onclick = () => {
        tocaSom(idElementoAudio); 
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

