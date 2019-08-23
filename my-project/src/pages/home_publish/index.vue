<template>
    <div>
        <div class="shang">
            <span class="j">基本信息</span>
        </div>
        <div class="center">
          <div class="name" @click="show_pro()">公司名称</div>
          <div class="modalMask" v-if="isModel"></div>
              <div class="modalDialog" v-if="changeModel">
                <div class="modalContent"> 
                    <input  class="contentTip" v-model="inp"/>
                </div>
                <div class="modalFooter">
                  <div class="btnCancel" @click="tapCancel">取消</div>
                  <div class="btnConfirm" @click="confirmSend">确定</div>
                </div>
              </div>
          <div class="right"> 
            <div class="fan">{{inp}}</div>
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
        </div>
        <div class="center">
          <div class="name" @click="show_pro1()">职位名称</div>
          <div class="modalMask" v-if="isModel1"></div>
              <div class="modalDialog" v-if="changeModel1">
                <div class="modalContent"> 
                    <input  class="contentTip" v-model="inp1"/>
                </div>
                <div class="modalFooter">
                  <div class="btnCancel" @click="tapCancel1">取消</div>
                  <div class="btnConfirm" @click="confirmSend1">确定</div>
                </div>
              </div>
          <div class="right"> 
            <div class="fan">{{inp1}}</div>
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
        </div>
        <view class="section">
          <picker  @change="bindPickerChange" value="index" :range="array" class="change">
          <view class="section__title">职位类型</view>
          <div class="right2"> 
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
          <view class="picker">
              {{array[index]}}
            </view>
          </picker>
          
        </view>
        <div class="center">
          <div class="name3">
            <picker class="auth-pick-tip" mode="region" :custom-item="customItem" @change="regionPick">
            <div >城市</div>
            </picker>
          </div>
          <div class="right3"> 
            <view>
                {{region[0]}}{{region[1]}}{{region[2]}}
            </view>
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
        </div>
        <div class="center">
          <div class="name">尽快入职</div>
          <div class="jian1">
              <Switch @on-change="change" style="float: right"></Switch>
          </div>
        </div>
        <view class="section">
          <picker  @change="bindPickerChange2" value="index2" :range="array2" class="change">
          <view class="section__title">实习周期</view>
          <div class="right2"> 
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
          <view class="picker">
              {{array2[index2]}}
            </view>
          </picker>
          
        </view>
        <div class="center">
          <div class="name" @click="show_pro2()">简历投递邮箱</div>
          <div class="modalMask" v-if="isModel2"></div>
              <div class="modalDialog" v-if="changeModel2">
                <div class="modalContent"> 
                    <input  class="contentTip" v-model="inp2"/>
                </div>
                <div class="modalFooter">
                  <div class="btnCancel" @click="tapCancel2">取消</div>
                  <div class="btnConfirm" @click="confirmSend2">确定</div>
                </div>
              </div>
          <div class="right"> 
            <div class="fan">{{inp2}}</div>
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
        </div>
        <div class="center">
          <div class="name" @click="show_pro3()">简历命名</div>
          <div class="modalMask" v-if="isModel3"></div>
              <div class="modalDialog" v-if="changeModel3">
                <div class="modalContent"> 
                    <input  class="contentTip" v-model="inp3"/>
                </div>
                <div class="modalFooter">
                  <div class="btnCancel" @click="tapCancel3">取消</div>
                  <div class="btnConfirm" @click="confirmSend3">确定</div>
                </div>
              </div>
          <div class="right"> 
            <div class="fan">{{inp3}}</div>
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
        </div>
        <div class="center">
          <div class="name" @click="show_pro4()">工作地址</div>
          <div class="modalMask" v-if="isModel4"></div>
              <div class="modalDialog" v-if="changeModel4">
                <div class="modalContent"> 
                    <input  class="contentTip" v-model="inp4"/>
                </div>
                <div class="modalFooter">
                  <div class="btnCancel" @click="tapCancel4">取消</div>
                  <div class="btnConfirm" @click="confirmSend4">确定</div>
                </div>
              </div>
          <div class="right"> 
            <div class="fan">{{inp4}}</div>
          <div class="jian">
            <img src="../../../static/images/tou3.png" alt="" style="width:16px;height:16px;float:right">
          </div></div>
        </div>
      <div class="shang">
            <span class="j">职位描述</span>
      </div>
      <div>
          <input type="button" value="提交" class="last">
      </div>
      </div>
      
</template>
<script>
export default {
    data () {
    return {
      region:[],
      customItem: '',
      changeModel: false,
      isModel: false,
      val: "",
      inp:"",
      changeModel1: false,
      isModel1: false,
      val1:"",
      inp1:"",
      changeModel2: false,
      isModel2: false,
      val2: "",
      inp2:"",
      changeModel3: false,
      isModel3: false,
      val3: "",
      inp3:"",
      changeModel4: false,
      isModel4: false,
      val4: "",
      inp4:"",
      array2:['三个月','六个月','九个月'],
      objectArray2: [
        {
          label: '三个月',
          value: 0
        },
        {
          label: '六个月',
          value: 1
        },
        {
          label: '九个月',
          value: 2
        }
      ],
      index2:0,
      array:['运营','产品','技术','设计','职能','市场'],
      objectArray: [
        {
          id: 0,
          name: '运营'
        },
        {
          id: 1,
          name: '产品'
        },
        {
          id: 2,
          name: '技术'
        },
        {
          id: 3,
          name: '设计'
        },
        {
          id: 4,
          name: '职能'
        },
        {
          id: 5,
          name: '市场'
        }
      ],
      index:0,
    }
  },
  methods: {
   bindPickerChange: function(e) {
           let that = this;
    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      that.index=e.mp.detail.value
  },
  bindPickerChange2: function(e) {
           let demo = this;
    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      demo.index2=e.mp.detail.value
  },
  regionPick: function (e) {
    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
    this.region = e.mp.detail.value
  },
  //  弹框取消 公司名称
    tapCancel() {
      console.log("取消");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
      this.inp = ""
    },
    //  确认
    confirmSend() {
      console.log(this.inp);
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
      this.inp = inp
    },
    show_pro(val) {
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    //  弹框取消 职位名称
    tapCancel1() {
      console.log("取消");
      this.changeModel1 = !this.changeModel1;
      this.isModel1 = !this.isModel1;
      this.inp1 = ""
    },
    //  确认
    confirmSend1() {
      console.log(this.inp1);
      this.changeModel1 = !this.changeModel1;
      this.isModel1 = !this.isModel1;
      this.inp1 = inp1
    },
    show_pro1(val1) {
      this.changeModel1 = !this.changeModel1;
      this.isModel1 = !this.isModel1;
    },
    //  弹框取消  简历投递邮箱
    tapCancel2() {
      console.log("取消");
      this.changeModel2 = !this.changeModel2;
      this.isModel2 = !this.isModel2;
      this.inp2 = ""
    },
    //  确认
    confirmSend2() {
      console.log(this.inp2);
      this.changeModel2 = !this.changeModel2;
      this.isModel2 = !this.isModel2;
      this.inp2 = inp2
    },
    show_pro2(val2) {
      this.changeModel2 = !this.changeModel2;
      this.isModel2 = !this.isModel2;
    },
    //  弹框取消  简历命名
    tapCancel3() {
      console.log("取消");
      this.changeModel3 = !this.changeModel3;
      this.isModel3 = !this.isModel3;
      this.inp3 = ""
    },
    //  确认
    confirmSend3() {
      console.log(this.inp3);
      this.changeModel3 = !this.changeModel3;
      this.isModel3 = !this.isModel3;
      this.inp3 = inp3
    },
    show_pro3(val3) {
      this.changeModel3 = !this.changeModel3;
      this.isModel3 = !this.isModel3;
    },
    //  弹框取消  工作地址
    tapCancel4() {
      console.log("取消");
      this.changeModel4 = !this.changeModel4;
      this.isModel4 = !this.isModel4;
      this.inp4 = ""
    },
    //  确认
    confirmSend4() {
      console.log(this.inp4);
      this.changeModel4 = !this.changeModel4;
      this.isModel4 = !this.isModel4;
      this.inp4 = inp4
    },
    show_pro4(val4) {
      this.changeModel4 = !this.changeModel4;
      this.isModel4 = !this.isModel4;
    },
    gethomexq(){
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
}
</script>

<style scoped>
.shang{
width: 100%;
height: 40px;
background-color: whitesmoke;
line-height: 40px;
}
.j{
    margin-left: 10px;
}
.last{
    color:white;
    font-size: 20px;    
    width: 80%;
    height: 50px;
    margin-left: 37px;
    margin-bottom: 0px;
    background-color: #3158ff;
    text-align: center;
}
.center{
    width: 100%;
    height:50px;
    border-bottom: 1rpx solid rgba(107, 103, 103, 0.068);
}
.section{
    width: 100%;
    height:50px;
    border-bottom: 1rpx solid rgba(107, 103, 103, 0.068);

}
.section__title{
  float: left;
  width: 50%;
  height: 50px;
  line-height: 50px;
  margin-left:10px;
}
.change{
  width: 100%;
  height: 50px;
}
.picker{
  text-align: right;
  height: 50px;
  margin-left: 290px;
  width:15%;
  line-height: 50px
}
.name{
  float: left;
  width: 28%;
  height: 50px;
  line-height: 50px;
  margin-left:10px;
}
.right{
  float: right;
  width: 65%;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
  color: #1a1a1a;
}
.fan{
  float: left;
  width: 230px;
  height: 50px;
  line-height: 50px;
  text-align: right;
}
.right2{
  float: right;
  width: 5%;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
  color: #1a1a1a;
}
.jian{
  margin-top: 16px;
  float: right;
  width: 10px;
}.jian1{
  margin-top: 10px;
  float: right;
  width: 5%;
  margin-right: 10px;
}
.modalMask {
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   background: #000;
   opacity: 0.5;
   overflow: hidden;
   z-index: 9000;
   color: #fff;
 }
 .modalDialog {
   box-sizing: border-box;
   width: 560rpx;
   overflow: hidden;
   position: fixed;
   top: 50%;
   left: 0;
   z-index: 9999;
   background: #fff;
   margin: -180rpx 95rpx;
   border-radius: 8rpx;
 }
 .modalContent {
   box-sizing: border-box;
   display: flex;
   padding: 50rpx 53rpx;
   font-size: 32rpx;
   align-items: center;
   justify-content: center;
   flex-direction: column;
 }
 .contentTip {
   font-size: 36rpx;
   color: #333333;
 }
 .teleStyle {
   background: #ffffff;
   border: 1px solid #979797;
   border-radius: 6rpx;
   line-height: 50rpx;
   height: 50rpx;
   box-sizing: border-box;
   padding-left: 12rpx;
   width: 460rpx;
   font-size: 28rpx;
   /*color: rgba(0,0,0,0.25);*/
   margin-top: 30px;
 }
 .modalFooter {
   box-sizing: border-box;
   display: flex;
   flex-direction: row;
   height: 100rpx;
   border-top: 1px solid #e5e5e5;
   font-size: 32rpx;
   line-height: 100rpx;
 }
 .btnCancel {
   width: 50%;
   font-size: 32rpx;
   color: #333;
   text-align: center;
   border-right: 1px solid #e5e5e5;
 }
 .btnConfirm {
   font-size: 32rpx;
   width: 50%;
   color: #508cee;
   text-align: center;
 }
 .name3{
  float: left;
  width: 50%;
  height: 50px;
  line-height: 50px;
  margin-left:10px;
 }
 .right3{
  float: right;
  width: 40%;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
  color: #1a1a1a;
 }
 /* 弹窗结束 */

</style>
