const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    console.log(aba)
    aba.addEventListener("click", function () {
        if (aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba)
        const informacaoSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");
        aba.classList.add("selecionado")
        querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
        
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")


    });
})