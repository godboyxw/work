<template>
  <div>
    <div id="allmap">
    </div>
  </div>
</template>

<script>
import { MP } from '../../util/map.js'
export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$nextTick(function () {
        MP('qPGK6hIUCFIjlCbRkiB3pGotWwP22WwP').then(BMap => {
          var map = new window.BMap.Map('allmap') // 创建Map实例
          var point = new window.BMap.Point(116.404, 39.915) // 创建点坐标
          map.centerAndZoom(point, 15)
          map.enableScrollWheelZoom()
        })
      })
    }
  }
}
</script>

<style scoped>
#allmap {
  width: 750px;
  height: 500px;
  margin: 0 auto;
  font-family: "微软雅黑";
}
</style>
