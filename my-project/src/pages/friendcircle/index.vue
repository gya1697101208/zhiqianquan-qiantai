<template>
  <div>
    <div class="wrap">
        <div class="fill"></div>
      <div class="roomphoto">
        <div class="img">
          <img src="../../../static/images/timg.png" style="width:200px;height:150px;" />
        </div>
        <p>转租天通中苑小阳隔有空调</p>
      </div>
      <div class="roominfo">
          <p>房源信息</p>
          <p>适合人群</p>
          <p>房源地点</p>
      </div>
      <div class="zhiqian">
          <img src="../../../static/images/zhiqian.png" style="width:100%;height:120px;" />
      </div>
      <div class="fill"></div>
    </div>
    <div class="footer-two">
      <p>保存到手机</p>
    </div>
  </div>
</template>
<style>
.wrap {
  width: 100%;
  height: 300px;
  /* margin-top: 50px; */
}
.roomphoto {
  width: 80%;
  min-height: 180px;
  max-height: 240px;
  /* border: 1px solid red; */
  margin: 0 auto;
  text-align: center;
}
.img {
  width: 200px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 12px;
  color: black;
  font-weight: 200;
}
.roominfo {
  width: 85%;
  height: 100px;
  line-height: 30px;
  margin: 0 auto;
    font-size: 14px;
  color: rgb(90, 88, 88);
}
.zhiqian {
  width: 100%;
  height: 150px;
  text-align: center;
}
.fill{
    width: 100%;
    height: 60px;
    background-color: rgb(245, 245, 245);
}
.footer-two {
  width: 95%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #3158ff;
  position: fixed;
  bottom: 10px;
  left: 10px;
  /* border: 1px solid red; */
  border-top: 1px solid rgb(240, 237, 237);
}
</style>
