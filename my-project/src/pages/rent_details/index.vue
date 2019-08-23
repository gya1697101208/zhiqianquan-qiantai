<!-- 求租详情 -->
<template>
  <div>
    <div class="maincontent">
      <div class="selfinfo">
        <div class="headimg">
          <img src="../../../static/images/user.png" alt style="width:60px;height:60px;" />
        </div>
        <div class="username">
            <p>{{merchant.user[0].userName}}</p>
            <p>{{merchant.user[0].userSex}}</p>
        </div>
        <div class="time">
          <p>发布时间</p>
          <p style="color:red;">预算{{merchant.tenancyPrice}}元/月</p>
        </div>
      </div>
      <div class="roominfo">
          <span class="block1">求租</span>
          <span class="block2">{{merchant.tenancyType}}</span>
          <span class="block3">{{merchant.tenancy_Requestsex}}</span>
          <span class="block4">2019-08-12</span>
          <p><b>公司 {{merchant.tenancyLabel}}</b></p>
          <p><b>地点 {{merchant.tenancyRegion}}</b></p>
      </div>
      <div class="expectedpara">
          <p>{{merchant.tenancyCommed}}</p>
      </div>
    </div>
    <reminders></reminders>
    <div class="column">
      <div class="column1">
        <div class="img1">
          <img src="../../../static/images/collection.png" alt style="width:30px;height:30px;" />
          <span>收藏</span>
        </div>
      </div>
      <div class="column2">
        <div class="img2">
          <img src="../../../static/images/share.png" alt style="width:30px;height:30px;" />
          <span>分享</span>
        </div>
      </div>
      <div class="column4" @click="jumppage()">
        <div class="img4">
          <img src="../../../static/images/jubao.png" alt style="width:30px;height:30px;" />
          <span>举报</span>
        </div>
      </div>
      <div class="column5">
        <h3>现在联系</h3>
      </div>
    </div>
  </div>
</template>
<script>
import reminders from "@/components/reminders";
let Fly = require("flyio/dist/npm/wx");
let fly = new Fly();
export default {
    data(){
      return{
        merchant:[]
      }
    },
    components:{
        reminders,
    },
    mounted(){
    this.getqiuzuxq()
    },
    methods:{
      jumppage(){
        let url='../../../reports/main';
         wx.navigateTo({ url })
      },
    getqiuzuxq(){
    console.log(this.$root.$mp.query.id)
    fly
        .get(
          "http://10.96.123.248/api/tenancy/selecttenancyID?tenancyId="+this.$root.$mp.query.id)
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
}
</script>

<style>
.maincontent {
  width: 95%;
  /* height: 350px; */
  margin: 0 auto;
  /* border: 1px solid black; */
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
  width: 160px;
  height: 60px;
  line-height: 23px;
  /* border: 1px solid black; */
  margin: auto;
  padding-top: 8px;
  /* margin-right: 20px; */
}
.time {
  width: 100px;
  height: 60px;
  line-height: 25px;
  /* border: 1px solid black; */
  font-size: 13px;
  text-align: right;
  margin: auto;
  padding-top: 10px;
}
.roominfo {
  width: 100%;
  height: 130px;
  line-height: 40px;
  /* border: 1px solid black; */
}
.block2{
    margin-left: 8px;
}
.block2,.block3,.block4{
    height: 25px;
    line-height: 25px;
    display: inline-block;
    border:1px solid #3185ff;
    color: #3185ff;
    margin-right: 8px;
    padding-left: 12px;
    padding-right: 12px;
}
.expectedpara {
  width: 100%;
  min-height: 50px;
  max-height: 180px;
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
.column4 {
  width: 25%;
  height: 50px;
  /* border: 1px solid red; */
  background-color: white;
  font-size: 12px;
  text-align: center;
  color: rgb(46, 45, 45);
}
.img1,
.img2,
.img4 {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.column5 {
  width: 35%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 100;
  color: white;
  background-color: #3185ff;
}
</style>
