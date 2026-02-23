import Pizza from "./models/Pizza.js"
import Receita from "./models/Receita.js"

// 1. usuário define o tamanho da pizza
const tamanho = new Pizza(35,0.5)
const pesoPizza = tamanho.getpesoUnitario()



console.log(`O peso da pizza é: ${pesoPizza} g`)


// 2. Verificar a prudução
const receita = new Receita()
const calcularQtdeingredientes = receita.calcularQtdeingredientes(pesoPizza)
const qtdePizza = receita.calcularQtdepizza

console.log(`A quantidade de pizza M é: ${qtdePizza}`)
console.log(`--- Quantidade de Ingredientes ---`)
console.table(calcularQtdeingredientes)