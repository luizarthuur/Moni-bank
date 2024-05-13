import eUmCPF from "./vailda-CPF.js";

const camposDoFormulario = document.querySelector('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventlistener('blur', () => verificaCampo(campo))
})

function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.lenght >= 11) {
        eUmCPF(campo);
    }
}

