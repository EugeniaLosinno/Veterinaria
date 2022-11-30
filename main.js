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
var client1 = new Cliente_1["default"]("paula", 24945689, 1, false, 0);
arregloCliente.push(client1);
var provee1 = new Proveedor_1["default"]("juan", 24965897, 2);
arregloProveedor.push(provee1);
var veterinaria1 = new Veterinaria_1["default"]("la mascota", "moreno 58", 3);
var veterinaria2 = new Veterinaria_1["default"]("Ayacucho", "sarmiento 438", 4);
var veterinaria3 = new Veterinaria_1["default"]("fer", "Belgrano 432", 67);
arregloVeterinaria.push(veterinaria1);
arregloVeterinaria.push(veterinaria2);
arregloVeterinaria.push(veterinaria3);
var mascota1 = new Paciente_1["default"]("Paco", "GATO", false, 1);
arregloPaciente.push(mascota1);
var opcionMP = -1;
var opcionMS = -1;
var idNuevo;
console.log(arregloCliente);
console.log(arregloProveedor);
console.log(arregloVeterinaria);
console.log(arregloPaciente);
while (opcionMP != 4) {
    opcionMP = (0, funciones_1.verMenuPrincipal)();
    switch (opcionMP) {
        case 1:
            opcionMS = (0, funciones_1.verMenuSecundario)();
            switch (opcionMS) {
                case 1:
                    console.log(arregloVeterinaria);
                    var idNuevo_1 = (0, funciones_1.obtenerID)(arregloID);
                    (0, funciones_1.darDeAltaVeterinaria)(arregloVeterinaria, idNuevo_1);
                    break;
                case 2:
                    console.log(arregloVeterinaria);
                    (0, funciones_1.bajaVeterinarias)(arregloVeterinaria);
                    break;
                case 3:
                    (0, funciones_1.modificarVeterinaria)(arregloVeterinaria);
                    break;
                case 0:
                    opcionMS = 0;
                    opcionMP = 0;
                    (0, funciones_1.verMenuPrincipal)();
                    break;
                default:
                    opcionMS = 0;
                    (0, funciones_1.verMenuSecundario)();
            }
            break;
        case 2:
            opcionMS = (0, funciones_1.verMenuSecundario)();
            switch (opcionMS) {
                case 1:
                    idNuevo = (0, funciones_1.obtenerID)(arregloID);
                    (0, funciones_1.darDeAltaCliente)(arregloCliente, idNuevo);
                    break;
                case 2:
                    (0, funciones_1.bajaClientes)(arregloCliente);
                    break;
                case 3:
                    break;
                case 0:
                    opcionMS = 0;
                    opcionMP = 0;
                    (0, funciones_1.verMenuPrincipal)();
                    break;
                default:
                    opcionMS = 0;
                    (0, funciones_1.verMenuSecundario)();
            }
            break;
        case 3:
            opcionMS = (0, funciones_1.verMenuSecundario)();
            switch (opcionMS) {
                case 1:
                    idNuevo = (0, funciones_1.buscarIdCliente)(arregloCliente);
                    (0, funciones_1.darDeAltaPaciente)(arregloPaciente, idNuevo);
                    break;
                case 2:
                    (0, funciones_1.bajaPacientes)(arregloPaciente);
                    break;
                case 3:
                    break;
                case 0:
                    opcionMS = 0;
                    opcionMP = 0;
                    (0, funciones_1.verMenuPrincipal)();
                    break;
                default:
                    opcionMS = 0;
                    (0, funciones_1.verMenuSecundario)();
            }
        case 4:
            opcionMS = (0, funciones_1.verMenuSecundario)();
            switch (opcionMS) {
                case 1:
                    idNuevo = (0, funciones_1.obtenerID)(arregloID);
                    (0, funciones_1.darDeAltaProveedor)(arregloProveedor, idNuevo);
                    break;
                case 2:
                    (0, funciones_1.bajaProveedores)(arregloProveedor);
                    break;
                case 3:
                    break;
                case 0:
                    opcionMS = 0;
                    opcionMP = 0;
                    (0, funciones_1.verMenuPrincipal)();
                    break;
                default:
                    opcionMS = 0;
                    (0, funciones_1.verMenuSecundario)();
                    break;
            }
        case 0:
            break;
    }
}
