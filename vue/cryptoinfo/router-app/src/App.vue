<!-- 根组件 -->
<template>
  <div id="app">
    <!-- 有名称的route，index.js中的name对应这里 name -->
    <router-link :to="{ name: 'Hello' }">Home</router-link>
    <!-- 标准做法，只指定路径，没有指定route名称 -->
    <router-link to="/about">About</router-link>
    <router-link to="/coins/ethereum">Ethereum</router-link>
    <router-link to="/coins/bitcoin">Bitcoin</router-link>
    <router-link to="/hi">hi</router-link>
    <router-link to="/hi1">h1</router-link>
    <router-link to="/hi2">h2</router-link>
    <router-link to="/params/98888/wpf website is very good">good</router-link>
    <router-link to="/msg/hellotoday/0503">msgCenter</router-link>
    <router-link to="/goback">goback</router-link>
    <router-link to="/wwwpf">wwwpf</router-link>
    <router-link to="/home">gohome</router-link>
    <router-link to="/bbbb">bbbb</router-link>
    <!--vue-router 将router-view作为容器，路由匹配到的组件将渲染到这里-->
    <button @click="goback">ggg</button>
    <button @click="goforward">fff</button>
    <button @click="goHome">回到首页</button>
    <transition name="fade">
      <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback() {
      this.$router.go(-1)
    },
    goforward() {
      this.$router.go(1)
    },
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
