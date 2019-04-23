var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var AgenteModel = {};

//---------------------------------------------------------------
//obtenemos todos los tipos de documento
AgenteModel.getAgentes = function (callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM agente;";
        
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
//obtenemos un agente por su id
AgenteModel.getAgente = function (id, callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM agente "
                        +" WHERE IdAgente_Agentes  = " 
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
//añadir un nuevo Agente
AgenteModel.insertAgente = function (AgenteData, callback)
{
    if (connection)
    {
        var sql = "INSERT INTO agente SET ?";

        connection.query(sql, AgenteData, function (error, result)
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
AgenteModel.updateAgente = function (AgenteData, callback)
 {

    if (connection)
    {
        var sql = "UPDATE agentes SET NumeroDocumento_Agentes = " + connection.escape(AgenteData.NumeroDocumento_Agentes)
                    + ", IdTipoDocumento_Agentes = " + connection.escape(AgenteData.IdTipoDocumento_Agentes)
                    + ", PrimerNombre_Agentes = " + connection.escape(AgenteData.PrimerNombre_Agentes)
                    + ", SegundoNombre_Agentes = " + connection.escape(AgenteData.SegundoNombre_Agentes)
                    + ", PrimerApellido_Agentes = " + connection.escape(AgenteData.PrimerApellido_Agentes)
                    + ", SegundoApellido_Agentes = " + connection.escape(AgenteData.SegundoApellido_Agentes)
                    + ", FechaNacimiento_Agentes = " + connection.escape(AgenteData.FechaNacimiento_Agentes)
                    + ", Correo_Agentes = " + connection.escape(AgenteData.Correo_Agentes)
                    + ", NumeroTelfono_Agentes = " + connection.escape(AgenteData.NumeroTelfono_Agentes)
                    + ", Estado_Agente = " + connection.escape(AgenteData.Estado_Agente)
                    + ", FechaRegistro_Agente = " + connection.escape(AgenteData.FechaRegistro_Agente)
                    + " WHERE  IdAgente_Agentes  =  " + connection.escape(AgenteData.IdAgente_Agentes)+";";
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
module.exports = AgenteModel;
