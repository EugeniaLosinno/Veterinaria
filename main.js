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
arregloVeterinaria.push(veterinaria1);
var mascota1 = new Paciente_1["default"]("Paco", "GATO", false, 1);
arregloPaciente.push(mascota1);
var opcionMP = 0;
var opcionMS = 0;
var idNuevo;
while (opcionMP != 4) {
    opcionMP = (0, funciones_1.verMenuPrincipal)();
    switch (opcionMP) {
        case 1:
            opcionMS = (0, funciones_1.verMenuSecundario)();
            switch (opcionMS) {
                case 1:
                    idNuevo = (0, funciones_1.obtenerID)(arregloID);
                    (0, funciones_1.darDeAltaVeterinaria)(arregloVeterinaria, idNuevo);
                    break;
                case 2:
                    (0, funciones_1.bajaVeterinarias)(arregloVeterinaria);
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
            }
    }
}
