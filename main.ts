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

let opcionMP: number = -1;
let opcionMS: number = -1;
let continuar: number;

let idNuevo:number;


while (opcionMP != 0){
    opcionMP = verMenuPrincipal();
    continuar = -1
    
    switch ( opcionMP ) {
        
        case 1:
            while (continuar != 0){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = obtenerID(arregloID);
                        darDeAltaVeterinaria(arregloVeterinaria, idNuevo);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 2:
                        darDeBajaVeterinaria(arregloVeterinaria,arregloID);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 3:
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 0:
                        continuar = 0;
                        break;
                
                }
            }
          
        break;   

        case 2:
            while (continuar != 0){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = obtenerID(arregloID);
                        darDeAltaCliente(arregloCliente, idNuevo);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 2:
                        darDeBajaCliente(arregloCliente,arregloPaciente,arregloID);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 3:
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 0:
                        continuar = 0;
                        break;
                   
                }
            } 

        break; 

        case 3:
            while (continuar != 0){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = obtenerID(arregloID);
                        darDeAltaPaciente(arregloPaciente, idNuevo);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 2:
                        darDeBajaPaciente(arregloPaciente);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 3:
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 0:
                        continuar = 0;
                        break;
                   
                }
            } 
        
        break;

        case 4:
            while (continuar != 0){
                opcionMS = verMenuSecundario();
                switch ( opcionMS ) {
                    case 1:
                        idNuevo = obtenerID(arregloID);
                        darDeAltaProveedor(arregloProveedor, idNuevo);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 2:
                        darDeBajaProveedor(arregloProveedor,arregloID);
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 3:
                        console.log("")
                        continuar = Number(readlineSync.question("Para continuar pulse cualquier tecla: "));
                        continuar = 0;
                        break
                    case 0:
                        continuar = 0;
                        break;
                   
                }
            }        
        
        break;
    }
} 

console.log("El programa ha finalizado")
