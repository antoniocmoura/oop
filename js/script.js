/*  
 *  Foi criada a classe Formulario que fará o controle do submit e a criação da instância da classe Validacao
 *  A classe Validacao será utilizada para configurar e controlar a validação dos campos, 
 *  que serão selecionados conforme o seletor enviado como parâmetro para o construtor da classe
 *  A classe de Aluno será alimentada com as notas obtidas no formulário de média e realizará o cálculo da média e verificação da aprovação 
 *  Utilização de arrow functions para tratar os eventos de sucesso ou erro na validação
 */

const divErro = document.querySelector('.mensagem')

// formulário de média
const sucessoMedia = (formulario) => {
    let dados = new FormData(formulario);
    let notas = [];
    for (let key of dados.keys()) {
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0
        notas.push(numero)
    }
    const aluno = new Aluno(notas)
    document.getElementById('resultado').innerHTML = aluno.verificarAprovacao()
}

const erroMedia = () => {
    document.getElementById('resultado').innerHTML = ''
}

const formularioMedia = new Formulario('formulario-01', 'input.numero', sucessoMedia, erroMedia, divErro)

// formulário de cadastro
const sucessoCadastro = () => {
    document.getElementById('resultado').innerHTML = 'Cadastro validado com sucesso'
}

const erroCadastro = () => {
    document.getElementById('resultado').innerHTML = ''
}

const formularioCadastro = new Formulario('formulario-02', 'input.obrigatorio, input.email, input.telefone', sucessoCadastro, erroCadastro, divErro)