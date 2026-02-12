function ods(){
    enum listaODS{
        ods1 = "Fin De La Pobreza",
        ods2 = "Hambre Cero",
        ods3 = "Salud y Bienestar",
        ods4 = "Educacion de calidad",
        ods5 = "Igualdad de genero",
        ods6 = "Agua limpia y saneamiento",
        ods7 = "Energia sostenible y no contaminante",
        ods8 = "Trabajo decente y crecimiento economico"
    };
    type EstadoODS = 'Aprobado' | 'Ejecucion' | 'Completado' | 'Rechazado';

    interface InterfazSostenible {
        id:number;
        odsFav:listaODS;
        estado:EstadoODS;
    }

    const odsAlumnos:InterfazSostenible[] = [
        {
            id:1,
            odsFav:listaODS.ods1,
            estado:'Rechazado'
        }
    ];


    let odsFav = listaODS.ods1;

    return(
        <div>
            <h1>---------------ODS---------------</h1>
            <h2>Mi ods favorito es el siguiente: {odsFav}</h2>
        </div>
    )
}

export default ods