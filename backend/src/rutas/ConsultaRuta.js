var ConsultaModel = require('../modelos/ConsultaModel');
var express = require('express');
var router = express.Router();

module.exports = function ()
{
    router.get("/primera/:id/:fecha_ini/:fecha_fin", function (req, res)
    {
        var id = req.params.id;
        var fecha_ini = req.params.fecha_ini;
        var fecha_fin = req.params.fecha_fin;


        ConsultaModel.getConsultaPrimera(id,fecha_ini,fecha_fin, function (error, data)
            {
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0)
                {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else
                {
                    res.json(404, 
                    { 
                        "msg": "Registro no Existe" 
                    });
                }
            });
    });

    router.get("/segunda/:id/:fecha_ini/:fecha_fin", function (req, res)
    {
        var id = req.params.id;
        var fecha_ini = req.params.fecha_ini;
        var fecha_fin = req.params.fecha_fin;


        ConsultaModel.getConsultaSegunda(id,fecha_ini,fecha_fin, function (error, data)
            {
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0)
                {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else
                {
                    res.json(404, 
                    { 
                        "msg": "Registro no Existe" 
                    });
                }
            });
    });

    router.get("/tercera/:id/:fecha_ini/:fecha_fin", function (req, res)
    {
        var id = req.params.id;
        var fecha_ini = req.params.fecha_ini;
        var fecha_fin = req.params.fecha_fin;


        ConsultaModel.getConsultaTercera(id,fecha_ini,fecha_fin, function (error, data)
            {
                //si el tipo de documento existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0)
                {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else
                {
                    res.json(404, 
                    { 
                        "msg": "Registro no Existe" 
                    });
                }
            });
    });

    return router;
}