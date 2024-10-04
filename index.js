const reactSPans = [
    "'react-dom/client' substitui o entry point anterior, 'react-dom'.<br> Serve para criar o root e importá-lo (geralmente denominado 'App')",
    "Importa o componente 'App'",
    "Cria o container 'root' onde a aplicação será renderizada,<br> encontrando a div de id root no DOM,<br> este definido por padrão no index.html durante a instalação do Vite",
    "Renderiza o componente 'App' no root que acabou de ser criado",
    "Declara uma variável constant 'App' e lhe atribui uma função.",
    "Sintaxe de função arrow, exemplo de componente funcional. Até a chave final lá embaixo, tudo a partir daqui é uma função. Isso porque em react, <br>componentes são definidos como funções JS, atribuídas a variáveis (aqui no caso, a variavel 'App').",
    "O return da arrow function retorna um snippet em JSX,<br> o qual permite escrever código HTML direto no JS",
    "Retorna uma div ao html, pois em JSX todo elemento retornado<br> (aqui no caso, um p) deve estar wrapped em um parente",
    "Faz do componente App aqui criado o export padrão deste módulo.<br> Quando outro módulo importar daqui, receberá o componente 'App' por padrão.",
    "Pode-se adicionar programação JS dentro dos {} e antes do return. <br> Tal programação afetará a redenrização do componente produzido dentro do return"
]

const spansArray = document.querySelectorAll('span');

for (let i = 0; i < spansArray.length; i++) {
    spansArray[i].addEventListener('mouseenter', function() {
        destacarCódigo(spansArray[i]);
        criarBalão(spansArray[i], [i])
    }) 
}

function destacarCódigo(codigo) {
    codigo.style.border = '1px solid green';
    codigo.style.fontSize = 'larger';
    codigo.style.margin = '5px';
    codigo.addEventListener('mouseleave', function() {
        retirarDestaque(codigo);
    })
}

function retirarDestaque(codigo) {
    codigo.style.border = '0px solid green';
    codigo.style.fontSize = 'inherit';
    codigo.style.padding = 'inherit';
}

function criarBalão(codigo, index) {
    const balao = document.createElement('div');
    balao.classList.add('balao');
    balao.id = 'aRemover';
    codigo.appendChild(balao);
    const textoDoBalao = document.createElement('p');
    textoDoBalao.innerHTML = reactSPans[index]
    textoDoBalao.classList.add('balao-texto')
    balao.appendChild(textoDoBalao);

    codigo.addEventListener('mouseleave', function() {
        retirarBalao();
    })

    // checarSeBalaoCabeNaTela(balao);

}

function retirarBalao() {
    const balaoARemover = document.getElementById('aRemover');
    balaoARemover.remove();
}

// function checarSeBalaoCabeNaTela(balao) {
//     const painel = document.querySelectorAll('.innerDivs');
//     const computedStyle = window.getComputedStyle(painel[0]);
//     const painelWidth = computedStyle.width;


//     const balaoComputedStyle = window.getComputedStyle(balao);
//     balaoWidth = balaoComputedStyle.width;


//     const painelWidth2 = parseInt(painelWidth, 10);
//     const balaoWidth2 = parseInt(balaoWidth, 10)
//     console.log('largura do painel: ' + painelWidth2)
//     console.log('largura do balao: ' + balaoWidth2)

//     if (balaoWidth2 > painelWidth2) {
//         console.log('chegou aqui')
//         console.log(balao)
//         balao.style.width = (balaoWidth /-1000) + 'px';
//     }
// }