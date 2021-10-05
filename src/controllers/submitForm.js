require('dotenv').config();

const nodemailer = require('nodemailer');

const user = "contatocontextnared@gmail.com";
const pass = process.env.GMAIL_PASS;

module.exports = (nome, email, assunto) =>{
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
            replyTo: email,
            subject: `${nome} lhe enviou uma mensagem`,
            text: assunto,
        }

        return new Promise((resolve, reject)=>{
            transporter.sendMail(emailToBeSent)
                .then((response)=>{
                    transporter.close();
                    return resolve(response);
                })
                .catch((error)=>{
                    transporter.close();
                    return reject(error);
                })
        })
}
