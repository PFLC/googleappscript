/** 
  *   _____  ______ _      _____ 
  *  |  __ \|  ____| |    / ____|
  *  | |__) | |__  | |   | |     
  *  |  ___/|  __| | |   | |     
  *  | |    | |    | |___| |____ 
  *  |_|    |_|    |______\_____|
  *   
  * Script:    gas-1.gs 
  * 
  * Autor1: --su nombre y correo-- ( ...@lazarocardenas.edu.mx) 
  * Fecha:  Noviembre 2018
  * Asesor: MC. René Solis (rsolis@lazarocardenas.edu.mx) 
  * Curso:  Informática I. en PFLC
  * 
  * Resumen del archivo: 
  * 
  * Crea un Google Doc y envía un correo electrónico al usuario actual con un enlace al documento.
  *
  * Cambiar minimo el calculo,y  mensaje (claro libremente puede hacer mas cambios)
  * 
*/ 

function crearEnviarAlgo() {
  
  // Crear un  Google Doc de nombre 'Hola Mundo!'
  var doc = DocumentApp.create('Hola Mundo!');

  // Acceda al cuerpo del documento, luego agregue un párrafo.  
  doc.getBody().appendParagraph('Hola Mundo, soy el Script que programo en la clase de informática');

  // Recoger el URL o direccion del documento antes creado.
  var url = doc.getUrl();

  // Obtener la dirección de correo electrónico del usuario activo, ese es usted.
  var email = Session.getActiveUser().getEmail();

  // Obtenga el nombre del documento para usar como línea de asunto del correo electrónico.
  var sujeto = doc.getName();
  
  // Un calculo para enviarlo por correo, es 12 .... ?
  var suma = 5+5
   
  // Que Grupo estas ?
  var myGrupoEs = 100
   
  // Agregue una nueva cadena a la variable "url" para usarla como un cuerpo de correo electrónico.
 
  var redaccion = 'Este documento se creo con Google Script, y se entrega el link a su documento: ' + url+ 'a y la suma de 5+5 es '+ suma + ' y estas en el grupo ' + myGrupoEs;

  // Envíate un correo electrónico con un enlace al documento.
  GmailApp.sendEmail(email, sujeto, redaccion);
}
// Basado en tutorial de GAS via https://github.com/gsuitedevs/apps-script-samples/blob/master/templates/standalone/helloWorld.gs

