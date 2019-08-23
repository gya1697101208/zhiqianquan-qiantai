<template>
<div>
    <div>
        <div class="first">
            <div class="im">
                <img src="item.id" style="width:75px;height:75px;"/>
            </div>
            <div class="job">{{item.job}}</div>
            <div class="com">{{item.company}}</div>
            <div class="db">
                <div class="city">
                    <div class="zhi"></div>
                    {{item.address}}[城市]</div>
                <div class="time">尽快入职[是]</div>
                <div class="yes">
                    <div class="tu"></div>
                    {{item.time}}</div>
            </div>
            <div class="last">
                <div class="eam">
                    <div class="le">投递邮箱</div>
                    <div class="ri">{{item.email}}</div>
                </div>
                <div class="eam2">
                    <div class="nn">简历名称</div>
                    <div class="nl">
                        姓名+岗位+学校+实习周期+职前公社小程序
                    </div>
                </div>
            </div>
        </div>
        <div class="second">
            <div class="tou">
                <div class="lan"></div>
                <div class="zi">职位描述</div>
            </div>
            <div class="wen">

            </div>
        </div>
        <div class="third">
            <div class="shang">
                <div class="lanlan"></div>
                <div class="zizi">工作地址{{item.wei}}</div>
            </div>
        </div>
        <div class="four">
        </div>    
        <div class="last1">
            <div class="last-left">
                <div class="shou"><img src="../../../static/images/shou.png" alt="" class="mag">
                    <div class="ss">收藏</div>
                </div>
                <div class="fen"><img src="../../../static/images/fenfen.png" alt="" class="mag2">
                    <div class="ll">分享</div>
                </div>
            </div>
            <div class="last-right">
                <div class="hai">
                    <img src="../../../static/images/hai.png" alt="" class="mag3">
                    <div class="mm">海报</div>
                </div>
                <div class="fu">复制投递邮箱</div>
            </div>
        </div>
    </div> 
    </div>  
</template>
<script>
// export default {
//     data(){
//         return{
//             id:"",
//         saveData:''
//         }
        
//     },
//     onLoad(e){
//         this.id = e.userId
//         console.log(this.id)
//     },
//     mounted(){
//         this.saveData=JSON.stringify(this.data)
//         this.search.userId=parseInt(this.$root.$mp.query.userId)
//     },
//     onUnload(){
//         this.data=JSON.parse(this.saveData)
//     },

// }
</script>
<style scoped>
.first{
    position: relative;
    margin-top: 10px;
    margin-left: 11px;
    width: 94%;
    height: 250px;
    background-color:whitesmoke;
}
.im{
    position: absolute;
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-left: 135px;
}
.job{
    position: absolute;
    width:100%;
    height: 26px;
    margin-top: 90px;
    font-size: 25px;
    color: black;
    text-align: center;
}
.com{
    position: absolute;
    width: 100%;
    height: 30px;
    margin-top: 120px;
    font-size: 16px;
    color: #525a66;
    text-align: center;
}
.db{
    font-size: 16px;
    color: #525a66;
    position: absolute;
    width: 90%;
    height: 30px;
    margin-left: 10px;
    margin-top: 150px;
    border-bottom: 1rpx solid #666;
}
.city{
    width: 105px;
    float: left;
    height: 30px;
}
.zhi{
   background:url(../../../static/images/zhi.png);
    background-size:100%;
    width: 16px; 
    height: 16px;
    float: left; 
}
.yes{
    margin-left: 105px;
    width: 118px;
    height: 30px;
    border-bottom: 1rpx solid #666;
    text-align: center;
}
.tu{
    background-size:100%;
    width: 16px; 
    height: 16px;
    background: url(../../../static/images/tu.png);
    float:left;
    margin-left: 35px;
}
.time{
    width: 105px;
    float:right;
    height: 30px;
    text-align:right;
}
.last{
    width: 100%;
    height: 70px;
    margin-top: 180px;
    position: absolute;
}
.eam{
    width: 90%;
    height: 25px;
    margin-left: 10px;

}
.le{
    float: left;
    width: 67px;
    height: 25px;
    font-size: 16px;
    color: #1a1a1a;
}
.ri{
    float: right;
    width: 240px;
    height: 25px;
    font-size: 16px;
    color:  #525a66;
}
.eam2{
    width: 90%;
    height: 35px;
    margin-left: 10px;
}
.nn{
    float: left;
    width: 67px;
    height: 35px;
    font-size: 16px;
    color: #1a1a1a;
}
.nl{
    width: 240px;
    height: 35px;
    float: right;
    font-size: 16px;
    color:  #525a66;
}.second{
    width: 94%;
    height: 670px;
    margin-top: 10px;
    background-color: whitesmoke;
    margin-left: 11px;
}.tou{
    height: 40px;
    width:92%;
    margin-left: 10px;
    border-bottom: 1rpx solid #666;
}
.lan{
    margin-top: 7px; 
    width: 3px;
    height: 23px;
    float: left;
    background-color: #3185ff;
}
.zi{
    position: absolute;
    margin-left:8px; 
    width: 210px;
    height: 25px;
    font-size: 25px;
    color:  #3185ff;
}
.third{
    width: 94%;
    height: 80px;
    margin-top: 10px;
    background-color: whitesmoke;
    margin-left: 11px;
}
.shang{
    height: 40px;
    width:92%;
    margin-left: 10px;
    border-bottom: 1rpx solid #666;
}
.lanlan{
    margin-top: 7px; 
    width: 3px;
    height: 23px;
    float: left;
    background-color: #3185ff;
}
.zizi{
    position: absolute;
    margin-left:8px; 
    width: 210px;
    height: 25px;
    font-size: 25px;
    color:  #3185ff;
}
.four{
    width: 100%;
    height: 70px;
}
.last1{
    width: 94%;
    height: 50px;
    margin-top: 15px;
    margin-left: 10px;
    position: fixed;
    bottom: 0px;
    background-color: whitesmoke;
}
.last-left{
    width: 159px;
    height: 50px;
    float: left;
}
.last-right{
    width:193px;
    float: right;
    height: 50px;
}
.shou{
    width: 75px;
    height:50px;
    float:left;
}
.mag{
    margin-left: 20px;
    width: 32px;
    height: 32px;
    top:0;
}
.ss{
    width: 75px;
    font-size: 12px;
    height:12px;
    color:#525a66;
    text-align: center;
    margin-top:-10px;

}
.fen{
    width: 80px;
    height: 50px;
    float:right;
}
.ll{
    width: 80px;
    font-size: 12px;
    height:12px;
    color:#525a66;
    text-align: center;
    margin-top:-10px;
}
.mag2{
    width:32px;
    height:32px;
    margin-left: 25px;
}
.hai{
     width: 80px;
    height:50px;
    float:left;
}
.mm{
    width: 80px;
    font-size: 12px;
    height:12px;
    color:#525a66;
    text-align: center;
    margin-top:-10px;
}
.mag3{
    width:32px;
    height: 32px;
    margin-left: 25px;
}
.fu{
    width: 110px;
    height: 50px;
    float:right;
    background-color: #3158ff;
    font-size: 16px;
    color:white;
    text-align: center;
    line-height: 50px;
}
</style>
