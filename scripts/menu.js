const menu = document.getElementById("menu");
const botao = document.getElementById("menuToggle");

botao.addEventListener("click", () => {

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){

        botao.innerHTML = "✕";

    }else{

        botao.innerHTML = "☰";

    }

});

function novidades() {
    alert("🚧 Novidades em breve!");
}

