const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Servidor rodando na porta 5000")
})

