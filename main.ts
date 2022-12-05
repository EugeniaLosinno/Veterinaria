import { read } from 'fs';
import * as readlineSync from 'readline-sync'
import Cliente from "./Clases/Cliente";
import Paciente from "./Clases/Paciente";
import Proveedor from "./Clases/Proveedor";
import Veterinaria from './Clases/Veterinaria';
import { obtenerID, darDeAltaVeterinaria, darDeAltaCliente, darDeAltaPaciente, darDeAltaProveedor, buscarIdCliente, bajaVeterinarias, bajaPacientes, bajaClientes, bajaProveedores, verMenuPrincipal, verMenuSecundario, modificarVeterinaria, modificarCliente, modificarProveedor,pulsar } from './funciones';


let arregloCliente : Array <Cliente> = [];
let arregloProveedor : Array <Proveedor> = [];
let arregloVeterinaria : Array <Veterinaria> = [];
let arregloPaciente :  Array <Paciente> = [];

let arregloID:Array <number> = [];

let client1 = new Cliente("paula",24945689,1,false,2);
arregloCliente.push(client1);
let provee1 = new Proveedor("juan",74965897,2);
let provee2 = new Proveedor("miguel",54965897,3);
let provee3 = new Proveedor("federico",24965837,4);
arregloProveedor.push(provee1,provee2,provee3);
let veterinaria1 = new Veterinaria("La mascota","Moreno 58",3);
let veterinaria2 = new Veterinaria("Ayacucho","Sarmiento 438",4);
let veterinaria3 = new Veterinaria("Piedritas","Belgrano 432",67);
arregloVeterinaria.push(veterinaria1);
arregloVeterinaria.push(veterinaria2);
arregloVeterinaria.push(veterinaria3);
let mascota1 = new Paciente("Paco","GATO",false,1);
arregloPaciente.push(mascota1);


console.table(arregloCliente);
console.table(arregloProveedor);
console.table(arregloVeterinaria);
console.table(arregloPaciente);

let opcionMP: number = -1;
let opcionMS: number = -1;
let continuar:number;
let idNuevo:number;

while (opcionMP!= 0){

    opcionMP=verMenuPrincipal()
    continuar=-1;
    switch ( opcionMP ) {
        case 1:
            while(continuar!=0){
                opcionMS=verMenuSecundario()
                switch ( opcionMS ) {
                    case 1:
                        console.table(arregloVeterinaria);
                        let idNuevo: number=obtenerID(arregloID)
                        darDeAltaVeterinaria(arregloVeterinaria, idNuevo)
                        continuar=pulsar(continuar)
                        break
                    case 2:
                        console.table(arregloVeterinaria);
                        bajaVeterinarias(arregloVeterinaria)
                        continuar=pulsar(continuar)
                        break
                    case 3:
                        modificarVeterinaria(arregloVeterinaria)
                        continuar=pulsar(continuar)
                        break
                    case 0:
                        continuar=pulsar(continuar)
                        break
                    
                }
                
            }
            break 
        case 2:
            while(continuar!=0){
                opcionMS=verMenuSecundario()
                switch ( opcionMS ) {
                    case 1:
                        console.table(arregloCliente)
                        idNuevo=obtenerID(arregloID)
                        darDeAltaCliente(arregloCliente, idNuevo)
                        continuar=pulsar(continuar)
                        break
                    case 2:
                        console.table(arregloCliente)
                        bajaClientes(arregloCliente)
                        continuar=pulsar(continuar)
                        break
                    case 3:
                        modificarCliente(arregloCliente)
                        continuar=pulsar(continuar)
                        break
                    case 0:
                        continuar=pulsar(continuar)
                        break
                }
                break
            }
            break
        case 3:
            while(continuar!=0){
                opcionMS=verMenuSecundario()
                switch ( opcionMS ) {
                    case 1:
                        idNuevo=buscarIdCliente(arregloCliente)
                        darDeAltaPaciente(arregloPaciente, idNuevo)
                        continuar=pulsar(continuar)
                        break
                    case 2:
                        bajaPacientes(arregloPaciente)
                        continuar=pulsar(continuar)
                        break
                    case 3:
                        continuar=pulsar(continuar)
                        break
                    case 0:
                        continuar=pulsar(continuar)
                        break
                }
            }
            break


        case 4:
            while(continuar!=0){
                opcionMS=verMenuSecundario()
                switch ( opcionMS ) {
                    case 1:
                        idNuevo=obtenerID(arregloID)
                        darDeAltaProveedor(arregloProveedor, idNuevo)
                        continuar=pulsar(continuar)
                        break
                    case 2:
                        bajaProveedores(arregloProveedor)
                        continuar=pulsar(continuar)
                        break
                    case 3:
                        modificarProveedor(arregloProveedor)
                        continuar=pulsar(continuar)
                        break
                    case 0:
                        continuar=pulsar(continuar)
                        break


                }
                break   
            }

            case 0:
                continuar=0    
                break
        }

}
console.log("El programa ha finalizado");


