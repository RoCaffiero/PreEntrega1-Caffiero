let alumnos = [];
let acumuladorNotas = 0;
let promedio = 0;
function enviarDatosAlumno() {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del nombre y la nota
    let nombre = document.getElementById("nombre").value;
    let nota = parseInt(document.getElementById("nota").value);

    // Crear un objeto con los datos del alumno
    let unAlumno = {
        nombre: nombre,
        nota: nota
    };

    alumnos.push(unAlumno);
    alert(`${nombre} fue agregado correctamente.`);
}


function calcularPromedioCurso() {
    event.preventDefault();
    if (alumnos.length > 0) {
        alumnos.forEach(function (alumno) {
            console.log(`Alumno: ${alumno.nombre} - Nota: ${alumno.nota}`);
            acumuladorNotas += alumno.nota;
        });

        promedio = (acumuladorNotas / alumnos.length);
        alert(`El promedio del curso es de: ${promedio}.`);

    }
    else {
        alert("Agregue alumnos para calcular el promedio");
    }
}


function calcularMejorPromedio() {
    event.preventDefault();
    let mejorNota = 0;
    let mejorAlumno = null;

    if (alumnos.length > 0) {
        alumnos.forEach(function (alumno) {
            if (alumno.nota > mejorNota) {
                mejorNota = alumno.nota;
                mejorAlumno = alumno.nombre;
            }
        });

        if (mejorAlumno) {
            alert(`El mejor promedio es de ${mejorAlumno} con una nota de ${mejorNota}.`);
        } else {
            alert("No se encontró el mejor promedio.");
        }
    } else {
        alert("Agregue alumnos para calcular el promedio");
    }
}
