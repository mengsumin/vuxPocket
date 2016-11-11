<template>
<div class="mypage clearFix">
  <!-- 头部 -->
  <div id="header">
    <img src="~pics/03_12.png">症状自诊
  </div>
  <!-- 常见症状 -->
  <ul class="common">
    <li class="li1"><img src="~pics/03_22.png">常见症状</li>
    <li>更多症状</li>
  </ul>
  <!-- 更多症状 -->
  <ul class="more">
    <li>眩晕</li>
    <li>头痛</li>
    <li>失眠</li>
    <li>鼻塞</li>
    <li>发烧</li>
    <li>恶心呕吐</li>
    <li>呼吸困难</li> 
    <li>咳嗽</li>
    <li>咽喉疼痛</li>
    <li>颈椎病</li>
    <li>心悸</li>
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
/*----------------------常见症状开始---------------------*/
.common{
  width: 50%;
  height: 100vh;
  float: left;
  background: #f5f5f5;
}
.common li{
  width: 100%;
  height: 4.4rem;
  line-height: 4.4rem;
  border-bottom: 0.05rem solid #f5f5f5;
  text-align: center;
}
.li1{
  /*background: url(pics/03_22.png) no-repeat left;*/
  background: #fff;
}
.li1 img{
  width: 0.45rem;
  height: 0.45rem;
  margin-left: 0;
  margin-right: 0.9rem;
}
.more{
  width: 50%;
  height: 100vh;
  float: left;
  background: #fff;
}
.more li{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  border-top: 0.05rem solid #fff;
  /*text-align: center;*/
  margin-left: 2rem;
}
/*----------------------常见症状结束---------------------*/
</style>