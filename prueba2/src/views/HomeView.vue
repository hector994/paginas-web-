<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <componente1 msg="Hola este es el primer componente"></componente1>
  </div>
</template>

<script>
// @ is an alias to /src

import componente1 from '@/components/componente1.vue'

export default {
  name: 'HomeView',
  components: {
    
    componente1
  }
}
</script>
