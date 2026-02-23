export default class pizza{
    constructor(diametro,espessura){
        this.raio = espessura / 2
        this.altura = espessura
        this.densidade = 0.85
    }

    calcularAreaBase(){
        let area = Math.pi * this.raio * this.raio
        return area
    }
    calcularVolume(){
        let volume = this.calcularAreaBase() * this.altura
        return volume
    }

    // relacionamento entre volume e a densidade da massa, indepente do tamanho 
    // regra de negócio da densidade da massa que é: 0.85 g/cm³
    getpesoUnitario(){
        return this.calcularVolume * this.densidade
    }
}