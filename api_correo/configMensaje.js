const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dayse.maroto.lema@gmail.com', // Cambialo por tu email
      pass: 'ingles&musica+456' // Cambialo por tu password
    }
  });

  const mailOptions = {
    from:  `"${formulario.nombre} " <${formulario.email}>`,
    to: 'dayse.maroto.lema@gmail.com', // Cambia esta parte por el destinatario
    subject: `${formulario.asunto}`,
    html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
    
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}