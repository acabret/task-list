export function obtenerTareas(callback) {
  fetch("http://localhost:3000/api/tareas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((respuesta) => {
      //   callback(respuesta.payload);
      respuesta.payload.forEach((tarea) => {
        callback(tarea);
      });
    })
    .catch();
}

export function agregarTarea(tarea, callback) {
  fetch("http://localhost:3000/api/tareas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  })
    .then((response) => {
      return response.json();
    })
    .then((respuesta) => {
      callback(respuesta.payload);
    })
    .catch();
}

export function cambiarEstadoCompletitud(tarea, callback) {
  fetch("http://localhost:3000/api/tareas/" + tarea.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completado: !tarea.completado }),
  })
    .then((response) => {
      return response.json();
    })
    .then((respuesta) => {
    //   callback(respuesta.payload);
    })
    .catch();
}
