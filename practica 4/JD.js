const app = new Vue ({
    el:'#main3',
    data: {
        tareas:[
        {titulo:'tarea1', completado: false},
        {titulo:'tarea2', completado: false},
        {titulo:'tarea3', completado: false},
        {titulo:'tarea4', completado: false},
        {titulo:'tarea5', completado: false},
    ]},

    methods: {
        completarTarea(tarea){
            tarea.completado = !tarea.completado
        }
    },
    
    
})