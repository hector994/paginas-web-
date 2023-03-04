const app = new Vue({
    el: '#main3',
    data: {
        pokemon: [],
        pkmURL: [],
        pkimage: []
    },

    mounted() {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then((respuesta)=>{
            console.log(respuesta.data)
            this.pokemon = respuesta.data
        })
        axios.get('https://pokeapi.co/api/v2/pokemon-form/1')
        .then((rest)=>{
            console.log(rest.data)
            this.pkmURL = rest.data
        })
        axios.get('https://pokeapi.co/api/v2/sprites/shiny/1')
        .then((res)=>{
            console.log(res.data)
            this.pkimage = res.data
        })


    }

})