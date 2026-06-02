let contaEnergiaEletrica 
let contaAgua
let contaInternet
let aluguel
let funcionarios 
let custoTotal



contaEnergiaEletrica =    parseInt( prompt("Informe o valor da conta de energia elétrica"))
contaAgua =    parseInt(prompt("Informe o valor de sua conta de água"))
contaInternet =   parseInt( prompt('Informe o valor da sua conta de internet'))
aluguel =    parseInt( prompt('Informe o valor do aluguel'))
funcionarios =    parseInt( prompt('Informe o custo com os funcionários'))




custoTotal = contaEnergiaEletrica + contaAgua + contaInternet + aluguel + funcionarios

alert( "O CUSTO TOTAL É  R$" + custoTotal)