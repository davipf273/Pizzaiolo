export default class Receita {
    constructor(farinha = 200, agua = 134, azeite = 5, sal = 4.5,
        fermento = 3.5, acucar = 5, ovo = 56) {

        this.farinha = farinha,
            this.agua = agua,
            this.azeite = azeite,
            this.sal = sal,
            this.fermento = fermento,
            this.acucar = acucar,
            this.ovo = ovo,

            //peso base da reeita de 408 gramas
            this.pesoBase = this.farinha + this.agua + this.azeite + this.sal + this.fermento + this.acucar + this.ovo
        this.receita = {} // variavel do tipo objeto
        this.totalPizza = 0
    }
    //referencia 1 tonelada ou 1.000.000 de gramas
    calcularQtdeIngredientes() {
        const fatorEscala = 1000000 / this.pesoBase

        this.receita = {
            farinha: Number((this.farinha * fatorEscala).toFixed(2)),
            agua: Number((this.agua * fatorEscala).toFixed(2)),
            azeite: Number((this.azeite * fatorEscala).toFixed(2)),
            sal: Number((this.sal * fatorEscala).toFixed(2)),
            fermento: Number((this.fermento * fatorEscala).toFixed(2)),
            acucar: Number((this.acucar * fatorEscala).toFixed(2)),
            ovo: Number((this.ovo * fatorEscala).toFixed(2)),
        }


    }

    verificarQtdeOvos(){
        const qtdeOvos = this.receita.ovo / 56
        this.receita.ovo = Math.ceil(qtdeOvos)
    }

    calcularQtdePizza(PesoUnitario){
        this.totalPizza = 1000000 /PesoUnitario
        this.verificarQtdePizza()

        return this.totalPizza

    }

    verificarQtdePizza(){
        this.totalPizza = Math.floor(this.totalPizza)
    }

}