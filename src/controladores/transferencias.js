const cubosBank = require('../src/bancodedados')

const transferencia = async (req, res) => {
    const { numeroContaOrigem, numeroContaDestino, valor, senha } = req.body;

    if (!numeroContaDestino) {
        return res.status(401).json({ mensagem: 'O campo numero da conta de destino não foi informado!'});
    };

    if (!numeroContaOrigem) {
        return res.status(401).json({ mensagem: 'O campo numero da conta de origem não foi informado!'});
    };

    if (!valor || valor <= 0) {
        return res.status(401).json({ mensagem: 'O campo valor de transferencia não foi informado ou não valido!'});
    };

    const contaOrigem = cubosBank.contas.find((conta) => {
        return conta.numero == numeroContaOrigem
    });

    const contaDestino = cubosBank.contas.find((conta) => {
        return conta.numero == numeroContaDestino
    });

    if (contaOrigem.saldo < valor) {
        return res.status(401).json({ mensagem: 'Saldo para saque insuficiente!'});
    }

    if (!contaOrigem) {
        return res.status(401).json({ mensagem: 'A conta de origem não foi encontrada!'});
    };

    if (!contaDestino) {
        return res.status(401).json({ mensagem: 'A conta de destino não foi encontrada!'});
    };


    if (!senha) {
        return res.status(401).json({ mensagem: 'A senha não foi informada!'});
    };

    if (contaOrigem.usuario.senha != senha) {
        return res.status(401).json({ mensagem: 'senha invalida!'});
    }

    let saldo = contaOrigem.saldo - Number(valor);

    let index = numeroContaOrigem - 1

    cubosBank.contas[index].saldo = saldo;

    saldo = contaDestino.saldo + Number(valor);

    index = numeroContaDestino - 1

    cubosBank.contas[index].saldo = saldo;

    return res.status(204).send();

};

module.exports = transferencia;