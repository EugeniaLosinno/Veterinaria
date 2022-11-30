import * as readlineSync from 'readline-sync'
import Cliente from "./Clases/Cliente";
import Paciente from "./Clases/Paciente";
import Proveedor from "./Clases/Proveedor";
import Veterinaria from './Clases/Veterinaria';
import { obtenerID, darDeAltaVeterinaria, darDeAltaCliente, darDeAltaPaciente, darDeAltaProveedor, buscarIdCliente, verMenuPrincipal, verMenuSecundario, darDeBajaVeterinaria, darDeBajaPaciente, darDeBajaCliente, darDeBajaProveedor } from './funciones';


let arregloCliente : Array <Cliente> = [];
let arregloProveedor : Array <Proveedor> = [];
let arregloVeterinaria : Array <Veterinaria> = [];
let arregloPaciente :  Array <Paciente> = [];

let arregloID:Array <number> = [];

let client1 = new Cliente("PAULA",24945689,1,false,0);
arregloCliente.push(client1);
let provee1 = new Proveedor("JUAN",24965897,2);
arregloProveedor.push(provee1);
let veterinaria1 = new Veterinaria("LA MASCOTA","MORENO 58",3);
arregloVeterinaria.push(veterinaria1);
let mascota1 = new Paciente("PACO","GATO",false,1);
arregloPaciente.push(mascota1);

let opcionMP: number = 0;
let opcionMS: number = 0;

let idNuevo:number;

let quieroSeguirP : boolean = true;
let quieroSeguirS : boolean;
while (quieroSeguirP){
    opcionMP = verMenuPrincipal();
    switch ( opcionMP ) {
        case 1:
            quieroSeguirS = true;
            while (quieroSeguirS){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = obtenerID(arregloID);
                        darDeAltaVeterinaria(arregloVeterinaria, idNuevo);
                        break
                    case 2:
                        darDeBajaVeterinaria(arregloVeterinaria,arregloID);
                        break
                    case 3:
                        break
                    case 0:
                        quieroSeguirS = false;
                        opcionMP = verMenuPrincipal();
                        break;
                    default:
                        console.log("La opción ingresada no existe");  
                        break  
                }
            } 
                 
        case 2:
            quieroSeguirS = true;
            while (quieroSeguirS){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = obtenerID(arregloID);
                        darDeAltaCliente(arregloCliente, idNuevo);
                        break
                    case 2:
                        darDeBajaCliente(arregloCliente,arregloPaciente,arregloID);
                        break
                    case 3:
                        break
                    case 0:
                        quieroSeguirS = false;
                        opcionMP = verMenuPrincipal();
                        break;
                }
            } 

        case 3:
            quieroSeguirS = true;
            while (quieroSeguirS){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = buscarIdCliente(arregloCliente);
                        darDeAltaPaciente(arregloPaciente, idNuevo);
                        break
                    case 2:
                        darDeBajaPaciente(arregloPaciente);
                        break
                    case 3:
                        break
                    case 0:
                        quieroSeguirS = false;
                        opcionMP = verMenuPrincipal();
                        break;
                }
            }  

        case 4:
            quieroSeguirS = true;
            while (quieroSeguirS){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = obtenerID(arregloID);
                        darDeAltaProveedor(arregloProveedor, idNuevo);
                        break
                    case 2:
                        darDeBajaProveedor(arregloProveedor,arregloID);
                        break
                    case 3:
                        break
                    case 0:
                        quieroSeguirS = false;
                        opcionMP = verMenuPrincipal();
                        break;
                }
            } 
        
        case 0:
            quieroSeguirP = false;
            break
    }
} 
    
