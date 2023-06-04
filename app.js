
let alumnos = [
    {
        nombre: "Juan",
        edad: 20,
        calificacion: 100
    },

    {
        nombre: "María",
        edad: 22,
        calificacion: 85
    },

    {
        nombre: "Pedro",
        edad: 21,
        calificacion: 30
    },

    {
        nombre: "Lola",
        edad: 19,
        calificacion: 50
    },
];


let acumuladorNotas = 0;
let promedioAlumnos = 0;


verificarNotas();

calcularPromedio(acumuladorNotas);



function verificarNotas(){
    for (let i = 0; i < alumnos.length; i++) {
        console.log("La posicion actual es: " + i);
        console.log("El nombre del alumno es: " + alumnos[i].nombre + " y su nota final es: " + alumnos[i].calificacion);
        if (alumnos[i].calificacion >= 70) {
            console.log("El curso está aprobado con la nota " + alumnos[i].calificacion);
        } else {
            console.log("Deberá recursar la materia.")
        };
        acumuladorNotas += alumnos[i].calificacion;
    };
}

function calcularPromedio(notas){
    promedioAlumnos = (notas / alumnos.length);
}


function mostrarPromedio(){
    alert("El promedio de los alumnos es " + promedioAlumnos);
}