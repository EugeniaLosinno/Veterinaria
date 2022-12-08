"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Cliente_1 = require("./Clases/Cliente");
var Paciente_1 = require("./Clases/Paciente");
var Proveedor_1 = require("./Clases/Proveedor");
var Veterinaria_1 = require("./Clases/Veterinaria");
var funciones_1 = require("./funciones");
var arregloCliente = [];
var arregloProveedor = [];
var arregloVeterinaria = [];
var arregloPaciente = [];
var arregloID = [];
var client1 = new Cliente_1["default"]("PAULA", 24945689, 1, false, 0);
arregloCliente.push(client1);
var provee1 = new Proveedor_1["default"]("JUAN", 24965897, 2);
arregloProveedor.push(provee1);
var veterinaria1 = new Veterinaria_1["default"]("LA MASCOTA", "MORENO 58", 3);
arregloVeterinaria.push(veterinaria1);
var mascota1 = new Paciente_1["default"]("PACO", "GATO", false, 1);
arregloPaciente.push(mascota1);
var idCliente; //para poder dar de alta una mascota, necesito el ID del cliente
var opcionMP = -1;
var opcionMS = -1;
var continuar;
var idNuevo;
while (opcionMP != 0) {
    opcionMP = (0, funciones_1.verMenuPrincipal)();
    continuar = -1;
    switch (opcionMP) {
        case 1:
            while (continuar != 0) {
                opcionMS = (0, funciones_1.verMenuSecundario)();
                switch (opcionMS) {
                    case 1:
                        idNuevo = (0, funciones_1.obtenerID)(arregloID);
                        (0, funciones_1.darDeAltaVeterinaria)(arregloVeterinaria, idNuevo);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaVeterinaria)(arregloVeterinaria, arregloID);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        (0, funciones_1.modificarVeterinaria)(arregloVeterinaria);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = 0;
                        break;
                }
            }
            break;
        case 2:
            while (continuar != 0) {
                opcionMS = (0, funciones_1.verMenuSecundarioCliente)();
                switch (opcionMS) {
                    case 1:
                        idNuevo = (0, funciones_1.obtenerID)(arregloID);
                        (0, funciones_1.darDeAltaCliente)(arregloCliente, idNuevo);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaCliente)(arregloCliente, arregloPaciente, arregloID);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        (0, funciones_1.modificarCliente)(arregloCliente);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 4:
                        (0, funciones_1.registarVisita)(arregloCliente);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = 0;
                        break;
                }
            }
            break;
        case 3:
            while (continuar != 0) {
                opcionMS = (0, funciones_1.verMenuSecundario)();
                switch (opcionMS) {
                    case 1:
                        console.table(arregloCliente);
                        idCliente = Number(readlineSync.question("Ingrese la ID del cliente al que le quiere dar de alta una mascota: "));
                        if ((0, funciones_1.estaIDCliente)(arregloCliente, idCliente)) {
                            (0, funciones_1.darDeAltaPaciente)(arregloPaciente, idCliente);
                            console.log("");
                        }
                        else {
                            console.log("La Id ingresa no es un Cliente");
                        }
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaPaciente)(arregloPaciente);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        (0, funciones_1.menuModificarMascota)(arregloPaciente);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = 0;
                        break;
                }
            }
            break;
        case 4:
            while (continuar != 0) {
                opcionMS = (0, funciones_1.verMenuSecundario)();
                switch (opcionMS) {
                    case 1:
                        idNuevo = (0, funciones_1.obtenerID)(arregloID);
                        (0, funciones_1.darDeAltaProveedor)(arregloProveedor, idNuevo);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaProveedor)(arregloProveedor, arregloID);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        (0, funciones_1.modificarProveedor)(arregloProveedor);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = 0;
                        break;
                }
            }
            break;
    }
}
console.log("El programa ha finalizado");
