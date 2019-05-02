var connection = require('../conexion');

var consultaModel = {};

consultaModel.getConsulta1 = function (fecha_ini,fecha_fin, callback) {
    if (connection) {
        var sql = "SELECT Citas.IdCita_Citas,"
            + "CONCAT (Clientes.PrimerNombre_Clientes,' ',COALESCE(Clientes.SegundoNombre_Clientes,''),' ',Clientes.PrimerApellido_Clientes,' ',COALESCE(Clientes.SegundoApellido_Clientes,'')) AS Nombre_Cliente,"
            + "a.NombreTipodeDocumento_TipodeDocumentos AS TipoDocumento_Cliente,Clientes.NumeroDocuemto_Clientes,"
            + "CONCAT(Agentes.PrimerNombre_Agentes,' ',COALESCE(Agentes.SegundoNombre_Agentes,''),' ',Agentes.PrimerApellido_Agentes,' ',COALESCE(Agentes.SegundoApellido_Agentes,'')) AS Nombre_Agentes,"
            + "b.NombreTipodeDocumento_TipodeDocumentos AS TipoDocumento_Agente,Agentes.NumeroDocumento_Agentes,Inmuebles.IdInmueble_Inmuebles,Inmuebles.NombreInmueble_Inmuebles,"
            + "Citas.Fecha_Citas,Citas.Hora_Citas"
            + "FROM (((((Citas"
            + "INNER JOIN Clientes ON Citas.IdCliente_Citas = Clientes.IdCliente_Clientes)"
            + "INNER JOIN Agentes ON Citas.IdAgente_Citas = Agentes.IdAgente_Agentes)"
            + "INNER JOIN Inmuebles ON Citas.IdInmueble_Citas = Inmuebles.IdInmueble_Inmuebles)"
            + "INNER JOIN TipodeDocumentos a ON a.IdtipoddeDocumento_TipodeDocumentos = Clientes.IdTipoDocumento_Clientes)"
            + "INNER JOIN TipodeDocumentos b ON b.IdtipoddeDocumento_TipodeDocumentos = Agentes.IdTipoDocumento_Agentes)"
            + "WHERE Citas.Fecha_Citas BETWEEN" + connection.scape(fecha_ini) + " AND " + connection.scape(fecha_fin) + ";";
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

