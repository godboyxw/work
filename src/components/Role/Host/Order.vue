<template>
  <div class="order">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="submit">提交预约</text>
    <div class="date-wrapper">
      <text class="time">展馆档期</text>
      <text class="date">2019 年 1 月</text>
      <text class="icon-morethan"
            :style="{fontFamily:'iconfont',color:'#D8D8D8',fontSize:'15px'}">{{"\ue64c"}}</text>
    </div>
    <div class="seat"></div>
    <div class="info">
      <div class="item"
           v-for="(item,index) in infoArr"
           :key="index"
           :class="index === key ? 'active' :'' "
           @click="key=index">
        <text class="
           txt1">{{item.txt1}}</text>
        <text class="txt2">{{item.txt2}}</text>
      </div>
    </div>
    <div class="select">
      <text class="hall">展馆</text>
      <text class="choose">请选择</text>
      <text class="icon-morethan"
            @click="isShow=!isShow"
            :style="{fontFamily:'iconfont',color:'rgba(85,85,85,1)',fontSize:'20px'}">{{isShow? "\ue616" : "\ue64d"}}</text>
      <div class="result"
           v-if="isShow">
        <text class="select-all"
              @click="selectAll">全选</text>
        <div class="place">
          <text class="location"
                v-for="(item,index) in placeArr"
                :key="index"
                :style="{backgroundColor:(isActive ? 'rgba(69, 152, 240, 1)' :'')}"
                @click="chooseActive(item,index)"
                :class="item.show ? 'isActive2' : ''">{{item.name}} </text>
        </div>
      </div>
    </div>
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
      title: '展馆预约',
      router: '/host',
      infoArr: [
        {
          txt1: '姓名',
          txt2: '请输入真实姓名'
        },
        {
          txt1: '公司',
          txt2: '请输入公司名称'
        },
        {
          txt1: '电话',
          txt2: '请输入电话号码'
        },
        {
          txt1: '开始时间',
          txt2: '2018-09-04'
        },
        {
          txt1: '结束时间',
          txt2: '2018-09-15'
        }
      ],
      key: 0,
      isShow: false,
      placeArr: [
        {
          name: 'A1',
          show: false
        },
        {
          name: 'A2',
          show: false
        },
        {
          name: 'A3',
          show: false
        },
        {
          name: 'A4',
          show: false
        },
        {
          name: 'A5',
          show: false
        },
        {
          name: 'A6',
          show: false
        },
        {
          name: 'B1',
          show: false
        },
        {
          name: 'B2',
          show: false
        },
        {
          name: 'B3',
          show: false
        },
        {
          name: 'B4',
          show: false
        },
        {
          name: 'B5',
          show: false
        },
        {
          name: 'B6',
          show: false
        }
      ],
      isActive: false,
      num: '',
      onoff: true
    }
  },
  methods: {
    chooseActive (item, index) {
      item.show = !item.show
    },
    selectAll () {
      // this.filterArr = this.placeArr.filter((item, index) => (
      //   item.show
      // ))
      // this.isActive = !this.isActive
      this.placeArr.forEach((item, index) => {
        if (this.onoff) {
          item.show = false
          item.show = !item.show
          this.onoff = false
        } else {
          item.show = true
          item.show = !item.show
          this.onoff = true
        }
      }
      )

      //   console.log(this.placeArr)
      // }
    }
    // watch: {
    //   placeArr (u, v) {
    //     this.placeArr = u
    //     console.log(this.placeArr)
    //   }
    // }
  }
}
</script>

<style scoped>
.order {
  width: 750px;
  min-height: 100vh;
  position: relative;
  background: rgba(255, 255, 255, 1);
}
.submit {
  width: 140px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: fixed;
  right: 41px;
  top: 33px;
  z-index: 999;
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(29, 141, 243, 1);
}
.date-wrapper {
  height: 90px;
  flex-direction: row;
  padding: 0 23px 0 29px;
  align-items: center;
}
.time {
  margin-right: 343px;
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(85, 85, 85, 1);
}
.date {
  margin-right: 27px;
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(61, 61, 61, 1);
}
.seat {
  height: 614px;
  background: rgba(245, 245, 245, 1);
}
.info {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 19px 2px rgba(53, 53, 53, 0.08);
  border-radius: 20px;
}
.item,
.select {
  width: 560px;
  height: 110px;
  padding-left: 26px;
  padding-right: 185px;
  margin: 0 auto;
  border-bottom: 1px solid #999999;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.txt1 {
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
}
.txt2,
.choose {
  font-size: 28px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(153, 153, 153, 1);
}
.active {
  border-color: rgba(29, 141, 243, 1);
}
.select {
  padding-right: 0;
  justify-content: flex-start;
  position: relative;
}
.hall {
  margin-right: 76px;
}
.choose {
  margin-right: 20px;
}
.result {
  width: 580px;
  height: 242px;
  padding-top: 36px;
  position: absolute;
  left: 22px;
  top: 101px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  box-shadow: 0px 5px 7px 1px rgba(112, 112, 112, 0.17);
  border-radius: 10px;
}
.select-all {
  width: 100px;
  height: 39px;
  margin-left: 40px;
  margin-bottom: 34px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 4px;
  font-size: 28px;
  text-align: center;
  line-height: 39px;
  font-family: NotoSansHans-Light;
  font-weight: 300;
  color: rgba(75, 75, 75, 1);
}
.place {
  flex-direction: row;
  flex-wrap: wrap;
  padding-right: 30px;
}
.location {
  width: 48px;
  height: 39px;
  margin-left: 42px;
  margin-bottom: 26px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 4px;
  font-size: 28px;
  text-align: center;
  line-height: 39px;
  font-family: NotoSansHans-Light;
  font-weight: 300;
}
.isActive1 {
  background: rgba(69, 152, 240, 1);
}
.isActive2 {
  background: rgba(69, 152, 240, 1);
}
</style>
