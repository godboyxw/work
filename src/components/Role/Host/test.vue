<template>
  <div class="wrapper">
    <text class="title"
          v-on:click="getClick">{{ link }}</text>
    <text class="subtitle">Hello icepy,i love your playground !!!</text>
  </div>
</template>
<script>
// import { setRight, toast, setTitle, share } from './util.js'
import utility from 'dingtalk-javascript-utility'
var dingtalk = require('dingtalk-javascript-sdk')
// import dingtalk from 'dingtalk-javascript-sdk'
export default {
  name: 'home',
  data () {
    return {
      link: 'Going DingTalk Todo List Application'
    }
  },
  created () {
    const { env } = utility
    console.log(env)
  },
  mounted () {
    console.log(dingtalk)
    // dingtalk.ready(function () {
    //   const dd = dingtalk.apis
    //   console.log(dd)
    //   // 设置导航
    //   dd.biz.navigation.setTitle({
    //     title: 'icepy'
    //   })
    // })
  },
  methods: {
    getClick: function () {
      // this.$router.push('list')
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  background-color: #f8f8f8;
}
.title {
  font-size: 60px;
  width: 750px;
  color: #505050;
  text-align: center;
}
.subtitle {
  width: 750px;
  font-size: 30px;
  color: #aaaaaa;
  text-align: center;
  margin-top: 20px;
}
</style>
