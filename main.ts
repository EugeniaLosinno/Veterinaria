import * as readlineSync from 'readline-sync'
import Cliente from "./Clases/Cliente";
import Paciente from "./Clases/Paciente";
import Proveedor from "./Clases/Proveedor";
import Veterinaria from './Clases/Veterinaria';
import {obtenerID,darDeAltaVeterinaria,darDeAltaCliente,darDeAltaPaciente,darDeAltaProveedor,buscarIdCliente,bajaVeterinarias, bajaPacientes, bajaClientes, bajaProveedores, verMenuPrincipal, verMenuSecundario, modificarVeterinaria } from "./funciones";


let arregloCliente : Array <Cliente> = [];
let arregloProveedor : Array <Proveedor> = [];
let arregloVeterinaria : Array <Veterinaria> = [];
let arregloPaciente :  Array <Paciente> = [];

let arregloID:Array <number> = [];

let client1 = new Cliente("paula",24945689,1,false,0);
arregloCliente.push(client1);
let provee1 = new Proveedor("juan",24965897,2);
arregloProveedor.push(provee1);
let veterinaria1 = new Veterinaria("la mascota","moreno 58",3);
let veterinaria2 = new Veterinaria("Ayacucho","sarmiento 438",4);
let veterinaria3 = new Veterinaria("fer","Belgrano 432",67);
arregloVeterinaria.push(veterinaria1);
arregloVeterinaria.push(veterinaria2);
arregloVeterinaria.push(veterinaria3);
let mascota1 = new Paciente("Paco","GATO",false,1);
arregloPaciente.push(mascota1);

let opcionMP: number = -1;
let opcionMS: number = -1;

let idNuevo:number;


console.log(arregloCliente);
console.log(arregloProveedor);
console.log(arregloVeterinaria);
console.log(arregloPaciente);


while (opcionMP!= 4){

    opcionMP=verMenuPrincipal()
    switch ( opcionMP ) {
        case 1:
            opcionMS=verMenuSecundario()
                switch ( opcionMS ) {
                    case 1:
                        console.log(arregloVeterinaria);
                        let idNuevo: number=obtenerID(arregloID)
                        darDeAltaVeterinaria(arregloVeterinaria, idNuevo)
                        break
                    case 2:
                        console.log(arregloVeterinaria);
                        bajaVeterinarias(arregloVeterinaria)
                        break
                    case 3:
                        modificarVeterinaria(arregloVeterinaria)
                        break
                    case 0:
                        opcionMS=0
                        opcionMP=0
                        verMenuPrincipal()
                        break
                    default:
                        opcionMS=verMenuSecundario()
                }
                break 
        
        case 2:
            opcionMS=verMenuSecundario()
                switch ( opcionMS ) {
                    case 1:
                        idNuevo=obtenerID(arregloID)
                        darDeAltaCliente(arregloCliente, idNuevo)
                        break
                    case 2:
                        bajaClientes(arregloCliente)
                        break
                    case 3:
                        break
                    case 0:
                        opcionMS=0
                        opcionMP=0
                        verMenuPrincipal()
                        break
                    default:
                        opcionMS=0
                        verMenuSecundario()

                }
                break

        case 3:
            opcionMS=verMenuSecundario()
                switch ( opcionMS ) {
                    case 1:
                        idNuevo=buscarIdCliente(arregloCliente)
                        darDeAltaPaciente(arregloPaciente, idNuevo)
                        break
                    case 2:
                        bajaPacientes(arregloPaciente)
                        break
                    case 3:
                        break
                    case 0:
                        opcionMS=0
                        opcionMP=0
                        verMenuPrincipal()
                        break
                    default:
                        opcionMS=0  
                        verMenuSecundario()
                        
                }

        case 4:
            opcionMS=verMenuSecundario()
            switch ( opcionMS ) {
                case 1:
                    idNuevo=obtenerID(arregloID)
                    darDeAltaProveedor(arregloProveedor, idNuevo)
                    break
                case 2:
                    bajaProveedores(arregloProveedor)
                    break
                case 3:
                    break
                case 0:
                    opcionMS=0
                    opcionMP=0
                    verMenuPrincipal()
                    break
                default:
                    opcionMS=0  
                    verMenuSecundario()
                    break

            }
        case 0:    
            break
    }
}
    

