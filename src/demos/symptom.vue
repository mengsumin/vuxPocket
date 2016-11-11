<template>
<div class="mypage">
  <!-- 头部 -->
  <div id="header">
    <img src="~pics/03_12.png">症状
  </div>
  <!-- 头痛 -->
  <div class="headache">
    <div>头痛<img class="img1" src="~pics/04_06.png"><img class="img2" src="~pics/04_07.png"></div>
  </div>
  <!-- 伴随症状 -->
  <div class="accompany">
    <p>伴随症状</p>
    <ul class="clearFix">
      <li>感冒</li>
      <li>发烧</li>
      <li>流鼻涕</li>
      <li>咽喉干燥</li>
      <li>多饮</li>
      <li>乏力</li>
    </ul>
  </div>
  <!-- 可能的疾病 -->
  <div class="possible">
    <p></p>
    <p>可能的疾病</p>
    <div class="clearFix">
      <div class="box1">
        <img class="img1" src="~imgs/04_01.png">
      </div>
      <div class="box2">
        <img class="img2" src="~imgs/04_02.png">
        <p>颈部软组织损伤</p>
        <div>80%</div>
        <p>典型症状：头痛</p>
        <p>例属科室：外伤科</p>
      </div>
      <div class="box3">
        <img class="img3" src="~imgs/04_03.png">
      </div>
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
/*----------------------头痛开始---------------------*/
.headache{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  border-bottom: 0.05rem solid #ececec;
}
.headache div{
  width: 3.2rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  color: #005e94;
  border: 0.05rem solid #005e94;
  margin-left: 1.4rem;
  margin-top: 0.3rem;
  position: relative;
}
.headache div .img1{
  position: absolute;
  right: 0;
  top: 0;
  width: 0.7rem;
  height: 0.7rem;
}
.headache div .img2{
  position: absolute;
  right: 0.05rem;
  top: 0.05rem;
  width: 0.3rem;
  height: 0.3rem;
}
/*----------------------头痛结束---------------------*/
/*----------------------伴随症状开始---------------------*/
.accompany{
  width: 100%;
  height: 4.6rem;
  line-height: 2.3rem;
  border-bottom: 0.05rem solid #ececec;
}
.accompany p{
  color: #999;
  margin-left: 1.5rem;
}
.accompany ul{
  margin-left: 1.5rem;
}
.accompany ul li{
  float: left;
  color: #1d284d;
  margin-right: 0.8rem;
}
/*----------------------伴随症状结束---------------------*/
/*----------------------可能的疾病开始---------------------*/
.possible{
  width: 100%;
  height: 23.1rem;
  background: #f5f5f5;
}
.possible>p:nth-of-type(1){
  width: 100%;
  height: 0.5rem;
  background: #f5f5f5;
}
.possible>p:nth-of-type(2){
  width: 100%;
  height: 2.25rem;
  line-height: 2.25rem;
  color: #999;
  padding-left: 1.5rem;
  /*margin-top: 0.5rem;*/
  border-top: 0.05rem solid #ededed;
  border-bottom: 0.05rem solid #ededed;
  background: #fff;
}
.possible>div{
  margin-top: 2.5rem;
  position: relative;
  color: #fff;
}
.possible>div img{
  float: left;
}


.possible .box1{
  width: 3.75rem;
  height: 7.75rem;
  position: absolute;
  top: 2rem;
  left: 0;
  overflow: hidden;
}
.possible .img1{
  width: 3.75rem;
  height: 7.75rem;
}


.possible .box2{
  width: 11.25rem;
  height: 11.85rem;
  position: absolute;
  top: 0;
  left: 3.75rem;
}
.possible .img2{
  width: 11.25rem;
  height: 11.85rem;
}
.box2 p:nth-of-type(1){
  position: absolute;
  top: 1.4rem;
  left: 3.2rem;
}
.box2 div{
  position: absolute;
  top: 3.2rem;
  left: 3.9rem;
  width: 3.25rem;
  height: 3.25rem;
  line-height: 3.25rem;
  text-align: center;
  border: 0.3rem solid #fff;
  border-radius: 50%;
}
.box2 p:nth-of-type(2){
  position: absolute;
  top: 7.8rem;
  left: 2.9rem;
}
.box2 p:nth-of-type(3){
  position: absolute;
  top: 9.5rem;
  left: 2.98rem;
}


.possible .box3{
  width: 3.75rem;
  height: 7.75rem;
  position: absolute;
  top: 2rem;
  right: 0;
  overflow: hidden;
}
.possible .img3{
  width: 3.75rem;
  height: 7.75rem;
}
/*----------------------可能的疾病结束---------------------*/
</style>