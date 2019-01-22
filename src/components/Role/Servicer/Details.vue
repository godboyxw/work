<template>
  <div>
    <headerTop :title="title"
               :router="router"></headerTop>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      title: '停车支付详情',
      router: '/servicer/park'
    }
  }
}
</script>

<style scoped>
</style>
