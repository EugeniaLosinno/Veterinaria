import * as readlineSync from 'readline-sync'
import Cliente from './Clases/Cliente';
import Paciente from './Clases/Paciente';
import Proveedor from './Clases/Proveedor';
import Veterinaria from './Clases/Veterinaria';   

//La función estaEnUsoID me devuelve Verdadero si la ID esta en uso y falso caso contrario. Lo busca en el arreglo de ID
export function estaEnUsoID(idAlta:number, arregloID:Array<number>):boolean {
    let laEncontre : boolean = false;
    let i : number = 0;

    while (i < arregloID.length && !laEncontre){
        if (arregloID[i] == idAlta){
            laEncontre = true;
        }else{ i++;}
    }
    
    return(laEncontre);
}

//La funcion obtenerID me devuelve una ID que no este siendo usado
export function obtenerID(arregloID:Array<number>):number {
    let idAlta : number = 0;
    let estaID : boolean = false;
    
    while (!estaID){ 
       idAlta = Math.floor(Math.random() * 60);
       if (!estaEnUsoID(idAlta,arregloID)) {
            arregloID.push(idAlta)
            estaID = true;
        }
    }
    return (idAlta);
}

//esta funcion me devuelve true si la ID ingresada es de un clinte y falso caso contrario
export function estaIDCliente (arregloCliente:Array<Cliente>,idCliente:number): boolean {
    let laEncontre : boolean = false;
    let i : number = 0;

    while (i < arregloCliente.length && !laEncontre){
        if (arregloCliente[i].getIdCliente() == idCliente){
            laEncontre = true;
        }else{ i++;}
    }

    return(laEncontre);
}

export function darDeAltaVeterinaria (arregloVeterinaria: Array<Veterinaria>, id:number):void {
    let nombreVeterinariaAlta : string = readlineSync.question("Ingrese el nombre de la Veterinaria a dar de alta: ").toUpperCase();
    let direccionVeterinariaAlta : string = readlineSync.question("Ingrese la direccion de la Veterinaria a dar de alta: ").toUpperCase();
      
    let newVeterinaria = new Veterinaria(nombreVeterinariaAlta,direccionVeterinariaAlta,id);
    
    arregloVeterinaria.push(newVeterinaria);
    console.log("Se dió de alta la Veterinaria:");
    console.table(newVeterinaria);
    console.log("Las Veterinarias activas son:");
    console.table(arregloVeterinaria);
} 

export function darDeAltaCliente (arregloCliente: Array<Cliente>, idClienteAlta:number):void {
    let nombreClienteAlta : string = readlineSync.question("Ingrese el nombre del Cliente a dar de alta: ").toUpperCase();
    let telefonoClienteAlta : number = Number(readlineSync.question("Ingrese el telefono del Cliente a dar de alta: "));
     
    let newCliente = new Cliente(nombreClienteAlta,telefonoClienteAlta,idClienteAlta,false,0);
    
    arregloCliente.push(newCliente);
    console.log("Se dió de alta al Cliente:");
    console.table(newCliente);
    console.log("Los Clientes activos son:");
    console.table(arregloCliente);
}

export function darDeAltaPaciente (arregloPaciente: Array<Paciente>, idClienteMascota:number):void {
    let nombreMascotaAlta : string = readlineSync.question("Ingrese el nombre de la Mascota a dar de alta: ").toUpperCase();
    let especieMascotaAlta : string = readlineSync.question("Ingrese la especie de la Mascota a dar de alta: ").toUpperCase();
      
    let exoticaMascotaAlta : boolean;

    if (especieMascotaAlta == "GATO" || especieMascotaAlta == "PERRO") {
        exoticaMascotaAlta = false;
    } else {
        exoticaMascotaAlta = true;
    }
     
    let newPaciente = new Paciente(nombreMascotaAlta,especieMascotaAlta,exoticaMascotaAlta,idClienteMascota);
    
    arregloPaciente.push(newPaciente);
    console.log("Se dió de alta al Paciente:");
    console.table(newPaciente);
    console.log("Los Pacientes activos son:");
    console.table(arregloPaciente);
}

export function darDeAltaProveedor (arregloProveedor: Array<Proveedor>, idProveedorAlta:number):void {
    let nombreProveedorAlta : string = readlineSync.question("Ingrese el nombre del Proveedor a dar de alta: ").toUpperCase();
    let telefonoProveedorAlta : number = Number(readlineSync.question("Ingrese el telefono del Proveedor a dar de alta: "));
    
    let newProveedor = new Proveedor(nombreProveedorAlta,telefonoProveedorAlta,idProveedorAlta);
    
    arregloProveedor.push(newProveedor);
    console.log("Se dió de alta al Proveedor:");
    console.table(newProveedor);
    console.log("Las Proveedore activos son:");
    console.table(arregloProveedor);
}

//---Funciones para dar las bajas
export function darDeBajaIDArreglo (id:number, arregloID:Array<number>){
    let i: number = 0;
    while (i < arregloID.length){    
        if(id == arregloID[i]){
            arregloID.splice(i,1)
        }else{
            i++;
        }
    }
}

export function darDeBajaVeterinaria (arregloVeterinaria:Array<Veterinaria>, arregloID:Array<number>){ 
    console.table(arregloVeterinaria);
    let idBajaVeterinaria : number = Number(readlineSync.question("Ingrese el ID de Veterinaria que desee borrar: "));
    let estaID : boolean = false;
    let i : number = 0;

    while (!estaID && i < arregloVeterinaria.length){    
        if(idBajaVeterinaria == arregloVeterinaria[i].getIdVeterinaria()){
            arregloVeterinaria.splice(i,1)
            console.log(`La Vetrinaria ${idBajaVeterinaria} fue borrada`);
            darDeBajaIDArreglo(idBajaVeterinaria,arregloID);
            estaID = true;
        }else{
            i++;
        }
    }
    if(!estaID){
        console.log("La ID de Veterinaria ingresada no existe");
   
    }
}

export function darDeBajaCliente(arregloCliente:Array<Cliente>, arregloPaciente:Array<Paciente>, arregloID:Array<number>){ 
    console.table(arregloCliente);
    let idBajaCliente : number = Number(readlineSync.question("Ingrese el ID del Cliente que desee borrar: "));
    let estaID : boolean = false;
    let i : number = 0;

    while (!estaID && i < arregloCliente.length){    
        if(idBajaCliente == arregloCliente[i].getIdCliente()){
            arregloCliente.splice(i,1)
            console.log(`El Cliente ${idBajaCliente} fue borrado`);
            darDeBajaIDArreglo(idBajaCliente,arregloID);
            darDeBajaPacienteCliente(arregloPaciente,idBajaCliente);
            estaID = true;
        }else{
            i++;
        }
    }
    if(!estaID){
        console.log("La ID del Cliente ingresado no existe");
  
    }
}

export function darDeBajaPacienteCliente (arregloPaciente:Array<Paciente>, idClienteBaja:number){
   
    for (let i:number=0; i<arregloPaciente.length; i++){
        if(idClienteBaja == arregloPaciente[i].getIdPaciente()){
            arregloPaciente.splice(i,1)
        }
    }
}

export function darDeBajaPaciente (arregloPaciente:Array<Paciente>){
    
    console.table(arregloPaciente);
   
   
    let estaNombre : boolean = false;
    let i : number = 0;
    
    let contador : number = 0;

    while (!estaNombre && i < arregloPaciente.length){   
        let idMascotaBaja : number = Number(readlineSync.question("Ingrese la ID de la Mascota que desea borra: ")) 
        
        for (let j:number=0; j<arregloPaciente.length; j++){ //contamos cuantas veces aparece ese ID
            if(idMascotaBaja == arregloPaciente[j].getIdPaciente()){
                contador ++
            }
        }
       
        switch (contador) {
        
            case 0:
            console.log("El ID ingresado no existe"); 
            estaNombre = true;
            break

            case 1:
            arregloPaciente.splice(i,1)
            console.log(`El Paciente fue borrado`);
            estaNombre = true;
            break

            default:
            let nombreMascotaBaja : string = readlineSync.question("Ingrese el nombre de la Mascota que desea borra: ").toUpperCase();
            if((nombreMascotaBaja == arregloPaciente[i].getNombrePaciente()) && (idMascotaBaja == arregloPaciente[i].getIdPaciente())){
                arregloPaciente.splice(i,1)
                console.log(`El Paciente ${nombreMascotaBaja} fue borrado`);
                estaNombre = true;
            }else{
                console.log(`El Nombre de la mascota no existe`);
                estaNombre = true;
            }
        
        }
        i++;
        
    }    
    
}




export function darDeBajaProveedor (arregloProveedor:Array<Proveedor>, arrrayID:Array<number>){
    console.table(arregloProveedor);
    let idBajaProveedor : number = Number(readlineSync.question("Ingrese el ID del proveedor que desee borrar: "));
    let estaID: boolean = false;
    let i : number = 0;

    while (!estaID && i < arregloProveedor.length){    
        if(idBajaProveedor == arregloProveedor[i].getIdProveedor()){
            arregloProveedor.splice(i,1)
            console.log(`El Proveedor ${idBajaProveedor} fue borrado`);
            estaID = true;
        }else{
            i++;
        }
    }
    if(!estaID){
        console.log("El ID del Proveedor ingresado no existe");
       
    }
}

export function registarVisita(arregloCliente:Array<Cliente>){
    console.table(arregloCliente);
    let idMascotaVisita : number = Number(readlineSync.question("Ingrese la ID del Cliente que concurre a la veterinaria: "))
    
    let estaNombre : boolean = false;
    let i : number = 0;

    while (!estaNombre && i < arregloCliente.length){    
        if(idMascotaVisita == arregloCliente[i].getIdCliente()){
            arregloCliente[i].contarVisitas();
            arregloCliente[i].calificarVip();
            console.log(`Al Cliente se le registro una visita`);
            estaNombre = true;
        }else{
            i++;
        }
    }
    if(!estaNombre){
        console.log("El Paciente ingresado no existe");
        
    }
}

//FUNCIONES MODIFICACIONES

export function modificarVeterinaria(arreglo:Array<Veterinaria>){
    console.table(arreglo);
    let i:number = 0;
    let esta:boolean = false;
    let id : number = Number(readlineSync.question("Ingrese el ID de CLIENTE que desee Modificar: "));
    while(esta==false && i<arreglo.length){  
        
        if(arreglo[i].getIdVeterinaria()==id ){
            console.table(arreglo[i]);
            console.log(`Nombre: ${arreglo[i].getNombreVeterinaria()} \nDireccion: ${arreglo[i].getDireccionVeterinaria()}`);
            let modificador : number = Number(readlineSync.question("\n1)Modificar nombre\n2)Modificar direccion\n"));
            switch(modificador){
                case 1:
                    let nombreNuevo : string =(readlineSync.question(`Modificando-->${arreglo[i].getNombreVeterinaria()}\n`)).toUpperCase();
                    arreglo[i].setNombreVeterinaria(nombreNuevo);
                    break
                case 2:
                    let direccionNueva : string =(readlineSync.question(`Modificando-->${arreglo[i].getDireccionVeterinaria()}\n`)).toUpperCase();
                    arreglo[i].setDireccionVeterinaria(direccionNueva);
                    break
                default:
                    break
            }  
            esta = true;  
            console.log("Los datos de la Veterinaria modificada:");
            console.table(arreglo[i]);
            console.log("Las Veterinarias activos son:");
            console.table(arreglo);
        }else{
            i++
            if(i==arreglo.length){
                console.log("No esta el ID");
                break 
            }
        }
    }
}

export function modificarCliente(arreglo:Array<Cliente>){
    console.table(arreglo);
    let i:number = 0;
    let esta:boolean = false;
    let id : number = Number(readlineSync.question("Ingrese el ID del CLIENTE que desee Modificar: "));
    while(esta==false && i<arreglo.length){  
        if(arreglo[i].getIdCliente()==id ){
            console.table(arreglo[i])
            console.log(`Nombre: ${arreglo[i].getNombrePersona()} \nTelefono: ${arreglo[i].getTelefonoPersona()} `);
            let modificador : number = Number(readlineSync.question("1)Modificar Nombre\n2)modificar Teléfono:\n"));  
            switch(modificador){
                case 1:
                    let nombreNuevo : string =(readlineSync.question(`Modificando-->${arreglo[i].getNombrePersona()}\n`)).toUpperCase();
                    arreglo[i].setNombrePersona(nombreNuevo)
                    break
                case 2:
                    let telefonoNuevo : number =Number((readlineSync.question(`Modificando-->${arreglo[i].getTelefonoPersona()}\n`)));
                    arreglo[i].setTelefonoPersona(telefonoNuevo)
                    break
                default:
                    break
            }
            esta = true;  
            console.log("Los datos del Cliente modificado:");
            console.table(arreglo[i]);
            console.log("Los Clientes activos son:");
            console.table(arreglo);
        }else{
            i++
            if(i==arreglo.length){
                console.log("No esta el ID");
                break 
            }

        }
    }
    
}

export function modificarMascota(arregloPaciente:Array<Paciente>){
    console.table(arregloPaciente);
    let i:number = 0;
    let esta:boolean = false;
    let idClienteMascotaModificar : number = Number(readlineSync.question("Ingrese el ID del Cliente que desee Modificar: "));  
    let nombreMascotaModificar : string = readlineSync.question("Ingrese el nombre de la Mascota que desea Modificar: ").toUpperCase();

    while(!esta && i < arregloPaciente.length){
        if(arregloPaciente[i].getIdPaciente() == idClienteMascotaModificar && arregloPaciente[i].getNombrePaciente() == nombreMascotaModificar){
            console.table(arregloPaciente[i]);
            console.log(`Nombre: ${arregloPaciente[i].getNombrePaciente()} \nEspecie: ${arregloPaciente[i].getEspeciePaciente()} `);
            let modificador : number = Number(readlineSync.question("1)Modificar Nombre\n2)Modificar Especie:\n"));
            switch(modificador){
                case 1:
                    let nombreMascotaNew : string =(readlineSync.question(`Modificando-->${arregloPaciente[i].getNombrePaciente()}\n`)).toUpperCase();
                    arregloPaciente[i].setNombrePaciente(nombreMascotaNew);
                    break
                case 2:
                    let especieMascotaModif : string = (readlineSync.question(`Modificando-->${arregloPaciente[i].getEspeciePaciente()}\n`)).toUpperCase();
                    arregloPaciente[i].setEspeciePaciente(especieMascotaModif);
                    let exoticaMascotaModif : boolean;

                    if (especieMascotaModif == "GATO" || especieMascotaModif == "PERRO") {
                        exoticaMascotaModif = false;
                    } else {
                        exoticaMascotaModif = true;
                    }
                    arregloPaciente[i].setExoticaPaciente(exoticaMascotaModif);
                    break
      
                default:
                    break
            }
            esta = true;
            console.log("Los datos del Paciente modificado:");
            console.table(arregloPaciente[i]);
            console.log("Los Pacientes activos son:");
            console.table(arregloPaciente);
        }else{
            i++
            if(i==arregloPaciente.length){
                console.log("No esta el ID");
                break 
            }    
        }
    }
}

export function modificarProveedor(arreglo:Array<Proveedor>){
    console.table(arreglo)
    let i:number = 0;
    let esta:boolean = false;
    let id : number = Number(readlineSync.question("Ingrese el ID de Proveedor que desee Modificar: "));  

    while(esta == false && i < arreglo.length){
        if(arreglo[i].getIdProveedor()==id){
            console.table(arreglo[i]);
            console.log(`Nombre: ${arreglo[i].getNombrePersona()} \nDireccion: ${arreglo[i].getTelefonoPersona()} `);
            let modificador : number = Number(readlineSync.question("1)Modificar Nombre\n2)Modificar Telefono:\n"));
            switch(modificador){
                case 1:
                    let nombreNuevo : string =(readlineSync.question(`Modificando-->${arreglo[i].getNombrePersona()}\n`)).toUpperCase();
                    arreglo[i].setNombrePersona(nombreNuevo);
                    break
                case 2:
                    let telefonoNuevo : number =Number((readlineSync.question(`Modificando-->${arreglo[i].getTelefonoPersona()}\n`)));
                    arreglo[i].setTelefonoPersona(telefonoNuevo);
                    break
      
                default:
                    break
            }
            esta = true;
            console.log("Los datos del Proveedor modificado:");
            console.table(arreglo[i]);
            console.log("Los Proveedores activos son:");
            console.table(arreglo);
        }else{
            i++
            if(i==arreglo.length){
                console.log("No esta el ID");
                break 
            }    
        }
    }
}

export function pulsar(tecla:number):number{
    tecla=Number(readlineSync.question("Para continuar pulse cualquier tecla "))
    console.clear()
    return 0 
}

//MENUES
export function verMenuPrincipal():number{
    console.log();
    console.log("MENU:\n1)MENU VETERINARIAS \n2)MENU CLIENTES \n3)MENU PACIENTES \n4)MENU PROVEEDORES\n0)SALIR")
    let opcionMP: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMP
}

export function verMenuSecundario():number{
    console.log();
    console.log("MENU:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n0)SALIR")
    let opcionMS: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMS
}

export function verMenuSecundarioCliente():number{
    console.log();
    console.log("MENU:\n1)DAR DE ALTA \n2)BORRAR REGISTRO \n3)MODIFICAR REGISTRO\n4)VISITA AL VETERINARIO\n0)SALIR")
    let opcionMS: number = Number(readlineSync.question("INGRESE LA OPCION: "));
    return opcionMS
}