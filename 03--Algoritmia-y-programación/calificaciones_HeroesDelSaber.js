function calificaciones () {
    var nombreAlumno, califEsp, califMat, califHist, califIng, califDep, prom;
    document.write("Hola, profesor. Ingresa el nombre del alumno");
    nombreAlumno = String(prompt());
    document.write("Español")
    califEsp = Number(prompt());
    document.write("Matemáticas")
    califMat = Number(prompt());
    document.write("Historia")
    califHist = Number(prompt());
    document.write("Inglés")
    califIng = Number(prompt());
    document.write("Deportes")
    califDep = Number(prompt());
    prom = (califEsp+califMat+califHist+califIng+califDep)/5
    if (prom>=7) {
        document.write(nombreAlumno + " aprobó")
    } else {
        document.write(nombreAlumno + " reprobó")
    }
}