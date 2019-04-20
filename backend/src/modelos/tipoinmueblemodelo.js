var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var TipInmuebleModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
TipInmuebleModel.getTipInmuebles = function (callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM TipoInmuebles;";
        
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
TipInmuebleModel.getTipInmueble = function (id, callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM TipoInmuebles  "
                        +" WHERE IdTipoInmueble_TipoInmuebles  = " 
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
TipInmuebleModel.insertTipInmueble = function (TipInmuebleData, callback)
{
    if (connection)
    {
        var sql = "INSERT INTO TipoInmuebles  SET ?";

        connection.query(sql, TipInmuebleData, function (error, result)
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
TipInmuebleModel.updateTipInmueble = function (TipInmuebleData, callback)
 {

    if (connection)
    {
        var sql = "UPDATE TipoInmuebles SET NombreTipoInmueble = " + connection.escape(TipInmuebleData.NombreTipoInmueble)
                    + " WHERE IdTipoInmueble_TipoInmuebles  =  " + connection.escape(TipInmuebleData.IdTipoInmueble_TipoInmuebles)+";";

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
module.exports = TipInmuebleModel;
