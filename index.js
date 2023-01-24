let cuentas = {
    cuenta1: {
      nombre: "cuenta 1",
      contraseña: "1234",
      saldo: 200
    },
    cuenta2: {
      nombre: "cuenta 2",
      contraseña: "5678",
      saldo: 290
    },
    cuenta3: {
      nombre: "cuenta 3",
      contraseña: "abcd",
      saldo: 67
    }
  };
  
  function consultarSaldo() {
    let cuenta = document.getElementById("cuenta").value;
    let password = document.getElementById("password").value;
    let resultado = document.getElementById("resultado");
    
    if (cuentas[cuenta].contraseña === password) {
      resultado.innerHTML = "El saldo de la " + cuentas[cuenta].nombre + " es de $" + cuentas[cuenta].saldo;
    } else {
      resultado.innerHTML = "La contraseña es incorrecta";
    }
  }
  
  function depositar() {
    let cuenta = document.getElementById("cuenta").value;
    let password = document.getElementById("password").value;
    let resultado = document.getElementById("resultado");
    
    if (cuentas[cuenta].contraseña === password) {
      let monto = prompt("Ingrese el monto a depositar:");
      if (cuentas[cuenta].saldo + parseInt(monto) > 990) {
        resultado.innerHTML = "El límite de saldo es de $990. No se puede depositar esa cantidad.";
      } else {
        cuentas[cuenta].saldo += parseInt(monto);
        resultado.innerHTML = "El nuevo saldo de la " + cuentas[cuenta].nombre + " es de $" + cuentas[cuenta].saldo;
      }
    } else {
      resultado.innerHTML = "La contraseña es incorrecta";
    }
  }
  
  function retirar() {
    let cuenta = document.getElementById("cuenta").value;
    let password = document.getElementById("password").value;
    let resultado = document.getElementById("resultado");
    
    if (cuentas[cuenta].contraseña === password) {
      let monto = prompt("Ingrese el monto a retirar:");
      if (cuentas[cuenta].saldo - parseInt(monto) < 10) {
        resultado.innerHTML = "No se puede dejar el saldo en menos de $10. No se puede retirar esa cantidad.";
      } else {
        cuentas[cuenta].saldo -= parseInt(monto);
        resultado.innerHTML = "El nuevo saldo de la " + cuentas[cuenta].nombre + " es de $" + cuentas[cuenta].saldo;
      }
    } else {
      resultado.innerHTML = "La contraseña es incorrecta";
    }
  }
  