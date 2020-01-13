const userInput = document.querySelector('#input-number');
const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentResultOutput = document.querySelector('#current-result');
const currentCalculationOutput = document.querySelector('#current-calculation');

let currentResult=0

function outputResult(result, text) {
  currentResultOutput.textContent = result
  currentCalculationOutput.textContent = text;
}

const operation = {
  op1 : Number(userInput.value),
  op2 : currentResult,
  opcode : '',
  result : 0,
  init(){
    this.op1=Number(userInput.value)
    this.op2=currentResult
    return null
  },
  display(){
    currentResultOutput.innerHTML = `${this.result}`
    currentCalculationOutput.innerHTML = ` ${this.op2} ${this.opcode} ${this.op1}`
    currentResult = this.result
  }
}
operation.add = function (){
  operation.init()
  operation.opcode='+'
  operation.result=operation.op2+operation.op1
  operation.display()
}
operation.subtract = function (){
  operation.init()
  operation.opcode='-'
  operation.result=operation.op2-operation.op1
  operation.display()
}
operation.multiply = function (){
  operation.init()
  operation.opcode='*'
  operation.result=operation.op2*operation.op1
  operation.display()
}
operation.divide = function (){
  operation.init()
  operation.opcode='/'
  operation.result=operation.op2/operation.op1
  operation.display()
}

addBtn.addEventListener ('click',operation.add)
subtractBtn.addEventListener('click',operation.subtract)
multiplyBtn.addEventListener('click',operation.multiply)
divideBtn.addEventListener('click',operation.divide)