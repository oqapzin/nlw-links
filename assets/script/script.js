var numero = 0

function trocarCor() {

    if (numero == 0) {
        const cor = document.querySelector(".basic");

        cor.classList.remove("basic");
        cor.classList.add("dark-blue");

        document.querySelector(".imagem-logo").src = "assets/images/qalogo-dark.png";
        document.querySelector("link[rel='shortcut icon']").href = "assets/images/qalogomin-dark-blue.png";

        numero += 1

    } else if (numero == 1) {
        const cor = document.querySelector(".dark-blue");

        cor.classList.remove("dark-blue");
        cor.classList.add("pink");

        document.querySelector(".imagem-logo").src = "assets/images/qalogo-pink.png";
        document.querySelector("link[rel='shortcut icon']").href = "assets/images/qalogomin-pink.png";

        numero += 1


    } else if (numero == 2) {
        const cor = document.querySelector(".pink");

        cor.classList.remove("pink");
        cor.classList.add("dark-pink");

        document.querySelector(".imagem-logo").src = "assets/images/qalogo-dark-pink.png";
        document.querySelector("link[rel='shortcut icon']").href = "assets/images/qalogomin-dark-pink.png";

        numero += 1

    } else if (numero == 3) {
        const cor = document.querySelector(".dark-pink");

        cor.classList.remove("dark-pink");
        cor.classList.add("basic");

        document.querySelector(".imagem-logo").src = "assets/images/qalogo-basic.png";
        document.querySelector("link[rel='shortcut icon']").href = "assets/images/qalogomin-basic.png";

        numero = 0

    }
}