/** 
  *   _____  ______ _      _____ 
  *  |  __ \|  ____| |    / ____|
  *  | |__) | |__  | |   | |     
  *  |  ___/|  __| | |   | |     
  *  | |    | |    | |___| |____ 
  *  |_|    |_|    |______\_____|
  *   
  * Script:    gas-pregunta.gs 
  * 
  * Autor1: --su nombre y correo-- ( ...@lazarocardenas.edu.mx) 
  * Fecha:  Noviembre 2018
  * Asesor: MC. René Solis (rsolis@lazarocardenas.edu.mx) 
  * Curso:  Informática I en PFLC
  * 
  * Resumen del archivo: 
  * 
  * Pregunta por su nombre validando una ventana.
  * 
*/ 
function onOpen() {
  SpreadsheetApp.getUi() // Funciona dentro de DocumentApp, SlidesApp o FormApp.
      .createMenu('Practicas Informática')
      .addItem('Preguntar su nombre', 'showPrompt')
      .addToUi();
}

function showPrompt() {
  var ui = SpreadsheetApp.getUi(); // Comando de ventanas.

  var result = ui.prompt(
      '¡Vamos conociendonos!',
      'Por favor teclea tú nombre:',
      ui.ButtonSet.OK_CANCEL);

  // Procesar la respuesta del usuario, boton, mensaje
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // Hizo click en "OK".
    ui.alert('Tu nombre es ' + text + ', de la clase de informática.');
  } else if (button == ui.Button.CANCEL) {
    // Hizo click en "Cancel".
    ui.alert('No logré, anotar su nombre.');
  } else if (button == ui.Button.CLOSE) {
    // Hizo click en X en la barra de herramientas.
    ui.alert('Cerró la ventana.');
  }
}
// Basado en tutorial GAS: https://developers.google.com/apps-script/guides/dialogs
