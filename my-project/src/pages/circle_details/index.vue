<template>
  <div class="wrap">
    <div class="outline" v-for="(item,index) in merchant" :key="index">
      <div class="share">
        <span>
          <i-icon type="share" size="14"/>&nbsp;分享社群
          </span>
      </div>
      <div class="pictureFrame">
        <img style="width:75px;height:75px;" src="../../../static/images/user.png" alt="" >
      </div>
      <div class="nickName">
        <div class="number1">#{{item.groupName}}</div>
        <div class="number2">粉丝&nbsp;&nbsp;10000</div>
      </div>
      <div class="signature">
        <p>{{item.groupCooment}}</p>
      </div>
      <div class="joinPicture">
          <!-- <img src="../../../static/images/@2x/community_btn_join_n@2x.png" alt="" style="width:50px;height:50px"> -->
      </div>
    </div>
    <div class="header">
      <div class="news" v-for="(item,index) in hotList" :key="index">
        <div class="news-space"></div>
        <div class="news-title">
          <div class="news-title-image">
            <!-- <img :src="merchant.img" style="width:45px;height:45px;padding:12.5px 12.5px" /> -->
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
        <div class="news-bottom">
          <div class="news-bottom-main">
            <div class="news-bottom-main-left">#{{item.groupName}}</div>
            <div class="news-bottom-main-right">
              <div class="news-bottom-main-right-i">
                <img src="../../../static/images/@2x/talk.png" style="height:14px;width:14px" />
                {{item.chatroomLikenum}}
              </div>
              <div class="news-bottom-main-right-i">
                <img src="../../../static/images/@2x/zan.png" style="height:14px;width:14px" />
                {{item.chatroomReview}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mainContent">
      <div class="author1">

        
        <div class="authorBrief">
          <div class="authorBrief-con">
            <div id="author-head">
              <img style="width:58px;height:58px;border-radius:30px;" src="../../../static/images/h3.png" alt="">
            </div>
            <p style="font-size: 12px;padding:8px">Gerry.Z</p>
            <p style="font-size: 12px;">天津水泥综合技术学校·腾讯·产品运营</p>
          </div>
        </div>
        <div class="stateContent">
          <p>如果你的领导要求你早上九点半到公司，他一般都是九点四十五到公司，有一天你迟到了，你九点四十才到，知道后他严格的批评了你迟到的问题，这个时候你该怎么说呢？</p>
          <span style="float:right;font-size:14px;">
            <i-icon type="praise" size="20"/>12
            <i-icon type="message" size="20"/>10
          </span>
        </div>
      </div>
      <div class="author1">
        <div class="authorBrief">
          <div class="authorBrief-con">
            <div id="author-head">
               <img style="width:58px;height:58px;border-radius:30px;" src="../../../static/images/h3.png" alt="">
            </div>
            <p style="font-size: 12px;padding:8px">Gerry.Z</p>
            <p style="font-size: 12px;">天津水泥综合技术学校·腾讯·产品运营</p> 
          </div>
        </div>
        <div class="stateContent">
          <p>如果你的领导要求你早上九点半到公司，他一般都是九点四十五到公司，有一天你迟到了，你九点四十才到，知道后他严格的批评了你迟到的问题，这个时候你该怎么说呢？</p>
          <span style="float:right;font-size:14px;">
            <i-icon type="praise" size="20"/>12
            <i-icon type="message" size="20"/>10
          </span>
        </div>
      </div>
      <div class="author1">
        <div class="authorBrief">
          <div class="authorBrief-con">
            <div id="author-head">
               <img style="width:58px;height:58px;border-radius:30px;" src="../../../static/images/h3.png" alt="This is me">
            </div>
            <p style="font-size: 12px;padding:8px">Gerry.Z</p>
            <p style="font-size: 12px;">天津水泥综合技术学校·腾讯·产品运营</p>
          </div>
        </div>
        <div class="stateContent">
          <p>如果你的领导要求你早上九点半到公司，他一般都是九点四十五到公司，有一天你迟到了，你九点四十才到，知道后他严格的批评了你迟到的问题，这个时候你该怎么说呢？</p>
          <span style="float:right;font-size:14px;">
            <i-icon type="praise" size="20"/>12
            <i-icon type="message" size="20"/>10
          </span>
        </div>
      </div>
    <div class="toolBar"><span><i-icon type="brush" size="20"/></span>&nbsp;&nbsp;想说</div>
    </div> -->
  </div>
</template>
<script>
let Fly = require("flyio/dist/npm/wx");
let fly = new Fly();
export default {
    data() {
    return {
      merchant:[],
      hotList:[]
      // merchant: {
      //   id: "1",
      //   img: require("../../../static/images/user.png"),
      //   name: "何祚",
      //   time: "一小时前",
      //   school: "塔里木大学",
      //   company: "少妇吧",
      //   position: "产品经理",
      //   zan: "20",
      //   talk: "0",
      //   main:
      //     "的撒娇考虑的艰苦拉萨考虑到较快拉升阶段城市路况的艰苦拉萨大家拉克斯基的卡拉设计的灯笼裤洒家达拉斯",
      //   shequn: "少妇吧"
      // }
    }
},
    onLoad: function(options) {
    console.log(options.id)
  },
  mounted() {
    this.getShequn()
    this.getNews()
  },
  methods: {
    getShequn(){
        console.log(this.$root.$mp.query.id)
    fly
        .get(
          "http://10.96.123.248/api/group/query?groupId="+this.$root.$mp.query.id)
        .then(response => {
      console.log(this.$root.$mp.query.id)
          let result = response.data
          console.log(JSON.stringify(result))
          if (response.status == 200) {
            let merchant = result.data.list;
            console.log(merchant)
            this.merchant = merchant;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getNews(){
       console.log(this.$root.$mp.query.id)
    fly
        .get(
          "http://10.96.123.248/api/query/groupchartroom?groupId="+this.$root.$mp.query.id)
        .then(response => {
      console.log(this.$root.$mp.query.id)
          let result = response.data
          console.log(JSON.stringify(result))
          if (response.status == 200) {
            let hotList = result.data.chatroom;
            console.log(hotList)
            this.hotList = hotList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
}
</script>

<style>
.wrap {
  width: 100%;
  height: 140px;
  /* border: 1px solid darkblue;  */
}
.outline {
  width: 100%;
  height: 140px;
  background-color: #3185ff;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
}
.share{
  width: 80px;
  height: 30px;
  /* border: 1px solid black; */
  padding-top: 25px;
  padding-left: 45px;
  color: white;
  font-size: 14px;
  float: right;
}
.share ::after{
  clear: both;
}
.pictureFrame {
  width: 75px;
  height: 75px;
  position: relative;
  left: 30px;
  top: 20px;
  /* border: 1px solid darkblue; */
  /* background-image: url(../../../static/images/head.png);
  background-repeat: no-repeat;
  background-position: center center; */
}
.nickName {
  width: 130px;
  height: 80px;
  /* border: 1px solid darkblue; */
  position: relative;
  left: 130px;
  top: -60px;
 
}
.number1,
.number2 {
  width: 130px;
  height: 38px;
  /* border: 1px solid red; */
  font-size: 14px;
  color: white;
  line-height: 38px;
}
.signature {
  width: 300px;
  height: 40px;
  font-size: 14px;
  color: white;
  line-height: 40px;
  /* border: 1px solid black; */
  position: relative;
  left: 30px;
  top: -55px;
}
.joinPicture {
  width: 80px;
  height: 80px;
  /* border: 1px solid red; */
  position: relative;
  left: 290px;
  top: -80px;

}
.mainContent {
  width: auto;
  height: 400px;
  /* border: 1px solid black; */
  font-size: 18px;
  position: relative;
  left: 0px;
  top: 145px;
}
.author1 {
  width: auto;
  height: 170px;
  border-bottom: 1px solid rgb(219, 216, 216);
  /* border: 1px solid red; */
}
.authorBrief {
  width: auto;
  height: 60px;
  /* border: 1px solid red; */
}
.authorBrief-con {
  width: 90%;
  height: 58px;
  /* border: 1px solid red; */
  margin: auto;
  padding-top: 5px;
  
}
#author-head {
  width: 58px;
  height: 58px;
  float: left;
  border-radius: 50px;
  
}
.stateContent {
  padding-top: 5px;
  width: auto;
  height: 120px;
  padding: 5px;
  font-size: 15px;
  padding-top: 5px;

}
.toolBar{
  width: 90px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: white;
  font-size: 14px;
  /* border: 1px solid red; */
  position: fixed;
  left: 70%;
  bottom: 12%;
  border-radius: 20px;
  /* background-image: url(../../../static/images/back.png); */
  background-repeat: no-repeat;
  background-position: center center;
}
.news {
    margin-top: 140px;
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
