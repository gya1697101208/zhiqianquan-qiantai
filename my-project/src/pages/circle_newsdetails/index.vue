<template>
  <div>
    <div class="header" >
      <div class="news">
        <div class="news-space"></div>
        <div class="news-title">
          <div class="news-title-image">
            <img :src="merchant.img" style="width:45px;height:45px;padding:12.5px 12.5px" />
          </div>
          <div class="news-title-item">
            <div class="news-title-item-head">
              <div class="news-title-item-head-name">
                <div class="main">{{merchant.userName}}</div>
              </div>
              <span class="news-title-item-head-time">
                <div class="main">{{merchant.time}}</div>
              </span>
            </div>
            <div class="news-title-item-bottom">
              <div class="adress">{{merchant.userSchool}}-{{merchant.userCompany}}-{{merchant.userPost}}</div>
            </div>
          </div>
        </div>
        <div class="new-main">
          <div class="index">{{merchant.chatroomComment}}</div>
        </div>
        <div class="news-bottom">
          <div class="news-bottom-main">
            <div class="news-bottom-main-left">#{{merchant.shequn}}</div>
            <div class="news-bottom-main-right">
              <div class="news-bottom-main-right-i">
                <img src="../../../static/images/@2x/talk.png" style="height:14px;width:14px" />
                {{merchant.chatroomLikenum}}
              </div>
              <div class="news-bottom-main-right-i">
                <img src="../../../static/images/@2x/zan.png" style="height:14px;width:14px" />
                {{merchant.chatroomReview}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="di"></div>
    <div class="discuss">
        <div class="main-header">
            全部{{merchant.chatroomReview}}条评论
        </div>
        <div class="main-artical">
          <div class="main-artical-image">
            <div class="discuss" v-for="(item,index) in discuss" :key="index">
              <div class="news-space"></div>
                <div class="news-title">
                <div class="discuss-title-image">
                  <img :src="merchant.img" style="width:35px;height:35px;padding:12.5px 12.5px" />
                </div>
                <div class="news-title-item">
                  <div class="discuss-title-item-head">
                    <div class="discuss-title-item-head-name">
                      <div class="main">{{item.userName}}</div>
                    </div>
                    <span class="news-title-item-head-time">
                      <div class="main">{{merchant.time}}</div>
                    </span>
                  </div>
                  <div class="discuss-title-item-bottom">
                    <div class="adress">{{item.userSchool}}-{{item.userCompany}}-{{item.userPost}}</div>
                  </div>
                  <div class="new-main">
                  <div class="index">
                    {{item.discussComment}}
                  </div>
                  </div>
                  <div class="discss-son" v-for="(it,dex)  in item.list" :key="dex">
                    {{it.discussComment}}
                  </div>
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
export default {
  data() {
    return {
      merchant:[],
      discuss:[]
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
    };
  },
  onLoad: function(options) {
    console.log(options.id)
  },
  mounted() {
    this.getdetails();
    this.gediscusss();
  },
  methods: {
    getdetails(){
      console.log(this.$root.$mp.query.id)
    fly
        .get(
          "http://10.96.123.248/api/message/selectchatroombyId?chatroomId="+this.$root.$mp.query.id)
        .then(response => {
      console.log(this.$root.$mp.query.id)
          let result = response.data
          console.log(JSON.stringify(result))
          if (response.status == 200) {
            let merchant = result.data;
            console.log(merchant)
            this.merchant = merchant;
          }
        })
        .catch(err => {
          console.log(err);
        });
  },
  //查询评论
  gediscusss(){
      console.log(this.$root.$mp.query.id)
    fly
        .get(
          "http://10.96.123.248/api/message/selectdiscussbyId?chatroomId="+this.$root.$mp.query.id)
        .then(response => {
      console.log(this.$root.$mp.query.id)
          let result = response.data
          console.log(JSON.stringify(result))
          if (response.status == 200) {
            let discuss = result.data;
            console.log(discuss)
            this.discuss = discuss;
          }
        })
        .catch(err => {
          console.log(err);
        });
  }


  },
  
};
</script>

<style>
.discuss-son{
  color: red;
  font-size: 8px;
}
.news {
  height: 220px;
  /* background-color: aqua; */
}
.discuss{
  height: 140px;
}
.news-space {
  height: 2px;
  background-color: #f5f5f5;
}
.discuss-space{
  height:2px;
  background-color: #afafaf;
}
.news-title {
  height: 70px;
  /* background-color: #f5f5f5; */
}
.adress-title{
  height: 50px;
}
.new-main {
  height: 110px;
  /* background-color: bisque; */
}
.adress-main{
  height: 90px;
}
.new-main .index {
  padding: 15px;
  font-size: 14px;
  color: #1a1a1a;
}
.adress-main .index{
  padding: 15px;
  font-size: 12px;
  color: #1a1a1a;
}

.news-title-image {
  height: 70px;
  width: 70px;
  /* background-color: brown; */
  float: left;
}
.discuss-title-image{
  height: 50px;
  width: 50px;
  float: left;
}
.news-title-item {
  position: relative;
  height: 70px;
  width: 305.2px;
  /* background-color: #3185ff; */
  float: right;
}
.adress-title-item{
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
.discuss-title-item-head{
  height: 30px;
  font-size: 11px;
}
.news-title-item-bottom {
  height: 20px;
  /* background-color: crimson; */
}
.adress-title-item-bottom{
  height: 15px;
}
.news-title-item-head-name {
  padding-left: 20px;
  height: 50px;

  /* background-color: #ffffff; */
  width: 200px;
  float: left;
}
.discuss-title-item-head-name{
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
.discuss-title-item-head-name .main{
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
.adress-title-item-head-time{
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
.adress-title-item-head-time .main{
  margin-left: 24px;
  padding-top: 20px;
}
.news-title-item-bottom {
  height: 20px;
  /* background-color: crimson; */
}
.adress-title-item-bottom{
  height: 10px;
}
.news-title-item-bottom .adress {
  padding-left: 20px;
  width: 200px;
  height: 20px;
  font-size: 11px;
  color: #858585;
  /* background-color: #ffffff */
}
.discuss-title-item-bottom .adress{
  padding-left: 20px;
  width: 200px;
  height: 20px;
  font-size: 9px;
  color: #858585;
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
.space {
  height: 10px;
  background-color: #f5f5f5;
}

.main-header{
    margin-top: 10px;
    margin-left: 5px;
    height: 20px
}
</style>
