const cubosBank = require('../src/bancodedados')

const listarContas = async (req, res) => {
    const senha = req.query.senha_banco;

    if (!senha) {
        return res.status(401).json({ mensagem: 'Senha não informada' });
    }

    if (senha !== 'Cubos123Bank') {
        return res.status(401).json({ mensagem: 'Senha incorreta' });
    }

    return res.status(200).json(cubosBank.contas)
};

module.exports = listarContas;