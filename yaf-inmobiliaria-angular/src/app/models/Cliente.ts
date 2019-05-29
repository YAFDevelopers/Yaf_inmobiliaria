export interface Cliente{
    IdCliente_Clientes ?: number;
    IdTipoDocumento_Clientes : number;
    NumeroDocumeto_Clientes : number;
    PrimerNombre_Clientes : string;
    SegundoNombre_Clientes : string;
    PrimerApellido_Clientes : string;
    SegundoApellido_Clientes : string;
    FechaNacimiento_Clientes : Date;
    Correo_Clientes : String;
    Contrasena_Clientes : String;
    NumeroTelefono_Clientes : String;
    Estado_Clientes : String;
    FechaRegistro_Clientes ?: Date;
}