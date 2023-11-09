const cubosBank = require('../src/bancodedados')

const saque = async (req, res) => {
    const { numero, valor, senha } = req.body;

    if (!numero) {
        return res.status(401).json({ mensagem: 'O campo numero da conta não foi informado!'});
    };

    if (!valor || valor <= 0) {
        return res.status(401).json({ mensagem: 'O campo valor de deposito não foi informado ou não valido!'});
    };

    const conta = cubosBank.contas.find((conta) => {
        return conta.numero == numero
    });

    if (!conta) {
        return res.status(401).json({ mensagem: 'A conta não foi encontrada!'});
    };

    if (!senha) {
        return res.status(401).json({ mensagem: 'A senha não foi informada!'});
    };

    if (conta.usuario.senha != senha) {
        return res.status(401).json({ mensagem: 'senha invalida!'});
    }

    if (conta.saldo < valor) {
        return res.status(401).json({ mensagem: 'Saldo para saque insuficiente!'});
    }

    const saldo = conta.saldo - Number(valor);

    const index = numero - 1

    cubosBank.contas[index].saldo = saldo;

    return res.status(204).send();

};

module.exports = saque;