require('dotenv').config();

const nodemailer = require('nodemailer');

const user = "contatocontextnared@gmail.com";
const pass = process.env.GMAIL_PASS;

module.exports = (app) =>{
   app.post('/enviarformulario', (req, resp)=>{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, 
            secure: true,
            auth: {
                user,
                pass
            },
        });
        const emailToBeSent = {
            from: user,
            to: user,
            replyTo: req.body.email,
            subject: `${req.body.nome} lhe enviou uma mensagem`,
            text: `${req.body.assunto}`,
            html: req.body.assunto
        }

        transporter.sendMail(emailToBeSent, (error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("E-mail sent successfully");
            }
        });
    });
}
