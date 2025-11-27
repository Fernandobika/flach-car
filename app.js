function criaCartao(categoria, pergutas, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao'


cartao.innerHTML = `
    <div class="cartao_conteudo">
               <h3>${categoria}</h3>
               <div class="cartao_conteudo_perguntas">
                    <p>${perguntas}</p>
               </div>
             <div class="cartao_conteudo_perguntas">
                <p>${resposta}</p>
            </div>
            </div>
            `
    let respostaEstaInvisivel = false;

    function viraCartao () {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    container.addEventListener('clik', viraCartao)
    
    container.appendChild(cartao)
}
