<template>
<div class="mypage">
  <!-- 头部 -->
  <div id="header">
    日常用药<img src="~pics/03_02.png">
  </div>
  <!-- 对症下药开始 -->
  <ul class="grey clearFix">
    <li>
      <img src="~pics/04_01.png">对症下药
    </li>
    <li>
      <img src="~pics/04_02.png">家庭药箱
    </li>
    <li>
      <img src="~pics/04_03.png">附近药店
    </li>
    <li>
      <img src="~pics/04_04.png">扫码辨别
    </li>
  </ul>
  <div class="smallgrey"></div>
  <!-- 对症下药结束 -->
  <!-- 消化系统疾病药品 -->
  <div class="treat clearFix"><div></div>适合治疗<span>&nbsp;消化系统疾病&nbsp;</span>药品<img src="~pics/04_05.png"></div>
  <ul class="treat-content clearFix">
    <li>
      <img src="~imgs/04_03_01.png">
      <p>健胃消食片</p>
      <p>￥5.80~50.00</p>
    </li>
    <li>
      <img src="~imgs/04_03_02.png">
      <p>大山楂丸</p>
      <p>￥6.80~29.40</p>
    </li>
    <li>
      <img src="~imgs/04_03_03.png">
      <p>维生素B1片</p>
      <p>暂无报价</p>
    </li>
    <li>
      <img src="~imgs/04_03_04.png">
      <p>罗通定片</p>
      <p>暂无报价</p>
    </li>
  </ul>
  <!-- 免疫系统疾病药品 -->
  <div class="treat clearFix"><div></div>适合治疗<span>&nbsp;免疫系统疾病&nbsp;</span>药品<img src="~pics/04_05.png"></div>
  <ul class="treat-content clearFix">
    <li>
      <img src="~imgs/04_03_05.png">
      <p>健胃消食片</p>
      <p>￥5.80~50.00</p>
    </li>
    <li>
      <img src="~imgs/04_03_06.png">
      <p>大山楂丸</p>
      <p>￥6.80~29.40</p>
    </li>
    <li>
      <img src="~imgs/04_03_01.png">
      <p>健胃消食片</p>
      <p>￥5.80~50.00</p>
    </li>
    <li>
      <img src="~imgs/04_03_02.png">
      <p>大山楂丸</p>
      <p>￥6.80~29.40</p>
    </li>
  </ul>
  <!-- 底部开始 -->
  <bottom :aaa="bottomnav"></bottom>
  <!-- 底部结束 -->
</div>
</template>

<script>
// import Lib from 'assets/Lib.js'
import bottom from '../components/Bottom.vue'
export default {
  data() {
    return {
      bottomnav:{one:"",two:"actived",three:"",four:""}
    }
  },
  components: {
    bottom
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
  width: 100%;
  height: 100vh;
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
  background: #fff;
  position: relative;
  
}
#header img{
  position: absolute;
  right: 1.2rem;
  top: 0.7rem;
  width: 0.8rem;
  height: 0.8rem;
}
/*----------------------头部结束---------------------*/
/*----------------------对症下药开始---------------------*/
.grey{
  width: 100%;
  height: 8.7rem;
  margin-left: 0.05rem;
}
.grey li{
  float: left;
  width: 8rem;
  height: 4.25rem;
  line-height: 4.25rem;
  text-align: center;
  border: 0.05rem solid #f2f2f2;
  color: #005e94;
  padding-left: 1.25rem;
  position: relative;
}
.grey li img{
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 1.6rem;
  left: 2.4rem;
}
.smallgrey{
  width: 100%;
  height: 0.6rem;
  background: #f5f5f5;
}
/*----------------------对症下药结束---------------------*/
/*----------------------消化系统疾病药品结束---------------------*/
.treat{
  width: 100%;
  height: 2.4rem;
  line-height: 2.4rem;
  color: #1d284d;
}
.treat div{
  width: 0.15rem;
  height: 1rem;
  background: #005e94;
  margin-left: 1rem; 
  margin-right: 0.3rem;
  margin-top: 0.75rem;
  float: left;
}
.treat span{
  color: #005e94;
}
.treat img{
  float: right;
  width: 0.3rem;
  height: 0.5rem;
  margin-top: 1rem;
  margin-right: 1.3rem;
}

.treat-content{
  width: 100%;
  height: 12.4rem;
  position: relative;
}
.treat-content li{
  float: left;
  width: 9.25rem;
  height: 6.1rem;
  border: 0.05rem solid #e4e4e4;
  
}
.treat-content li img{
  width: 6.5rem;
  height: 4rem;
  margin-left: 2rem;
}
.treat-content li p{
  font-size: 0.4rem;
  color: #1d284d;
  margin-left: 2.9rem;
}
/*----------------------消化系统疾病药品结束---------------------*/
/*----------------------底部开始---------------------*/

/*----------------------底部结束---------------------*/
</style>