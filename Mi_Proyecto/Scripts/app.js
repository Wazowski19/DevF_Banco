var lisCuentas = [
    cuenta1 = new Cuentas("Arnoldo Gomez","123", 700),
    cuenta2 = new Cuentas("Sandra Garay","SoyUnCacahuate", 700),
    cuenta3 = new Cuentas("René Salas","AlceMexicano1", 700),
    cuenta4 = new Cuentas("Lila Lu", "LilaLupp", 700),
    cuenta5 = new Cuentas("Andres MX","AndresChasps", 700)
];

var selectUser = document.getElementById("usuario");


for(index in lisCuentas){
    selectUser.options[selectUser.options.length] = new Option(lisCuentas[index].getNombre(), lisCuentas[index].getId());
}


function comparar(e){
    e.preventDefault();
    var passwordUsuario = document.getElementById("password").value;
    var usuarioSeleccionado = selectUser.value;
    if(lisCuentas[usuarioSeleccionado - 1].getPassword() == passwordUsuario){
        console.log("Password correcto");
        const formularioLogin = document.getElementById("login");
        formularioLogin.style.display = "none";
        const botones = document.getElementById("opcionesUsuario");
        botones.style.display = "flex";
        const interaccion = document.getElementById("interaccion");
        interaccion.style.display = "flex";
        const interaccionMonto = document.getElementById("interaccionMonto");
        interaccionMonto.style.display = "flex";
    }else{
        console.log("Password incorrecto");
        document.getElementById("incorrecto").innerHTML = "Password incorrecto, vuelva a intentar";
        document.getElementById("password").value = "";
    }
}

function movimientos(e, option){
    
    var usuarioSeleccionado = selectUser.value;
    
    switch(option){
        case 1:   
            e.preventDefault();
            document.getElementById("saldo").innerHTML = "$" + lisCuentas[usuarioSeleccionado - 1].getSaldo();
            console.log("Consultando");
            break;
        case 2: 
            e.preventDefault();
            var monto = document.getElementById("monto");
            var cantidad = monto.value;
            var bandera = lisCuentas[usuarioSeleccionado - 1].retirar(cantidad);
            if(bandera == 1){
                document.getElementById("saldo").innerHTML = "No tienes suficiente dinero";
                break;
            }else{
                document.getElementById("saldo").innerHTML = "$" + lisCuentas[usuarioSeleccionado - 1].getSaldo();
                monto.value = "0";
                console.log("Retirando");
                break;
            }
            
            
            break;
        case 3: 
            e.preventDefault();
            var monto = document.getElementById("monto");
            var cantidad = monto.value;
            var bandera = lisCuentas[usuarioSeleccionado - 1].depositar(cantidad);
            if(bandera == 1){
                document.getElementById("saldo").innerHTML = "No se puede depositar esa cantidad";
                break;
            }else{
                document.getElementById("saldo").innerHTML = "$" + lisCuentas[usuarioSeleccionado - 1].getSaldo();
                monto.value = "0";
                console.log("Depositando");
                break;
            }
            
            
            
        default: 
            console.log("Default");
    }
}