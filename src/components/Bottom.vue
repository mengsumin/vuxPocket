<template>
  <!-- 底部导航 -->
  <ul class="nav clearFix">
    <li :class="aaa.one" @click="index"><img src="~pics/03_08.png"><p>首页</p></li>
    <li :class="aaa.two" @click="Dailymedicine" ><img src="~pics/03_09.png"><p>寻药</p></li>
    <li :class="aaa.three"><img src="~pics/03_10.png"><p>提吧</p></li>
    <li :class="aaa.four"><img src="~pics/03_11.png"><p>我的</p></li>
  </ul>
</template>

<script>

// import Lib from 'assets/Lib.js'

module.exports = {
  components:{
    // tabbar
  },
  data: function () {
    return {
      msg: 'Hello moto! what`s up,yaoyao'
    }
  },
  ready(){
    
  },
  methods:{
    index: function(){
      window.location.href="index"
    },
    Dailymedicine: function(){
      img:require('../assets/pics/03_09.png'),
      window.location.href="Dailymedicine"
    },
  },
  props:["aaa"]
}
</script>

<style scoped>
.nav{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2.45rem;
  background: #f7f7f7;
}
.nav li{
  float: left;
  margin: 0.3rem 1.69rem 0;
  filter: white;
  -webkit-filter: grayscale(100%);
}
.nav .actived{
  filter: white;
  -webkit-filter: grayscale(0%);
}
.nav li img{
  width: 1.3rem;
  height: 1.3rem;
}
.nav li p{
  font-size: 0.5rem;
  color: #999;
  margin-left: 0.1rem;
  margin-top: -0.3rem;
  color: #2a8bc3;
}
</style>