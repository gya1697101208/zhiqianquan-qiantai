<template>
  <div class="all">
    <div class="box">
      <card></card>
    </div>
    <div class="space"></div>
    <div class="header">
      <div class="header-title">
        <div class="header-title-left">职前社群</div>
        <div class="header-title-right" @click="getShqunMore()">
          更多
          <i class="right-icon" style="float:left; margin-right:5px">
            <img
              src="../../../static/images/community_icon_more_n@2x.png"
              style="width:14px;height:14px;"
            />
          </i>
        </div>
      </div>
      <div>
        <scroll-view class="header-shequ" scroll-x="true">
          <div class="header-shequ-box" v-for="(item, index) in hotList" :key="index">
            <div class="header-shequn-box-i">
              <div style="text-align:center" @click="jump(item.groupId)">
                <!-- <img :src="item.pic" class="recommend_hot_image" /> -->
                <img src="../../../static/images/user.png" class="recommend_hot_image" />
              </div>
              <div style="font-size:12px;text-align:center">{{item.groupName}}</div>
            </div>
          </div>
          <span class="header-shequn-box-i">
            <img
              src="../../../static/images/@2x/onload.png"
              class="recommend_hot_image1"
              @click="getMore()"
            />
          </span>
        </scroll-view>
      </div>
    </div>
    <div class="space-2"></div>
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
    <!-- <swiper class="content" :duration="50" :style="'height:'+contentHeight" @change="swiperChange" :current="currentTab" @animationfinish="onAnimationfinish">
        <swiper-item  v-for="(item,index) in tabs" :key="index">
          <div>{{item.name}}</div>
        </swiper-item>
    </swiper>-->
    <div :hidden="activeIndex != 0" @click="settype(one)">
      <div class="news" v-for="(item, index) in merchant" :key="index">
        <div class="news-space"></div>
        <div @click="getDetail(item.chatroomId)">
          <div class="news-title">
          <div class="news-title-image">
            <!-- <img :src="item.img" style="width:45px;height:45px;padding:12.5px 12.5px" />   -->
            <img
              src="../../../static/images/user.png"
              style="width:45px;height:45px;padding:12.5px 12.5px"
            />
          </div>
          <div class="news-title-item">
            <div class="news-title-item-head">
              <div class="news-title-item-head-name">
                <div class="main">{{item.userName}}</div>
              </div>
              <span class="news-title-item-head-time">
                <div class="main">{{item.time}}</div>
              </span>
            </div>
            <div class="news-title-item-bottom">
              <div class="adress">{{item.userSchool}}-{{item.userCompany}}-{{item.userPost}}</div>
            </div>
          </div>
        </div>
        <div class="new-main">
          <div class="index">{{item.chatroomComment}}</div>
        </div>
        </div>
        
        <div class="news-bottom">
          <div class="news-bottom-main">
            <div class="news-bottom-main-left" @click="jump(item.groupId)">#{{item.groupName}}</div>
            <div class="news-bottom-main-right">
              <div class="news-bottom-main-right-i" @click="getchatroomLikenum()">
                <img src="../../../static/images/@2x/talk.png" style="height:14px;width:14px" />
                {{item.chatroomReview}}
              </div>
              <div class="news-bottom-main-right-i">
                <img src="../../../static/images/@2x/zan.png" style="height:14px;width:14px" />
                {{item.chatroomLikenum}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div @click="getPublish()">
        <publish></publish>
      </div>
    </div>
    <div :hidden="activeIndex != 1">选项二的内容</div>

    <div :hidden="activeIndex != 2" @click="settype(two)"><div class="news" v-for="(item, index) in chatroom" :key="index">
        <div class="news-space"></div>
        <div @click="getDetail(item.chatroomId)">
          <div class="news-title">
          <div class="news-title-image">
            <!-- <img :src="item.img" style="width:45px;height:45px;padding:12.5px 12.5px" />   -->
            <img
              src="../../../static/images/user.png"
              style="width:45px;height:45px;padding:12.5px 12.5px"
            />
          </div>
          <div class="news-title-item">
            <div class="news-title-item-head">
              <div class="news-title-item-head-name">
                <div class="main">{{item.userName}}</div>
              </div>
              <span class="news-title-item-head-time">
                <div class="main">{{item.time}}</div>
              </span>
            </div>
            <div class="news-title-item-bottom">
              <div class="adress">{{item.userSchool}}-{{item.userCompany}}-{{item.userPost}}</div>
            </div>
          </div>
        </div>
        <div class="new-main">
          <div class="index">{{item.chatroomComment}}</div>
        </div>
        </div>
        
        <div class="news-bottom">
          <div class="news-bottom-main">
            <div class="news-bottom-main-left" @click="jump(item.groupId)">#{{item.groupName}}</div>
            <div class="news-bottom-main-right">
              <div class="news-bottom-main-right-i" @click="getchatroomLikenum()">
                <img src="../../../static/images/@2x/talk.png" style="height:14px;width:14px" />
                {{item.chatroomReview}}
              </div>
              <div class="news-bottom-main-right-i">
                <img src="../../../static/images/@2x/zan.png" style="height:14px;width:14px" />
                {{item.chatroomLikenum}}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

  </div>
</template>

<script>
let Fly = require("flyio/dist/npm/wx");
let fly = new Fly();
import card from "@/components/card";
import publish from "@/components/publish";

export default {
  data() {
    return {
      type:'',
      msg: "",
      hotList: [],
      chatroom:[],
      one:1,
      two:0,
      tabs: [
        {
          name: "推荐",
          type: "1",
          checked: true
        },
        {
          name: "精选",
          type: "2",
          checked: true
        },
        {
          name: "简历",
          type: "3",
          checked: true
        }
      ],
      merchant: [],
        page: 1,      // 当前页数
      pages: 0, // 总页数
      activeIndex: 0,
      currentTab: 0,
      winWidth: 0,
      winHeight: 0
    };
  },
   mounted() {
    this.getmerchant();
    this.getShequn();
    this.getmchatroom();
  },
 onReachBottom () {
    if (this.page >= this.pages) {
      console.log('数据加载完了')
    } else {
      // 下一页
      this.page = this.page + 1
      this.getmerchant()
    }
  },
  // 下拉刷新事件
  onPullDownRefresh () {
    // 初始化页码
    this.page = 1
    this.getmerchant()
  },
  components: {
    card,
    publish
  },
  computed: {
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return "navbar_slider_0";
      }
      if (this.activeIndex == 1) {
        return "navbar_slider_1";
      }
      if (this.activeIndex == 2) {
        return "navbar_slider_2";
      }
    },
    contentHeight() {
      return this.winHeight + "px";
    }
  },
 
  methods: {
    settype(v){
      console.log(11111111111111111)
      let self =this;
      self.type=v;
      console.log(self.type)
      getmerchant();
    },
    tabClick(e) {
      this.activeIndex = e.currentTarget.id;
      this.currentTab = this.activeIndex;
    },
    swiperChange(e) {
      this.currentTab = e.mp.detail.current;
      this.activeIndex = this.currentTab;
    },
    onLoad() {
    var res = wx.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
  },
    onAnimationfinish() {
      console.log(".....");
    },
    
    getmerchant() {
      let demo = this;
      fly
        .get("http://10.96.123.248/api/message/selectchatroomall",{
            pageNum:demo.page,
            pageSize:4,
            chatroomType:1
        })
        .then(function(response) {
          console.log(demo.type)
          wx.stopPullDownRefresh()
          let result = response.data;
          
          if (response.status === 200) {
             console.log(result.data.list)
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
        .catch(function(err) {
          console.log(err);
        });
    },

     getmchatroom() {
      let demo = this;
      fly
        .get("http://10.96.123.248/api/message/selectchatroomall",{
            pageNum:demo.page,
            pageSize:4,
            chatroomType:0
        })
        .then(function(response) {
          console.log(demo.type)
          wx.stopPullDownRefresh()
          let result = response.data;
          
          if (response.status === 200) {
             console.log(result.data.list)
            if (demo.page > 1) {
            // 数据追加
           console.log("asd")
            demo.chatroom.push(...result.data.list)
            console.log(result.data.list)
            // ...data.list
            // 等同于
            // for (var i = 0; i < data.list.length; i++) {
            //     this.art_list.push(data['list'][i])
            // }
          } else {
            // 数据
            demo.chatroom = result.data.list
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
        .catch(function(err) {
          console.log(err);
        });
    },
    
    getShequn() {
      
      fly
        .get(
          "http://10.96.123.248/api/group/query",{
            pageSize:20
          }
        )
        .then(response => {
          if (response.status === 200) {
            let result = response.data;
            let hotList = result.data.list;

            console.log(hotList);
            this.hotList = hotList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPublish() {
      wx.navigateTo({
        url: "/pages/circle_talk/main"
      });
    },
    getMore() {
      wx.navigateTo({
        url: "/pages/circle_more/main"
      });
    },
    jump(id) {
      wx.navigateTo({
        url: "/pages/circle_details/main?id="+id
      });
    },
    getShqunMore() {
      wx.navigateTo({
        url: "/pages/circle_more/main"
      });
    },
    getDetail(id) {    
      wx.navigateTo({
        url: "/pages/circle_newsdetails/main?id="+id      
      });
       console.log(id)
    },
    getchatroomLikenum(){
     
    },
  },
  
};
</script>
<style scoped>
.box {
  width: 270px;
  position: relative;
  margin-left: 25px;
  top: 10px;
  font-size: 14px;
}
/* .icon-search {
  background: url(../../../static/images/search1.png) no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 40px;
}
.inp1 {
  border-radius: 50px;
  padding-left: 60px;

  background-color: #f5f5f5;
  width: 270px;
  height: 30px;
  margin: 0 auto;
} */
.space {
  height: 15px;
}
.header {
  height: 100px;
  background-color: white;
}
.header-title {
  height: 20px;
  margin-top: 10px;
}
.header-title-left {
  margin-left: 20px;
  font-size: 16px;
  float: left;
}
.header-title-right {
  font-size: 12px;
  float: right;
  margin-right: 20px;
  color: #3185ff;
  margin-top: 2px;
}
.header-shequ {
  height: 75px;
  white-space: nowrap;
  display: flex;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.header-shequ-box {
  margin-top: 10px;
  height: 100px;

  display: inline-block;
}
.header-shequn-box-i {
  padding: 0;
  height: 70px;
  width: 80px;
}
.recommend_hot_image {
  width: 40px;
  height: 40px;
}
.recommend_hot_image1 {
  width: 40px;
  height: 40px;
  padding: 15px;
}
.content {
  box-sizing: border-box;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
.swiper {
  min-height: 1000px;
}
.swiper-item {
  text-align: center;
}
.space-2 {
  height: 10px;
  background-color: #f5f5f5;
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
.news {
  height: 220px;
  /* background-color: aqua; */
}
.news-space {
  height: 2px;
  background-color: #f5f5f5;
}
.news-title {
  height: 70px;
  /* background-color: #f5f5f5; */
}
.new-main {
  height: 110px;
  /* background-color: bisque; */
}
.new-main .index {
  padding: 15px;
  font-size: 14px;
  color: #1a1a1a;
}
.news-title-image {
  height: 70px;
  width: 70px;
  /* background-color: brown; */
  float: left;
}
.news-title-item {
  position: relative;
  height: 70px;
  width: 305.2px;
  /* background-color: #3185ff; */
  float: right;
}
.news-title-item-head {
  height: 50px;
  /* background-color: chocolate; */
}
.news-title-item-bottom {
  height: 20px;
  /* background-color: crimson; */
}
.news-title-item-head-name {
  padding-left: 20px;
  height: 50px;

  /* background-color: #ffffff; */
  width: 200px;
  float: left;
}
.news-title-item-head-name .main {
  padding-top: 20px;
  color: #525a66;
}
.news-title-item-head-time {
  height: 50px;
  min-width: 80px;
  /* background-color: cornflowerblue; */
  float: right;
  font-size: 11px;
  color: #b3b3b3;
}
.news-title-item-head-time .main {
  margin-left: 24px;
  padding-top: 20px;
}
.news-title-item-bottom {
  height: 20px;
  /* background-color: crimson; */
}
.news-title-item-bottom .adress {
  padding-left: 20px;
  width: 200px;
  height: 20px;
  font-size: 11px;
  color: #858585;
  /* background-color: #ffffff */
}
.news-bottom {
  height: 40px;
}
.news-bottom-main {
  padding: 13px 15px;
  height: 14px;
}
.news-bottom-main-left {
  height: 14px;
  width: 150px;
  font-size: 12px;
  color: #3185ff;
  line-height: 14px;
  float: left;
}
.news-bottom-main-right {
  height: 14px;
  float: right;
  width: 150px;
  font-size: 12px;
}
.news-bottom-main-right-i {
  height: 14px;
  width: 40px;
  float: right;
  margin-left: 35px;
  line-height: 14px;
}
</style>
