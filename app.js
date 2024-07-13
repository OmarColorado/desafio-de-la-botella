let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 20;




function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`felicitaciones, acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','Hay menos capsulas magicas');
        } else {
            asignarTextoElemento('p','Hay mas capsulas magicas');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
// function verificarIntento() {
//     let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
//     // console.log (typeof(numeroDeUsuario));
//     // console.log(numeroSecreto);
//     // console.log (typeof (numeroSecreto));
//     // console.log(numeroDeUsuario);
//     //lo anterior es para validar que sea un dato string o number y poder compararlos
//     // console.log(numeroDeUsuario === numeroSecreto);
//     console.log(intentos);
//     if (numeroDeUsuario === numeroSecreto){
//         asignarTextoElemento ('p',`felicitaciones acertaste el numero en ${intentos} ${(intentos=== 1) ? 'vez':'veces'}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');
        
//     } else {
//         //el usuario no acerto
//          if (numeroDeUsuario > numeroSecreto) {
//             asignarTextoElemento ('p','el numero secreto es menor');
//         }   else {
//                 asignarTextoElemento ('p', 'el numero secreto es mayor');
                    
//         }
//         intentos++;
//         limpiarCaja();

//     }
//     return;

//     }
    
function limpiarCaja () {
        //let valorCaja = document.querySelector('#valorUsuario');
        //valorCaja.value = '';
        //asi es metodo limpiar caja mas largo. peor se puede hacer mas abreviado
    document.querySelector('#valorUsuario').value ='';
}

// function generarNumeroSecreto() {
//     let numeroGenerado = Math.floor(Math.random()*20)+1;
//     // si el numero generado esta en la lista //
//     if (listaNumerosSorteados.includes(numeroGenerado)) {
//         return generarNumeroSecreto();
//     } else{
//         listaNumerosSorteados.push (numeroGenerado);
//         return numeroGenerado;
//     }
// }
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','juego del frasco magico!');
    asignarTextoElemento('p',`adivina cuantas capsulas tiene el frasco magico, puede ser del 1 hasta  el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
    console.log (numeroSecreto);

}

function reiniciarJuego() {
    //limpiar la caja, 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //iniciar a numero de intentos  
      condicionesIniciales ();
    //deshabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled','true');

    
}
condicionesIniciales();

// let numeroSecreto = 0;
// let intentos = 0;
// let listaNumerosSorteados = [];
// let numeroMaximo = 10;



// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }

// function verificarIntento() {
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
//     if (numeroDeUsuario === numeroSecreto) {
//         asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         //El usuario no acertó.
//         if (numeroDeUsuario > numeroSecreto) {
//             asignarTextoElemento('p','El número secreto es menor');
//         } else {
//             asignarTextoElemento('p','El número secreto es mayor');
//         }
//         intentos++;
//         limpiarCaja();
//     }
//     return;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// function generarNumeroSecreto() {
//     let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

//     console.log(numeroGenerado);
//     console.log(listaNumerosSorteados);
//     //Si ya sorteamos todos los números
//     if (listaNumerosSorteados.length == numeroMaximo) {
//         asignarTextoElemento('p','Ya se sortearon todos los números posibles');
//     } else {
//         //Si el numero generado está incluido en la lista 
//         if (listaNumerosSorteados.includes(numeroGenerado)) {
//             return generarNumeroSecreto();
//         } else {
//             listaNumerosSorteados.push(numeroGenerado);
//             return numeroGenerado;
//         }
//     }
// }

// function condicionesIniciales() {
//     asignarTextoElemento('h1','Juego del número secreto!');
//     asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
//     numeroSecreto = generarNumeroSecreto();
//     intentos = 1;
//     console.log(numeroSecreto);
// }

// function reiniciarJuego() {
//     //limpiar caja
//     limpiarCaja();
//     //Indicar mensaje de intervalo de números 
//     //Generar el número aleatorio
//     //Inicializar el número intentos
//     condicionesIniciales();
//     //Deshabilitar el botón de nuevo juego
//     document.querySelector('#reiniciar').setAttribute('disabled','true');
    
// }

// condicionesIniciales();