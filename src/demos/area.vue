<template>
<div class="mypage clearFix">
  <!-- 头部 -->
  <div id="header">
    <img src="~pics/03_12.png" @click="index">地区
  </div>
  <!-- 热门城市 -->
  <ul class="city">
    <li class="li1"><img src="~pics/03_22.png"> 热门城市</li>
    <li>全国</li>
    <li>北京</li>
    <li>上海</li>
    <li>广东</li>
    <li>山东</li>
    <li>江苏</li>
    <li>浙江</li>
    <li>湖北</li>
    <li>天津</li>
    <li>河南</li>
    <li>四川</li>
  </ul>
  <ul class="hot-city">
    <li>全国（自动定位）</li>
    <li>北京</li>
    <li>广州</li>
    <li>杭州</li>
    <li>深圳</li>
  </ul>
</div>
</template>

<script>
// import Lib from 'assets/Lib.js'
export default {
  data() {
    return {

    }
  },
  components: {

  },
  ready(){
    
  },
  methods: {
    index: function(){
      window.location.href="index"
    }
  }
}
</script>

<style scoped>
.mypage{
  font-size: 0.8rem;
}
.clearFix:after{
  content: "";
  display: block;
  clear: both;
}
ul,li{
  list-style: none;
}
/*----------------------头部开始---------------------*/
#header{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  color: #005e94;
  position: relative;
  background: #fff;
  border-bottom: 0.05rem solid #ececec;
}
#header img{
  position: absolute;
  left: 1.15rem;
  top: 0.7rem;
  width: 0.45rem;
  height: 0.8rem;
}
/*----------------------头部结束---------------------*/
/*----------------------热门城市开始---------------------*/
.city{
  width: 50%;
  height: 100%;
  float: left;
  background: #f5f5f5;
}
.city li{
  width: 100%;
  height: 2.45rem;
  line-height: 2.45rem;
  border-bottom: 0.05rem solid #ececec;
  text-align: center;
}
.li1{
  background: #fff;
}
.li1 img{
  width: 0.45rem;
  height: 0.45rem;
  margin-right: 0.9rem;
}
.hot-city{
  width: 50%;
  height: 100vh;
  float: left;
  background: #fff;
}
.hot-city li{
  width: 100%;
  height: 2.45rem;
  line-height: 2.45rem;
  border-top: 0.05rem solid #fff;
  /*text-align: center;*/
  margin-left: 2rem;
}
/*----------------------热门城市结束---------------------*/
</style>