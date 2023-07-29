

// Simulador de agendamiento de turnos

// Hacemos una clase para los turnos
class Turno {
  constructor(fecha, horario, tienda, cliente,cantidad = 5) {
    this.fecha = fecha;
    this.horario = horario;
    this.tienda = tienda;
    this.cliente = cliente;
    this.cantidad = cantidad;
    }
}

// Función que recibe el array de turnos por parámetros y los muestra en un listado de la consola
// Se opto por poner en una función aparte ya que tanto en la función de eliminar y agregar empleados necesitamos mostrar
// el listado de turnos, al ser una tarea repetitiva lo más optimo es ponerla en una función y llamara
 const mostrarTurnos = (turnos) => {
    console.clear();
    console.log("Turnos registrados");
  
    // Organizamos los empleado alfabéticamente
  //  turnos.sort((a, b) => {
 //   if (a.nombre > b.nombre) {
 //       return 1;
 //    } else if (a.nombre < b.nombre) {
 //       return -1;
 //     } else {
 //       return 0;
 //     }
 //   });
    turnos.forEach(turno => console.log(turno));
  };


  // Declaramos un array vacío de turnos
let turnos = [
    new Turno("7agosto", "am", "jumbo maipu","super",3),
  ];
  
  mostrarTurnos(turnos);

// Función para crear y agregar turnos al array
 const agregarTurno = () => {
    // Pedimos los datos del turno
  let fecha = prompt("Ingrese la fecha del turno");
  let horario = prompt("Ingrese la horario del turno");
  let tienda = prompt("Ingrese la tienda del turno");
  let cliente = prompt("Ingrese la cliente del turno");
  let cantidad = prompt("Ingrese la cantidad de turnos");

    // Instanciamos la clase Turno y almacenamos en la variable turno con los datos ingresados por el usuario 
  let turno = new Turno(fecha,horario,tienda,cliente,cantidad);

  // Agregamos el empleado en el array turnos
  turnos.push(turno);

  // Llamamos la función para que nos muestre la lista de turnos actualizada por consola
  mostrarTurnos(turnos);
}

let encendido = true; // indicamos si la aplicación esta encendida

while (encendido) {
    alert("Menú principal:\n1 - Agregar un turno\n"); //2 - Eliminar un empleado\n3 - Modificar empleado\n4 - Pagar sueldo\n5 - Apagar");
    let opcion = parseInt(prompt("Ingrese una opción"));
  
    switch (opcion) {
      case 1:
        agregarTurno();
        break;
      case 2:
        eliminarEmpleado();
        break;
      case 3:
        editarEmpleado();
        break;
      case 4:
        pagarSueldoEmpleado();
        break;
      case 5:
        encendido = false;
        break;
      default:
        alert("Inserte una opción correcta");
    }
  }