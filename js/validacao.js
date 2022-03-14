class Validacao {

    constructor(formulario, seletor, divErro) {
        this.divErro = divErro
        this.campos = []
        const camposValidacao = formulario.querySelectorAll(seletor);
        for (let campo of camposValidacao) {
            this.campos.push(campo)
            campo.addEventListener('focusout', event => {
                event.preventDefault()
                this.validarCampo(campo)
            })
        }
    }

    validar() {
        let validado = true;
        this.campos.forEach(campo => {
            if (!this.validarCampo(campo))
                validado = false
        })
        return validado
    }

    validarCampo(campo) {
        const atributo = campo.getAttribute('class')
        if (atributo.match(/obrigatorio/))
            this.validarCampoObrigatorio(campo)
        else if (atributo.match(/numero/))
            this.validarCampoNumerico(campo)
        else if (atributo.match(/email/))
            this.validarEmail(campo)
        else if (atributo.match(/telefone/))
            this.validarTelefone(campo)
        return !campo.getAttribute('class').match(/erro/)
    }

    adicionarErro(campo) {
        divErro.innerHTML = 'verifique o preenchimento dos campos em vermelho'
        campo.classList.add('erro')
        campo.parentNode.classList.add('erro')
    }

    removerErro(campo) {
        divErro.innerHTML = ''
        campo.classList.remove('erro')
        campo.parentNode.classList.remove('erro')
    }

    validarCampoObrigatorio(campo) {
        if (campo.value == "") {
            this.adicionarErro(campo)
        } else {
            this.removerErro(campo)
        }
    }

    validarCampoNumerico(campo) {
        let numero = campo.value.match(/\d*/) && !isNaN(campo.value) ? Number(campo.value) : 0
        if (numero <= 0 || numero > 10) {
            this.adicionarErro(campo)
        } else {
            this.removerErro(campo)
        }
    }

    validarEmail(campo) {
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i
        if (!campo.value.match(emailValido)) {
            this.adicionarErro(campo)
        } else {
            this.removerErro(campo)
        }
    }

    validarTelefone(campo) {
        const telefone = campo.value.replace(/[-()]+/g, '');
        const telefoneValido = /^[1-9]{2}(?:[1-5]|9[6-9])[0-9]{3}[0-9]{4}$/g;
        if (!telefone.match(telefoneValido)) {
            this.adicionarErro(campo)
        } else {
            this.removerErro(campo)
        }
    }

}