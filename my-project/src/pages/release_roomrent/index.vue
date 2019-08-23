// 点击发布跳转后的 求租页面 
<template>
  <div>
    <div class="head">
      {{info2}}
       <div class="btnwrap">
        <div class="box1">
          <span>房源</span>
        </div>
        <div class="box2">
          <span>求租</span>
        </div>
      </div>
    </div>
    <div class="content-two">
      <ul>
        <li class="item-two">
          <select name id="xuanze">
            <span style="padding:0 45px 0 10px;">入住时间</span>选择你的入住时间
            <i-icon style="float:right;padding-right:10px" type="enter" />
          </select>
        </li>
        <li class="item1-two">
          <span style="padding-left:10px;">求租类型</span>
          <div class="item11">合租</div>
          <div class="item12">整租</div>
        </li>
        <li class="item2-two">
          <span style="padding-left:10px;">性别要求</span>
          <div class="item21">限男生</div>
          <div class="item22">限女生</div>
          <div class="item23">男女不限</div>
        </li>
        <li class="item-two">
          <select name id="xuanze">
            <span style="padding:0 45px 0 10px;">城市</span>选择入住城市
            <i-icon style="float:right;padding-right:10px" type="enter" />
          </select>
        </li>
        <li class="item-two">
          <select name id="xuanze">
            <span style="padding:0 45px 0 10px;">区域</span>选择求租区域
            <i-icon style="float:right;padding-right:20px" type="enter" />
          </select>
        </li>
        <li class="item-two">
          <select name id="xuanze">
            <span style="padding:0 45px 0 10px;">求租地点</span>选择求租地点(点击开启地图)
            <i-icon style="float:right;padding-right:20px" type="enter" />
          </select>
        </li>
        <li class="item-two">
          <select name id="xuanze">
            <span style="padding:0 45px 0 10px;">意向租金</span>输入意向租金
            <span style="float:right;padding-right:10px">元/月</span>
          </select>
        </li>
        <li class="item-two">
          <select name id="xuanze1">
            <span style="padding:0 45px 0 10px;">联系方式</span>
          </select>
        </li>
      </ul>
    </div>
    <div class="footer-two">
      <view>{{message}}</view>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      info:"请填写你的求租信息",
      message: "下一步"
    }
  },
  methods:{
   
  }
}
</script>
<style scoped>

.content-two {
  width: 100%;
  height: 300px;
  /* border: 1px solid black; */
}
.item1-two,
.item2-two {
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid red; */
  display: flex;
}
.item11-two,
.item12-two {
  width: 60px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgb(168, 164, 164);
  border-radius: 15px;
  font-size: 13px;
  margin: auto 0;
  text-align: center;
}
.item11-two {
  margin-left: 40px;
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
  margin-left: 40px;
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
