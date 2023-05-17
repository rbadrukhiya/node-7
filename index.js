// node js mail system
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'badrukhiyaravi8@gmail.com',
      pass: 'wibqmkpwizvlffxc'
    }
  });

  
var mailOptions = {
    from: 'badrukhiyaravi8@gmail.com',
    to: 'badrukhiyaravi8@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  