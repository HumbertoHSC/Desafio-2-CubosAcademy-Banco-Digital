const cubosBank = require('../src/bancodedados')

const excluirConta = async (req, res) => {
    const { numero } = req.params;

    if (!numero) {
        return res.status(401).json({ mensagem: 'O campo numero não foi informado!'});
    };

    const conta = cubosBank.contas.find((conta) => {
        return conta.numero == numero
    });

    if (!conta) {
        return res.status(401).json({ mensagem: 'A conta não foi encontrada!'});
    };

    if(conta.saldo != 0) {
        return res.status(401).json({ mensagem: 'A conta só pode ser removida se o saldo for zero!'});
    };

    cubosBank.contas = cubosBank.contas.filter(item => item !== conta)

    return res.status(204).send();

};

module.exports = excluirConta;