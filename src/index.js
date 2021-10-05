const customExpress = require('./config/customExpress');

const app = customExpress();

app.post('/enviarformulario', (req, res, next)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const assunto = req.body.assunto;

    require('../src/controllers/submitForm')(nome, email, assunto)
        .then((response) =>{
            res.json(response)
        })
        .catch((error)=>{
            res.status(500).json(error)
        })
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running on port 5000");
});

