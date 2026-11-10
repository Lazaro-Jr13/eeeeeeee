// Cálculo automático da idade
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Visualizador de imagens (Modal Lightbox)
function abrirModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgModalTarget");
    modal.style.display = "flex";
    modalImg.src = src;
}

function fecharModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Fechar modal ao pressionar a tecla ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});

// Executa ao carregar o documento
document.addEventListener("DOMContentLoaded", function() {
    const ageElement = document.getElementById("age");
    if (ageElement) {
        ageElement.innerText = calcularIdade("1997-10-12");
    }
});
