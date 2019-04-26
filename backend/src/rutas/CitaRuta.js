//obtenemos el modelo CitaModel con toda la funcionalidad
var CitaModel = require('../modelos/CitaModel');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function ()
{

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todas las citas
    router.get("/", function (req, res)
    {
        CitaModel.getCitas(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra la cita solicitada
    router.get("/:id", function (req, res)
    {
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id))
        {
            CitaModel.getCita(id, function (error, data)
            {
                //si la cita existe lo mostramos en formato json
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
        //creamos un objeto Json con los datos de la cita
        var CitaData =
            {
                IdCita_Citas: null,
                Fecha_Citas: req.body.Fecha_Citas,
                Hora_Citas: req.body.Hora_Citas,
                Estado_Citas: req.body.Estado_Citas,
                IdCliente_Citas: req.body.IdCliente_Citas,
                IdAgente_Citas: req.body.IdAgente_Citas,
                IdInmueble_Citas: req.body.IdInmueble_Citas,
                FechaRegistro_Citas: null,
                
            };


        //usamos la funcion para insertar
        CitaModel.insertCita(CitaData, function (error, data)
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

        var CitaData =
            {
                IdCita_Citas: req.body.IdCita_Citas,
                Fecha_Citas: req.body.Fecha_Citas,
                Hora_Citas: req.body.Hora_Citas,
                Estado_Citas: req.body.Estado_Citas,
                IdCliente_Citas: req.body.IdCliente_Citas,
                IdAgente_Citas: req.body.IdAgente_Citas,
                IdInmueble_Citas: req.body.IdInmueble_Citas,
                FechaRegistro_Citas: req.body.FechaRegistro_Citas,
            };


        //usamos la funcion para actualizar
        CitaModel.updatecita(CitaData, function (error, data)
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
