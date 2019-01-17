<template>
  <div class="page">
    <div class='content'>
      <div class='bar'>
        <text class='bar-txt'>武汉国际博览中心</text>
      </div>
      <div class='push'></div>
      <div class='main'>
        <input type='text'
               class='inp-text'
               placeholder='搜索展位、设施等' />
        <div class='iconfont icon-search'
             :style="{fontFamily:'iconfont',color:'rgba(153,153,153,1)',fontSize:'40px',position: 'absolute',left: '82px',top: '-24px'}">{{"\ue615"}}
        </div>
        <div class='entrance1'
             v-if="key!==9">
          <div v-for='(item, index) in descarr1'
               :key='index'
               @click="jumpTo1(index)"
               class='item1'>
            <image class='img1'
                   :src='item.img'></image>
            <text class='txt1'>{{item.txt}}</text>
          </div>
        </div>

        <div class='entrance2'
             v-if="key===9">
          <div v-for='(item, index) in descarr2'
               :key='index'
               @click="jumpTo2(index)"
               class='item1'>
            <image class='img1'
                   :src='item.img'></image>
            <text class='txt1'>{{item.txt}}</text>
          </div>
        </div>

        <div class='role'>
          <div v-for='(item, index) in rolearr'
               :key='index'
               @click="roleTo(index)"
               class='item2'>
            <text class='txt2'>{{item.txt}}</text>
            <image class='img2'
                   :src='item.img'></image>
          </div>
        </div>
      </div>
      <div class='ads'>
        <image style='width:100%;height:100%'
               src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2045970870,2749198357&fm=27&gp=0.jpg'>
        </image>
      </div>
      <div class='ads'>
        <image style='width:100%;height:100%'
               src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170378782,1000218457&fm=11&gp=0.jpg'>
        </image>
      </div>
      <div class='ads'>
        <image style='width:100%;height:100%'
               src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=138495137,3040106282&fm=26&gp=0.jpg'>
        </image>
      </div>
    </div>
    <div class='footer'>
      <div class='home'>
        <div class='iconfont icon-home1'
             :style="{fontFamily:'iconfont',color:'rgba(34,169,255,0.8)',fontSize:'40px'}">
          {{"\ue62d"}}</div>
        <text class="home-txt">首页</text>
      </div>
      <div class='mine'>
        <text class='iconfont icon-user'
              :style="{fontFamily:'iconfont',color:'#000',fontSize:'40px'}">{{"\ue62c"}}</text>
        <text class="mine-txt">我的</text>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      descarr1: [
        {
          'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=745096747,3395666420&fm=27&gp=0.jpg',
          'txt': '展会信息'
        },
        {
          'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=745096747,3395666420&fm=27&gp=0.jpg',
          'txt': '展会门票'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '餐饮预订'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '展馆导航'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '泊车寻车'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '交通查询'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '行李托管'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '旅游观光'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '问题反馈'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '更多'
        }
      ],
      descarr2: [
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '媒体资讯'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '返回'
        }
      ],
      rolearr: [
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '主办方'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '主场'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '参展商'
        },
        {
          'img': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1559121849,1979113738&fm=85&s=C7B839C51643035D9F1961B70300D000',
          'txt': '搭建商'
        }
      ],
      router1: ['/servicer', '/host', '/exhibitor', '/builder'],
      router2: ['/producer', '/tickets', '/food', '', '', '/transport', '', '', '/advice', ''],
      router3: ['/news', ''],
      key: ''
    }
  },
  methods: {
    roleTo (index) {
      this.$router.push(this.router1[index])
    },
    jumpTo1 (index) {
      this.$router.push(this.router2[index])
      this.key = index
    },
    jumpTo2 (index) {
      this.$router.push(this.router3[index])
      this.key = !9
    }
  }
}
</script>

<style scoped>
.page {
  background: #f6f6f6;
  /**justify-content: flex-start;**/
  min-height: 100vh;
}
.content {
  flex: 1;
  justify-content: center;
}
.bar {
  width: 750px;
  height: 230px;
  /**position: fixed;
  top:0;**/
  padding: 72px 0 122px 32px;
  background: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1617998598,4013622293&fm=27&gp=0.jpg");
}
.bar-txt {
  font-size: 36px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
}
/**.push{
  height:182px;
}**/
.inp-text {
  width: 656px;
  height: 84px;
  position: absolute;
  left: 47px;
  top: -42px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.27);
  border-radius: 84px;
  align-self: center;
  font-size: 24px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(153, 153, 153, 1);
  padding-left: 110px;
  outline: none;
}
.icon-search {
  position: absolute;
  left: 50px;
  top: 26px;
}
.main {
  width: 750px;
  /**height: 688px;**/
  /**min-height: 688px;**/
  position: relative;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.27);
  border-radius: 0 0 20px 20px;
  padding: 53px 32px 0 32px;
  box-sizing: border-box;
  margin-bottom: 35px;
}
.entrance1 {
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.entrance2 {
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.item1 {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 164px;
}
.img1 {
  width: 48px;
  height: 48px;
  margin-bottom: 28px;
}
.txt1 {
  font-size: 24px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.role {
  flex-direction: row;
  width: 100%;
  padding: 23px 32px 51px 32px;
  justify-content: space-between;
}
.item2 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  border-radius: 10px;
}
.item2:nth-child(1) {
  background: linear-gradient(
    -58deg,
    rgba(34, 169, 255, 0.8),
    rgba(23, 105, 253, 0.8)
  );
}
.item2:nth-child(2) {
  background: linear-gradient(
    -58deg,
    rgba(240, 150, 0, 0.8),
    rgba(255, 197, 44, 0.8)
  );
}
.item2:nth-child(3) {
  background: linear-gradient(
    -58deg,
    rgba(252, 151, 126, 0.8),
    rgba(250, 98, 42, 0.8)
  );
}
.item2:nth-child(4) {
  background: linear-gradient(
    -58deg,
    rgba(34, 169, 255, 0.8),
    rgba(23, 105, 253, 0.8)
  );
}
.txt2 {
  font-size: 24px;
  margin-right: 9px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.img2 {
  width: 37px;
  height: 40px;
}
.ads {
  width: 672px;
  height: 160px;
  margin-bottom: 31px;
  border-radius: 20px;
  overflow: hidden;
  align-self: center;
}
.footer {
  flex: 0;
  width: 100%;
  height: 100px;
  /**position: fixed;
  bottom:0;**/
  flex-direction: row;
  background: rgba(255, 255, 255, 1);
}
.home,
.mine {
  flex: 1;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: rgba(53, 53, 53, 1);
}
.home-txt {
  color: rgba(8, 117, 209, 1);
}
.mine-txt,
.home-txt {
  font-size: 20px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
}
</style>
