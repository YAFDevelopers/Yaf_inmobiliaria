//obtenemos el modelo TipDocModel con toda la funcionalidad
var TipDocModel = require('../modelos/tipdocmodel');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function ()
{

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res)
    {
        TipDocModel.getTipDocs(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra el tipo de documento solicitado
    router.get("/:id", function (req, res)
    {
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id))
        {
            TipDocModel.getTipDoc(id, function (error, data)
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
        }
        else //si hay algún error
        {
            res.status(500).json({ "msg": "error" });
        }
    });

    //---------------------------------------------------------------
    //Muestra y captura los datos del método CRUL crear, usando el verbo post
    router.post("/", function (req, res)
    {
        //creamos un objeto Json con los datos del tipo de documento
        var TipDocData =
            {
                IdtipoddeDocumento_TipodeDocumentos: null,
                NombreTipodeDocumento_TipodeDocumentos: req.body.NombreTipodeDocumento_TipodeDocumentos,
                InicialTipodeDocumento_TipodeDocumentos: req.body.InicialTipodeDocumento_TipodeDocumentos,
            };


        //usamos la funcion para insertar
        TipDocModel.insertTipDoc(TipDocData, function (error, data)
        {
            //se muestra el mensaje correspondiente
            if (data)
            {
                res.status(200).json(data);
            }
            else
            {
                res.status(500).send({ error: "boo:(" });
            }
        });
    });

    //---------------------------------------------------------------
    //Muestra y captura los datos para el método CRUL update (actualizar), usando el verbo put
    router.put("/", function (req, res)
    {
        //almacenamos los datos de la petición en un objeto

        var TipDocData =
            {
                IdtipoddeDocumento_TipodeDocumentos: req.body.	IdtipoddeDocumento_TipodeDocumentos,
                NombreTipodeDocumento_TipodeDocumentos: req.body.NombreTipodeDocumento_TipodeDocumentos,
                InicialTipodeDocumento_TipodeDocumentos: req.body.InicialTipodeDocumento_TipodeDocumentos,
            };


        //usamos la funcion para actualizar
        TipDocModel.updateTipDoc(TipDocData, function (error, data)
        {
            //se muestra el mensaje correspondiente
            if (data && data.msg)
            {
                res.status(200).json(data);
            }
            else
            {
                res.status(500).send(
                { 
                    error: "boo:(" 
                });
            }
        });
    });


    //exportamos el objeto para tenerlo disponible en EL APP
    return router;
}
