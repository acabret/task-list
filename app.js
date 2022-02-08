const tareas = obtenerTareasDelStorage()
console.log(tareas);














function guardarTarea(tarea){
    tareas.push(tarea)
    guardarTareasEnStorage(tareas)
}

function guardarTareasEnLocalStorage(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function obtenerTareasDelStorage() {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
  return tareasGuardadas ? tareasGuardadas : [];
}
