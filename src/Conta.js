class Conta {
    constructor() {
        this.saldo = 0;
        this.ativo = false;
    }

    getSaldo() {
        return this.saldo;
    }

    ativar() {
        this.ativo = true;
    } 

    inativar() {
        this.ativo = false;
    }

    depositar(valor) {
        if(this.ativo) {
            this.saldo += valor;
        }
    }

    sacar(valor) {
        if(this.ativo && this.saldo - valor >= 0) {
            this.saldo -= valor;
        }
    }
}

module.exports = Conta;