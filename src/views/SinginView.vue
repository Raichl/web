<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="js">

import store from '@/store';

export default{

    mounted(){
    store.commit('setNavbarVisible',false)
  }
  
}
</script>