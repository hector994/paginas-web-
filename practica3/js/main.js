const person = new Vue({
    el: '#matris',
    data: {
        persona:'',
        Personas: [{ nombre: 'Carlos', estado: false },
        { nombre: 'Julio', estado: true },
        { nombre: 'Juan', estado: false },
        { nombre: 'andre', estado: true },
        { nombre: 'maria', estado: false }]

    },

    methods: {
        agregarPersona() {
            this.Personas.push({ nombre: this.nombre, estado: false })
        },

        filterResults ( persona ) {
            const search = this.Personas.filter(people => people.nombre.match(this.persona));
            this.filter = search
            return search;
          }
    },

    computed: {
        activos() {
            return this.Personas.filter(item => item.estado);
        }

    }
})


