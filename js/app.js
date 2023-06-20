let alumnos = [];
let acumuladorNotas = 0;
let promedio = 0;

function capturarEntrada() {
    event.preventDefault(); // Evitar el envío del formulario

    for (let i = 0; i <= 2; i++) {
    // Obtener el nombre del alumno utilizando prompt
        let nombre = prompt("Ingrese el nombre del alumno");
        // Obtener la nota del alumno utilizando prompt
        let notaString = prompt("Ingrese la nota del alumno");
        let nota = parseInt(notaString);

        // Validar la nota ingresada
        if (isNaN(nota)) {
            alert("La nota ingresada no es valida.");
            return;
        }

        // Crear un objeto con los datos del alumno
        let unAlumno = {
            nombre: nombre,
            nota: nota
        };

        alumnos.push(unAlumno);
        alert(`${nombre} fue agregado correctamente.`);
    }

    console.log(alumnos);

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
