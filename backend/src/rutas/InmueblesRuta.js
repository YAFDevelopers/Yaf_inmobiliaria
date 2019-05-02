var InmuebleModel = require('../modelos/InmueblesModel');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clasecl
module.exports = function ()
{

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function (req, res)
    {
        InmuebleModel.getInmuebles(function (error, data)
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
            InmuebleModel.getInmueble(id, function (error, data)
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
        var InmuebleData =
            {
                IdInmueble_Inmuebles: null,
                IdTipoInmueble_Inmuebles: req.body.IdTipoInmueble_Inmuebles,
                NombreInmueble_Inmuebles: req.body.NombreInmueble_Inmuebles,
                Descripcion_Inmuebles: req.body.Descripcion_Inmuebles,
                Direccion_Inmuebles: req.body.Direccion_Inmuebles,
                Valor_Inmuebles: req.body.Valor_Inmuebles,
                Estado_Inmuebles: req.body.Estado_Inmuebles,
                FechaRegistro_Inmuebles:null,
            };


        //usamos la funcion para insertar
        InmuebleModel.insertInmueble(InmuebleData, function (error, data)
        {
            //se muestra el mensaje correspondiente
            if (data)
            {
                res.status(200).json(data);
            }
            else
            {
                res.status(500).send({ error: "Error" });
            }
        });
    });

    //---------------------------------------------------------------
    //Muestra y captura los datos para el método CRUL update (actualizar), usando el verbo put
    router.put("/", function (req, res)
    {
        //almacenamos los datos de la petición en un objeto

        var InmuebleData =
            {
                IdInmueble_Inmuebles: req.body.IdInmueble_Inmuebles,
                IdTipoInmueble_Inmuebles: req.body.IdTipoInmueble_Inmuebles,
                NombreInmueble_Inmuebles: req.body.NombreInmueble_Inmuebles,
                Descripcion_Inmuebles: req.body.Descripcion_Inmuebles,
                Direccion_Inmuebles: req.body.Direccion_Inmuebles,
                Valor_Inmuebles: req.body.Valor_Inmuebles,
                Estado_Inmuebles: req.body.Estado_Inmuebles,
                FechaRegistro_Inmuebles: req.body.FechaRegistro_Inmuebles,
                
            };


        //usamos la funcion para actualizar
        InmuebleModel.updateInmueble(InmuebleData, function (error, data)
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
                    error: "Error " 
                });
            }
        });
    });


    //exportamos el objeto para tenerlo disponible en EL APP
    return router;
}