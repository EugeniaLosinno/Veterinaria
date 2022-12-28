"use strict";
exports.__esModule = true;
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
var client1 = new Cliente_1["default"]("paula", 24945689, 1, false, 2);
arregloCliente.push(client1);
var provee1 = new Proveedor_1["default"]("juan", 74965897, 2);
var provee2 = new Proveedor_1["default"]("miguel", 54965897, 3);
var provee3 = new Proveedor_1["default"]("federico", 24965837, 4);
arregloProveedor.push(provee1, provee2, provee3);
var veterinaria1 = new Veterinaria_1["default"]("La mascota", "Moreno 58", 3);
var veterinaria2 = new Veterinaria_1["default"]("Ayacucho", "Sarmiento 438", 4);
var veterinaria3 = new Veterinaria_1["default"]("Piedritas", "Belgrano 432", 67);
arregloVeterinaria.push(veterinaria1);
arregloVeterinaria.push(veterinaria2);
arregloVeterinaria.push(veterinaria3);
var mascota1 = new Paciente_1["default"]("Paco", "GATO", false, 1);
arregloPaciente.push(mascota1);
console.table(arregloCliente);
console.table(arregloProveedor);
console.table(arregloVeterinaria);
console.table(arregloPaciente);
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
                        console.table(arregloVeterinaria);
                        var idNuevo_1 = (0, funciones_1.obtenerID)(arregloID);
                        (0, funciones_1.darDeAltaVeterinaria)(arregloVeterinaria, idNuevo_1);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 2:
                        console.table(arregloVeterinaria);
                        (0, funciones_1.bajaVeterinarias)(arregloVeterinaria);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        (0, funciones_1.modificarVeterinaria)(arregloVeterinaria);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                }
            }
            break;
        case 2:
            while (continuar != 0) {
                opcionMS = (0, funciones_1.verMenuSecundario)();
                switch (opcionMS) {
                    case 1:
                        console.table(arregloCliente);
                        idNuevo = (0, funciones_1.obtenerID)(arregloID);
                        (0, funciones_1.darDeAltaCliente)(arregloCliente, idNuevo);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 2:
                        console.table(arregloCliente);
                        (0, funciones_1.bajaClientes)(arregloCliente);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        (0, funciones_1.modificarCliente)(arregloCliente);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                }
                break;
            }
            break;
        case 3:
            while (continuar != 0) {
                opcionMS = (0, funciones_1.verMenuSecundario)();
                switch (opcionMS) {
                    case 1:
                        idNuevo = (0, funciones_1.buscarIdCliente)(arregloCliente);
                        (0, funciones_1.darDeAltaPaciente)(arregloPaciente, idNuevo);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 2:
                        (0, funciones_1.bajaPacientes)(arregloPaciente);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = (0, funciones_1.pulsar)(continuar);
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
                        (0, funciones_1.bajaProveedores)(arregloProveedor);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 3:
                        (0, funciones_1.modificarProveedor)(arregloProveedor);
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                    case 0:
                        continuar = (0, funciones_1.pulsar)(continuar);
                        break;
                }
                break;
            }
        case 0:
            continuar = 0;
            break;
    }
}
console.log("El programa ha finalizado");
