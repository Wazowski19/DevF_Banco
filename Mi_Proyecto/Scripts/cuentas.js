class Cuentas{
    static contadorCuentas = 0;
    constructor(nombre, password, saldo){
        this._id = ++Cuentas.contadorCuentas;
        this._nombre = nombre;
        this._password = password;
        this._saldo = saldo;
    }

    depositar(monto){
        if(((parseFloat(this._saldo) + parseFloat(monto)) > 990)){
            return 1;
        }else{
            var total = parseFloat(this._saldo) + parseFloat(monto);
            this._saldo = total;    
        }
        
    }

    retirar(monto){
        if(((parseFloat(this._saldo) - parseFloat(monto)) < 10)){
            return 1;
        }else{
            var total = parseFloat(this._saldo) - parseFloat(monto);
            this._saldo = total;

        }
    }

    setNombre(nombre){
        this._nombre = nombre;
    }

    setPassword(password){
        this._password = password;
    }

    setSaldo(saldo){
        this._saldo = saldo;
    }

    getId(){
        return this._id;
    }

    getNombre(){
        return this._nombre;
    }

    getPassword(){
        return this._password;
    }

    getSaldo(){
        return this._saldo;
    }

    toString(){
        return `El usuario ${this._id}: ${this._nombre} tiene un saldo de: ${this._saldo}`;
    }
}