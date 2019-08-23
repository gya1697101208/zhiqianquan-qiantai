<template>
  <div>
    <div class="header">
      <textarea name id cols="30" rows="10" placeholder="发布您想说的，尽在此处" bindblur="bindTextAreaBlur"></textarea>
      <checkbox-group @change="getCheck">
        <checkbox :value="value" :checked="check">简历指导</checkbox>
      </checkbox-group>
      <p>如需寻求简历指导，务必勾选我哟~</p>
    </div>
    <div class="main">
      <div class="main-image" @click="shangChuan()">
        <div>
          <img src="../../../static/images/jiahao.png" class="main-image-i" />
          <p>上传图片</p>
        </div>
      </div>
        <button class="main-create">快速发布</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      check: false,
      value: 0
    };
  },
  methods: {
    getCheck(e) {
      console.log("value值为" + e.mp.detail.value);
      let _this = this;
      _this.checked = !_this.checked;
    },
    shangChuan() {
      wx.chooseImage({
        count: 3,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths;

        }
      });
    }
  }
};
</script>
<style>
.header {
  width: 350px;
  height: 200px;
  padding: 10px;
  border-bottom: 1px solid #f5f5f5;
}
.main {
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
}
.main-image {
  height: 80px;
  width: 80px;
  border: 1px dashed #999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-image-i {
  width: 40px;
  height: 40px;
  margin-left: 6px;
}
.main-image p {
  font-size: 12px;
  color: #999999;
}
.main-create {
  background-color: #3185ff;
  border-radius: 50px;
  color: #fff;
  width: 300px;
  margin-top: 100px
}
</style>