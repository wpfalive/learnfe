<template>
<div>
    <h1>{{msg}}</h1>
    <span>新闻标题：{{$route.params.newsTitle}}</span>  
    <span>新闻id: {{$route.params.newsId}}</span>
</div>
</template>
<script>
export default {
  name: 'params',
  data() {
      return {
          msg: 'fuck news'
      }
  },
}
</script>
<style>

</style>
