const app = new Vue({
    el: '#main',
    data: {
        Tareas: ["lavar", "trapiar", "cocinar", "cocer"]
    }
})
const person = new Vue({
    el: '#matris',
    data: {
        Personas: [{ nombre: 'Carlos', edad: 25 },
        { nombre: 'Julio', edad: 25 },
        { nombre: 'Juan', edad: 40 },
        { nombre: 'andre', edad: 20 },
        { nombre: 'maria', edad: 15 }]

    }
})

const comandos = new Vue({
    el: '#molar',
    data: {
        Tarea: null,
        Tares: ["lavar", "trapiar", "cocinar", "cocer"]
    },

    methods: {
        agregarTarea() {
            this.Tares.unshift(this.Tarea)
        }
    }
})

const animales = new Vue({
    el: '#animal',
    data: {
        nombre: null,
        raza: null,
        Animales: [{ nombre: 'gatu', raza: "angora" },
        { nombre: 'kaiser', raza: "chiguagua" },
        { nombre: 'flor', raza: "canina" },
        { nombre: 'princesa', raza: "husky" },
        { nombre: 'domy', raza: "doverman" }]

    },

    methods: {
        agregarAnimales() {
            this.Animales.unshift({nombre: this.nombre,raza: this.raza})
        }
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })

var app5 = new Vue({
    el: '#app-5',
    data: {
      todos: [
        { nombre: 'Euge' },
        { apellido: 'San' },
        { dui: 1234 }
      ]
    }
  })
