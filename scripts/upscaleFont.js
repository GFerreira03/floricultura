// Obtém os elementos de texto específicos da página
const elementosDeTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5');
const fontToggle = document.getElementById('font-toggle');

let upscaled = false;
const tamanhoAumento = 7;

fontToggle.addEventListener('click', function () {
  elementosDeTexto.forEach(elemento => {
    const estiloAtual = getComputedStyle(elemento);
    const tamanhoAtual = parseInt(estiloAtual.fontSize);
    const novoTamanho = upscaled ? tamanhoAtual - tamanhoAumento : tamanhoAtual + tamanhoAumento;
    elemento.style.fontSize = novoTamanho + 'px';
  });

  upscaled = !upscaled;
});
