const express = require('express');
const consign = require('consign');
const cors = require('cors');

module.exports = () =>{
    const app = express();
    
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors({origin: `${process.env.CORS_ORIGIN_URL}`}));

    consign()
        .include('./src/server/controllers')
        .into(app)

    return app;
}
