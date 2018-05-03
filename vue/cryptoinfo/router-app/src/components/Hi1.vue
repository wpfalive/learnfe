<template>
  <div class="hi">
      <h1>{{msg}}</h1>
      <router-view class="aaa"></router-view>
  </div>
</template>
<script>
export default {
  name: 'hi1',
  data() {
      return {
          msg: `hi1, I'm hi1`
      }
  },
}
</script>
<style scoped>

</style>


