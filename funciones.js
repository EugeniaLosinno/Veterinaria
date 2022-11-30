"use strict";
exports.__esModule = true;
exports.verMenuSecundario = exports.verMenuPrincipal = exports.darDeBajaProveedor = exports.darDeBajaPaciente = exports.darDeBajaPacienteCliente = exports.darDeBajaCliente = exports.darDeBajaVeterinaria = exports.darDeBajaIDArreglo = exports.buscarIdCliente = exports.darDeAltaProveedor = exports.darDeAltaPaciente = exports.darDeAltaCliente = exports.darDeAltaVeterinaria = exports.obtenerID = exports.estaEnUsoID = void 0;
var readlineSync = require("readline-sync");
var Cliente_1 = require("./Clases/Cliente");
var Paciente_1 = require("./Clases/Paciente");
var Proveedor_1 = require("./Clases/Proveedor");
var Veterinaria_1 = require("./Clases/Veterinaria");
//La función estaEnUsoID me devuelve Verdadero si la ID esta en uso y falso caso contrario. Lo busca en el arreglo de ID
function estaEnUsoID(idAlta, arregloID) {
    var laEncontre = false;
    var i = 0;
    while (i < arregloID.length && !laEncontre) {
        if (arregloID[i] == idAlta) {
            laEncontre = true;
        }
        else {
            i++;
        }
    }
    return (laEncontre);
}
exports.estaEnUsoID = estaEnUsoID;
//La funcion obtenerID me devuelve una ID que no este siendo usado
function obtenerID(arregloID) {
    var idAlta = 0;
    var estaID = true;
    while (estaID) {
        idAlta = Math.floor(Math.random() * 60);
        if (!estaEnUsoID(idAlta, arregloID)) {
            arregloID.push(idAlta);
            estaID = false;
        }
    }
    return (idAlta);
}
exports.obtenerID = obtenerID;
function darDeAltaVeterinaria(arregloVeterinaria, id) {
    var nombreVeterinariaAlta = readlineSync.question("Ingrese el nombre de la Veterinaria a dar de alta: ").toUpperCase();
    var direccionVeterinariaAlta = readlineSync.question("Ingrese la direccion de la Veterinaria a dar de alta: ").toUpperCase();
    var newVeterinaria = new Veterinaria_1["default"](nombreVeterinariaAlta, direccionVeterinariaAlta, id);
    arregloVeterinaria.push(newVeterinaria);
    console.log("Se dió de alta la Veterinaria:");
    console.table(newVeterinaria);
    console.log("Las Veterinarias activas son:");
    console.table(arregloVeterinaria);
}
exports.darDeAltaVeterinaria = darDeAltaVeterinaria;
function darDeAltaCliente(arregloCliente, idClienteAlta) {
    var nombreClienteAlta = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ").toUpperCase();
    var telefonoClienteAlta = Number(readlineSync.question("Ingrese el telefono del Cliente a dar de alta: "));
    var newCliente = new Cliente_1["default"](nombreClienteAlta, telefonoClienteAlta, idClienteAlta, false, 0);
    arregloCliente.push(newCliente);
    console.log("Se dió de alta al Cliente:");
    console.table(newCliente);
    console.log("Los Clientes activos son:");
    console.table(arregloCliente);
}
exports.darDeAltaCliente = darDeAltaCliente;
function darDeAltaPaciente(arregloPaciente, idClienteMascota) {
    var nombreMascotaAlta = readlineSync.question("Ingrese el nombre de la Mascota a dar de alta: ").toUpperCase();
    var especieMascotaAlta = readlineSync.question("Ingrese la especie de la Mascota a dar de alta: ").toUpperCase();
    var exoticaMascotaAlta;
    if (especieMascotaAlta == "GATO" || especieMascotaAlta == "PERRO") {
        exoticaMascotaAlta = false;
    }
    else {
        exoticaMascotaAlta = true;
    }
    var newPaciente = new Paciente_1["default"](nombreMascotaAlta, especieMascotaAlta, exoticaMascotaAlta, idClienteMascota);
    arregloPaciente.push(newPaciente);
    console.log("Se dió de alta al Paciente:");
    console.table(newPaciente);
    console.log("Los Pacientes activos son:");
    console.table(arregloPaciente);
}
exports.darDeAltaPaciente = darDeAltaPaciente;
function darDeAltaProveedor(arregloProveedor, idProveedorAlta) {
    var nombreProveedorAlta = readlineSync.question("Ingrese el nombre del Proveedor a dar de alta: ").toUpperCase();
    var telefonoProveedorAlta = Number(readlineSync.question("Ingrese el telefono del Proveedor a dar de alta: "));
    var newProveedor = new Proveedor_1["default"](nombreProveedorAlta, telefonoProveedorAlta, idProveedorAlta);
    arregloProveedor.push(newProveedor);
    console.log("Se dió de alta al Proveedor:");
    console.table(newProveedor);
    console.log("Las Proveedore activos son:");
    console.table(arregloProveedor);
}
exports.darDeAltaProveedor = darDeAltaProveedor;
function buscarIdCliente(arregloCliente) {
    //listar y mostrar clientes id y nombre
    console.log();
    console.log("Listado de Clientes");
    for (var i = 0; i < arregloCliente.length; i++) {
        console.log(arregloCliente[i].getIdCliente() + " " + arregloCliente[i].getNombrePersona());
    }
    var estaID = false;
    while (!estaID) {
        var idClienteMascota = Number(readlineSync.question("Ingrese la ID del Clienta al que le desea dar de alta una Mascota: "));
        for (var i = 0; i < arregloCliente.length; i++) {
            if (idClienteMascota == arregloCliente[i].getIdCliente()) {
                estaID = true;
                return idClienteMascota;
            }
            console.log("La Id ingresa no es un Cliente");
        }
    }
    return 0; //para evitar error en la funcion
}
exports.buscarIdCliente = buscarIdCliente;
//---Funciones para dar las bajas
function darDeBajaIDArreglo(id, arregloID) {
    var i = 0;
    while (i < arregloID.length) {
        if (id == arregloID[i]) {
            arregloID.splice(i, 1);
        }
        else {
            i++;
        }
    }
}
exports.darDeBajaIDArreglo = darDeBajaIDArreglo;
function darDeBajaVeterinaria(arregloVeterinaria, arregloID) {
    var idBajaVeterinaria = Number(readlineSync.question("Ingrese el ID de Veterinaria que desee borrar: "));
    var estaID = false;
    var i = 0;
    while (!estaID && i < arregloVeterinaria.length) {
        if (idBajaVeterinaria == arregloVeterinaria[i].getIdVeterinaria()) {
            arregloVeterinaria.splice(i, 1);
            console.log("La Vetrinaria ".concat(idBajaVeterinaria, " fue borrada"));
            darDeBajaIDArreglo(idBajaVeterinaria, arregloID);
            estaID = true;
        }
        else {
            i++;
        }
    }
    if (!estaID) {
        console.log("La ID de Veterinaria ingresada no existe");
        console.table(arregloVeterinaria);
    }
}
exports.darDeBajaVeterinaria = darDeBajaVeterinaria;
function darDeBajaCliente(arregloCliente, arregloPaciente, arregloID) {
    var idBajaCliente = Number(readlineSync.question("Ingrese el ID del Cliente que desee borrar: "));
    var estaID = false;
    var i = 0;
    while (!estaID && i < arregloCliente.length) {
        if (idBajaCliente == arregloCliente[i].getIdCliente()) {
            arregloCliente.splice(i, 1);
            console.log("El Cliente ".concat(idBajaCliente, " fue borrado"));
            darDeBajaIDArreglo(idBajaCliente, arregloID);
            darDeBajaPacienteCliente(arregloPaciente, idBajaCliente);
            estaID = true;
        }
        else {
            i++;
        }
    }
    if (!estaID) {
        console.log("La ID del Cliente ingresado no existe");
        console.table(arregloCliente);
    }
}
exports.darDeBajaCliente = darDeBajaCliente;
function darDeBajaPacienteCliente(arregloPaciente, idClienteBaja) {
    for (var i = 0; i < arregloPaciente.length; i++) {
        if (idClienteBaja == arregloPaciente[i].getIdPaciente()) {
            arregloPaciente.splice(i, 1);
        }
    }
}
exports.darDeBajaPacienteCliente = darDeBajaPacienteCliente;
function darDeBajaPaciente(arregloPaciente) {
    /// agregar ID
    var nombreMascotaBaja = readlineSync.question("Ingrese el nombre de la Mascota que desea borra: ").toUpperCase();
    var estaNombre = false;
    var i = 0;
    while (!estaNombre && i < arregloPaciente.length) {
        if (nombreMascotaBaja == arregloPaciente[i].getNombrePaciente()) {
            arregloPaciente.splice(i, 1);
            console.log("El Paciente ".concat(nombreMascotaBaja, " fue borrado"));
            estaNombre = true;
        }
        else {
            i++;
        }
    }
    if (!estaNombre) {
        console.log("El nombre del Paciente ingresado no existe");
        console.table(arregloPaciente);
    }
}
exports.darDeBajaPaciente = darDeBajaPaciente;
function darDeBajaProveedor(arregloProveedor, arrrayID) {
    var idBajaProveedor = Number(readlineSync.question("Ingrese el ID del proveedor que desee borrar: "));
    var estaNombre = false;
    var i = 0;
    while (!estaNombre && i < arregloProveedor.length) {
        if (idBajaProveedor == arregloProveedor[i].getIdProveedor()) {
            arregloProveedor.splice(i, 1);
            console.log("El Proveedor ".concat(idBajaProveedor, " fue borrado"));
            estaNombre = true;
        }
        else {
            i++;
        }
    }
    if (!estaNombre) {
        console.log("El ID del Proveedor ingresado no existe");
        console.table(arregloProveedor);
    }
}
exports.darDeBajaProveedor = darDeBajaProveedor;
function verMenuPrincipal() {
    console.log();
    console.log("MENU:\n1)MENU VETERINARIAS \n2)MENU CLIENTES \n3)MENU PACIENTES \n4)MENU PROVEEDORES \n0)SALIR");
    var opcionMP = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMP;
}
exports.verMenuPrincipal = verMenuPrincipal;
function verMenuSecundario() {
    console.log();
    console.log("MENU:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n0)SALIR");
    var opcionMS = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMS;
}
exports.verMenuSecundario = verMenuSecundario;
