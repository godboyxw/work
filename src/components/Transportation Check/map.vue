<template>
  <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
  <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->
  <div id="allmap"
       v-bind:style="mapStyle">
  </div>
</template>
<script>
export default {
  data () {
    return {
      mapStyle: {
        width: '100%',
        height: this.mapHeight + 'px'
      }
    }
  },
  props: {
    // 地图在该视图上的高度
    mapHeight: {
      type: Number,
      default: 500
    },
    // 经度
    longitude: {
      type: Number,
      default: 116.404
    },
    // 纬度
    latitude: {
      type: Number,
      default: 39.915
    },
    description: {
      type: String,
      default: '天安门'
    }
  },
  methods: {
    loadBMapScript () {
      let script = document.createElement('script')
      script.src = 'http://api.map.baidu.com/api?v=2.0&ak=qPGK6hIUCFIjlCbRkiB3pGotWwP22WwP&callback=initialize'
      document.body.appendChild(script)
    },
    qeuryLocation () {
      var map = new window.BMap.Map('allmap') // 创建Map实例
      map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
      map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    }
  },
  created () {
    this.loadBMapScript()
    window['bMapInit'] = () => {
      this.qeuryLocation()
    }
  }
}
</script>

<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
