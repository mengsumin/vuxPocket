<template>
<div class="mypage">
  <!-- 头部 -->
  <div id="header">
    <img src="~pics/03_12.png" @click="index">医生名单
  </div>
  <!-- 排序 -->
  <div class="sort clearFix">
    <img src="~pics/03_13.png">
    <img src="~pics/03_14.png">
    <img src="~pics/03_15.png">
    <img src="~pics/03_14.png">
  </div>
  <!-- 各位医生 -->
  <ul class="doctor">
    <li class="clearFix" v-for="text in texts">
      <img :src="text.image" @click="doctorinfo">
      <div class="details">
        <p class="xingm">{{text.p1}}&nbsp;<span>{{text.p2}}</span><span>{{text.p3}}</span></p>
        <p class="addr">{{text.p4}}</p>
        <p class="goodat">{{text.p5}}</p>
        <ul class="clearFix">
          <li>{{text.li1}}</li>
          <li>{{text.li2}}</li>
          <li>{{text.li3}}</li>
          <li>{{text.li4}}</li>
        </ul>
      </div>
    </li>
    <!-- 第一位 -->
    <!-- <li class="clearFix">
      <img src="~imgs/03_10.png" @click="doctorinfo">
      <div class="details">
        <p class="xingm">朱正锴&nbsp;<span>主治医师</span><span>55元</span></p>
        <p class="addr">江苏省无锡市华东疗养院|内科</p>
        <p class="goodat">擅长：糖尿病、冠心病、高血压</p>
        <ul class="clearFix">
          <li>图文</li>
          <li>电话</li>
          <li>视频</li>
          <li>私人</li>
        </ul>
      </div>
    </li>
    <li class="clearFix">
      <img src="~imgs/03_10.png">
      <div class="details">
        <p class="xingm">胡飞&nbsp;<span>主治医师</span><span>30元</span></p>
        <p class="addr">江阴市中医院|骨科</p>
        <p class="goodat">擅长：血管损伤、手外伤、骨折</p>
        <ul class="clearFix">
          <li>图文</li>
          <li>电话</li>
          <li>视频</li>
          <li>私人</li>
        </ul>
      </div>
    </li>
    <li class="clearFix">
      <img src="~imgs/03_10.png">
      <div class="details">
        <p class="xingm">朱涛峰&nbsp;<span>主治医师</span><span>45元</span></p>
        <p class="addr">宜兴市人民医院|呼吸内科</p>
        <p class="goodat">擅长：待完善</p>
        <ul class="clearFix">
          <li>图文</li>
          <li>电话</li>
          <li>视频</li>
          <li>私人</li>
        </ul>
      </div>
    </li>
    <li class="clearFix">
      <img src="~imgs/03_10.png">
      <div class="details">
        <p class="xingm">张飘&nbsp;<span>主治医师</span><span>60元</span></p>
        <p class="addr">无锡市第二人民医院|皮肤科</p>
        <p class="goodat">擅长：青春痘、粉刺、美白</p>
        <ul class="clearFix">
          <li>图文</li>
          <li>电话</li>
          <li>视频</li>
          <li>私人</li>
        </ul>
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
      texts:[
        {
          image:require("../assets/imgs/03_10.png"),
          p1:"朱正锴",
          p2:"主治医师",
          p3:"55元",
          p4:"江苏省无锡市华东疗养院|内科",
          p5:"擅长：糖尿病、冠心病、高血压",
          li1:"图文",
          li2:"电话",
          li3:"视频",
          li4:"私人"
        },
        {
          image:require("../assets/imgs/03_10.png"),
          p1:"胡飞",
          p2:"主治医师",
          p3:"30元",
          p4:"江阴市中医院|骨科",
          p5:"擅长：血管损伤、手外伤、骨折",
          li1:"图文",
          li2:"电话",
          li3:"视频",
          li4:"私人"
        },
        {
          image:require("../assets/imgs/03_10.png"),
          p1:"朱涛峰",
          p2:"主治医师",
          p3:"45元",
          p4:"宜兴市人民医院|呼吸内科",
          p5:"擅长：待完善",
          li1:"图文",
          li2:"电话",
          li3:"视频",
          li4:"私人"
        },
        {
          image:require("../assets/imgs/03_10.png"),
          p1:"张飘",
          p2:"主治医师",
          p3:"60元",
          p4:"无锡市第二人民医院|皮肤科",
          p5:"擅长：青春痘、粉刺、美白",
          li1:"图文",
          li2:"电话",
          li3:"视频",
          li4:"私人"
        },
        {
          image:require("../assets/imgs/03_10.png"),
          p1:"朱正锴",
          p2:"主治医师",
          p3:"55元",
          p4:"江苏省无锡市华东疗养院|内科",
          p5:"擅长：糖尿病、冠心病、高血压",
          li1:"图文",
          li2:"电话",
          li3:"视频",
          li4:"私人"
        },
        {
          image:require("../assets/imgs/03_10.png"),
          p1:"胡飞",
          p2:"主治医师",
          p3:"30元",
          p4:"江阴市中医院|骨科",
          p5:"擅长：血管损伤、手外伤、骨折",
          li1:"图文",
          li2:"电话",
          li3:"视频",
          li4:"私人"
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
    },
    doctorinfo: function(){
      window.location.href="doctorinfo"
    }
  }
}
</script>

<style scoped>
.mypage{
  font-size: 0.8rem;
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
/*----------------------各位医生开始---------------------*/
.doctor>li{
  width: 100%;
  height: 7rem;
  border-top: 0.05rem solid #e4e4e4;
  background: #fff;
}
.doctor>li img{
  float: left;
  width: 4.225rem;
  height: 4.225rem;
  margin-left: 1.75rem;
  margin-top: 1.35rem;
  margin-right: 1rem;
}
.doctor>li .details{
  float: left;
  width: 9.5rem;
  line-height: 1.1rem;
  margin-top: 1.4rem;
}
.xingm span:nth-of-type(1){
  font-size: 0.4rem;
}
.xingm span:nth-of-type(2){
  float: right;
  font-size: 0.4rem;
  color: #ea8010;
}
.addr{
  font-size: 0.4rem;
}
.goodat{
  font-size: 0.4rem;
}
.details ul li{
  float: left;
  margin-right: 0.3rem;
  width: 1.95rem;
  height: 0.85rem;
  line-height: 0.85rem;
  text-align: center;
  font-size: 0.4rem;
  border: 0.05rem solid #999;
  color: #999;
}
/*----------------------各位医生结束---------------------*/
</style>