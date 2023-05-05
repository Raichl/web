<template>
    <div class="main">
      <div class="userinfo">
        <div>
            <h1>adress</h1>
        </div>
        <div>
            <button>plans</button>
        </div>
      </div>
      <div class="content">
        <div class="content-menu">
            <input type="text">
            <div class="content-menu-privat">
                <button>PRIVATE</button>
                <button>+</button>
                <div class="menu-privat-dropmenu">место под всякое</div>
            </div>
            <div class="content-menu-info">
                <h1>имя акаунта</h1>
                <p>непонятная полосочка</p>
                <p>дата</p>
                <button>btn</button>
            </div>      
        </div>
        <div class="content-workspace">
            <div class="content-workspace-menu">
                <div>
                    <p>name</p>
                    <button>share</button>
                    <button>...</button>
                </div>
                <div>
                    <button>+ create</button>
                    <div>
                        <button>sort type</button>
                        <p>grid</p>
                        <p>list</p>
                    </div>
                </div>
            </div>
            <div class="content-workspace-list">
                <h1>Grab a hot cuppa (or cold brew) and get comfortable. It’s time to create something special.</h1>
                <button>+ create</button>
            </div>
        </div>
      </div>
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

<style>
.userinfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content{
    display: grid;
    grid-template-columns: 1fr 3fr;
}

.content-menu{
    background-color: aquamarine;
}

.content-workspace{
    background-color: bisque;
}

.content-workspace-menu{
    display: flex;
    flex-direction: column;
}
.content-workspace-menu div{
    display: flex;
    flex-direction: row;
}
.content-workspace-menu :last-child{
    justify-content: space-between;
}

</style>