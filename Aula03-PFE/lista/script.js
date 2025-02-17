fetch('./produtos.json')
    .then(response => response.json())
    .then(produtos => {
        const listaProdutos = document.getElementById('produtos-lista');
        produtos.forEach(produto => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${produto.nome}</span>
                <span>R$ ${produto.preco.toFixed(2)}</span>
            `;
            listaProdutos.appendChild(li);
        });
    })
    .catch(error => console.error('Erro ao carregar os produtos:', error));
