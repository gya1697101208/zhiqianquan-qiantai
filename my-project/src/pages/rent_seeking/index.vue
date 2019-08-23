//求租主页面
<template>
  <div>
    <div class="background">
      <img src="../../../static/images/jianyue.png" style="width:100%;  height:150px;" alt />
      <div class="search">
        <div class="local"></div>
        <div class="query"></div>
      </div>
    </div>
    <div class="headtop">
     <div class="btnwrap">
        <div class="box1" @click="jumproomspecific()">
          <span>房源</span>
        </div>
        <div class="box2" @click="jumproomRsc3()">
          <span>求租</span>
        </div>
      </div>
    </div>
    <div class="content" @click="jumproomRsc()">
      <div class="inner">
        <div class="selfinfo">
          <div class="headimg">
            <img src="../../../static/images/user.png" alt style="width:60px;height:60px;" />
          </div>
          <div class="username">
            <p>name</p>
            <p>local</p>
          </div>
          <div class="time">
            <p>发布时间</p>
          </div>
        </div>
        <div class="text" >
          <div class="top" >
            <div class="topleft">
              <p class="rentseeking">入住时间<span id="pinspan">2018-9-9</span></p>
              <p class="rentseeking">求租区域</p>
            </div>
            <div class="topright">
              <p class="rentseeking">求租类型</p>
              <p class="rentseeking">性别要求</p>
            </div>
          </div>
          <div class="boxbottom">
            <p class="rentseeking">理想地点</p>
            <p class="rentseeking">公司标签</p>
            <p class="rentseeking">意向租金</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    jumproomspecific() {
      let url = "../room_details/main";
      wx.navigateTo({ url });
    },
    jumproomRsc() {
      let url = "../rent_details/main";
      wx.navigateTo({ url });
    }
  }
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 150px;
  /* border: 1px solid red; */
}
.headtop {
  width: 100%;
  height: 60px;
  /* border: 1px solid red; */
  margin: auto 0;
  border-bottom: 1px solid rgb(172, 168, 168);
}
.btnwrap {
  width: 82px;
  height: 34px;
  /* border: 1px solid black; */
  border-radius: 15px;
  background-color: #d6d6da;
  margin-top: 3px;
  position: relative;
  left: 270px;
  top: 11px;
}
.box1,
.box2 {
  width: 45px;
  height: 32px;
  line-height: 32px;
  /* border: 1px solid rgb(83, 79, 79); */
  font-size: 12px;
  color: #9a9aa0;
  border-radius: 15px;
  /* background-color: #c5c5c7; */
}
.box1 {
  text-align: left;
}
.box2 {
  text-align: right;
  position: relative;
  left: 35px;
  top: -33px;
}
.box1:hover,
.box2:hover {
  text-align: center;
  background-color: white;
  border: 1px solid #dedee2;
  color: #4b4b4d;
}
.content {
  width: 95%;
  height: 500px;
  border: 1px solid #dedee2;
  margin: 0 auto;
}
.inner {
  width: 100%;
  /* height: 220px; */
  /* border: 1px solid black; */
  margin: auto;
  border-top: 1px solid rgb(202, 198, 198);
  border-bottom: 1px solid rgb(202, 198, 198);
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
  height: 135px;
  margin: 0 auto;
  margin-top: 15px;
  /* border: 1px solid black; */
   background-color: #f3f3f5;
  
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
.rentseeking{
  font-size: 16px;
  color: #828285;
}
#pinspan{
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
