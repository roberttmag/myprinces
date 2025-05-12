const botao = document.getElementById('botaoFofo');
const inicio = document.getElementById('inicio');
const conteudo = document.getElementById('conteudo');
const imagens = document.querySelectorAll('.carrossel img');
const contador = document.getElementById('contador');
const coracoes = document.getElementById('coracoes');
const musica = document.getElementById("musicaTema");
const playPauseBtn = document.getElementById("playPauseBtn");

let index = 0;

function mostrarImagem() {
  imagens.forEach(img => img.classList.remove('ativo'));
  imagens[index].classList.add('ativo');
  index = (index + 1) % imagens.length;
}
setInterval(mostrarImagem, 3000);

function atualizarContador() {
  const dataInicio = new Date("2025-02-13T00:00:00");
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contador.textContent = ` ${dias} dias, ${horas}h ${minutos}min ${segundos}s 💖`;
}
setInterval(atualizarContador, 1000);

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.textContent = '❤️';

  const tamanho = Math.random() * 25 + 10; // entre 10px e 35px
  coracao.style.fontSize = `${tamanho}px`;
  coracao.style.left = `${Math.random() * 100}vw`;

  coracoes.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 4000);
}

// Criar corações a cada 300ms
setInterval(criarCoracao, 300);

botao.addEventListener('click', () => {
  inicio.style.display = 'none';
  conteudo.classList.remove('escondido');
  
  // Tocar música ao clicar
  musica.play();
});

document.getElementById("botaoFofo").addEventListener("click", () => {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("conteudo").classList.remove("escondido");
  
    // Tocar música
    const musica = document.getElementById("musicaTema");
    musica.play();
  });
  
  