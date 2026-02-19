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
        },
        {
            id:2,
            odsFav:listaODS.ods2,
            estado:'Ejecucion'
        },
        {
            id:3,
            odsFav:listaODS.ods3,
            estado:'Ejecucion'
        },
        {
            id:4,
            odsFav:listaODS.ods4,
            estado:'Ejecucion'
        }
    ];


    let odsFav = listaODS.ods1;

    function filtrarProyectosClimaticos(ods : InterfazSostenible[]):InterfazSostenible[]{
        return ods.filter(o => o.estado === 'Ejecucion');
    }

    const resultadoJSON = filtrarProyectosClimaticos(odsAlumnos);

    return( <h1>{JSON.stringify(resultadoJSON, null, 3)}</h1>)
}

export default ods