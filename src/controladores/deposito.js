const cubosBank = require('../src/bancodedados')

const deposito = async (req, res) => {
    const { numero, valor } = req.body;

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

    const saldo = conta.saldo + Number(valor);

    const index = numero - 1

    cubosBank.contas[index].saldo = saldo;

    return res.status(204).send();

};

module.exports = deposito;