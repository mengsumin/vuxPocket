<template>
<div class="mypage">
  <!-- 头部 -->
  <div id="header">
    <div class="info">
      <img src="~pics/03_17.png" @click="doctorlist">医生
    </div>
    <div class="doctor clearFix">
      <img src="~imgs/03_11_02.png">
      <div class="details">
        <div class="clearFix">
          <p>朱正锴</p>
          <img src="~pics/03_18.png">
        </div>
        <div>主治医师&nbsp;&nbsp;&nbsp;&nbsp;粉丝：99</div>
      </div>
    </div>
  </div>
  <!-- 擅长 -->
  <div class="goodat">
    <p>擅长</p>
    <p>糖尿病、冠心病、高血压</p>
  </div>
  <div class="grey"></div>
  <!-- 上班时间表 -->
  <div class="schedule">
    <p>上班时间表</p>
    <ul>
      <li class="today">
        <ul class="clearFix">
          <li></li>
          <li>今天10.26</li>
          <li>明天10.27</li>
          <li>后天10.28</li>
          <li>周六10.29</li>
          <li>周日10.30</li>
          <li>周一10.31</li>
          <li>周二11.02</li>
        </ul>
      </li>
      <li>
        <ul class="clearFix">
          <li>上午</li>
          <li></li>
          <li><img src="~pics/03_19.png"></li>
          <li></li>
          <li></li>
          <li></li>
          <li><img src="~pics/03_19.png"></li>
          <li></li>
        </ul>
      </li>
      <li>
        <ul class="clearFix">
          <li>下午</li>
          <li></li>
          <li></li>
          <li><img src="~pics/03_19.png"></li>
          <li></li>
          <li></li>
          <li></li>
          <li><img src="~pics/03_19.png"></li>
        </ul>
      </li>
      <li>
        <ul class="clearFix">
          <li>晚上</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
    </ul>
    <p>每半小时更新一次号源，敬请关注！</p>
    <div></div>
  </div>
  <!-- 医生有话说 -->
  <div class="remind">
    <div></div>
    <div>
      <p>医生有话说</p>
      <p>养成良好生活习惯，保持良好心态也很必要。</p>
    </div>
    <div><button class="btn1">预约挂号</button><button class="btn2" @click="onlineConsultant">在线咨询</button></div>
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
    doctorlist: function(){
      window.location.href="doctorlist"
    },
    onlineConsultant: function(){
      window.location.href="onlineConsultant"
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
  height: 8.6rem;
  color: #fff;
  background: #2a8bc3;
  
}
.info{
  position: relative;
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
}
.info img{
  position: absolute;
  left: 1.15rem;
  top: 0.7rem;
  width: 0.45rem;
  height: 0.8rem;
}
.doctor{
  width: 100%;
  height: 6.4rem;
  background: #2a8bc3 ;
  position: relative;
}
.doctor img{
  float: left;
  width: 3.375rem;
  height: 3.375rem;
  position: absolute;
  left: 1.9rem;
  bottom: 1.5rem;
}
.doctor .details{
  float: left;
  line-height: 1.2rem;
  margin-left: 6.3rem;
  margin-top: 2rem;
  position: relative;
}
.details div:nth-of-type(1) img{
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: 0.15rem;
  left: 2.9rem;
}
.details div:nth-of-type(2){
  font-size: 0.5rem;
}
/*----------------------头部结束---------------------*/
/*----------------------擅长结束---------------------*/
.goodat{
  width: 100%;
  height: 3.4rem;
  line-height: 1.7rem;
}
.goodat p:nth-of-type(1){
  margin-left: 1.8rem;
}
.goodat p:nth-of-type(2){
  margin-left: 2.6rem;
  font-size: 0.65rem;
}

.grey{
  width: 100%;
  height: 0.6rem;
  background: #f1f1f1;
}
/*----------------------擅长结束---------------------*/
/*----------------------上班时间表开始---------------------*/
.schedule{
  width: 100%;
  height: 12rem;
  background: #fff;
}
.schedule p:nth-of-type(1){
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
}
.schedule>ul{
  width: 17rem;
  height: 6.5rem;
  border-left: 0.05rem solid #e5e7e7;
  border-top: 0.05rem solid #e5e7e7;
  margin: 0 auto;
}
.schedule>ul>li{
  line-height: 1.6rem;
}
.schedule>ul .today{
  line-height: 0.8rem;
}
.schedule>ul>li ul li{
  float: left;
  width: 2.07rem;
  height: 1.6rem;
  text-align: center;
  border-right: 0.05rem solid #e5e7e7;
  border-bottom: 0.05rem solid #e5e7e7;
  font-size: 0.6rem;
}
.schedule>ul>li ul li img{
  width: 1.15rem;
  height: 1rem;
  margin-top: 0.3rem;
}
.schedule p:nth-of-type(2){
  font-size: 0.6rem;
  margin-top: 0.6rem;
  margin-left: 1.9rem;
}
/*----------------------上班时间表结束---------------------*/
/*----------------------医生有话说开始---------------------*/
.remind{
  width: 100%;
  height: 7.7rem;
}
.remind div:nth-of-type(1){
  width: 100%;
  height: 0.6rem;
  background: #f1f1f1;
}
.remind div:nth-of-type(2){
  width: 100%;
  height: 4.65rem;
  line-height: 1.5rem;
}
.remind p:nth-of-type(1){
  margin-left: 1.9rem;
}
.remind p:nth-of-type(2){
  margin-left: 2.7rem;
  font-size: 0.6rem;
  color: #999;
}
.remind button{
  width: 50%;
  height: 2.45rem;
  line-height: 2.45rem;
  border: 0;
  font-size: 0.8rem;
  font-family: 微软雅黑;
}
.remind .btn1{
  background: #eee;
  color: #2a8bc3;
}
.remind .btn2{
  background: #2a8bc3;
  color: #fff;
}
/*----------------------医生有话说结束---------------------*/
</style>