const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running on port 5000");
});

