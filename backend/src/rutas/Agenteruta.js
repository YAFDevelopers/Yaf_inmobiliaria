//obtenemos el modelo AgenteModel con toda la funcionalidad
var AgenteModel = require('../modelos/AgenteModel');
var express = require('express');
var router = express.Router();

//creamos el ruteo de la clase
module.exports = function ()
{

    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los agentes
    router.get("/", function (req, res)
    {
        AgenteModel.getAgentes(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    //Muestra el método CRUL read(leer), que muestra el agente solicitado
    router.get("/:id", function (req, res)
    {
        var id = req.params.id;

        //solo actualizamos si la id es un número
        if (!isNaN(id))
        {
            AgenteModel.getAgente(id, function (error, data)
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
        var AgenteData =
            {
                IdAgente_Agentes: null,
                IdTipoDocumento_Agentes: req.body.IdTipoDocumento_Agentes,
                NumeroDocumento_Agentes: req.body.NumeroDocumento_Agentes,                
                PrimerNombre_Agentes: req.body.PrimerNombre_Agentes,
                SegundoNombre_Agentes: req.body.SegundoNombre_Agentes,
                PrimerApellido_Agentes: req.body.PrimerApellido_Agentes,
                SegundoApellido_Agentes: req.body.SegundoApellido_Agentes,
                FechaNacimiento_Agentes: req.body.FechaNacimiento_Agentes,
                Correo_Agentes: req.body.Correo_Agentes,
                Contraseña_Agentes: req.body.Contraseña_Agentes,
                NumeroTelfono_Agentes: req.body.NumeroTelfono_Agentes,
                Estado_Agentes: req.body.Estado_Agentes,
                FechaRegistro_Agentes: null,
            };


        //usamos la funcion para insertar
        AgenteModel.insertAgente(AgenteData, function (error, data)
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

        var AgenteData =
            {
                IdAgente_Agentes: req.body.IdAgente_Agentes,
                IdTipoDocumento_Agentes: req.body.IdTipoDocumento_Agentes,
                NumeroDocumento_Agentes: req.body.NumeroDocumento_Agentes,
                PrimerNombre_Agentes: req.body.PrimerNombre_Agentes,
                SegundoNombre_Agentes: req.body.SegundoNombre_Agentes,
                PrimerApellido_Agentes: req.body.PrimerApellido_Agentes,
                SegundoApellido_Agentes: req.body.SegundoApellido_Agentes,
                FechaNacimiento_Agentes: req.body.FechaNacimiento_Agentes,
                NumeroTelfono_Agentes: req.body.NumeroTelfono_Agentes,
                Correo_Agentes: req.body.Correo_Agentes,
                Contraseña_Agentes: req.body.Contraseña_Agentes,
                Estado_Agentes: req.body.Estado_Agentes,
                FechaRegistro_Agentes: req.body.FechaRegistro_Agentes,
            };


        //usamos la funcion para actualizar
        AgenteModel.updateAgente(AgenteData, function (error, data)
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
