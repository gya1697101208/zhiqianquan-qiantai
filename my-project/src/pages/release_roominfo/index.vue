// 点击发布跳转后的页面 房源
<template>
  <div>
    <div class="head">
      {{info1}}
      <div class="btnwrap">
        <div class="navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div
              :id="index"
              :class="{'navbar_item_on':activeIndex == index}"
              class="navbar_item"
              @click="tabClick"
            >
              <div class="navbar_title">{{item.name}}</div>
            </div>
          </block>
          <div class="navbar_slider" :class="navbarSliderClass"></div>
        </div>
      </div>
      <div :hidden="activeIndex != 0">
        <div class="content">
          <ul>
            <li class="item1">
              <span style="padding-left:15px;">类型</span>
              <div class="item11">合租</div>
              <div class="item12">整租</div>
            </li>
            <li class="item2">
              <span style="padding-left:15px;">户型</span>
              <div class="item21">一室</div>
              <div class="item22">二室</div>
              <div class="item23">三室</div>
              <div class="item24">四室+</div>
            </li>
            <li class="item">
              <select name id="xuanze">
                <span style="padding:0 47px 0 15px;">城市</span>选择房源所在城市
                <i-icon style="float:right;padding-right:18px" type="enter" />
              </select>
            </li>
            <li class="item">
              <select name id="xuanze">
                <span style="padding:0 47px 0 15px;">区域</span>选择房源所在区域
                <i-icon style="float:right;padding-right:18px" type="enter" />
              </select>
            </li>
            <li class="item">
              <select name id="xuanze">
                <span style="padding:0 47px 0 15px;">位置</span>选择房源位置(点击开启地图)
                <i-icon style="float:right;padding-right:18px" type="enter" />
              </select>
            </li>
            <li class="item">
              <div id="xuanze">
                <i-input value="{{}}" title="租金" autofocus placeholder="输入租金"/> 
              </div>
            </li>
            <li class="item">
              <div id="xuanze">
                <i-input value="{{}}" title="联系方式" autofocus placeholder="输入联系方式" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div :hidden="activeIndex != 1">
        <div class="content-two">
          <ul>
            <li class="item-two">
              <select name id="xuanze">
                <span style="padding:0 37px 0 15px;">入住时间</span>选择你的入住时间
                <i-icon style="float:right;padding-right:18px" type="enter" />
              </select>
            </li>
            <li class="item1-two">
              <span style="padding-left:15px;">求租类型</span>
              <div class="item11">合租</div>
              <div class="item12">整租</div>
            </li>
            <li class="item2-two">
              <span style="padding-left:15px;">性别要求</span>
              <div class="item21">限男生</div>
              <div class="item22">限女生</div>
              <div class="item23">男女不限</div>
            </li>
            <li class="item-two">
              <select name id="xuanze">
                <span style="padding:0 67px 0 15px;">城市</span>选择入住城市
                <i-icon style="float:right;padding-right:18px" type="enter" />
              </select>
            </li>
            <li class="item-two">
              <select name id="xuanze">
                <span style="padding:0 67px 0 15px;">区域</span>选择求租区域
                <i-icon style="float:right;padding-right:18px" type="enter" />
              </select>
            </li>
            <li class="item-two">
              <select name id="xuanze">
                <span style="padding:0 37px 0 15px;">求租地点</span>选择求租地点(点击开启地图)
                <i-icon style="float:right;padding-right:20px" type="enter" />
              </select>
            </li>
            <li class="item-two">
              <div name id="xuanze">
                <i-input style="padding:0 37px 0 15px;">意向租金</i-input>输入意向租金
              </div>
            </li>
            <li class="item-two">
              <div name id="xuanze">
                <i-input style="padding:0 37px 0 15px;">联系方式</i-input>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer">
      <view>{{message}}</view>
    </div>
  </div>
</template>
<script>
// function show(){
// document.getElementById("div1").style.display="none";
// }
export default {
  data() {
    return {
      info1: "请填写你的房源信息",
      info2: "请填写你的求租信息",
      message: "下一步",
      value: "",
      activeIndex: 0,
      tabs: [
        {
          name: "房源",
          type: "1",
          checked: true
        },
        {
          name: "租房",
          type: "1",
          checked: true
        }
      ]
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
    contentHeight() {
      return this.winHeight + "px";
    }
  },
  methods: {
    tabClick(e) {
      this.activeIndex = e.currentTarget.id;
      this.currentTab = this.activeIndex;
    },
    jumproomRsc1() {
      let url = "../release_roominfo/main";
      wx.navigateTo({ url });
    },
    jumproomRsc2() {
      let url = "../release_roomrent/main";
      wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
}
.btnwrap {
  width: 120px;
  height: 10px;
  border-radius: 15px;
  margin-top: 3px;
  position: relative;
  left: 250px;
  top: -75px;
  display: flex;
}
.content {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
.item1,
.item2 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 13px;
}
.item11,
.item12 {
  width: 50px;
  height: 25px;
  line-height: 25px;
  border: 1px solid rgb(168, 164, 164);
  border-radius: 15px;
  font-size: 13px;
  margin: auto 0;
  text-align: center;
}
.item11 {
  margin-left: 47px;
}
.item12 {
  margin-left: 10px;
}
.item11:hover,
.item12:hover {
  border: 1px solid #3158ff;
  color: #3158ff;
}
.item21,
.item22,
.item23,
.item24 {
  width: 50px;
  height: 25px;
  line-height: 25px;
  border: 1px solid rgb(168, 164, 164);
  border-radius: 15px;
  font-size: 12px;
  margin: auto 0;
  text-align: center;
}
.item21 {
  margin-left: 47px;
}
.item22,
.item23,
.item24 {
  margin-left: 10px;
}
.item21:hover,
.item22:hover,
.item23:hover,
.item24:hover {
  border: 1px solid #3158ff;
  color: #3158ff;
}
.item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid red; */
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
.navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  /* position: absolute;
  z-index: 500;
  top: 145px;*/
  height: 50px;
  width: 100%;
  background-color: #ffffff;
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
  width: 0;
}
.navbar_item.navbar_item_on {
  color: #3185ff;
  /* border-bottom: 2px solid #3185ff; */
  /* border-bottom-width:1px; */
}
.navbar_item_on .navbar_title {
  color: #3185ff;
}

.navbar_title {
  color: #000;
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

.navbar_slider {
  position: absolute;
  content: " ";
  left: 0;
  bottom: 0;
  width: 6em;
  height: 3px;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  left: 29rpx;
  transform: translateX(0);
}

.navbar_slider_1 {
  left: 29rpx;
  transform: translateX(250rpx);
}
.navbar_slider_2 {
  left: 29rpx;
  transform: translateX(500rpx);
}
.content-two {
  width: 100%;
  height: 330px;
  /* border: 1px solid black; */
}
.item1-two,
.item2-two {
  width: 100%;
  height: 40px;
  font-size: 13px;
  line-height: 40px;
  /* border: 1px solid red; */
  display: flex;
}
.item11-two,
.item12-two {
  width: 50px;
  height: 25px;
  line-height: 25px;
  border: 1px solid rgb(168, 164, 164);
  border-radius: 15px;
  font-size: 13px;
  margin: auto 0;
  text-align: center;
}
.item11-two {
  margin-left: 35px;
}
.item12-two {
  margin-left: 10px;
}
.item11-two:hover,
.item12-two:hover {
  border: 1px solid #3158ff;
  color: #3158ff;
}
.item21-two,
.item22-two,
.item23-two,
.item24-two {
  width: 60px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgb(168, 164, 164);
  border-radius: 15px;
  font-size: 12px;
  margin: auto 0;
  text-align: center;
}
.item21-two{
  margin-left: 35px;
}
.item22-two,
.item23-two,
.item24-two {
  margin-left: 10px;
}
.item21-two:hover,
.item22-two:hover,
.item23-two:hover,
.item24-two:hover {
  border: 1px solid #3158ff;
  color: #3158ff;
}
.item-two {
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid red; */
}
#xuanze {
  display: inline;
  font-size: 14px;
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
}

</style>
