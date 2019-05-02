var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipDocModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipDocModel.getTipDocs = function (callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM TipodeDocumentos;";
        
        connection.query(sql, function (error, rows) 
        {
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
            }
        });
    }
}

//---------------------------------------------------------------
//obtenemos un tipo doc por su id
TipDocModel.getTipDoc = function (id, callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM TipodeDocumentos  "
                        +" WHERE IdtipoddeDocumento_TipodeDocumentos  = " 
                        + connection.escape(id) + ";";

        //console.log(id);

        connection.query(sql, function (error, row)
        {
            //se muestra el mensaje correspondiente
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null, row);
            }
        });
    }
}

//---------------------------------------------------------------
//añadir un nuevo tipo de documento
TipDocModel.insertTipDoc = function (TipDocData, callback)
{
    if (connection)
    {
        var sql = "INSERT INTO TipodeDocumentos SET ?";

        connection.query(sql, TipDocData, function (error, result)
        {
            //se muestra el mensaje correspondiente
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null,{"msg": "Registro Insertado"});
            }
        });
    }
}

//---------------------------------------------------------------
//actualizar un tipo de documento
TipDocModel.updateTipDoc = function (TipDocData, callback)
 {

    if (connection)
    {
        var sql = "UPDATE TipodeDocumentos SET NombreTipodeDocumento_TipodeDocumentos = " + connection.escape(TipDocData.NombreTipodeDocumento_TipodeDocumentos)
                    + ", InicialTipodeDocumento_TipodeDocumentos = " + connection.escape(TipDocData.InicialTipodeDocumento_TipodeDocumentos)
                    + " WHERE  IdtipoddeDocumento_TipodeDocumentos  =  " + connection.escape(TipDocData.IdtipoddeDocumento_TipodeDocumentos)+";";

        connection.query(sql, function (error, result)
        {
            //se muestra el mensaje correspondiente
            if (error)
            {
                throw error;
            }
            else
            {
                callback(null, {"msg": "Registro Actualizado"});
            }
        });
    }
}

//---------------------------------------------------------------
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = TipDocModel;
