"use strict";
exports.__esModule = true;
exports.verMenuSecundarioCliente = exports.verMenuSecundario = exports.verMenuPrincipal = exports.pulsar = exports.modificarProveedor = exports.menuModificarMascota = exports.modificarCliente = exports.modificarVeterinaria = exports.registarVisita = exports.darDeBajaProveedor = exports.darDeBajaPaciente = exports.darDeBajaPacienteCliente = exports.darDeBajaCliente = exports.darDeBajaVeterinaria = exports.darDeBajaIDArreglo = exports.darDeAltaProveedor = exports.darDeAltaPaciente = exports.darDeAltaCliente = exports.darDeAltaVeterinaria = exports.estaIDCliente = exports.obtenerID = exports.estaEnUsoID = void 0;
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
    var estaID = false;
    while (!estaID) {
        idAlta = Math.floor(Math.random() * 60);
        if (!estaEnUsoID(idAlta, arregloID)) {
            arregloID.push(idAlta);
            estaID = true;
        }
    }
    return (idAlta);
}
exports.obtenerID = obtenerID;
//esta funcion me devuelve true si la ID ingresada es de un clinte y falso caso contrario
function estaIDCliente(arregloCliente, idCliente) {
    var laEncontre = false;
    var i = 0;
    while (i < arregloCliente.length && !laEncontre) {
        if (arregloCliente[i].getIdCliente() == idCliente) {
            laEncontre = true;
        }
        else {
            i++;
        }
    }
    return (laEncontre);
}
exports.estaIDCliente = estaIDCliente;
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
    console.table(arregloVeterinaria);
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
    }
}
exports.darDeBajaVeterinaria = darDeBajaVeterinaria;
function darDeBajaCliente(arregloCliente, arregloPaciente, arregloID) {
    console.table(arregloCliente);
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
    console.table(arregloPaciente);
    var estaNombre = false;
    var i = 0;
    var contador = 0;
    while (!estaNombre && i < arregloPaciente.length) {
        var idMascotaBaja = Number(readlineSync.question("Ingrese la ID de la Mascota que desea borra: "));
        for (var j = 0; j < arregloPaciente.length; j++) { //contamos cuantas veces aparece ese ID
            if (idMascotaBaja == arregloPaciente[j].getIdPaciente()) {
                contador++;
            }
        }
        switch (contador) {
            case 0:
                console.log("El ID ingresado no existe");
                estaNombre = true;
                break;
            case 1:
                arregloPaciente.splice(i, 1);
                console.log("El Paciente fue borrado");
                estaNombre = true;
                break;
            default:
                var nombreMascotaBaja = readlineSync.question("Ingrese el nombre de la Mascota que desea borra: ").toUpperCase();
                if ((nombreMascotaBaja == arregloPaciente[i].getNombrePaciente()) && (idMascotaBaja == arregloPaciente[i].getIdPaciente())) {
                    arregloPaciente.splice(i, 1);
                    console.log("El Paciente ".concat(nombreMascotaBaja, " fue borrado"));
                    estaNombre = true;
                }
                else {
                    console.log("El Nombre de la mascota no existe");
                    estaNombre = true;
                }
        }
        i++;
    }
}
exports.darDeBajaPaciente = darDeBajaPaciente;
function darDeBajaProveedor(arregloProveedor, arrrayID) {
    console.table(arregloProveedor);
    var idBajaProveedor = Number(readlineSync.question("Ingrese el ID del proveedor que desee borrar: "));
    var estaID = false;
    var i = 0;
    while (!estaID && i < arregloProveedor.length) {
        if (idBajaProveedor == arregloProveedor[i].getIdProveedor()) {
            arregloProveedor.splice(i, 1);
            console.log("El Proveedor ".concat(idBajaProveedor, " fue borrado"));
            estaID = true;
        }
        else {
            i++;
        }
    }
    if (!estaID) {
        console.log("El ID del Proveedor ingresado no existe");
    }
}
exports.darDeBajaProveedor = darDeBajaProveedor;
function registarVisita(arregloCliente) {
    console.table(arregloCliente);
    var idMascotaVisita = Number(readlineSync.question("Ingrese la ID del Cliente que concurre a la veterinaria: "));
    var estaNombre = false;
    var i = 0;
    while (!estaNombre && i < arregloCliente.length) {
        if (idMascotaVisita == arregloCliente[i].getIdCliente()) {
            arregloCliente[i].contarVisitas();
            arregloCliente[i].calificarVip();
            console.log("Al Cliente se le registro una visita");
            estaNombre = true;
        }
        else {
            i++;
        }
    }
    if (!estaNombre) {
        console.log("El Paciente ingresado no existe");
    }
}
exports.registarVisita = registarVisita;
//FUNCIONES MODIFICACIONES
function modificarVeterinaria(arreglo) {
    console.table(arreglo);
    var i = 0;
    var esta = false;
    var id = Number(readlineSync.question("Ingrese el ID de CLIENTE que desee Modificar: "));
    while (esta == false && i < arreglo.length) {
        if (arreglo[i].getIdVeterinaria() == id) {
            console.table(arreglo[i]);
            console.log("Nombre: ".concat(arreglo[i].getNombreVeterinaria(), " \nDireccion: ").concat(arreglo[i].getDireccionVeterinaria()));
            var modificador = Number(readlineSync.question("\n1)Modificar nombre\n2)Modificar direccion\n"));
            switch (modificador) {
                case 1:
                    var nombreNuevo = (readlineSync.question("Modificando-->".concat(arreglo[i].getNombreVeterinaria(), "\n"))).toUpperCase();
                    arreglo[i].setNombreVeterinaria(nombreNuevo);
                    break;
                case 2:
                    var direccionNueva = (readlineSync.question("Modificando-->".concat(arreglo[i].getDireccionVeterinaria(), "\n"))).toUpperCase();
                    arreglo[i].setDireccionVeterinaria(direccionNueva);
                    break;
                default:
                    break;
            }
            esta = true;
            console.log("Los datos de la Veterinaria modificada:");
            console.table(arreglo[i]);
            console.log("Las Veterinarias activos son:");
            console.table(arreglo);
        }
        else {
            i++;
            if (i == arreglo.length) {
                console.log("No esta el ID");
                break;
            }
        }
    }
}
exports.modificarVeterinaria = modificarVeterinaria;
function modificarCliente(arreglo) {
    console.table(arreglo);
    var i = 0;
    var esta = false;
    var id = Number(readlineSync.question("Ingrese el ID del CLIENTE que desee Modificar: "));
    while (esta == false && i < arreglo.length) {
        if (arreglo[i].getIdCliente() == id) {
            console.table(arreglo[i]);
            console.log("Nombre: ".concat(arreglo[i].getNombrePersona(), " \nTelefono: ").concat(arreglo[i].getTelefonoPersona(), " "));
            var modificador = Number(readlineSync.question("1)Modificar Nombre\n2)modificar Teléfono:\n"));
            switch (modificador) {
                case 1:
                    var nombreNuevo = (readlineSync.question("Modificando-->".concat(arreglo[i].getNombrePersona(), "\n"))).toUpperCase();
                    arreglo[i].setNombrePersona(nombreNuevo);
                    break;
                case 2:
                    var telefonoNuevo = Number((readlineSync.question("Modificando-->".concat(arreglo[i].getTelefonoPersona(), "\n"))));
                    arreglo[i].setTelefonoPersona(telefonoNuevo);
                    break;
                default:
                    break;
            }
            esta = true;
            console.log("Los datos del Cliente modificado:");
            console.table(arreglo[i]);
            console.log("Los Clientes activos son:");
            console.table(arreglo);
        }
        else {
            i++;
            if (i == arreglo.length) {
                console.log("No esta el ID");
                break;
            }
        }
    }
}
exports.modificarCliente = modificarCliente;
function menuModificarMascota(arregloPaciente) {
    console.table(arregloPaciente);
    var i = 0;
    var esta = false;
    var idClienteMascotaModificar = Number(readlineSync.question("Ingrese el ID del Cliente que desee Modificar: "));
    var nombreMascotaModificar = readlineSync.question("Ingrese el nombre de la Mascota que desea Modificar: ").toUpperCase();
    while (!esta && i < arregloPaciente.length) {
        if (arregloPaciente[i].getIdPaciente() == idClienteMascotaModificar && arregloPaciente[i].getNombrePaciente() == nombreMascotaModificar) {
            console.table(arregloPaciente[i]);
            console.log("Nombre: ".concat(arregloPaciente[i].getNombrePaciente(), " \nEspecie: ").concat(arregloPaciente[i].getEspeciePaciente(), " "));
            var modificador = Number(readlineSync.question("1)Modificar Nombre\n2)Modificar Especie:\n"));
            switch (modificador) {
                case 1:
                    var nombreMascotaNew = (readlineSync.question("Modificando-->".concat(arregloPaciente[i].getNombrePaciente(), "\n"))).toUpperCase();
                    arregloPaciente[i].setNombrePaciente(nombreMascotaNew);
                    break;
                case 2:
                    var especieMascotaModif = (readlineSync.question("Modificando-->".concat(arregloPaciente[i].getEspeciePaciente(), "\n"))).toUpperCase();
                    arregloPaciente[i].setEspeciePaciente(especieMascotaModif);
                    var exoticaMascotaModif = void 0;
                    if (especieMascotaModif == "GATO" || especieMascotaModif == "PERRO") {
                        exoticaMascotaModif = false;
                    }
                    else {
                        exoticaMascotaModif = true;
                    }
                    arregloPaciente[i].setExoticaPaciente(exoticaMascotaModif);
                    break;
                default:
                    break;
            }
            esta = true;
            console.log("Los datos del Paciente modificado:");
            console.table(arregloPaciente[i]);
            console.log("Los Pacientes activos son:");
            console.table(arregloPaciente);
        }
        else {
            i++;
            if (i == arregloPaciente.length) {
                console.log("No esta el ID");
                break;
            }
        }
    }
}
exports.menuModificarMascota = menuModificarMascota;
function modificarProveedor(arreglo) {
    console.table(arreglo);
    var i = 0;
    var esta = false;
    var id = Number(readlineSync.question("Ingrese el ID de Proveedor que desee Modificar: "));
    while (esta == false && i < arreglo.length) {
        if (arreglo[i].getIdProveedor() == id) {
            console.table(arreglo[i]);
            console.log("Nombre: ".concat(arreglo[i].getNombrePersona(), " \nDireccion: ").concat(arreglo[i].getTelefonoPersona(), " "));
            var modificador = Number(readlineSync.question("1)Modificar Nombre\n2)Modificar Telefono:\n"));
            switch (modificador) {
                case 1:
                    var nombreNuevo = (readlineSync.question("Modificando-->".concat(arreglo[i].getNombrePersona(), "\n"))).toUpperCase();
                    arreglo[i].setNombrePersona(nombreNuevo);
                    break;
                case 2:
                    var telefonoNuevo = Number((readlineSync.question("Modificando-->".concat(arreglo[i].getTelefonoPersona(), "\n"))));
                    arreglo[i].setTelefonoPersona(telefonoNuevo);
                    break;
                default:
                    break;
            }
            esta = true;
            console.log("Los datos del Proveedor modificado:");
            console.table(arreglo[i]);
            console.log("Los Proveedores activos son:");
            console.table(arreglo);
        }
        else {
            i++;
            if (i == arreglo.length) {
                console.log("No esta el ID");
                break;
            }
        }
    }
}
exports.modificarProveedor = modificarProveedor;
function pulsar(tecla) {
    tecla = Number(readlineSync.question("Para continuar pulse cualquier tecla"));
    console.clear();
    return 0;
}
exports.pulsar = pulsar;
//MENUES
function verMenuPrincipal() {
    console.log();
    console.log("MENU:\n1)MENU VETERINARIAS \n2)MENU CLIENTES \n3)MENU PACIENTES \n4)MENU PROVEEDORES\n0)SALIR");
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
function verMenuSecundarioCliente() {
    console.log();
    console.log("MENU:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n4)VISITA AL VETERINARIO\n0)SALIR");
    var opcionMS = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMS;
}
exports.verMenuSecundarioCliente = verMenuSecundarioCliente;
