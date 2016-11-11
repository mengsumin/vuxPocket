<template>
<div class="mypage">
  <!-- 头部 -->
  <div id="header">
    <img src="~pics/03_12.png" @click="index">医院列表
  </div>
  <!-- 排序 -->
  <div class="sort clearFix">
    <img src="~pics/03_13.png">
    <img src="~pics/03_14.png">
    <img src="~pics/03_15.png">
    <img src="~pics/03_14.png">
  </div>
  <!-- 各大医院 -->
  <ul>
    <li class="clearFix" v-for="text in texts">
      <img :src="text.image1">
      <div>
        <p>{{text.p1}}</p>
        <p>{{text.p2}}</p>
        <p><img :src="text.image2">{{text.p3}}</p>
      </div>
    </li>
    <!-- <li class="clearFix">
      <img src="~imgs/03_09_01.png">
      <div>
        <p>中国人民解放军第101医院</p>
        <p>三级甲等|综合医院|医保定点</p>
        <p><img src="~pics/03_16.png">江苏省无锡市北塘区兴源北路101号</p>
      </div>
    </li> 
    <li class="clearFix">
      <img src="~imgs/03_09_01.png">
      <div>
        <p>无锡市第二人民医院</p>
        <p>三级甲等|综合医院|医保定点</p>
        <p><img src="~pics/03_16.png">江苏省无锡市崇安区中山路68号</p>
      </div>
    </li>
    <li class="clearFix">
      <img src="~imgs/03_09_01.png">
      <div>
        <p>宜兴中医院</p>
        <p></p>
        <p><img src="~pics/03_16.png">宜兴市宜城镇解放东路17号</p>
      </div>
    </li>
    <li class="clearFix">
      <img src="~imgs/03_09_01.png">
      <div>
        <p>宜兴市第二人民医院</p>
        <p></p>
        <p><img src="~pics/03_16.png">宜兴市丁蜀镇解放东路12号</p>
      </div>
    </li>
    <li class="clearFix">
      <img src="~imgs/03_09_01.png">
      <div>
        <p>江阴市中医院</p>
        <p></p>
        <p><img src="~pics/03_16.png">江苏省江阴市人民中路130号</p>
      </div>
    </li>
    <li class="clearFix">
      <img src="~imgs/03_09_01.png">
      <div>
        <p>无锡市人民医院</p>
        <p></p>
        <p><img src="~pics/03_16.png">江苏省江阴市人民中路130号</p>
      </div>
    </li> -->
  </ul>
</div>
</template>

<script>
// import Lib from 'assets/Lib.js'
export default {
  data() {
    return {
      texts: [
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"中国人民解放军第101医院",
          p2:"三级甲等|综合医院|医保定点",
          image2:require('../assets/pics/03_16.png'),
          p3:"江苏省无锡市北塘区兴源北路101号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"无锡市第二人民医院",
          p2:"三级甲等|综合医院|医保定点",
          image2:require('../assets/pics/03_16.png'),
          p3:"江苏省无锡市崇安区中山路68号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"宜兴中医院",
          p2:"",
          image2:require('../assets/pics/03_16.png'),
          p3:"宜兴市宜城镇解放东路17号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"宜兴市第二人民医院",
          p2:"",
          image2:require('../assets/pics/03_16.png'),
          p3:"宜兴市丁蜀镇解放东路12号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"江阴市中医院",
          p2:"",
          image2:require('../assets/pics/03_16.png'),
          p3:"江苏省江阴市人民中路130号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"中国人民解放军第101医院",
          p2:"三级甲等|综合医院|医保定点",
          image2:require('../assets/pics/03_16.png'),
          p3:"江苏省无锡市北塘区兴源北路101号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"无锡市第二人民医院",
          p2:"三级甲等|综合医院|医保定点",
          image2:require('../assets/pics/03_16.png'),
          p3:"江苏省无锡市崇安区中山路68号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"宜兴中医院",
          p2:"",
          image2:require('../assets/pics/03_16.png'),
          p3:"宜兴市宜城镇解放东路17号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"宜兴市第二人民医院",
          p2:"",
          image2:require('../assets/pics/03_16.png'),
          p3:"宜兴市丁蜀镇解放东路12号"
        },
        {
          image1:require('../assets/imgs/03_09_01.png'),
          p1:"江阴市中医院",
          p2:"",
          image2:require('../assets/pics/03_16.png'),
          p3:"江苏省江阴市人民中路130号"
        }
      ]
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
  width: 100vw;
  height: 100vh;
  background: #fff;
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
  border-bottom: 0.05rem solid #e4e4e4;
  text-align: center;
  color: #005e94;
  position: relative;
}
#header img{
  position: absolute;
  left: 1.15rem;
  top: 0.7rem;
  width: 0.45rem;
  height: 0.8rem;
}
/*----------------------头部结束---------------------*/
/*----------------------排序开始---------------------*/
.sort{
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
}
.sort img:nth-of-type(1){
  width: 0.55rem;
  height: 0.7rem;
  margin-left: 4.15rem;
}
.sort img:nth-of-type(2){
  width: 0.25rem;
  height: 0.15rem;
}
.sort img:nth-of-type(3){
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 8.15rem;
}
.sort img:nth-of-type(4){
  width: 0.25rem;
  height: 0.15rem;
}
/*----------------------排序结束---------------------*/
/*----------------------各大医院开始---------------------*/
ul li{
  width: 100%;
  height: 5.55rem;
  border-top: 0.05rem solid #e4e4e4;
  background: #fff;
}
ul li img{
  width: 4.05rem;
  height: 3.9rem;
  margin-left: 2.3rem;
  margin-top: 0.8rem;
  margin-right: 1.3rem;
  float: left;
}
ul li div{
  float: left;
  width: 11rem;
  line-height: 1rem;
  margin-top: 1.2rem;
}
ul li div p:nth-of-type(2){
  font-size: 0.5rem;
}
ul li div p img{
  width: 0.375rem;
  height: 0.45rem;
  margin: 0.35rem 0.35rem 0 0;
}
ul li div p:nth-of-type(3){
  font-size: 0.5rem;
  color: #999;
}
/*----------------------各大医院结束---------------------*/
</style>