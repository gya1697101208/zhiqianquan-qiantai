<template>
  <div class="max">
    <div class="header">
      <div class="header-images">
        <img :src="headerImage" alt class="header-images-im" @click="getImage()" />
      </div>
      <div class="header-txt">（点我上传）</div>
    </div>
    <div class="main">
      <div class="main-txt">
        <label for="name">社群名称:</label>
        <img src="../../../static/images/@2x/community_img_decorate_n@2x.png" class="main-txt-img" />
        <div class="main-inp">
          <input
            id="name"
            placeholder="不超过6字符"
            placeholder-style="font-size:13px;color:#999999;text-align:center"
            type="text"
          />
        </div>
      </div>
      <div class="main-txt1">
        <label for="depict">社群描述:</label>
        <img
          src="../../../static/images/@2x/community_img_decorate_n@2x.png"
          alt
          class="main-txt-img"
        />
        <div class="main-inp1">
          <input
            id="depict"
            placeholder="不超过20字符"
            placeholder-style="font-size:13px;color:#999999;text-align:center"
            type="text"
          />
        </div>
      </div>
      <button class="main-buttom">完成创建</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerImage: ""
    };
  },
  methods: {
    getImage() {
        var that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths;
          console.log(res.tempFilePaths + "修改页面");
          var headerImage = res.tempFilePaths;
          that.headerImage = headerImage
        }
      });
    }
  }
};
</script>
<style>
.header {
  margin-top: 34.5px;
  height: 85px;
  /* border: 1px solid black */
}
.header-images {
  text-align: center;
}
.header-images-im {
  width: 65px;
  height: 65px;
  background-color: #999999;
}
.header-txt {
  /* border: 1px solid orange; */
  text-align: center;
  height: 18px;
  margin-top: 2px;
  font-size: 12px;
  color: #999999;
}
.main {
  height: 300px;
}
.main-txt {
  border-bottom: 1px solid #f5f5f5;
  width: 300px;
  margin-left: 36.1px;
  padding-bottom: 6px;
  margin-top: 50px;
  color: #1a1a1a;
}
.main-inp {
  width: 200px;
  float: right;
  height: 40px;
  text-align: center
}
.main-txt-img {
  width: 20px;
  height: 20px;
  float: right;
}
.main-txt1 {
  border-bottom: 1px solid #f5f5f5;
  margin-top: 20px;
  width: 300px;
  margin-left: 36.1px;
  padding-bottom: 6px;
}
.main-inp1 {
  width: 200px;
  float: right;
  height: 40px;
  text-align: center

}
.main-buttom {
  background-color: #3185ff;
  border-radius: 50px;
  color: #fff;
  width: 300px;
  margin-top: 100px
}
</style>
