const bodyParse = require('body-parser');
const cors      = require('cors');
const sweggerUi = require('swagger-ui-express');
const swaggerJsn= require('./swagger.json');

module.exports =  app => {
    

    app.use(bodyParse.urlencoded({extended: true}))
    app.use(bodyParse.json())   
    app.use('/docs',sweggerUi.serve,sweggerUi.setup(swaggerJsn))
    app.use(cors({

        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    
    }))

}

