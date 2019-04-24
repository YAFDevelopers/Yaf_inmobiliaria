var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var inmuebleModel = {};

//---------------------------------------------------------------
//obtenemos todos Inmueble
inmuebleModel.getInmuebles = function (callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM Inmuebles;";
        
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
//obtenemos un Inmueble por su id
inmuebleModel.getInmueble = function (id, callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM Inmuebles "
                        +" WHERE IdInmueble_Inmuebles  = " 
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
//añadir un nuevo Inmueble
inmuebleModel.insertInmueble = function (InmuebleData, callback)
{
    if (connection)
    {
        var sql = "INSERT INTO Inmuebles SET ?";

        connection.query(sql, InmuebleData, function (error, result)
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
//actualizar un Inmuebles
inmuebleModel.updateInmueble = function (InmuebleData, callback)
 {

    
    if (connection)
    {
        var sql = "UPDATE Inmuebles SET IdTipoInmueble_Inmuebles = " + connection.escape(InmuebleData.IdTipoInmueble_Inmuebles)
                    + ",NombreInmueble_Inmuebles = " + connection.escape(InmuebleData.NombreInmueble_Inmuebles)
                    + ",Descripcon_Inmuebles = " + connection.escape(InmuebleData.Descripcon_Inmuebles)
                    + ",Direccion_Inmuebles = " + connection.escape(InmuebleData.Direccion_Inmuebles)
                    + ",Valor_Inmuebles = " + connection.escape(InmuebleData.Valor_Inmuebles)
                    + ",Estado_Inmuebles = " + connection.escape(InmuebleData.Estado_Inmuebles)
                    + ",FechaRegistro_Inmuebles = " + connection.escape(InmuebleData.FechaRegistro_Inmuebles)
                    + " WHERE  IdInmueble_Inmuebles =  " + connection.escape(InmuebleData.IdInmueble_Inmuebles)+";";

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
module.exports = inmuebleModel;