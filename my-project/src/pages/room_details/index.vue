//房源详情
<template>
  <div>
    <div class="lunbo">
      <view>
        <carousel :images="images"/>
      </view>
    </div>
    <div class="wrap">
      <div class="maintitle">
        <h3>{{merchant.houseTitle}}</h3>
      </div>
      <div class="selfinfo">
        <div class="headimg">
          <img src="../../../static/images/user.png" alt style="width:60px;height:60px;" />
        </div>
        <div class="username">
          <p>{{merchant.user.userName}}</p> 
          <p>{{merchant.user.userSex}}</p>
        </div>
        <div class="time">
          <p>发布时间</p>
        </div>
      </div>
      <div class="roominfomation">
        <div class="floor1">
          <div class="floor1-one">
            <h3>{{merchant.housePeople}}</h3>
            <p>类型</p>
          </div>
          <div class="floor1-two">
            <h3><strong>{{merchant.houseType}}</strong></h3>
            <p>户型</p>
          </div>
          <div class="floor1-three">
            <h3 style="color:red;">{{merchant.housePrice}}元/月</h3>
            <p>租金</p>
          </div>
        </div>
        <div class="floor2">
            <div class="company">
              <h3 style="display:inline;">公司标签</h3>
              &nbsp;&nbsp;&nbsp;<span>适合以下公司的小伙伴居住~</span>
            </div>
            <div class="comname">
              <P>#{{merchant.houseLabel1}}</P>
            </div>
        </div>
        <div class="floor3">
          <h3 style="display:inline;">位置</h3>
           &nbsp;&nbsp;&nbsp;<span>{{merchant.housePost}}</span>
        </div>
      </div>
      <div class="houseask"></div>
        <P>{{merchant.houseDescribe}}</P>
    </div>
  <reminders></reminders>
    <div class="column">
      <div class="column1">
        <div class="img1">
          <img src="../../../static/images/collection.png" alt="" style="width:30px;height:30px;">
          <span>收藏</span>
        </div>
      </div>
      <div class="column2">
        <div class="img2">
          <img src="../../../static/images/share.png" alt="" style="width:30px;height:30px;">
          <span>分享</span>
        </div>
      </div>
      <div class="column3" @click="jumpcirclefriend()">
        <div class="img3">
          <img src="../../../static/images/pengyouquan.png" alt="" style="width:30px;height:30px;">
          <span>朋友圈</span>
        </div>
      </div>
      <div class="column4" @click="jumpreport()">
        <div class="img4">
          <img src="../../../static/images/jubao.png" alt="" style="width:30px;height:30px;">
          <span>举报</span>
        </div>
      </div>
      <div class="column5"><h3>现在联系</h3></div>
    </div>
  </div>
</template>
<script>
import reminders from '@/components/reminders'
import carousel from '@/components/carousel'
let Fly = require("flyio/dist/npm/wx");
let fly = new Fly();
export default {
  components:{
    carousel,
    reminders,
    merchant:[]
  },
  data(){
    return{
      merchant:[],
      images:[
        {
          url:'http://pic.66zhuang.com/article/pics/image/2015-08-25/4af33aa68fbf2a53e72f91330df94f9b.png'
        },
        {
          url:'http://img1.imgtn.bdimg.com/it/u=2065870320,558648031&fm=26&gp=0.jpg'
        },
        {
          url:'http://img.zx123.cn/Resources/zx123cn/uploadfile/2015/0807/56e904168606300acba4b9d9b10a9122.jpg'
        },
        {
          url:'http://img5.imgtn.bdimg.com/it/u=2930262938,398071623&fm=26&gp=0.jpg'
        },
        {
          url:'http://img1.zzkcdn.com/kf214157b50aa247d7c7f0fa79e74f17/2000x1500.jpg-roompic.jpg'
        }
      ]
    }
  },
  onLoad(options){
    console.log(options.id)
  },
  mounted(){
    this.getfangyuanxq()
  },
  methods:{
    //举报页面
    jumpreport(){
      let url="../reports/main";
      wx.navigateTo({ url });
    },
    //分享朋友圈页面
    jumpcirclefriend(){
      let url="../friendcircle/main";
      wx.navigateTo({ url });
    },
    getfangyuanxq(){
    console.log(this.$root.$mp.query.id)
    fly
        .get(
          "http://10.96.123.248/api/house/findById?houseId="+this.$root.$mp.query.id)
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
    }
  }
};
</script>
<style>
.lunbo{
  width: 100%;
  height: 200px;
}
h3{
    font-size: 16px;
    font-weight: bold;
    color: black;
}
p{
    font-size: 13px;
    color: rgb(114, 112, 112);
}
.wrap {
  width: 93%;
  height: 750px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.maintitle {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-weight: 400;
  /* border: 1px solid red; */
  text-align: left;
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
.roominfomation {
  width: 100%;
  height: 220px;
  /* border: 1px solid red; */
}
.floor1 {
  width: 92%;
  height: 65px;
  line-height: 30px;
  /* border: 1px solid black; */
  margin: auto;
  display: flex;
}
.floor1-one,
.floor1-two,
.floor1-three {
  width: 33.3%;
  height: 65px;
  /* border: 1px solid black; */
  text-align: center;
}
.floor2 {
  width: 100%;
  height: 95px;
  /* border: 1px solid black; */
}
.company{
  width: 100%;
  height: 45px;
  line-height: 45px;
  /* border: 1px solid black; */
}
.comname{
  width: 100%;
  height: 50px;
  line-height: 50px;
  /* border: 1px solid black; */
}
.floor3 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgb(155, 151, 151);
}
.houseask {
  width: 100%;
  min-height: 120px;
  max-height: 300px;
  /* border: 1px solid black; */
}
.column {
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 1;
  /* background-color: red; */
}
.column1,
.column2,
.column3,
.column4 {
  width: 60px;
  height: 50px;
  /* border: 1px solid red; */
  background-color: white;
  font-size: 12px;
  text-align: center;
  color: rgb(129, 126, 126);
}
.img1,.img2,.img3,.img4{
  width: 30px;
  height: 30px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.column5 {
  width: 135px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 100;
  color: white;
  background-color: #3185ff;
}
</style>