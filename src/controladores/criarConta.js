const cubosBank = require('../src/bancodedados')

let contadorConta = 1;

const criarConta = async (req, res) => {
    const { nome, cpf, dataNascimento, telefone, email, senha } = req.body;

    if(cubosBank.contas.some(conta => conta.usuario.cpf === cpf)) {
        return res.status(401).json({ mensagem: 'Já existe uma conta com o cpf informado!'});
    };

    if(cubosBank.contas.some(conta => conta.usuario.email === email)) {
        return res.status(401).json({ mensagem: 'Já existe uma conta com o email informado!'});
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

    const novaConta = {
        numero: contadorConta,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            dataNascimento,
            telefone,
            email,
            senha
        }
    };

    contadorConta += 1;

    cubosBank.contas.push(novaConta);

    return res.status(201).json(novaConta);
};

module.exports = criarConta;