class Formulario {

    constructor(id, seletor, sucessoValidacao, erroValidacao, divErro) {       
        this.sucessoValidacao = sucessoValidacao
        this.erroValidacao = erroValidacao
        this.divErro = divErro
        const formulario = document.getElementById(id)
        if (formulario) {
            const validacao = new Validacao(formulario, seletor, divErro)
            formulario.addEventListener('submit', evento => {
                evento.preventDefault()
                if (validacao.validar()) {
                    if (this.sucessoValidacao)
                        this.sucessoValidacao(formulario)
                } else if (this.erroValidacao)
                    this.erroValidacao()
            })
        }
    }

}