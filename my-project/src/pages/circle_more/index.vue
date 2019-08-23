<template>
  <div>
    <div class="head">
      <!-- <i class="sou" @click="sousuo()"></i>
      <input class="in1" @click="sousuo()"      
      type="text" placeholder="请输入感兴趣的关键字和发布者昵称"/>-->
      <card></card>
    </div>
    <div>
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
        <!-- <swiper class="content" :duration="50" :style="'height:'+contentHeight" @change="swiperChange" :current="currentTab" @animationfinish="onAnimationfinish">
        </swiper>-->
      </div>
      <div>
        <div :hidden="activeIndex!= 0">
          <div class="toop">
            <scroll-view class="header-shequ" scroll-y="true">
              <view class="header-shequ-box" v-for="(item2,index) in hostList" :key="index"  @click="jump(item2.groupId)">
                <div>
                  <div class="shu">{{index+1}}</div>
                  <div class="recommend_hot_image">
                    <img :src="item2.image" style="width:50px;height:50px;" />
                  </div>
                  <div class="l">讨论{{item2.id}}</div>
                  <div class="r">#{{item2.groupName}}</div>
                </div>
              </view>
            </scroll-view>
          </div>
        </div>
        <div :hidden="activeIndex != 1">
          <div class="wo">
            &nbsp;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;Hello!
            <br />&nbsp;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;您目前没有加入任何社群
            <br />&nbsp;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;您可以
            <span @click="getmore()" style="color: #3185ff">所有社群</span>或
            <span @click="sousuo()" style="color: #3185ff">搜索</span>
            <br />&nbsp;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;寻找并加入自己的社群
            <br />&nbsp;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;也可以自己
            <span @click="dofn()" style="color: #3185ff">创建社群</span>
          </div>
        </div>
      </div>
    </div>
    <div class="getUserInfobutton-hover" style="height:36px;width:130px;" @click="dofn()">
      <img src="../../../static/images/@2x/czsq1.png" alt role="img" class="im" />
    </div>
  </div>
</template>
<script>
import card from "@/components/card";
let Fly = require("flyio/dist/npm/wx");
let fly = new Fly();
export default {
  data() {
    return {
      hostList: [],
      page:1,
      pages: 0,
      tabs: [
        {
          name: "所有社群",
          type: "0",
          checked: true
        },
        {
          name: "我的社群",
          type: "1",
          checked: true
        }
      ],
      activeIndex: 0,
      currentTab: 0,
      winWidth: 0,
      winHeight: 0
    };
  },
  components: {
    card
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
  mounted() {
    this.gethostList();
  },
  onAnimationfinish() {
    console.log("滑动完成.....");
  },
  onReachBottom() {
    if (this.page >= this.pages) {
      console.log("数据加载完了");
    } else {
      // 下一页
      this.page = this.page + 1;
      this.gethostList();
    }
  },
  // 下拉刷新事件
  onPullDownRefresh() {
    // 初始化页码
    this.page = 1;
    this.getmerchant();
  },
  methods: {
    sousuo() {
      const url = "../circle_search/main";
      wx.navigateTo({ url });
    },
    dofn() {
      const url = "../circle_build/main";
      wx.navigateTo({ url });
    },
    getmore() {
      const url = "../circle_more/main";
    },
    tabClick(e) {
      this.activeIndex = e.currentTarget.id;
    },
    swiperChange(e) {
      this.currentTab = e.mp.detail.current;
      this.activeIndex = this.currentTab;
    },
    jump(id) {
      wx.navigateTo({
        url: "/pages/circle_details/main?id="+id
      });
    },
    gethostList() {
      let _this = this;
      console.log(_this.page)
      fly
        .get("http://10.96.123.248/api/group/query",{
          pageNum:_this.page,
            pageSize:11
        })
        .then(function(response){
          
          wx.stopPullDownRefresh()
          let result = response.data;
          if (response.status === 200) {
            console.log(result.data.list)
            if (_this.page > 1) {
            // 数据追加
           console.log("asd")
            _this.hostList.push(...result.data.list)
            console.log(result.data.list)
            // ...data.list
            // 等同于
            // for (var i = 0; i < data.list.length; i++) {
            //     this.art_list.push(data['list'][i])
            // }
          }else {
            // 数据
            _this.hostList = result.data.list
            _this.pages = result.data.pages
            console.log("djaskl")
          }
          _this.pages = result.pages
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  onLoad() {
    var res = wx.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
  }
  // created(){
  //   for(var i=1;i<10;i++){
  //     this.list.push(i);
  //   }
  // }
};
</script>
<style>
.head {
  width: 270px;
  height: 50px;
  position: relative;
  margin-left: 25px;
  top: 10px;
  font-size: 14px;
}
/* .in1{
        margin-left:30px; 
        width: 320px;
        height: 35px;
        float: left;
        background-color:transparent;
    }
    .sou{
        background: url(../../../static/images/search1.png) ;
        margin-top:10px; 
        margin-left: 10px;
        width: 16px;
        height: 16px;
        position: absolute;
    } */
.content {
  box-sizing: border-box;
  height: 100%;
  padding-top: 50px;
  -webkit-overflow-scrolling: touch;
}

.swiper-item {
  height: 100%;
  text-align: center;
}

.navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: absolute;
  z-index: 500;
  top: 40;
  height: 50px;
  width: 100%;
  background-color: white;
  border-bottom: 1rpx solid #ccc;
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
}

.navbar_item .navbar_item_on {
  color: white;
}

.navbar_title {
  color: #3185ff;
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
.header-shequ {
  position: absolute;
  margin-top: 50px;
}
.header-shequ-box {
  border-bottom: 1rpx solid #ccc;
  height: 60px;
}
.navbar_slider {
  position: absolute;
  content: " ";
  left: 0;
  bottom: 0;
  width: 6em;
  height: 2px;
  background-color: #298de5;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  left: 29rpx;
  transform: translateX(30px);
}

.navbar_slider_1 {
  left: 29rpx;
  transform: translateX(450rpx);
}
.controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: absolute;
  z-index: 8888;
  top: 80;
  height: 50px;
  width: 100%;
  background-color: black;
}
.recommend_scroll_x_box {
  height: 245px;
  white-space: nowrap;
  display: flex;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.shu {
  width: 10px;
  font-size: 10px;
  float: left;
  margin-left: 10px;
  margin-top: 24px;
}
.recommend_hot_image {
  width: 50px;
  height: 50px;
  position: absolute;
  margin-left: 30px;
  margin-top: 5px;
}
.l {
  position: relative;
  width: 40px;
  margin-top: 15px;
  margin-right: 40px;
  float: right;
}
.r {
  padding-top: 15px;
  margin-left: 100px;
  width: 80px;
}
.wo {
  width: 250px;
  height: 285px;
  position: absolute;
  margin-top: 100px;
  margin-left: 70px;
  background: url(../../../static/images/@2x/wdsq.png);
  background-size: 100%;
  color: #999999;
  font-size: 18px;
}
.im {
  width: 212rpx;
  height: 68rpx;
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.getUserInfobutton-hover {
  position: fixed;
  right: 30rpx;
  bottom: 100rpx;
  padding: 0;
  /* color:rgba(53, 53, 53, 0.6);
border-color:rgba(7, 6, 6, 0.6); 
 border:1px solid #353535; */
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  line-height: 2.55555556;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
}
</style>
