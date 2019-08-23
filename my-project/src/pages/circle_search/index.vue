<template>
  <div>
    <div class="box">
      <i class="icon-search"></i>
      <input
        type="text"
        v-model="msg"
        placeholder="输入感兴趣的关键词或发布者昵称"
        placeholder-style="color: #858585;"
        class="inp1"
      />
    </div>
    <div class="space">

    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.box {
  width: 270px;
  position: relative;
  margin-left: 25px;
  top: 10px;
  font-size: 14px;
}
.icon-search {
  background: url(../../../static/images/search1.png) no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 40px;
}
.inp1 {
  border-radius: 50px;
  padding-left: 60px;

  background-color: #f5f5f5;
  width: 270px;
  height: 30px;
  margin: 0 auto;
}
.space {
  height: 10px;
  background-color: #f5f5f5;
}
</style>
