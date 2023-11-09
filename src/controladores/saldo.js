const cubosBank = require('../src/bancodedados')

const saldo = async (req, res) => {
    const numeroConta  = req.query.numeroConta;
    const senha = req.query.senha;

    if (!numeroConta) {
        return res.status(401).json({ mensagem: 'O campo numero da conta não foi informado!'});
    };

    if (!senha) {
        return res.status(401).json({ mensagem: 'O campo senha da conta não foi informado!'});
    };

    const conta = cubosBank.contas.find((conta) => {
        return conta.numero == numeroConta
    });

    if (!conta) {
        return res.status(401).json({ mensagem: 'A conta de origem não foi encontrada!'});
    };

    if (conta.usuario.senha != senha) {
        return res.status(401).json({ mensagem: 'senha invalida!'});
    };

    return res.status(201).json(conta.saldo);

};

module.exports = saldo;