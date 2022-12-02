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
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaVeterinaria)(arregloVeterinaria, arregloID);
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 3:
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 0:
                        continuar = 0;
                        break;
                }
            }
            break;
        case 2:
            while (continuar != 0) {
                opcionMS = (0, funciones_1.verMenuSecundario)();
                switch (opcionMS) {
                    case 1:
                        idNuevo = (0, funciones_1.obtenerID)(arregloID);
                        (0, funciones_1.darDeAltaCliente)(arregloCliente, idNuevo);
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaCliente)(arregloCliente, arregloPaciente, arregloID);
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 3:
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
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
                        idNuevo = (0, funciones_1.obtenerID)(arregloID);
                        (0, funciones_1.darDeAltaPaciente)(arregloPaciente, idNuevo);
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaPaciente)(arregloPaciente);
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 3:
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
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
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 2:
                        (0, funciones_1.darDeBajaProveedor)(arregloProveedor, arregloID);
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
                        break;
                    case 3:
                        console.log("");
                        continuar = Number(readlineSync.question("Para continuar apriete cualquier numero: "));
                        continuar = 0;
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
