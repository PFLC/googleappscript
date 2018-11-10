/** 
  *   _____  ______ _      _____ 
  *  |  __ \|  ____| |    / ____|
  *  | |__) | |__  | |   | |     
  *  |  ___/|  __| | |   | |     
  *  | |    | |    | |___| |____ 
  *  |_|    |_|    |______\_____|
  *   
  * Script:    gas-0.gs 
  * 
  * Autor1:      --su nombre y correo-- ( ...@lazarocardenas.edu.mx) 
  * Fecha:       Noviembre 2018
  * Colaborador: MC. René Solis (rsolis@lazarocardenas.edu.mx) 
  * Curso:       Informática I. en PFLC
  * 
  * Resumen del archivo: 
  * 
  * Google Apps Script que envia el mapa de una dirección
  * GoogleSheet (hoja de cálculo) puesta en la Celda A1.
  * 
*/ 

function enviaMapa() {
  // Esta sección es como el rompecabezar de https://blockly-games.appspot.com, cuenta con caracteristicas.
  // Son propiedades (el punto decimal) para describir el las instrucciones y sus propiedades
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // Es la posición que tomará para el mapa, favor de poner la direccion en la Celda A1 de su hoja de cálculo.
  // Puede dar otra posición de su Hoja de Cálculo, adelante.
  var address = sheet.getRange('A1').getValue(); 
  var map = Maps.newStaticMap().addMarker(address); // instruccion para crear un clip de la dirección propuesta.
  
  // Favor de poner su correo abajo
  GmailApp.sendEmail('---@lazarocardenas.edu.mx', 'Practica GAScript CERO, creará un Mapa', 'Favor de ver adentro de este correo.', {attachments:[map]});
}

/**
* Gracias favor de crearlo en su Script personal, es un curso básico para Bachillerato.
*/ 
