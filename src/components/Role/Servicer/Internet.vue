<template>
  <div class="internet">
    <div class="content">
      <headerTop :title="title"
                 :router="router"></headerTop>
      <div class="main">
        <div class="item"
             @click="choosen(index)"
             :class="index===key?'active1':''"
             v-for="(item,index) in intArr"
             :key="index">
          <div class="select-amount">
            <text class="amount"
                  :class="index===key?'active1':''">{{item.amount}}</text>
            <text class="price"
                  :class="index===key?'active2':''">价格</text>
            <div class="icon-choosen"
                 v-if="index===key"
                 :style="{fontFamily:'iconfont',color:'#4784C6',fontSize:'20px',position:'absolute',right:'0',bottom:'0'}">{{"\ue63c"}}
            </div>
          </div>
          <div class="select-num">
            <text class="icon-minus"
                  @click="minus(index)"
                  :class="index===num1?'active3':''"
                  :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginRight:'41px'}">{{"\ue642"}}</text>
            <text class="last-num">0</text>
            <text class="icon-add"
                  @click="add(index)"
                  :class="index===num2?'active3':''"
                  :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginLeft:'41px'}">{{"\ue644"}}</text>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="sum">
        <text class="total">总价</text>
        <text class="money">￥N</text>
      </div>
      <text class="pay-now">去结算</text>
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
      title: '网络申请',
      router: '/servicer',
      intArr: [
        {
          amount: '100M'
        },
        {
          amount: '150M'
        },
        {
          amount: '200M'
        },
        {
          amount: '300M'
        }
      ],
      key: 0,
      num1: 0,
      num2: 0
    }
  },
  methods: {
    choosen (index) {
      this.key = index
    },
    minus (index) {
      this.num1 = index
    },
    add (index) {
      this.num2 = index
    }
  }
}
</script>

<style scoped>
.internet {
  width: 750px;
  min-height: 100vh;
}
.content {
  flex: 1;
}
.main {
  width: 750px;
  padding: 64px 20px 0 20px;
  border-top: 4px solid #eee;
  flex-direction: row;
  flex-wrap: wrap;
}
.item {
  width: 33.33%;
  align-items: center;
}
.select-amount {
  width: 212px;
  height: 135px;
  margin-bottom: 27px;
  position: relative;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(227, 227, 227, 1);
  border-radius: 6px;
  justify-content: center;
  align-items: center;
}
.amount {
  font-size: 30px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(89, 89, 89, 1);
  line-height: 40px;
}
.price {
  font-size: 26px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(143, 143, 143, 1);
  line-height: 40px;
}
.select-num {
  width: auto;
  margin-bottom: 39px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.last-num {
  font-size: 30px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(59, 59, 59, 1);
  line-height: 40px;
}
.footer {
  width: 750px;
  height: 96px;
  flex: 0;
  flex-direction: row;
}
.sum {
  /**width: 71.6%;**/
  flex: 1;
  height: 96px;
  flex-direction: row;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
}
.total,
.money {
  color: rgba(47, 145, 255, 1);
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  line-height: 96px;
  text-align: center;
}
.total {
  font-size: 30px;
  margin-right: 58px;
}
.money {
  font-size: 36px;
}
.pay-now {
  width: 28.4%;
  height: 96px;
  background: rgba(47, 145, 255, 1);
  text-align: center;
  font-size: 36px;
  font-family: DengXian;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 96px;
}
.active1 {
  border-color: rgba(71, 132, 198, 1);
  color: rgba(71, 132, 198, 1);
}
.active2 {
  color: rgba(255, 59, 64, 1);
}
.active3 {
  color: rgba(69, 152, 240, 1) !important;
}
</style>
