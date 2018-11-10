/**
 * Practica GAS.1
 *
 * Crea un Google Doc y envía un correo electrónico al usuario actual con un enlace al documento.
 *
 * Cambiar minimo el calculo,y  mensaje (claro libremente puede hacer mas cambios)
 */
function crearEnviarAlgo() {
  // Crear un  Google Doc de nombre 'Hola Mundo!'
  var doc = DocumentApp.create('Hola Mundo!');

  // Acceda al cuerpo del documento, luego agregue un párrafo.  
  doc.getBody().appendParagraph('Hola Mundo, soy el Script que programo');

  // Recoger el URL o direccion del documento antes creado.
  var url = doc.getUrl();

  // Obtenga la dirección de correo electrónico del usuario activo, ese es usted.
  var email = Session.getActiveUser().getEmail();

  // Obtenga el nombre del documento para usar como línea de asunto del correo electrónico.
  var sujeto = doc.getName();
  
  // Un calculo para enviarlo por correo, HEY SIRI Cuanto es .... ?
   var siri = 5+5+5+5+5+5+5+5+5+5+5+5+5+5
  // Que Grupo estas ?
   var myGrupoEs = 100
   
  // Agregue una nueva cadena a la variable "url" para usarla como un cuerpo de correo electrónico.
  var suma = 5+5
  var redaccion = 'Este documento se creo con Google Script, y se entrega el link a su documento: ' + url+ 'a y la suma de 5+5+5+5+5+5+5+5+5+5+5+5+5+5 es '+ siri + ' y estas en el grupo ' + myGrupoEs;

  // Envíate un correo electrónico con un enlace al documento.
  GmailApp.sendEmail(email, sujeto, redaccion);
}
