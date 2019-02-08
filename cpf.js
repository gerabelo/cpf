var express = require("express");
var app = express();
var port = 3000;

app.post('/cpf', (req,res,next) => {
	var digitos = [];
	var primeiroDigito = 0;

	digitos = req.body.numero.split('');

	primeiroDigito = digitos[0]*10+digitos[1]*9+digitos[2]*8+digitos[3]*7+digitos[4]*6+digitos[5]*5+digitos[6]*4+digitos[7]*3+digitos[8]*2;

	primeiroDigito = 11 - (primeiroDigito % 11);
	if (primeiroDigito > 9) { primeiroDigito = 0; }

	segundoDigito =  digitos[0]*11+digitos[1]*10+digitos[2]*9+digitos[3]*8+digitos[4]*7+digitos[5]*6+digitos[6]*5+digitos[7]*4+digitos[8]*3+primeiroDigito*2;
	segundoDigito = 11 - (segundoDigito % 11);
	if (segundoDigito > 9) { segundoDigito = 0; }

	console.log(req.body.numero+'-'+primeiroDigito+''+segundoDigito);
	res.send(req.body.numero+'-'+primeiroDigito+''+segundoDigito);
});