const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');

const curtoBt = document.querySelector('.app__card-button--curto');

const longoBt = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');

function alterarContexto(contexto) {
	html.setAttribute('data-contexto', contexto);

	banner.setAttribute('src', `/imagens/${contexto}.png`);

	switch (contexto) {
		case 'foco':
			titulo.innerHTML = `Oimize sua produtividade, mergulhe no que importa`;
			break;

		default:
			break;
	}
}

focoBt.addEventListener('click', () => {
	alterarContexto('foco');
});

curtoBt.addEventListener('click', () => {
	alterarContexto('descanso-curto');
});

longoBt.addEventListener('click', () => {
	alterarContexto('descanso-longo');
});
