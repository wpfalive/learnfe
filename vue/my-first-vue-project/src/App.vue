<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->

    <h1 v-html="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import Store from './store'
export default {
  name: 'App',
  data: function() {
    // return {
    //   title: '<span>???</span>this is a todo list',
    //   items: [
    //     {
    //       label: 'coding',
    //       isFinished: false
    //     },
    //     {
    //       label: 'walking',
    //       isFinished: true
    //     }
    //   ]
    // }
    return {
      title: 'this is a todo list',
      items: Store.fetch(),
      newItem: ''
    }
  },
  watch: {
    items: {
      handler: function(items) {
        console.log('save')
        Store.save(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function(item) {
      item.isFinished = !item.isFinished
    },
    addNew: function() {

      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  }
}
</script>

<style>
.finished {
  text-decoration: line-through;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
