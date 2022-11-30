import * as readlineSync from 'readline-sync'
import Cliente from './Clases/Cliente';
import Paciente from './Clases/Paciente';
import Proveedor from './Clases/Proveedor';
import Veterinaria from './Clases/Veterinaria';   

//La función estaEnUsoID me devuelve Verdadero si la ID esta en uso y falso caso contrario
/* export function estaEnUsoID(idAlta:number,arregloCliente: Array<Cliente>,arregloProveedor:Array<Proveedor>,arregloVeterinaria:Array<Veterinaria>):boolean {
    let laEncontre : boolean = false;
    let i : number = 0;

    //Busco si el ID se encuentra asignado a un Cliente
    while (i < arregloCliente.length && !laEncontre){
        if (arregloCliente[i].getIdCliente() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }
    
    //Busco si el ID se encuentra asignado a un Proveedor
    i = 0;
    while (i < arregloProveedor.length && !laEncontre){
        if (arregloProveedor[i].getIdProveedor() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }

    //Busco si el ID se encuentra asignado a uuna veterinaria
    i = 0;
    while (i < arregloVeterinaria.length && !laEncontre){
        if (arregloVeterinaria[i].getIdVeterinaria() == idAlta){
            laEncontre = true;
        }else{ i++;}
    }

    return(laEncontre);
} */

//La funcion obtenerID me devuelve una ID que no este siendo usado
export function obtenerID(arreglo:Array<number>):number {
    let idAlta : number = 0;
    let estaID : boolean = false;
    
    /* while (!estaID){ 
        console.log("ENTRE");
       idAlta = Math.floor(Math.random() * 60);
       console.log(idAlta);
       
       for(let i=0;i<arreglo.length;i++){
            if (idAlta!=arreglo[i]){
                console.log(i);
                arreglo.push(idAlta)
                estaID = true;
            }else{
                estaID = true
                console.log("ID REPETIDO");
                
            }
       }
    } */
    idAlta = Math.floor(Math.random() * 60);
    return idAlta;
}


/* 
export function darDeAltaCliente (arregloCliente: Array<Cliente>, idClienteAlta:number):void {
    // let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ");
    //let telefonoClienteAlta : number = readlineSync.question("Ingrese el teléfono del Cliente a dar de alta: ");
     
    let nombreClienteAlta : string = "Laura";
    let telefonoClienteAlta : number = 2494897563;

    let newCliente = new Cliente(nombreClienteAlta,telefonoClienteAlta,idClienteAlta,false,0);
    arregloCliente.push(newCliente);
}





*/

export function darDeAltaVeterinaria (arregloVeterinaria: Array<Veterinaria>, id:number):Array<Veterinaria>{
    let nombreVeterinariaAlta : string = readlineSync.question("Ingrese el nombre de la Veterinaria a dar de alta: ");
    let direccionVeterinariaAlta : string = readlineSync.question("Ingrese la dirección de la Veterinaria a dar de alta: ");
      
   /*  let nombreVeterinariaAlta : string = "Fernando";
    let direccionVeterinariaAlta : string = "San Martín N° 1578"; */
 
    let newVeterinaria = new Veterinaria(nombreVeterinariaAlta,direccionVeterinariaAlta,id);
    arregloVeterinaria.push(newVeterinaria);
    return arregloVeterinaria
} 

export function darDeAltaCliente (arregloCliente: Array<Cliente>, idClienteAlta:number):void {
    // let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ");
    //let telefonoClienteAlta : number = readlineSync.question("Ingrese el teléfono del Cliente a dar de alta: ");
     
    let nombreClienteAlta : string = "Laura";
    let telefonoClienteAlta : number = 2494897563;

    let newCliente = new Cliente(nombreClienteAlta,telefonoClienteAlta,idClienteAlta,false,0);
    arregloCliente.push(newCliente);
}

export function darDeAltaPaciente (arregloPaciente: Array<Paciente>, idClienteMascota:number):void {
    //let nombrePacienteAlta : string = readlineSync.question("Ingrese el nombre de la Mascota a dar de alta: ");
    //let especiePacienteAlta : string = (readlineSync.question("Ingrese la especie de la Mascota a dar de alta: ")).toUpperCase();
      
    let nombreMascotaAlta : string = "Morena";
    let especieMascotaAlta : string = "GATO";
    let exoticaMascotaAlta : boolean;

    if (especieMascotaAlta == "GATO" || especieMascotaAlta == "PERRO") {
        exoticaMascotaAlta = false;
    } else {
        exoticaMascotaAlta = true;
    }
     
    let newPaciente = new Paciente(nombreMascotaAlta,especieMascotaAlta,exoticaMascotaAlta,idClienteMascota);
    arregloPaciente.push(newPaciente);
}

export function buscarIdCliente(arreglo:Array<Cliente>):number{
    for (let i:number=0; i<arreglo.length;i++){//listar y mostrar clientes id y nombre
        console.log(arreglo[i].getIdCliente() + arreglo[i].getNombrePersona())
    }

    let estaID:boolean=false
    while (!estaID){
        let idClienteMascota = Number(readlineSync.question("Ingrese la ID del Clienta al que le desea dar de alta una Mascota: "));
        for (let i:number=0; i<arreglo.length;i++){
            if (idClienteMascota==arreglo[i].getIdCliente()){
                estaID=true
                return idClienteMascota

            }
            console.log("La Id ingresa no es un Cliente");
        }
        
    }
    return 0//para evitar error en la funcion
}



export function darDeAltaProveedor (arregloProveedor: Array<Proveedor>, idProveedorAlta:number):void {
    // let nombreProveedorAlta : string = readlineSync.question("Ingrese el nombre del Proveedor a dar de alta: ");
    //let telefonoProveedorAlta : number = readlineSync.question("Ingrese el teléfono del Proveedor a dar de alta: ");
    let nombreProveedorAlta : string = "Fernando";
    let telefonoProveedorAlta : number = 2494897563;
 
    let newProveedor = new Proveedor(nombreProveedorAlta,telefonoProveedorAlta,idProveedorAlta);
    arregloProveedor.push(newProveedor);
}
//---FUNCIONES BAJAS

export function bajaVeterinarias(arreglo:Array<Veterinaria>){ 
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdVeterinaria()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}
export function bajaClientes(arreglo:Array<Cliente>){ 
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdCliente()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}
export function bajaPacientes(arreglo:Array<Paciente>){
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: ")); 
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdPaciente()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}
export function bajaProveedores(arreglo:Array<Proveedor>){ 
    let id : number = Number(readlineSync.question("Ingrese el ID que desee borrar: "));
    for (let i:number=0; i<arreglo.length;i++){
        if(id == arreglo[i].getIdProveedor()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("ID INEXISTENTE")
        }
    }
}

//FUNCIONES MODIFICACIONES

export function modificarVeterinaria(arreglo:Array<Veterinaria>){
    console.log(arreglo)
    let id : number = Number(readlineSync.question("Ingrese el ID de la VETERINARIA que desee Modificar: "));
 
        for (let i:number=0; i<arreglo.length;i++){
            if(arreglo[i].getIdVeterinaria()==id ){
                console.table(arreglo[i])
                console.log(`1)${arreglo[i].getNombreVeterinaria()} \n2) ${arreglo[i].getDireccionVeterinaria()}`);
                let modificador : number = Number(readlineSync.question("1)modificar nombre\n2)modificar direccion:\n"));  
                switch(modificador){
                    case 1:
                        let nombreNuevo : string =(readlineSync.question(`modificando-->${arreglo[i].getNombreVeterinaria()}\n`));
                        arreglo[i].setNombreVeterinaria(nombreNuevo)
                        break
                    case 2:
                        let direccionNueva : string =(readlineSync.question(`modificando-->${arreglo[i].getDireccionVeterinaria()}`));
                        arreglo[i].setDireccionVeterinaria(direccionNueva)
                        break
                    default:
                        break
                }  
            }

        }

    
    
}




export function verMenuPrincipal():number{

    console.log("MENU PRINCIPAL:\n1)MENU VETERINARIAS \n2)MENU CLIENTES \n3)MENU PACIENTES \n4)MENU PROVEEDORES")
    let opcionMP: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMP
}

export function verMenuSecundario():number{
    console.log("MENU SECUNDARIO:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n0)SALIR")
    let opcionMS: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMS
}