<template>
  <div class="food-item">
    <div class="image">
      <image :src="foodItem.src"
             style="width:200px;height:199px;" />
    </div>
    <div class="info">
      <text class="title">{{foodItem.title}}</text>
      <div class="rating-wrapper">
        <Star class="star"
              :star="foodItem.star"></Star>
        <text class="rating">{{foodItem.rating}}</text>
      </div>
      <text class="name">{{foodItem.name}}</text>
      <div class="place">
        <text class="location">{{foodItem.location}}</text>
        <text class="distance">{{foodItem.distance}}</text>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../Common/star'
export default {
  components: {
    Star
  },
  props: {
    foodItem: {
      type: Object,
      default: () => {
        return {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2106817016,1668206427&fm=85&app=57&f=JPEG?w=121&h=75&s=6F2201C37467BCFE4A7959140300E0C1',
          title: '户部巷小吃一条街',
          star: 4.9,
          rating: '4.9分',
          name: '美食街区',
          location: '位于户部巷昙华林',
          distance: '11km'
        }
      }
    }
  }
}
</script>

<style scoped>
.food-item {
  width: 656px;
  height: 256px;
  align-self: center;
  flex-direction: row;
  padding-top: 28px;
  padding-left: 28px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}
.image {
  width: 200px;
  height: 199px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
}
.info {
  padding-top: 8px;
  flex: 1;
  padding-right: 34px;
}
.title {
  margin-bottom: 12px;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 40px;
}
.rating-wrapper {
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
}
.rating {
  margin-left: 20px;
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.name {
  width: 110px;
  height: 30px;
  /**padding: 5px 16px;
  box-sizing: content-box;**/
  margin-bottom: 25px;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
}
.place {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.location,
.distance {
  font-size: 24px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
</style>
