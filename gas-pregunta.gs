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
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Personalizar Menu')
      .addItem('Mostrar pregunta', 'showPrompt')
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
    ui.alert('Tu nombre es ' + text + '.');
  } else if (button == ui.Button.CANCEL) {
    // Hizo click en "Cancel".
    ui.alert('No logre anotar su nombre.');
  } else if (button == ui.Button.CLOSE) {
    // Hizo click en X en la barra de herramientas.
    ui.alert('Cerro la ventana.');
  }
}
