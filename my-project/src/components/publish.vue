<template>
  <div class="footer">
    <div class="icon">
      <img src="../../static/images/fabu.png" style="width:25px;height:25px;" />
    </div>
    <div class="word">发布</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.icon {
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-top: 5px;
}
.word {
  width: 50px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  color: white;
}
.footer {
  position: fixed;
  left: 70%;
  bottom: 6%;
  width: 90px;
  height: 35px;
  text-align: center;
  border-radius: 20px;
  background-color: #3185ff;
  display: flex;
  /* border: 1px solid red; */
}
</style>