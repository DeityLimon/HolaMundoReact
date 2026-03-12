type EstadoODS = 'Aprobado' | 'Ejecucion' | 'Completado' | 'Rechazado';

    export interface InterfazSostenible {
        id: number;
        odsFav: string;
        estado: EstadoODS;
    }

    export const odsAlumnos:InterfazSostenible[] = [
        {
            id: 1,
            odsFav: "Fin de la pobreza",
            estado: 'En Ejecucion'
        },
        {
            id: 2,
            odsFav: "Hambre cero",
            estado: 'En Ejecucion'
        },
        {
            id: 3,
            odsFav: "Salud y bienestar",
            estado: 'Aprobado'
        },
        {
            id: 4,
            odsFav: "Educación de calidad",
            estado: 'Aprobado'
        },
        {
            id: 5,
            odsFav: "Igualdad de género",
            estado: 'En Ejecucion'
        },
        {
            id: 6,
            odsFav: "Agua limpia y saneamiento",
            estado: 'En Ejecucion'
        },
        {
            id: 7,
            odsFav: "Energía asequible y no contaminante",
            estado: 'Completado'
        },
        {
            id: 8,
            odsFav: "Trabajo decente y crecimiento económico",
            estado: 'En Ejecucion'
        },
        {
            id: 9,
            odsFav: "Industria, innovación e infraestructura",
            estado: 'Aprobado'
        },
        {
            id: 10,
            odsFav: "Reducción de las desigualdades",
            estado: 'Rechazado'
        },
        {
            id: 11,
            odsFav: "Ciudades y comunidades sostenibles",
            estado: 'En Ejecucion'
        },
        {
            id: 12,
            odsFav: "Producción y consumo responsables",
            estado: 'En Ejecucion'
        },
        {
            id: 13,
            odsFav: "Acción por el clima",
            estado: 'Rechazado'
        },
        {
            id: 14,
            odsFav: "Vida submarina",
            estado: 'En Ejecucion'
        },
        {
            id: 15,
            odsFav: "Vida de ecosistemas terrestres",
            estado: 'En Ejecucion'
        },
        {
            id: 16,
            odsFav: "Paz, justicia e instituciones sólidas",
            estado: 'Aprobado'
        },
        {
            id: 17,
            odsFav: "Alianzas para lograr los objetivos",
            estado: 'En Ejecucion'
        }
    ];