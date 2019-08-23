//租房 主页面
<template>
  <div>
    <div >
    <div class="background">
      <div class="query"  @click="search()">
        <input class="sousuoFrame" type="text" placeholder="请输入公司名称或地点关键词">
      </div>
    </div>
    <div class="headtop">
      <div class="btnwrap">
        <div class="navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div
              :id="index"
              :class="{'navbar_item_on':activeIndex == index}"
              class="navbar_item"
              @click="tabClick"
            >
              <div class="navbar_title">{{item.name}}</div>
            </div>
          </block>
          <div class="navbar_slider" :class="navbarSliderClass"></div>
        </div>
      </div>
    </div>
    <div :hidden="activeIndex != 0" v-for="(item,index) in merchant" :key="index">
      <div class="context" @click="jumproomspecific(item.houseId)">
        <div class="inner">
          <div class="selfinfo">
            <div class="headimg">
              <img src="../../../static/images/user.png" alt style="width:60px;height:60px;" />
            </div>
            <div class="username">
              <p>{{item.user.userName}}</p>
              <p>{{item.user.userSex}}</p>
            </div>
            <div class="time">
              <p>{{2019-1-1}}</p>
            </div>
          </div>
          <div class="roomdetail">
            <div class="roomphoto">
              <img src="../../../static/images/jianyue.png" alt style="width:120px;height:110px;" />
            </div>
            <div class="roominfo">
              <p class="infoone">
                <view>{{item.houseTitle}}</view>
              </p>
              <p class="infotwo">
                <view>{{item.houseType}}</view>
              </p>
              <p class="infothree">
                <view>#{{item.houseLabel1}}</view>
              </p>
              <div class="time">
                <p>{{item.housePrice}}元</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div> -->
      </div>
    </div>
</div>
      <!-- 信息 -->
    <div :hidden="activeIndex != 1">
      <div class="content"  >  
        <div class="inner" v-for="(item,index) in list" :key="index" @click="jumproomRsc2(item.tenancyId)">
          <!-- 用户头 -->
          <div class="selfinfo">

            <div class="headimg">
              <img src="../../../static/images/user.png" alt style="width:60px;height:60px;" />
            </div>

            <div class="username">
              <p>{{item.user[0].userName}}</p>
              <p>{{item.user[0].userSex}}</p>
            <!-- <div class="time">
              <p>发布时间</p>
            </div> -->
            </div>

          </div>
          <!-- 内容 -->
          <div class="text">
            <div class="top">
              <div class="topleft">
                <p class="rentseeking">
                  入住时间
                  <span id="pinspan">2018-9-9</span>
                </p>
                <p class="rentseeking">
                  求组区域
                  <span id="pinspan">{{item.tenancyRegion}}</span>
                  </p>
              </div>
              <div class="topright">
                <p class="rentseeking">
                  求租类型
                   <span id="pinspan">{{item.tenancyType}}</span>
                  </p>
                <p class="rentseeking">
                  性别要求
                  <span id="pinspan">{{item.tenancy_Requestsex}}</span>
                  </p>
              </div>
            </div>
            <div class="boxbottom">
              <p class="rentseeking">
                理想地点
                <span id="pinspan">{{item.tenancyPosition}}</span>
                </p>
              
              <p class="rentseeking">
                公司标签
                <span id="pinspan">#{{item.tenancyLabel}}</span>
                </p>
              <p class="rentseeking">
                意向租金
                <span id="pinspan">{{item.tenancyPrice}}</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="content">
      <div class="footer" @click="jumproomRsc()">
        <div class="icon">
          <img src="../../../static/images/fabu.png" alt style="width:25px;height:25px;" />
        </div>
        <div class="word">发布</div>
      </div>
      <div>
        <publish></publish>
      </div>
    </div>
  </div>
</template>
<script>
import publish from "@/components/publish";
let Fly = require("flyio/dist/npm/wx");
let fly = new Fly();
export default {
  data() {
    return {
      merchant:[],
      list:[],
      messageone: "东升科技园附近",
      messagetwo: "合租:一室",
      messagethree: "#百度 #转转 #腾讯",
      messagefour: "位置定位",
      activeIndex: 0,

      page: 1, 
      pages:0,
      tabs: [
        {
          name: "房源",
          type: "1",
          checked: true
        },
        {
          name: "租房",
          type: "1",
          checked: true
        }
      ]
    };
  },
  
 onReachBottom () {
    if (this.page >= this.pages) {
      console.log('数据加载完了')
    } else {
      // 下一页
      this.page = this.page + 1
      this.getFangyuan()
    }
  },
  // 下拉刷新事件
  onPullDownRefresh () {
    // 初始化页码
    this.page = 1
    this.getFangyuan()
  },


    mounted() {
    this.getFangyuan()
    this.getqiuzu()
  },
  computed: {
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return "navbar_slider_0";
      }
      if (this.activeIndex == 1) {
        return "navbar_slider_1";
      }
    },
    contentHeight() {
      return this.winHeight + "px";
    }
  },
  methods: {
     getFangyuan(){
      let demo = this;
      console.log(this.$root.$mp.query.id)
      fly
      .get(
          "http://10.96.123.248/api/house/list",{
            pageNum:demo.page,
            pageSize:4
        })
        .then(response => {
          wx.stopPullDownRefresh()
          console.log(this.$root.$mp.query.id)
          let result = response.data
          console.log(JSON.stringify(result))
          if (response.status == 200) {
            let merchant = result.data.list;
            console.log(merchant)
            demo.merchant = merchant;
            if (demo.page > 1) {
            // 数据追加
           console.log("asd")
            demo.merchant.push(...result.data.list)
            console.log(result.data.list)
            // ...data.list
            // 等同于
            // for (var i = 0; i < data.list.length; i++) {
            //     this.art_list.push(data['list'][i])
            // }
          } else {
            // 数据
            demo.merchant = result.data.list
            demo.pages = result.data.pages
            console.log("djaskl")
          }
          // 总页数
          that.total_page = result.total_page
            // if (first) {
            //   let merchant = result.data.list;
            //   console.log(JSON.stringify(merchant));
            //   demo.merchant = merchant;
            // } else {
            //   // for(let i =0;i<){

            //   // }
            //   demo.merchant = demo.merchant.cancat(data);
            // }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     getqiuzu(){
      let demo = this;
      domo.page=0;
      domo.pages=1;
      console.log(this.$root.$mp.query.id)
      fly
        .get(
          "http://10.96.123.248/api/tenancy/morefind",{
            pageNum:demo.page,
            pageSize:4
        })
        .then(response => {
        wx.stopPullDownRefresh()
       console.log(this.$root.$mp.query.id)
          let result = response.data
          console.log(JSON.stringify(result))
          if (response.status == 200) {
            let list = result.data.list;
            this.list = list;
          if (demo.page > 1) {
            // 数据追加
           console.log("asd")
            demo.merchant.push(...result.data.list)
            console.log(result.data.list)
            // ...data.list
            // 等同于
            // for (var i = 0; i < data.list.length; i++) {
            //     this.art_list.push(data['list'][i])
            // }
          } else {
            // 数据
            demo.merchant = result.data.list
            demo.pages = result.data.pages
            console.log("djaskl")
          }
          // 总页数
          that.total_page = result.total_page
            // if (first) {
            //   let merchant = result.data.list;
            //   console.log(JSON.stringify(merchant));
            //   demo.merchant = merchant;
            // } else {
            //   // for(let i =0;i<){

            //   // }
            //   demo.merchant = demo.merchant.cancat(data);
            // }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    search(){
      let url = "../search/main";
      wx.navigateTo({ url });
    },
    tabClick(e) {
      this.activeIndex = e.currentTarget.id;
      this.currentTab = this.activeIndex;
    },
    //点击发布跳转房源信息
    jumproomRsc() {
      let url = "../release_roominfo/main";
      wx.navigateTo({ url });
    },
    //求租详情
    jumproomRsc2(id) {
      let url = "../rent_details/main?id="+id;
      wx.navigateTo({ url });
    },
    //求租主页面
    jumproomRsc3() {
      let url = "../rent_seeking/main";
      wx.navigateTo({ url });
    },
    //房源详情
    jumproomspecific(id) {
      let url = "../room_details/main?id="+id;
      wx.navigateTo({ url });
    },
    shouquan() {
      wx.getSetting({
        success(res) {
          if (!res.authSetting["scope.record"]) {
            wx.authorize({
              scope: "scope.record",
              success() {
                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                wx.startRecord();
              }
            });
          }
        }
      });
    }
  }
};
</script>
<style scoped>
.background {
  width: 100%;
  height: 180px;
  background-image: url(http://img.pconline.com.cn/images/upload/upc/tx/housephotolib/1402/26/c0/31580390_1393386546640.jpg);
  background-repeat: no-repeat;
  background-repeat: center center;
  background-size: 100% 180px;
  /* border: 1px solid red; */
}
.query{
  width: 80%;
  height: 40px;
  margin: 0 auto;
  /* margin-top: 20px; */
  padding-top: 20px;
}
.sousuoFrame{
  padding-left: 20px;
  height: 35px;
  background-color: white;
  border-radius: 15px;
  font-size: 13px;
}
.headtop {
  width: 100%;
  height: 60px;
  /* border: 1px solid red; */
  margin: auto 0;
}
.btnwrap {
  width: 120px;
  height: 34px;
  /* border: 1px solid black; */
  border-radius: 15px;
  margin-top: 3px;
  position: relative;
  left: 250px;
  top: 11px;
  display: flex;
}

.context {
  width: 100%;
  border-top: 1px solid rgb(202, 198, 198);
}
.inner {
  width: 92%;
  height: 210px;
  /* border: 1px solid black; */
  margin: auto;
  border-top: 1px solid rgb(202, 198, 198);
  /* border-bottom: 1px solid rgb(202, 198, 198); */
}
.selfinfo {
  width: 100%;
  height: 70px;
  margin: auto;
  /* border: 1px solid darkblue; */
  display: flex;
}
.headimg {
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  margin: auto;
  margin-right: 10px;
  border-radius: 25px;
}
.username {
  width: 200px;
  height: 60px;
  line-height: 23px;
  /* border: 1px solid black; */
  margin: auto;
  padding-top: 8px;
  /* margin-right: 20px; */
}
.time {
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  font-size: 13px;
  text-align: right;
  margin: auto;
  padding-top: 10px;
}
.roomdetail {
  width: 100%;
  height: 120px;
  margin: auto;
  float: right;
  /* border: 1px solid black; */
  display: flex;
}
.roomphoto {
  width: 120px;
  height: 110px;
  border: 1px solid rgb(238, 232, 232);
  margin-right: 12px;
}
.roominfo {
  width: 200px;
  height: 110px;
  line-height: 27px;
  /* border: 1px solid black; */
  padding-top: 6px;
}
.infoone {
  font-weight: bold;
  font-size: 16px;
}
.infotwo {
  font-size: 14px;
  color: #d6d6da;
}
.infothree {
  color: rgb(243, 163, 14);
  font-size: 13px;
}
.infofour {
  font-size: 14px;
  color: #bababd;
}
.icon {
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-top: 5px;
}
.word {
  width: 50px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  color: white;
}
.footer {
  position: fixed;
  left: 70%;
  bottom: 6%;
  width: 90px;
  height: 35px;
  text-align: center;
  border-radius: 20px;
  background-color: #3185ff;
  display: flex;
  /* border: 1px solid red; */
}
.navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  /* position: absolute;
  z-index: 500;
  top: 145px;*/
  height: 50px;
  width: 100%;
  background-color: #ffffff;
}

.navbar_item {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 13px 0;
  text-align: center;
  font-size: 0;
  width: 0;
}
.navbar_item.navbar_item_on {
  color: #3185ff;
  border-bottom: 2px solid #3185ff;
  /* border-bottom-width:1px; */
}
.navbar_item_on .navbar_title {
  color: #3185ff;
}

.navbar_title {
  color: #000;
  font-weight: 500;
  display: inline-block;
  font-size: 15px;
  max-width: 8em;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.navbar_slider {
  position: absolute;
  content: " ";
  left: 0;
  bottom: 0;
  width: 6em;
  height: 3px;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  left: 29rpx;
  transform: translateX(0);
}

.navbar_slider_1 {
  left: 29rpx;
  transform: translateX(250rpx);
}
.navbar_slider_2 {
  left: 29rpx;
  transform: translateX(500rpx);
}
.content {
  width: 95%;
  height: 500px;
  /* border: 1px solid #dedee2; */
  margin: 0 auto;
}
.inner {
  width: 100%;
  /* height: 220px; */
  /* border: 1px solid black; */
  margin: auto;
  border-top: 1px solid rgb(202, 198, 198);
  /* border-bottom: 1px solid rgb(202, 198, 198); */
}
.selfinfo {
  width: 100%;
  height: 70px;
  margin: auto;
  /* border: 1px solid darkblue; */
  display: flex;
}
.headimg {
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  margin: auto;
  margin-right: 10px;
  border-radius: 25px;
}
.username {
  width: 200px;
  height: 60px;
  line-height: 23px;
  /* border: 1px solid black; */
  margin: auto;
  padding-top: 8px;
  /* margin-right: 20px; */
}
.time {
  width: 60px;
  height: 60px;
  /* border: 1px solid black; */
  font-size: 13px;
  text-align: right;
  margin: auto;
  padding-top: 10px;
}
.text {
  width: 95%;
  height: 125px;
  margin: 0 auto;
  margin-top: 15px;
  /* border: 1px solid black; */
  background-color: #f7f7f7;
}
.top {
  width: 100%;
  height: 50px;
  line-height: 25px;
  margin: 0 auto;
  /* border: 1px solid black; */
  display: flex;
}
.topleft {
  width: 50%;
}
.rentseeking {
  font-size: 16px;
  color: #828285;
}
#pinspan {
  color: #131314;
  font-size: 14px;
  padding-left: 15px;
}
.topright {
  width: 50%;
}
.boxbottom {
  width: 100%;
  height: 85px;
  line-height: 25px;
  margin: 0 auto;
  /* border: 1px solid black; */
}
</style>

