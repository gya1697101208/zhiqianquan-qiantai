<template>
    <div>
    <div>
        <div class="left" @click="toMappage">
            <i class="ding" ></i>
            <div class="wei" >{{cityName}}</div>
        </div>
        <div class="right">
            <i class="sou" @click="sou()"></i>
        <input class="in1" type="text" placeholder="搜索职位或公司名称" @click="sou()"/>
        </div>
    </div>
    <div class="lun">
        <div class="photo">
        <view>
            <Swiper :images="images" />
        </view>
        </div>
    </div>
    <div class="hang">
    </div>
    <div class="shai">
        <div class="shai1"></div>
        <div class="shai2">优质实习</div>
        <div class="shai3">
           <div class="img"></div>
           <div class="wen">筛选</div>
        </div>
    </div>     
    <div>
        <div class="toop">
                <scroll-view class="header-shequ" scroll-y="true">
                    <view class="header-shequ-box" v-for="item3 in List3" :key="item3.workId" @click="goComm(item3.workId)">
                        <div class="recommend_hot_image">
                            <img :src="'http://10.96.123.248/static/'+item3.workImage"  style="width:75px;height:75px;"/>
                        </div>
                        <div class="header-shequ-r">
                            <div class="nam">{{item3.workPostName}}</div>
                            <div class="com">{{item3.workCompanyName}}</div>
                            <div class="di">
                                <div class="city">
                                    <div class="zhi"></div>
                                    {{item3.workAddress}}
                                    <div class="tu"></div>
                                </div>
                                <div class="time" >
                                    {{arr[index]}}发布
                                    </div>
                                <div class="cent">{{item3.workCycle}}</div>
                            </div>
                        </div>
                    </view>
                </scroll-view>
              </div>
    </div>
    
    <div @click="dofn()">
        <publish></publish>
    </div>
</div>
</template>
<script>
let Fly=require('flyio/dist/npm/wx')
let fly=new Fly()
import Swiper from "@/components/swiper";
import amapFile from "../../utils/amap-wx";
import { get } from "../../utils";
import { mapState, mapMutations } from "vuex";
import publish from "@/components/publish";

export default {
    mounted() {
    var now = new Date()
    this.getCityName();
    this.getList3();
  },
  components: { Swiper,publish },
  computed: {
    ...mapState(["cityName"])
  },
  data() {
    return {
      images: [
        {
          url:
            "http://10.96.123.248/static/lunbo1.png"
        },
        {
          url:
            "http://10.96.123.248/static/lunbo2.jpg"
        }
      ], 
      List3:[],
      arr:[],
      page: 1,      // 当前页数
      pages: 0, // 总页数
    };
  },
   onReachBottom () {
    if (this.page >= this.pages) {
      console.log('数据加载完了')
    } else {
      // 下一页
      this.page = this.page + 1
      this.getList3()
    }
  },
  // 下拉刷新事件
  onPullDownRefresh () {
    // 初始化页码
    this.page = 1
    this.getList3()
  },
  methods: {
    //   goComm(id){
    //     wx.navigateTo({
    //         url:`../community/main?userId=`+id
    //         });
    //   },
        goComm(id){
            const url='../home_details/main?workId'+id
          wx.navigateTo({url});
        },
      dofn(){
          const url='../home_publish/main'
          wx.navigateTo({url});
      },
      sou(){
        const url='../home_search/main'
        wx.navigateTo({url});
      },
    getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
    var minC =diffValue/minute;
    var result;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else{
        result="刚刚";
    }
	return result;
},
      getList3(){
          let demo=this
          fly.get('http://10.96.123.248/api/work/queryvague',{
            pageNum:demo.page,
            pageSize:8
        })
          .then(function(response){
              if(response.status===200){
                  let result=response.data
                  let List3=result.data.list
                  console.log(List3)
                  demo.List3=List3;
                  let arr =[];
                  for(let i=0;i<List3.length;i++){
                      let dataee=new Date(demo.List3[i].workData).toJSON();
                      let date  = new Date(+new Date(dataee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
                      arr.push(demo.getDateDiff(Date.parse(date.replace(/-/gi,"/"))))
                  }
                  demo.arr=arr;
                  console.log(arr[2]);
                  if (demo.page > 1) {
                    // 数据追加
                    console.log("asd")
                    demo.List3.push(...result.data.list)
                    console.log(result.data.list)
                    // ...data.list
                    // 等同于
                    // for (var i = 0; i < data.list.length; i++) {
                    //     this.art_list.push(data['list'][i])
                    // }
                } else {
                    // 数据
                    demo.List3 = result.data.list
                    demo.pages = result.data.pages
                    console.log("djaskl")
                }
                // 总页数
                that.total_page = result.total_page
              }
          })
          .catch(function(err){
              console.log(err)
          })
      },
      tabClick(e) {
      this.activeIndex = e.currentTarget.id;
    },swiperChange(e) {
      this.currentTab = e.mp.detail.current;
      this.activeIndex = this.currentTab;
    },
    onLoad() {
    var res = wx.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
  },
  ...mapMutations(["update"]),
  toMappage() {
      var _this = this;
      // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
      wx.getSetting({
        success(res) {
          //如果没有同意授权,打开设置
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                _this.getCityName();
              }
            });
          } else {
            const url='../home_gps/main'
          wx.navigateTo({url});
          }
        }
      });
    },
    getCityName() {
      var _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "e545e7f79a643f23aef187add14e4548"
      });
      myAmapFun.getRegeo({
        success: function (data) {
          //成功回调
          console.log(data);
          // data[0].regeocodeData.formatted_address
          // _this.cityName = data[0].regeocodeData.formatted_address;
          _this.update({ cityName: data[0].regeocodeData.formatted_address });
        },
        fail: function (info) {
          //失败回调
          console.log(info);
          //如果用户拒绝授权
          // 默认为北京
          _this.cityName = "北京市";
          _this.update({ cityName: "北京市" });
        }
      });
    },
    handleDate(minute, hour, day,dateTimeStamp) {
      var result = '';
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if (diffValue < 0) {
        console.log("时间不对劲,服务器创建时间与当前时间不同步");
        return result = "刚刚";
      }
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      if (parseInt(dayC) > 30) {
        result = "" + this.$format(dateTimeStamp,"yyyy-MM-dd");
      }else if(parseInt(dayC) > 1) {
        result = "" + parseInt(dayC) + "天前";
      }else if (parseInt(dayC) == 1) {
        result = "昨天";
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
      } else if (minC >= 5) {
        result = "" + parseInt(minC) + "分钟前";
      } else
        result = "刚刚";
      return result;
    },
  },
  computed: {}
};
</script>
<style scoped>
.left{
    float: left;
    width: 20%;
    height: 50px;
    background-color:white;
}
.ding{
    background: url(../../../static/images/ding.png);
    margin-top:17px; 
    margin-left: 15px;
    width: 16px;
    height: 16px;
    position: absolute;
}.wei{
    width: 42px;
    height: 16px;
    margin-top:17px; 
    margin-left: 31px;
}
.right{
    float: right;
    width: 80%;
    height: 50px;
    background-color:white;
    
}
.in1{
    width: 95%;
    height: 25px;
    background-color: rgba(30, 31, 31, 0.164);
    position: relative;
    border-radius: 20px;
    text-align: center;
    margin-top: 12px;
}.sou{
    background: url(../../../static/images/sou1.png) ;
    margin-top:17px; 
    margin-left:40px;
    width: 16px;
    height: 16px;
    position: absolute;
}.lun{
    width: 100%;
    height: 150px;
}
.photo{
    width: 95%;
    height: 200rpx;
    margin: 0 auto;
}
.hang{
    width: 100%;
    height: 5px;
    background-color: rgba(30, 31, 31, 0.068);
}
.shai{
    width: 100%;
    height: 40px;
    background-color: whitesmoke;
}
.shai1{
    width: 4px;
    height: 20px;
    background-color: #3185ff;
    float: left;
    margin-top: 10px;
    margin-left: 8px;
}
.shai2{
    position:absolute;
    margin-top: 10px;
    width: 80px;
    height: 20px;
    font: 20px;
    color: #1a1a1a;
    margin-left: 20px;
}
.shai3{
    width: 80px;
    height: 32px;
    font: 20px;
    color: #8a8a8a;
    margin-top: 4px;
    float: right;
}
.img{
    width: 32px;
    height: 32px;
    background: url(../../../static/images/shai.png);
    background-size:100%; 
    float: left;
}
.wen{
    width: 40px;
    height: 20px;
    float: right;
    margin-top: 6px;
}.header-shequ{
    position: absolute;
  
}.header-shequ-box{
    border-bottom: 1rpx solid rgb(160, 152, 152);
    height: 85px;
    width: 100%;
    position: relative;
}
.recommend_hot_image{
    width:75px;
    height:75px;
    float: left;
    position:absolute;
    margin-left:5px ;
    margin-top: 5px;
}
.header-shequ-r{
    float: right;
    position: relative;
    width: 285px;
    height: 75px;
    margin-top:5px;
    margin-right: 5px;
}
.nam{
    width:100%;
    height: 25px;
    margin-top: 10px;
    font-size: 17px;
    color: #1a1a1a;
}
.com{
    width: 100%;
    height: 20px;
    color: rgba(33, 36, 36, 0.521);
    font-size:15px; 
}
.di{
    width: 100%;
    height: 20px;
    color: #ccc;
}.city{
    float: left;
    width: 120px;

    font-size:12px;
}
.zhi{
    background:url(../../../static/images/zhi.png);
    background-size:100%;
    width: 16px; 
    height: 16px;
    float: left;
}
.tu{
    float: right;
    background-size:100%;
    width: 16px; 
    height: 16px;
    background: url(../../../static/images/tu.png);
    margin-right:5px;
}
.time{
    float: right;
    width: 80px;
    font-size:12px; 
}.cent{
    width: 200px;
    font-size:12px;

}.getUserInfobutton-hover{
width:160rpx;
height:68rpx;
position:fixed;
right:30rpx;
bottom:100rpx;
padding:0;
display:inline-block;
box-sizing:border-box;
font-size:18px;
text-align:center;
text-decoration:none;
line-height:2.55555556;
-webkit-tap-highlight-color:transparent;
overflow:hidden;
background-color:#3185ff;
border-radius: 20px;
color: white;
box-shadow:0px 0px  5px 5px #3185ff;
}
.im{
    z-index: 10;
    width: 16px;
    height: 16px;
    float: left;
    margin-left: 8px;
    margin-top: 10px;
}
.zi{
    position: relative;
    float: right;
    color: white;
    line-height: 34px;
    margin-right: 15px;
}

</style>
