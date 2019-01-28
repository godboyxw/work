<template>
  <div class="sightseeing">
    <div class="item"
         v-for="(item,index) in foodItem"
         :key="index">
      <FoodItem :foodItem="item"></FoodItem>
    </div>
  </div>
</template>

<script>
import FoodItem from './FoodItem'
export default {
  components: {
    FoodItem
  },
  data () {
    return {
      foodItem: [
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2106817016,1668206427&fm=85&app=57&f=JPEG?w=121&h=75&s=6F2201C37467BCFE4A7959140300E0C1',
          title: '户部巷小吃一条街',
          star: 4.9,
          rating: '4.9分',
          name: '美食街区',
          location: '位于户部巷昙华林',
          distance: '11km'
        },
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2106817016,1668206427&fm=85&app=57&f=JPEG?w=121&h=75&s=6F2201C37467BCFE4A7959140300E0C1',
          title: '户部巷小吃一条街',
          star: 4.2,
          rating: '4.2分',
          name: '美食街区',
          location: '位于户部巷昙华林',
          distance: '11km'
        },
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2106817016,1668206427&fm=85&app=57&f=JPEG?w=121&h=75&s=6F2201C37467BCFE4A7959140300E0C1',
          title: '户部巷小吃一条街',
          star: 3.8,
          rating: '3.8分',
          name: '美食街区',
          location: '位于户部巷昙华林',
          distance: '11km'
        },
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2106817016,1668206427&fm=85&app=57&f=JPEG?w=121&h=75&s=6F2201C37467BCFE4A7959140300E0C1',
          title: '户部巷小吃一条街',
          star: 2.7,
          rating: '2.7分',
          name: '美食街区',
          location: '位于户部巷昙华林',
          distance: '11km'
        }
      ]
    }
  }
}
</script>

<style scoped>
.sightseeing {
  width: 750px;
  min-height: 100vh;
  background: rgba(238, 238, 238, 1);
}
.item {
  margin-bottom: 20px;
}
</style>
