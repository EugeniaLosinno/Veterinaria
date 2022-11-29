"use strict";
exports.__esModule = true;
exports.verMenuSecundario = exports.verMenuPrincipal = exports.bajaProveedores = exports.bajaPacientes = exports.bajaClientes = exports.bajaVeterinarias = exports.darDeAltaProveedor = exports.buscarIdCliente = exports.darDeAltaPaciente = exports.darDeAltaCliente = exports.darDeAltaVeterinaria = exports.obtenerID = void 0;
var readlineSync = require("readline-sync");
var Cliente_1 = require("./Clases/Cliente");
var Paciente_1 = require("./Clases/Paciente");
var Proveedor_1 = require("./Clases/Proveedor");
var Veterinaria_1 = require("./Clases/Veterinaria");
//La función estaEnUsoID me devuelve Verdadero si la ID esta en uso y falso caso contrario
/* export function estaEnUsoID(idAlta:number,arregloCliente: Array<Cliente>,arregloProveedor:Array<Proveedor>,arregloVeterinaria:Array<Veterinaria>):boolean {
    let laEncontre : boolean = false;
    let i : number = 0;

    //Busco si el ID se encuentra asignado a un Cliente
    while (i < arregloCliente.length && !laEncontre){
        if (arregloCliente[i].getIdCliente() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }
    
    //Busco si el ID se encuentra asignado a un Proveedor
    i = 0;
    while (i < arregloProveedor.length && !laEncontre){
        if (arregloProveedor[i].getIdProveedor() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }

    //Busco si el ID se encuentra asignado a uuna veterinaria
    i = 0;
    while (i < arregloVeterinaria.length && !laEncontre){
        if (arregloVeterinaria[i].getIdVeterinaria() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }

    return(laEncontre);
} */
//La funcion obtenerID me devuelve una ID que no este siendo usado
function obtenerID(arreglo) {
    var idAlta = 0;
    var estaID = true;
    while (estaID) {
        idAlta = Math.floor(Math.random() * 60);
        for (var i = 0; i < arreglo.length; i++) {
            if (idAlta != arreglo[i]) {
                arreglo.push(idAlta);
                estaID = false;
            }
            else {
                estaID = true;
            }
        }
    }
    return (idAlta);
}
exports.obtenerID = obtenerID;
/*
export function darDeAltaCliente (arregloCliente: Array<Cliente>, idClienteAlta:number):void {
    // let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ");
    //let telefonoClienteAlta : number = readlineSync.question("Ingrese el teléfono del Cliente a dar de alta: ");
     
    let nombreClienteAlta : string = "Laura";
    let telefonoClienteAlta : number = 2494897563;

    let newCliente = new Cliente(nombreClienteAlta,telefonoClienteAlta,idClienteAlta,false,0);
    arregloCliente.push(newCliente);
}





*/
function darDeAltaVeterinaria(arregloVeterinaria, id) {
    // let nombreVeterinariaAlta : string = readlineSync.question("Ingrese el nombre de la Veterinaria a dar de alta: ");
    //let direccionVeterinariaAlta : string = readlineSync.question("Ingrese la dirección de la Veterinaria a dar de alta: ");
    var nombreVeterinariaAlta = "Fernando";
    var direccionVeterinariaAlta = "San Martín N° 1578";
    var newVeterinaria = new Veterinaria_1["default"](nombreVeterinariaAlta, direccionVeterinariaAlta, id);
    arregloVeterinaria.push(newVeterinaria);
}
exports.darDeAltaVeterinaria = darDeAltaVeterinaria;
function darDeAltaCliente(arregloCliente, idClienteAlta) {
    // let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ");
    //let telefonoClienteAlta : number = readlineSync.question("Ingrese el teléfono del Cliente a dar de alta: ");
    var nombreClienteAlta = "Laura";
    var telefonoClienteAlta = 2494897563;
    var newCliente = new Cliente_1["default"](nombreClienteAlta, telefonoClienteAlta, idClienteAlta, false, 0);
    arregloCliente.push(newCliente);
}
exports.darDeAltaCliente = darDeAltaCliente;
function darDeAltaPaciente(arregloPaciente, idClienteMascota) {
    //let nombrePacienteAlta : string = readlineSync.question("Ingrese el nombre de la Mascota a dar de alta: ");
    //let especiePacienteAlta : string = (readlineSync.question("Ingrese la especie de la Mascota a dar de alta: ")).toUpperCase();
    var nombreMascotaAlta = "Morena";
    var especieMascotaAlta = "GATO";
    var exoticaMascotaAlta;
    if (especieMascotaAlta == "GATO" || especieMascotaAlta == "PERRO") {
        exoticaMascotaAlta = false;
    }
    else {
        exoticaMascotaAlta = true;
    }
    var newPaciente = new Paciente_1["default"](nombreMascotaAlta, especieMascotaAlta, exoticaMascotaAlta, idClienteMascota);
    arregloPaciente.push(newPaciente);
}
exports.darDeAltaPaciente = darDeAltaPaciente;
function buscarIdCliente(arreglo) {
    for (var i = 0; i < arreglo.length; i++) { //listar y mostrar clientes id y nombre
        console.log(arreglo[i].getIdCliente() + arreglo[i].getNombrePersona());
    }
    var estaID = false;
    while (!estaID) {
        var idClienteMascota = Number(readlineSync.question("Ingrese la ID del Clienta al que le desea dar de alta una Mascota: "));
        for (var i = 0; i < arreglo.length; i++) {
            if (idClienteMascota == arreglo[i].getIdCliente()) {
                estaID = true;
                return idClienteMascota;
            }
            console.log("La Id ingresa no es un Cliente");
        }
    }
    return 0; //para evitar error en la funcion
}
exports.buscarIdCliente = buscarIdCliente;
function darDeAltaProveedor(arregloProveedor, idProveedorAlta) {
    // let nombreProveedorAlta : string = readlineSync.question("Ingrese el nombre del Proveedor a dar de alta: ");
    //let telefonoProveedorAlta : number = readlineSync.question("Ingrese el teléfono del Proveedor a dar de alta: ");
    var nombreProveedorAlta = "Fernando";
    var telefonoProveedorAlta = 2494897563;
    var newProveedor = new Proveedor_1["default"](nombreProveedorAlta, telefonoProveedorAlta, idProveedorAlta);
    arregloProveedor.push(newProveedor);
}
exports.darDeAltaProveedor = darDeAltaProveedor;
//---FUNCIONES BAJAS
function bajaVeterinarias(arreglo) {
    var id = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (var i = 0; i < arreglo.length; i++) {
        if (id == arreglo[i].getIdVeterinaria()) {
            arreglo.splice(i, 1);
            break;
        }
        else {
            console.log("ID INEXISTENTE");
        }
    }
}
exports.bajaVeterinarias = bajaVeterinarias;
function bajaClientes(arreglo) {
    var id = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (var i = 0; i < arreglo.length; i++) {
        if (id == arreglo[i].getIdCliente()) {
            arreglo.splice(i, 1);
            break;
        }
        else {
            console.log("ID INEXISTENTE");
        }
    }
}
exports.bajaClientes = bajaClientes;
function bajaPacientes(arreglo) {
    var id = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (var i = 0; i < arreglo.length; i++) {
        if (id == arreglo[i].getIdPaciente()) {
            arreglo.splice(i, 1);
            break;
        }
        else {
            console.log("ID INEXISTENTE");
        }
    }
}
exports.bajaPacientes = bajaPacientes;
function bajaProveedores(arreglo) {
    var id = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (var i = 0; i < arreglo.length; i++) {
        if (id == arreglo[i].getIdProveedor()) {
            arreglo.splice(i, 1);
            break;
        }
        else {
            console.log("ID INEXISTENTE");
        }
    }
}
exports.bajaProveedores = bajaProveedores;
function verMenuPrincipal() {
    console.log("MENU:\n1)MENU VETERINARIAS \n2)MENU CLIENTES \n3)MENU PACIENTES \n4)MENU PROVEEDORES");
    var opcionMP = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMP;
}
exports.verMenuPrincipal = verMenuPrincipal;
function verMenuSecundario() {
    console.log("MENU:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n0)SALIR");
    var opcionMS = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMS;
}
exports.verMenuSecundario = verMenuSecundario;
