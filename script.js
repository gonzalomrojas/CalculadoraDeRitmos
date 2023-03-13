function calcularRitmo() {
  var distancia = parseFloat(document.getElementById("distancia").value);
  var tiempo = parseFloat(document.getElementById("tiempo").value);
  var ritmo = tiempo / distancia;
  let minutos = Math.floor(ritmo);
  let segundos = Math.round((ritmo - minutos) * 60);

  // document.getElementById("resultado").innerHTML = "Tu ritmo es de " + minutos + " minutos y " + segundos + " segundos por kilómetro.";

}


function deleteInput() {
    //borra imputs "distancia"
  document.getElementById("distancia").value = "";
  document.getElementById("distanciam").value = "";
  //borra imputs "tiempo"
  document.getElementById("tiempoHs").value = "";
  document.getElementById("tiempoMin").value = "";
  document.getElementById("tiempoSeg").value = "";
  //borra imputs "ritmo"
  document.getElementById("ritmoMinutos").value = "";
  document.getElementById("ritmoSegundos").value = "";
  
}

function calcularTiempo(distancia, ritmo) {
  // Convertimos el ritmo de carrera a segundos por metro

  const segundosPorMetro = (ritmo * 60) / 1000;

  // Calculamos el tiempo total empleado en correr la distancia
  const tiempoTotalEnSegundos = distancia * segundosPorMetro;

  // Convertimos el tiempo total a minutos y segundos
  const minutos = Math.floor(tiempoTotalEnSegundos / 60);
  const segundos = Math.round(tiempoTotalEnSegundos % 60);

  // Devolvemos el tiempo total en formato "mm:ss"
  console.log(minutos, segundos);
}

function calcularDistancia(tiempo, ritmo) {
  // Convertimos el ritmo de carrera a segundos por metro
  const segundosPorMetro = (ritmo * 60) / 1000;

  // Calculamos la distancia recorrida en metros
  const distanciaEnMetros = (tiempo * 60) / segundosPorMetro;

  // Convertimos la distancia a kilómetros y redondeamos a 2 decimales
  const distanciaEnKm = (distanciaEnMetros / 1000).toFixed(2);

  // Devolvemos la distancia recorrida en kilómetros
  document.getElementById("distancia").value = distanciaEnKm;
  console.log(distanciaEnKm);
}

function claculate() {
  if (document.getElementById("distancia").value !== "") {
    calcularRitmo();
  }
  if (
    document.getElementById("tiempo").value !== "" &&
    document.getElementById("ritmoMinutos").value !== ""
  ) {
    calcularDistancia(
      document.getElementById("tiempo").value,
      document.getElementById("ritmoMinutos").value
    );
  }
  if (document.getElementById("tiempo").value === "") {
    calcularTiempo(
      document.getElementById("distancia").value,
      document.getElementById("ritmoMinutos").value
    );
  }
}
