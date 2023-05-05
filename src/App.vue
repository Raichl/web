<template>
  <nav v-if="navbarVisible">
    <div>
      <router-link to="/">Logo</router-link>
    </div>

    <div class="dropmenu">
      <button>кнопка один</button>
      <div class="dropmenu-content">
        <li>кнопка 1</li>
        <li>кнопка 2</li>
        <li>кнопка 3</li>
      </div>
    </div>
    <div class="dropmenu">
      <button>кнопка два</button>
      <div class="dropmenu-content">
        <li>кнопка 1</li>
        <li>кнопка 2</li>
        <li>кнопка 3</li>
      </div>
    </div>
    <div class="dropmenu">
      <button>кнопка три</button>
      <div class="dropmenu-content">
        <li>кнопка 1</li>
        <li>кнопка 2</li>
        <li>кнопка 3</li>
      </div>
    </div>
    <div class="dropmenu">
      <button>кнопка четыре</button>
      <div class="dropmenu-content">
        <li>кнопка 1</li>
        <li>кнопка 2</li>
        <li>кнопка 3</li>
      </div>
    </div>
    <div class="dropmenu">
      <button>кнопка пять</button>
      <div class="dropmenu-content">
        <li>кнопка 1</li>
        <li>кнопка 2</li>
        <li>кнопка 3</li>
      </div>
    </div>

    <router-link to="/login">Log in</router-link> |
    <router-link to="/registr">Sing in</router-link>
  </nav>
  <router-view/>
</template>

<script lang="js">
import store from './store';


export default {
  computed:{
    navbarVisible(){
      return store.state.navbarVisible
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

.dropmenu-content{
  display: none;
  position: absolute;
}

.dropmenu:hover > .dropmenu-content{
  display: block;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
