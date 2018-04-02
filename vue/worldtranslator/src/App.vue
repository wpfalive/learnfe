<template>
  <div class="text-center" id="app">
    <h1 class="text-center">word translator</h1>
    <h5 class="text-center">Powered by Vue.js</h5>
    <TranslateForm class="text-center" v-on:formSubmit="translateText"></TranslateForm>
    <TranslateOutput class="text-center" v-text="translatedText"></TranslateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'app',
  components: {
    TranslateForm,
    TranslateOutput
  },
  data: function() {
    return {
      translatedText:''
    }
  },
  methods: {
    translateText:function(text, language) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180329T132937Z.b5e6c308d0617eca.a81e070737109c44ba16d3b9a4d45ef8b39e84a4&lang=ru&lang='+language+'&text='+text)
      .then((response) => {
        this.translatedText = response.body.text[0]
      })
    },
  },

}
</script>

<style>
body {
  background: #fefefe;
}
</style>
