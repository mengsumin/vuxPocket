<template>
<div class="mypage">
  <div id="header">
    <img src="~pics/03_17.png" @click="doctorinfo">小依
  </div>
  <div class="content">
    <ul>
      <li class="li1 clearFix">
        <img class="img2" src="~imgs/03_12_02.png">
        <img class="img1" src="~imgs/03_12_01.png">
      </li>
      <li class="li2 clearFix">
        <img class="img3" src="~imgs/03_12_03.png">
        <img class="img4" src="~imgs/03_12_04.png">
      </li>
      <li class="li3">
        <img class="img2" src="~imgs/03_12_02.png">
        <img class="img1" src="~imgs/03_12_01.png">
      </li>
    </ul>
    <div class="clearFix">
      <div><img src="~pics/03_20.png"></div>
      <input type="text">
      <div><img src="~pics/03_21.png"></div>
    </div>
  </div>
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
    doctorinfo: function(){
      window.location.href="doctorinfo"
    }  
  }
}
</script>

<style scoped>
.mypage{
  font-size: 0.8rem;
  width: 100%;
  height: 100vh;
}
.clearFix:after{
  content: "";
  display: block;
  clear: both;
}
/*----------------------头部开始---------------------*/
#header{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  color: #fff;
  background: #2a8bc3;
}
#header img{
  position: absolute;
  left: 1.15rem;
  top: 0.7rem;
  width: 0.45rem;
  height: 0.8rem;
}
/*----------------------头部结束---------------------*/
/*----------------------内容开始---------------------*/
.content{
  width: 100%;
  height: 30.15rem;
  background: #f1f1f1;
  position: relative;
}
.content ul{
  width: 100%;
  height: 27rem;
  position: absolute;
  top: 0.5rem;
}
.content ul li{
  margin-top: 0.5rem;
}
.content ul .li1 img{
  float: right;
}
.content ul .li2 img{
  float: left;
}
.content ul .li3 img{
  float: right;
}
.img1{
  width: 3.95rem;
  height: 2.1rem;
}
.img2,.img3{
  width: 2.25rem;
  height: 2.25rem;
}
.img4{
  width: 11.45rem;
  height: 2rem;
}
.img2{
  margin-right: 0.75rem;
  margin-left: 0.4rem;
}
.img3{
  margin-left: 0.8rem;
  margin-right: 0.4rem;
}
.content>div{
  width: 100%;
  height: 1.9rem;
  position: absolute;
  bottom: 0.6rem;
}
.content>div img{
  width: 1.45rem;
  height: 1.45rem;
  float: left;
}
.content>div img:nth-of-type(1){
  margin: 0.2rem 0.8rem 0 1rem;
}
.content>div img:nth-of-type(2){
  margin-left: 0.8rem;
}
.content>div input{
  float: left;
  width: 64.5%;
  height: 1.9rem;
  line-height: 1.9rem;
  outline: none;
  border-radius: 0.5rem;
}
/*----------------------内容结束---------------------*/
</style>