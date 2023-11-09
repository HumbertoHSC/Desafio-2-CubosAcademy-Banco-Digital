const listarContas = require('./listarContas');

const criarConta = require('./criarConta');

const atualizarConta = require('./atualizarContas');

const excluirConta = require('./excluirConta');

const deposito = require('./deposito');

const saque = require('./saques');

const transferencia = require('./transferencias');

const saldo = require('./saldo');

module.exports = {
    listarContas,
    criarConta,
    atualizarConta,
    excluirConta,
    deposito,
    saque,
    transferencia,
    saldo,
};