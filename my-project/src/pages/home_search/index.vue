<template>
<div class="search">
    <div class="head">
      <div>
        <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png" alt="">
        <input type="text" confirm-type="search" focus="true" v-model="words"  placeholder="搜索">
        <!-- <input name="input" class="keywrod" focus="true" value="{{keyword}}" confirm-type="search" bindinput="inputChange" bindfocus="inputFocus" bindconfirm="onKeywordConfirm" confirm-type="search" placeholder="{{defaultKeyword.keyword}}" /> -->
        <img @click="clearInput" class="del" src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" alt="">
      </div>
      <div @click="cancel">取消</div>
    </div>
    <!-- <div class="history" v-if="historyData.length!=0"> -->
        <div  class="history">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearHistory">
        </div>
      </div>
      <div class="cont">
        <div @click="searchWords">
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default { 
  methods:{
      cancel() {
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
  }
}
</script>

<style lang='scss' scoped>
.head {
        height: 91rpx;
        display: flex;
        padding: 0 32rpx;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        border-bottom: 1rpx solid rgba(0, 0, 0, 0.15);
        div:nth-child(1) {
            height: 59rpx;
            display: flex;
            align-items: center;
            background: #f4f4f4;
            img {
                display: inline-block;
                width: 31rpx;
                height: 31rpx;
                padding: 0 20rpx;
            }
            input {
                display: inline-block;
                width: 480rpx;
                height: 59rpx;
                margin-left: 10rpx;
            }
            .del {
                width: 53rpx;
                height: 53rpx;
                padding: 0;
            }
        }
        div:nth-child(2) {
            flex: 1;
            text-align: center;
        }
    }
    .history {
        background: #fff;
        padding: 32rpx;
        .t {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30rpx;
            div:nth-child(2) {
                width: 55rpx;
                height: 55rpx;
                background: url("http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/del1-93f0a4add4.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .cont {
            display: flex;
            flex-wrap: wrap;
            div {
                padding: 10rpx 10rpx;
                border: 1rpx solid #999;
                margin: 0 30rpx 20rpx 0;
            }
            .active {
                border: 1rpx solid #b4282d;
                color: #b4282d;
            }
        }
    }
</style>
