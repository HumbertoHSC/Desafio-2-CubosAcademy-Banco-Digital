const express = require('express');

const controles = require('../controladores/controles');

const rotas = express();

rotas.get('/contas', controles.listarContas);
rotas.get('/contas/saldo', controles.saldo)

rotas.put('/contas/:numero/usuario', controles.atualizarConta);

rotas.delete('/contas/:numero', controles.excluirConta);

rotas.post('/contas', controles.criarConta);
rotas.post('/transacoes/depositar', controles.deposito);
rotas.post('/transacoes/sacar', controles.saque);
rotas.post('/transacoes/transferir', controles.transferencia);

module.exports = rotas;