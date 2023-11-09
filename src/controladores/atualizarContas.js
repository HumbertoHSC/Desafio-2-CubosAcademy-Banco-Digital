const cubosBank = require('../src/bancodedados');

const atualizarConta = async (req, res) => {
    const { nome, cpf, dataNascimento, telefone, email, senha } = req.body;

    const { numero } = req.params;

    const conta = cubosBank.contas.find((conta) => {
        return conta.numero == numero
    });

    if (!numero) {
        return res.status(401).json({ mensagem: 'O campo numero não foi informado!'});
    };

    if (!conta) {
        return res.status(401).json({ mensagem: 'A conta não foi encontrada!'});
    };

    if (!nome) {
        return res.status(401).json({ mensagem: 'O campo nome não foi informado!'});
    };

    if (!cpf) {
        return res.status(401).json({ mensagem: 'O campo cpf não foi informado!'});
    };

    if (!dataNascimento) {
        return res.status(401).json({ mensagem: 'O campo data de nascimento não foi informado!'});
    };

    if (!telefone) {
        return res.status(401).json({ mensagem: 'O campo telefone não foi informado!'});
    };

    if (!email) {
        return res.status(401).json({ mensagem: 'O campo email não foi informado!'});
    };

    if (!senha) {
        return res.status(401).json({ mensagem: 'O campo senha não foi informado!'});
    };

    if(cubosBank.contas.some(conta => conta.usuario.cpf === cpf)) {
        return res.status(401).json({ mensagem: 'Já existe uma conta com o cpf informado!'});
    };

    if(cubosBank.contas.some(conta => conta.usuario.email === email)) {
        return res.status(401).json({ mensagem: 'Já existe uma conta com o email informado!'});
    };

    const novoUsuario = {
        nome,
        cpf,
        dataNascimento,
        telefone,
        email,
        senha
    };

    cubosBank.contas.splice(conta.usuario, 1, novoUsuario);

    return res.status(204).send();

};

module.exports = atualizarConta;