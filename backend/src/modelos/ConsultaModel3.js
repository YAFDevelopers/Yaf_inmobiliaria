var connection = require('../conexion');

var consultaModel = {};

consultaModel.getConsulta = function (id,fecha_ini,fecha_fin, callback) {
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
