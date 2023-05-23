let livros = [];

buscarLivrosDaApi()

async function buscarLivrosDaApi(){
    const resposta = await fetch("https://guilhermeonrails.github.io/casadocodigo/livros.json");
    livros = await resposta.json();
    console.log(livros)

    exibirOsLivrosNaTela(livros)

}

function exibirOsLivrosNaTela(listaDeLivros){

    const inserirLivros = document.getElementById('livros');
    listaDeLivros.forEach(livro => {
        inserirLivros.innerHTML += 
        `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>;
        
        `
    });

}