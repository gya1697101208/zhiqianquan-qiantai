<template>
  <div>
    <i class="icon-search"></i>
    <input
      type="text"
      v-model="msg"
      placeholder="输入感兴趣的关键词或发布者昵称"
      placeholder-style="color: #858585;"
      class="inp1"
      @click="search()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    search(){
     wx.navigateTo({
              url: "/pages/circle_search/main"
            });
    }
  }
};
</script>

<style scoped>
.icon-search {
  background: url(../../static/images/search1.png) no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 40px;
}
.inp1 {
  border-radius: 50px;
  padding-left: 60px;
  background-color: #9999991e;
  width: 270px;
  height: 30px;
  margin: 0 auto;
}
</style>
