class Aluno {
   
    constructor(notas = []) {
        this.notas = notas
    }

    calcularMedia() {
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota
        })
        let media = soma / this.notas.length
        return media
    }

    verificarAprovacao() {
        let media = this.calcularMedia(this.notas);
        let condicao = media >= 8 ? "aprovado" : "reprovado";
        return 'Média: ' + media + ' - Resultado: ' + condicao;
    }
    
}