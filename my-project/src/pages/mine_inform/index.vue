<template>
  <div>
    <div class="navbar">
      <block v-for="(item,index) in tabs" :key="index">
        <div :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
          <div class="navbar_title">{{item.name}}</div>
        </div>
      </block>
      <div class="navbar_slider" :class="navbarSliderClass"></div>
    </div>
    <div>
      <div :hidden="activeIndex != 0">
        <div class="beijing">
            <img src="../../../static/images/kong.png" alt="">
        </div>
      </div>
      <div :hidden="activeIndex != 1">
        <div class="beijing">
            <img src="../../../static/images/kong.png" alt="">
        </div>
      </div>
      <!-- <div :hidden="activeIndex != 2">选项三的内容</div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: "评论",
          type: "1",
          checked: true
        },
        {
          name: "点赞",
          type: "2",
          checked: true
        }
      ],
      activeIndex: 0,
    };
  },
  computed: {
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return "navbar_slider_0";
      }
      if (this.activeIndex == 1) {
        return "navbar_slider_1";
      }
    
    },
  },
  methods: {
    tabClick(e) {
      this.activeIndex = e.currentTarget.id;
    }
  },
};
</script>
<style scoped>
.content {
  box-sizing: border-box;
  height: 100%;
  padding-top: 50px;
  /* overflow: auto; */
  -webkit-overflow-scrolling: touch;
}

.swiper-item {
  height: 100%;
  text-align: center;
}

.navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  z-index: 500;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1rpx solid #ccc;
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
}

.navbar_item .navbar_item_on {
  color: rgb(255, 255, 255);
}

.navbar_title {
  color: #666;
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
.navbar_item_on .navbar_title{
    color: #298de5;
}

.navbar_slider {
  position: absolute;
  content: " ";
  left: 0x;
  bottom: 0;
  width: 3em;
  height: 3px;
  background-color: #298de5;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  left: 140rpx;
  transform: translateX(0);
}

.navbar_slider_1 {
  left: 265rpx;
  transform: translateX(250rpx);
}


.controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  z-index: 8888;
  top: 80;
  height: 50px;
  width: 100%;
  background-color: #298de5;
}
.beijing{
  margin: 0 auto;
  height: 400PX;
  width: 100%;
}
.beijing img{
  position: relative;
  top: 170px;
  left: 80px;
  height: 200px;
  width: 250px;
}
</style>