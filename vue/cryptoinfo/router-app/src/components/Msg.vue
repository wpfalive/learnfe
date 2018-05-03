<template>
  <div>
      <h1>{{message}}</h1>
      
      <p>消息内容：{{$route.params.msgContent}}</p>
      <p>日期：{{$route.params.msgDate}}</p>
  </div>
</template>
<script>
export default {
    name: 'msg',
    data() {
        return {
            'message': 'the msg from vue-router'
        }
    }
}
</script>
<style>

</style>
