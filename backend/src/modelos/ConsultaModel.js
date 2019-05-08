var connection = require('../conexion');

var consultaModel = {};

consultaModel.getConsultaPrimera = function (fecha_ini,fecha_fin, callback) {
    if (connection) {
        var sql = "SELECT Citas.IdCita_Citas "
            + ",CONCAT (Clientes.PrimerNombre_Clientes,' ',COALESCE(Clientes.SegundoNombre_Clientes,''),' ',Clientes.PrimerApellido_Clientes,' ',COALESCE(Clientes.SegundoApellido_Clientes,'')) as nombreCliente "
            + ",a.NombreTipodeDocumento_TipodeDocumentos as documentoAgente "
            +",Clientes.NumeroDocuemto_Clientes "
            + ",CONCAT(Agentes.PrimerNombre_Agentes,' ',COALESCE(Agentes.SegundoNombre_Agentes,''),' ',Agentes.PrimerApellido_Agentes,' ',COALESCE(Agentes.SegundoApellido_Agentes,'')) as nombreAgente "
            + ",b.NombreTipodeDocumento_TipodeDocumentos as documentoCliente "
            +",Agentes.NumeroDocumento_Agentes "
            +",Inmuebles.IdInmueble_Inmuebles ,Inmuebles.NombreInmueble_Inmuebles "
            + ",Citas.Fecha_Citas,Citas.Hora_Citas "
            + "FROM Citas INNER JOIN Clientes ON Citas.IdCliente_Citas = Clientes.IdCliente_Clientes "
            + "INNER JOIN Agentes ON Citas.IdAgente_Citas = Agentes.IdAgente_Agentes "
            + "INNER JOIN Inmuebles ON Citas.IdInmueble_Citas = Inmuebles.IdInmueble_Inmuebles "
            + "INNER JOIN TipodeDocumentos a ON a.IdtipoddeDocumento_TipodeDocumentos = Clientes.IdTipoDocumento_Clientes "
            + "INNER JOIN TipodeDocumentos b ON b.IdtipoddeDocumento_TipodeDocumentos = Agentes.IdTipoDocumento_Agentes "
            + "WHERE Citas.Fecha_Citas BETWEEN " + connection.escape(fecha_ini) + " AND " + connection.escape(fecha_fin) + ";";
        connection.query(sql, function (error, row) {
            //se muestra el mensaje correspondiente
            if (error) {
                throw error;
            }
            else {
                callback(null, row);
            }
        });
    }
}

consultaModel.getConsultaSegunda = function (id,fecha_ini,fecha_fin, callback) {
    if (connection) {
        var sql = "SELECT "
            + "Clientes.IdCliente_Clientes,CONCAT (Clientes.PrimerNombre_Clientes,' ', COALESCE(Clientes.SegundoNombre_Clientes,''),' ',Clientes.PrimerApellido_Clientes,' ', COALESCE(Clientes.SegundoApellido_Clientes,'')) AS Nombre_Cliente, CONCAT(Agentes.PrimerNombre_Agentes,' ', COALESCE(Agentes.SegundoNombre_Agentes,''),' ',Agentes.PrimerApellido_Agentes,' ', COALESCE(Agentes.SegundoApellido_Agentes,'')) as NombreAgentes "
            + ",Inmuebles.NombreInmueble_Inmuebles "
            + ",Inmuebles.Direccion_Inmuebles "
            + ",Citas.Hora_Citas "
            + ",Citas.Fecha_Citas  "
            
            + "from Clientes inner join Citas on Citas.IdCliente_Citas=Clientes.IdCliente_Clientes  "
            + "inner join Agentes on Agentes.IdAgente_Agentes=Citas.IdAgente_Citas "
            + "inner join Inmuebles on Citas.IdInmueble_Citas=Inmuebles.IdInmueble_Inmuebles "
            + "WHERE Clientes.IdCliente_Clientes="+ connection.escape(id) + " and Citas.Fecha_Citas BETWEEN " + connection.escape(fecha_ini) + " AND " + connection.escape(fecha_fin) + ";";
        connection.query(sql, function (error, row) {
            //se muestra el mensaje correspondiente
            if (error) {
                throw error;
            }
            else {
                callback(null, row);
            }
        });
    }
}

consultaModel.getConsultaTercera = function (id,fecha_ini,fecha_fin, callback) {
    if (connection) {
        var sql = "SELECT "
            + "CONCAT (Agentes.PrimerNombre_Agentes,' ',COALESCE(Agentes.SegundoNombre_Agentes,''),' ',Agentes.PrimerApellido_Agentes,' ',COALESCE(Agentes.SegundoApellido_Agentes,'')) as NombreAgente "
            + ",TipodeDocumentos.NombreTipodeDocumento_TipodeDocumentos "
            + ",Agentes.NumeroDocumento_Agentes,Agentes.Correo_Agentes,Agentes.NumeroTelfono_Agentes "
            + ",Agentes.FechaRegistro_Agentes, Citas.Fecha_Citas, Citas.Hora_Citas, Citas.FechaRegistro_Citas "
            
            + "FROM Citas INNER JOIN Agentes on Citas.IdAgente_Citas=Agentes.IdAgente_Agentes  "
            + "INNER JOIN TipodeDocumentos on TipodeDocumentos.IdtipoddeDocumento_TipodeDocumentos=Agentes.IdTipoDocumento_Agentes "
            + "inner join Inmuebles on Citas.IdInmueble_Citas=Inmuebles.IdInmueble_Inmuebles "
            + "WHERE Agentes.IdAgente_Agentes ="+ connection.escape(id) + " and Citas.Fecha_Citas BETWEEN " + connection.escape(fecha_ini) + " AND " + connection.escape(fecha_fin) + ";";
        connection.query(sql, function (error, row) {
            //se muestra el mensaje correspondiente
            if (error) {
                throw error;
            }
            else {
                callback(null, row);
            }
        });
    }
}

module.exports = consultaModel;
