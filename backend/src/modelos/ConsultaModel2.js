var connection = require('../conexion');

var consultaModel = {};

consultaModel.getConsulta = function (id,fecha_ini,fecha_fin, callback) {
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
module.exports = consultaModel;
