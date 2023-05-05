<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button> 
      <RouterLink to="/main">тык</RouterLink>
    </button>
  </div>
</template>

<script>

import store from '@/store';

export default {
  
  mounted(){
    store.commit('setNavbarVisible',true)
  }
}
</script>

