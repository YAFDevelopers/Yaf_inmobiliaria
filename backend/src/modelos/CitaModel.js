var connection = require('../conexion')
//creamos un objeto para ir almacenandotodo lo que necesitemos
var CitaModel = {};

//---------------------------------------------------------------
//obtenemos todas las citas
CitaModel.getCitas = function (callback)
{
    if (connection)
    {
        var sql = "SELECT Citas.IdCita_Citas,Citas.Fecha_Citas,Citas.Hora_Citas,Citas.Estado_Citas, "
                +"CONCAT (Clientes.PrimerNombre_Clientes,' ',COALESCE(Clientes.SegundoNombre_Clientes,''),' ',Clientes.PrimerApellido_Clientes,' ',COALESCE(Clientes.SegundoApellido_Clientes,'')) as nombreCliente, "
                +"CONCAT(Agentes.PrimerNombre_Agentes,' ',COALESCE(Agentes.SegundoNombre_Agentes,''),' ',Agentes.PrimerApellido_Agentes,' ',COALESCE(Agentes.SegundoApellido_Agentes,'')) as nombreAgente, "
                +"Inmuebles.NombreInmueble_Inmuebles,Citas.FechaRegistro_Citas "
                +"FROM Citas,Agentes,Clientes,Inmuebles "
                +"WHERE Citas.IdCliente_Citas=Clientes.IdCliente_Clientes && Agentes.IdAgente_Agentes=Citas.IdAgente_Citas && Inmuebles.IdInmueble_Inmuebles=Citas.IdInmueble_Citas; ";
        
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
//obtenemos una cita por su id
CitaModel.getCita = function (id, callback)
{
    if (connection)
    {
        var sql = "SELECT Citas.IdCita_Citas,Citas.Fecha_Citas,Citas.Hora_Citas,Citas.Estado_Citas,Citas.IdCliente_Citas,Citas.IdAgente_Citas,Citas.IdInmueble_Citas, "
        +"CONCAT (Clientes.PrimerNombre_Clientes,' ',COALESCE(Clientes.SegundoNombre_Clientes,''),' ',Clientes.PrimerApellido_Clientes,' ',COALESCE(Clientes.SegundoApellido_Clientes,'')) as nombreCliente, "
        +"CONCAT(Agentes.PrimerNombre_Agentes,' ',COALESCE(Agentes.SegundoNombre_Agentes,''),' ',Agentes.PrimerApellido_Agentes,' ',COALESCE(Agentes.SegundoApellido_Agentes,'')) as nombreAgente, "
        +"Inmuebles.NombreInmueble_Inmuebles,Citas.FechaRegistro_Citas "
        +"FROM Citas,Agentes,Clientes,Inmuebles "
        +"WHERE Citas.IdCliente_Citas=Clientes.IdCliente_Clientes && Agentes.IdAgente_Agentes=Citas.IdAgente_Citas && Inmuebles.IdInmueble_Inmuebles=Citas.IdInmueble_Citas && IdCita_Citas  = " 
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
//añadir una nueva cita
CitaModel.insertCita = function (CitaData, callback)
{
    if (connection)
    {
        var sql = "INSERT INTO Citas SET ?";

        connection.query(sql, CitaData, function (error, result)
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
//actualizar una cita
CitaModel.updatecita = function (CitaData, callback)
 {
    
    if (connection)
    {
        var sql = "UPDATE Citas SET Fecha_Citas = " + connection.escape(CitaData.Fecha_Citas)
                    + ", Hora_Citas = " + connection.escape(CitaData.Hora_Citas)
                    + ", Estado_Citas = "+ connection.escape(CitaData.Estado_Citas)
                    + ", IdCliente_Citas = "+ connection.escape(CitaData.IdCliente_Citas)
                    + ", IdAgente_Citas = "+ connection.escape(CitaData.IdAgente_Citas)
                    + ", IdInmueble_Citas = "+ connection.escape(CitaData.IdInmueble_Citas)
                    + ", FechaRegistro_Citas = "+ connection.escape(CitaData.FechaRegistro_Citas)
                    + " WHERE  IdCita_Citas  =  " + connection.escape(CitaData.IdCita_Citas)+";";

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
module.exports = CitaModel;
