<template>
  <div class="hi">
      <h1>{{msg}}</h1>
      <!-- {{$route.name}} -->
      <!-- <router-view class="aaa"></router-view> -->
  </div>
</template>
<script>
export default {
  name: 'hi2',
  data() {
      return {
          msg: `hi2, I'm hi2`
      }
  },
}
</script>
<style scoped>

</style>


