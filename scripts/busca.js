const campoBusca = document.getElementById("buscarProduto");

campoBusca.addEventListener("input", function () {

    const texto = this.value.toLowerCase();

    const produtos = document.querySelectorAll(".item-produtos");

    produtos.forEach(produto => {

        const nome = produto.innerText.toLowerCase();

        if (nome.includes(texto)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }

    });

});