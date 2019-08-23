<template>
  <div class="wrapper">
    <div class="head">
      <h4>举报原因</h4>
    </div>
    <div class="reportinfo">
      <input type="textarea" placeholder="请描述举报原因，我们将为您做保密处理。" />
    </div>
    <div class="upload" @click="upload()">
      <div class="upload-inner">
        <img src="../../../static/images/jiahao.png" style="width:40px;height:40px;" />
      </div>
      <p>最多上传4张照片</p>
    </div>
    <div class="reminders">
      <p>
        温馨提示：为了维护平台的和谐以及公平公正的氛围，我们鼓励用户举报违反国家法律法规或
        违法微信官方规定帖子，如发布违法、造谣、辱骂等，一经发现坚决删帖封号并保护举报人的
        隐私安全。
      </p>
    </div>
    <div class="footer">
      <view>{{message}}</view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "提交"
    };
  },
  methods:{
      upload() {
    //   let that = this;
      wx.chooseImage({
        count: 4, 
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          wx.showToast({
            title: "正在上传...",
            icon: "loading",
            mask: true,
            duration: 1000
          })
          let tempFilePaths = res.tempFilePaths;
          (function(){
              tempFilePaths:tjis.tempFilePaths;
          })
          
        }
      });
    }
  }
};
</script>

<style>
.wrapper {
  width: 85%;
  margin: 0 auto;
}
.head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  /* border: 1px solid red; */
  text-align: left;
}
.reportinfo {
  width: 100%;
  height: 90px;
  background-color: rgb(250, 250, 250);
  margin-bottom: 15px;
  font-size: 12px;

}
.upload {
  width: 80px;
  height: 80px;
  border: 1px dashed rgb(233, 233, 233);
  text-align: center;
  font-size: 13px;
}
upload-inner {
  width: 50px;
  height: 50px;
  font-size: 12px;
  text-align: center;
}
.reminders {
  margin-top: 25px;
  width: 100%;
  height: 120px;
  font-size: 12px;
  color: black;
}
.footer {
  width: 95%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #3158ff;
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>
