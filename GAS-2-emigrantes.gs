/** 
  *   _____  ______ _      _____ 
  *  |  __ \|  ____| |    / ____|
  *  | |__) | |__  | |   | |     
  *  |  ___/|  __| | |   | |     
  *  | |    | |    | |___| |____ 
  *  |_|    |_|    |______\_____|
  *   
  * Script:    GAS-2-emigrantes.gs
  * 
  * Autor1: --su nombre y correo-- ( ...@lazarocardenas.edu.mx) 
  * Fecha:  Noviembre 2018
  * Asesor: MC. René Solis (rsolis@lazarocardenas.edu.mx) 
  * Curso:  Informática I. en PFLC
  * 
  * Resumen del archivo: 
  * Vamos a crear una función personalizada con Apps Script y también demostrar el uso del Servicio de Mapas. Crearemos una pequeña función personalizada que calcula la distancia de conducción entre dos puntos, según las estimaciones de conducción del Servicio de Google Maps.
  * El objetivo es poder tener dos o mas  lugares en nuestra hoja de cálculo y escribir la nueva función en una nueva celda para obtener la distancia, de la siguiente manera:
	* 
  * Nota: Debemos poner un rango en la hoja de cálculo para determinar A1:B1 por ejemplo
*/ 

function distanciaEntreDosPuntos(start_point, end_point) {
  // obtener las direcciones de las celdas indicadas.
  var directions = Maps.newDirectionFinder()
     .setOrigin(start_point)
     .setDestination(end_point)
     .setMode(Maps.DirectionFinder.Mode.DRIVING)
     .getDirections();
  
  // la primera ruta tomar la distancia
  var route = directions.routes[0];
  var distance = route.legs[0].distance.text;
  return distance;
}
