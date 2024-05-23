let produtos = [
    {
        id: 0,
        imagem: "https://source.unsplash.com/640x480/?tv",
        produto: "TV",
        valor: 4000.0,
    },
    {
        id: 1,
        imagem: "https://source.unsplash.com/640x480/?cellphone",
        produto: "Celular",
        valor: 2500.0,
    },
    {
        id: 2,
        imagem: "https://source.unsplash.com/640x480/?computer",
        produto: "Computador",
        valor: 5000.0,
    },
    {
        id: 3,
        imagem: "https://source.unsplash.com/640x480/?tablet",
        produto: "Tablet",
        valor: 4000.0,
    },
    {
        id: 4,
        imagem: "https://source.unsplash.com/640x480/?videogame",
        produto: "Videogame",
        valor: 3500.0,
    },
    {
        id: 5,
        imagem: "https://source.unsplash.com/640x480/?speaker",
        produto: "Caixa de Som",
        valor: 500.0,
    },
    {
        id: 6,
        imagem: "https://source.unsplash.com/640x480/?headphone",
        produto: "Fone de Ouvido",
        valor: 350.0,
    },
    {
        id: 7,
        imagem: "https://source.unsplash.com/640x480/?computer-mouse",
        produto: "Mouse",
        valor: 100.0,
    },
    {
        id: 8,
        imagem: "https://source.unsplash.com/640x480/?keyboard",
        produto: "Teclado",
        valor: 150.0,
    },
];


function lerProdutos() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="lixo" src="assets/vector.png" alt="Ícone do Lixo" onclick="deleteProduto(${produto.id})">
                    <img class="editar" src="assets/editar.png" alt="Ícone de Edição" onclick="updateProduto(${produto.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

function createProduto() {
    const form = document.getElementById("form-produto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const imagem = document.getElementById("imagem").value;
        if (nome && valor && imagem) {
            const novoProduto = {
                id: produtos.length,
                imagem,
                produto: nome,
                valor,
            };
            produtos.push(novoProduto);
            lerProdutos();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

function deleteProduto(id) {
    if (confirm("ATENÇÃO - Você deseja excluir o produto?")) {
        produtos = produtos.filter((produto) => produto.id !== id);
        lerProdutos();
        if (produtos.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

function updateProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Insira o novo nome do produto:");
        const valor = parseFloat(prompt("Insira o novo valor do produto:"));
        const imagem = prompt("Anexe a nova imagem do produto:");
        if (nome && valor && imagem) {
            produto.produto = nome;
            produto.valor = valor;
            produto.imagem = imagem;
            lerProdutos();
            alert("O produto foi atualizado com sucesso!");
        } else {
            alert("Atenção - Produto não encontrado!");
        }
    }
}

lerProdutos();

createProduto();