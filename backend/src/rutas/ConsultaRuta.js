var ConsultaModel = require('../modelos/ConsultaModel');
var express = require('express');
var router = express.Router();

module.exports = function () {
    router.get("/:fecha_ini/:fecha_fin", function (req, res) {
        var fecha_ini = req.params.fecha_ini;
        var fecha_fin = req.params.fecha_fin;

        ConsultaModel.getConsulta1(fecha_ini, fecha_fin, function (error, data) {
            //si el tipo de documento existe lo mostramos en formato json
            if (typeof data !== 'undefined' && data.length > 0) {
                res.status(200).json(data);
            }
            //en otro caso mostramos una respuesta conforme no existe
            else {
                res.json(404,
                    {
                        "msg": "Registro no Existe"
                    });
            }
        });

    });
}