var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var clienteModel = {};

//---------------------------------------------------------------
//obtenemos todos clientes
clienteModel.getClientes = function (callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM Clientes;";
        
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
//obtenemos un cliente por su id
clienteModel.getCliente = function (id, callback)
{
    if (connection)
    {
        var sql = "SELECT * FROM Clientes  "
                        +" WHERE IdCliente_Clientes  = " 
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
//añadir un nuevo cliente
clienteModel.insertCliente = function (ClienteData, callback)
{
    if (connection)
    {
        var sql = "INSERT INTO Clientes SET ?";

        connection.query(sql, ClienteData, function (error, result)
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
//actualizar un cliente
clienteModel.updateCliente = function (ClienteData, callback)
 {

    if (connection)
    {
        var sql = "UPDATE Clientes SET 	IdTipoDocumento_Clientes = " + connection.escape(ClienteData.IdTipoDocumento_Clientes)
        + ", NumeroDocuemto_Clientes = " + connection.escape(ClienteData.NumeroDocuemto_Clientes)
                    + ", PrimerNombre_Clientes = " + connection.escape(ClienteData.PrimerNombre_Clientes)
                    + ", SegundoNombre_Clientes = " + connection.escape(ClienteData.SegundoNombre_Clientes)
                    + ", PrimerApellido_Clientes = " + connection.escape(ClienteData.PrimerApellido_Clientes)
                    + ", SegundoApellido_Clientes = " + connection.escape(ClienteData.SegundoApellido_Clientes)
                    + ", FechaNacimiento_Clientes = " + connection.escape(ClienteData.FechaNacimiento_Clientes)
                    + ", Correo_Clientes = " + connection.escape(ClienteData.Correo_Clientes)
                    + ", Contrasena_Clientes = " + connection.escape(ClienteData.Contrasena_Clientes)
                    + ", NumeroTelefono_Clientes = " + connection.escape(ClienteData.NumeroTelefono_Clientes)
                    + ", Estado_Clientes = " + connection.escape(ClienteData.Estado_Clientes)
                    + " WHERE  	IdCliente_Clientes  =  " + connection.escape(ClienteData.IdCliente_Clientes)+";";

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
module.exports = clienteModel;
