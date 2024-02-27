function openSharePopup() {
    var shareButton = document.getElementById("shareButton");
    var popup = document.getElementById("popup");
    var linkInput = document.getElementById("linkInput");
    var copyButton = document.getElementById("copyButton");
    
    shareButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que o evento de clique seja propagado para outros elementos
        popup.style.display = "block";
        var link = this.getAttribute("data-link");
        linkInput.value = link;
    });
    
    copyButton.addEventListener("click", function(event) {
        event.stopPropagation();
        linkInput.select();
        document.execCommand("copy");
        alert("Link copiado para a área de transferência!");
    });

    // Fechar a janela pop-up quando clicar fora
    document.addEventListener("click", function(event) {
        if (!popup.contains(event.target) && event.target !== shareButton) {
            popup.style.display = "none";
        }
    });
}