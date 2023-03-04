<template>
    <div class="componente">
         <!-- aqui iria el contenido html del componente -->
         <h1>
            {{msg}}
         </h1>
    </div>
</template>


<script>
/* aqui iria el contenido javascript del componente */
export default {
    name: 'componente1',
   props:{
    msg: String
   }
}
</script>



<style scoped>
/* aqui iria el contenido css del componente */
</style>