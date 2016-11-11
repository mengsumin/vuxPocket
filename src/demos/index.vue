<template>
<div class="mypage">
  <!-- 头部开始 -->
  <div id="header" class="clearFix">
    <img src="~pics/03_01.png" class="img1" @click="area">
    <div class="address" @click="area">地区</div>
    <div class="search clearFix">
      <img src="~pics/03_02.png" class="img2">
      <input id="search-key" type="text" placeholder="搜索医院、科室、医生、症状" @focus="focus" @blur="blur" :searchText='products'>
      <div id="helper" @click="click"></div>
      <!-- <search></search> -->
    </div>
  </div>
  <!-- 头部结束 -->
  <!-- 本期话题开始 -->
  <div class="topic">
    <img src="~imgs/03_03.png">
    <div class="topic-content">
      <h3>本期话题</h3>
      <div>宝宝什么时候添加辅食最佳？</div>
      <div class="enter" @click="info">点击进入</div>
    </div>
  </div>
  <!-- 本期话题结束 -->
  <!-- 预约挂号开始 -->
  <div class="grey">
    <ul class="clearFix">
      <li>
        <img src="~pics/03_03.png">
        <div>预约挂号</div>
        <div>轻松挂号，无须排队</div>
      </li>
      <li>
        <img src="~pics/03_04.png">
        <div>症状自查</div>
        <div>对于症状，精准诊疗</div>
      </li>
      <li>
        <img src="~pics/03_05.png">
        <div>寻医问药</div>
        <div>拿捏不准，快问医生</div>
      </li>
      <li>
        <img src="~pics/03_06.png">
        <div>小助手</div>
        <div>不会操作，快来问我</div>
      </li>
    </ul>
  </div>
  <!-- 预约挂号结束 -->
  <!-- 健康资讯开始 -->
  <div class="health">
    <div class="tit"><span>健康资讯</span></div>
    <ul>
      <li class="clearFix">
        <img src="~imgs/03_05_02.png">
        <div class="explain">
          <div>#专家在线答疑#严重痛经？...</div>
          <p>究竟女孩纸为什么会痛经呢？痛经了又怎么办呢？作为男票怎么做才能不干着急？</p>
        </div>
      </li>
      <li class="clearFix">
        <img src="~imgs/03_05_03.png">
        <div class="explain">
          <div>吃桃该不该削皮</div>
          <p>究竟女孩纸为什么会痛经呢？痛经了又怎么办呢？作为男票怎么做才能不干着急？</p>
        </div>
      </li>
      <li class="clearFix">
        <img src="~imgs/03_05_02.png">
        <div class="explain">
          <div>#专家在线答疑#严重痛经？...</div>
          <p>究竟女孩纸为什么会痛经呢？痛经了又怎么办呢？作为男票怎么做才能不干着急？</p>
        </div>
      </li>
      <li class="clearFix">
        <img src="~imgs/03_05_03.png">
        <div class="explain">
          <div>吃桃该不该削皮</div>
          <p>究竟女孩纸为什么会痛经呢？痛经了又怎么办呢？作为男票怎么做才能不干着急？</p>
        </div>
      </li>
    </ul>
  </div>
  <!-- 健康资讯结束 -->
  <!-- 底部开始 -->
  <bottom :aaa="bottomnav"></bottom>
  <!-- 底部结束 -->
</div>
</template>

<script>

// import Lib from 'assets/Lib.js'
import bottom from '../components/Bottom.vue'
// import search from '../components/search/index.vue'

export default {
  data() {
    return {
      products: [
        {'id':1,'name':"aa"},
        {'id':2,'name':"ab"},
        {'id':3,'name':"ac"},
        {'id':4,'name':"bb"},
        {'id':5,'name':"bc"},
        {'id':6,'name':"bd"},
        {'id':7,'name':"cc"},
        {'id':8,'name':"cd"},
        {'id':9,'name':"dd"},
        {'id':10,'name':"微笑"},
        {'id':11,'name':"宝宝"},
        {'id':12,'name':"得到"}
      ],
      bottomnav:{one:"actived",two:"",three:"",four:""}
    }
  },
  components: {
    bottom
    // search
  },
  ready(){
    
  },
  methods: {
    area: function(){
      window.location.href="area"
    },
    info: function(){
      window.location.href="info"
    },
    focus: function(){
      var oInput = document.getElementById("search-key");
      var Helper = document.getElementById("helper");
      oInput.placeholder = "";
      var key = oInput.value;
      console.log(key);
      if(!key){
        Helper.style.display="none";
        return;
      }
      var result = [];
      result = products.filter(function(item,index,array){
        return item.name.indexOf(key) != -1;
      });
      var aLiStr = "";
      for(var i=0;i<result.length;i++){
        aLiStr += '<div class="clearfix"><span class="fl">'+result[i].name+'</span><span class="fr">约12000个搜索结果</span></div>';
      }
      aLiStr += '<div id="close" @click="close"><span class="fr">关闭</span></div>';
      Helper.innerHTML = aLiStr;
      Helper.style.display = "block";
    },
    blur: function(){
      var oInput = document.getElementById("search-key");
      var Helper = document.getElementById("helper");
      oInput.placeholder="搜索医院、科室、医生、症状";
      Helper.style.display="none";
    },
    click: function(){
      var oInput = document.getElementById("search-key");
      var src = event.target;
      var tipkey = null;
      if(src.classList.contains("clearfix") || src.parentNode.classList.contains("clearfix")){
        tipkey = src.firstElementChild.innerText;
        oInput.value = tipkey;
        location = "result.html?tipkey="+tipkey;
      }
    },
    close: function(){
      var close = document.getElementById("close");
      Helper.style.display = "none";
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
.fl{
  float: left;
}
.fr{
  float: right;
}
ul,li{
  list-style: none;
}
@font-face{
  font-family: "mfont";
  src:url("htw.ttf");
}
/*----------------------头部开始---------------------*/
#header{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  background: #f7f7f7;
}
/*地区*/
.img1{
  float: left;
  margin-left: 1rem;
  margin-right: 0.4rem;
  margin-top: 0.55rem;
  width: 0.9rem;
  height: 1.1rem;
}
.address{
  float: left;
  margin-right: 1.7rem;
}
/*搜索框*/
.search{
  float: left;
  width: 60.8vw;
  height: 1.1rem;
  line-height: 1.1rem;
  border: 1px solid #999;
  border-radius: 0.8rem;
  margin-top: 0.5rem;
  background: #fff;
  position: relative;
}
.img2{
  float: left;
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 1rem;
  margin-top: 0.15rem;
  margin-right: 0.65rem;
}
.search input{
  float: left;
  /*width: 8.5rem;*/
  width: 45.3vw;
  border: 0;
  outline: none;
  font-size: 0.5rem;
  margin-top: 0.2rem;
}
.search #helper{
  width: 56vw;
  height: 5vh;
  border: 1px solid #999;
  border-top: none;
  background: #fff;
  position: absolute;
  top: 1.1rem;
  left: 0.4rem;
  z-index: 1;
  display: none;
}
/*----------------------头部结束---------------------*/
/*----------------------本期话题开始---------------------*/
.topic{
  /*background-image: url(./pics/03_03.png) no-repeat;*/
  position: relative;
  height: 8rem;
}
.topic img{
  width: 100%;
  height: 100%;
}
.topic-content{
  position: absolute;
  top: 1.2rem;
  left: 2rem;
  width: 6.5rem;
}
.topic-content h3{
  font-family: 'mfont';
  margin-bottom: 0.8rem;
}
.topic-content .enter{
  width: 2.85rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border: 1px solid #1d284d;
  border-radius: 0.2rem;
  margin-top: 0.8rem;
  font-size: 0.5rem;
  color: #1d284d;
}
/*----------------------本期话题结束---------------------*/
/*----------------------预约挂号开始---------------------*/
.grey{
  width: 100%;
  height: 11.2rem;
  background: #f5f5f5;
  position: relative;
}
.grey ul{
  position: absolute;
  left: 0.05rem;
  top:  0.6rem;
  background: #fff;
}
.grey ul li{
  float: left;
  width: 9.25rem;
  height: 4.9rem;
  border: 1px solid #e4e4e4;
}
.grey ul li img{
  width: 1.55rem;
  height: 1.55rem;
  margin-top: 0.9rem;
  margin-left: 4rem;
}
.grey ul li div{
  text-align: center;
}
.grey ul li div:nth-of-type(1){
  color: #005e94;
}
.grey ul li div:nth-of-type(2){
  color: #999;
  font-size: 0.5rem;
}
/*----------------------预约挂号结束---------------------*/
/*----------------------健康资讯开始---------------------*/
.health{
  width: 100%;
}
/*健康资讯*/
.tit{
  width: 100%;
  height: 2.4rem;
  line-height: 2.4rem;
  color: #005e94;
  border-bottom: 1px solid #e4e4e4;
}
.tit span{
  margin-left: 1rem;
  padding: 0 0.2rem;
  border-left: 0.15rem solid  #005e94;
}
/*专家在线答疑*/
.health ul li{
  height: 3.9rem;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
}
.health ul li img{
  float: left;
  width: 28vw;
  height: 2.7rem;
  margin-left: 5.3vw;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}
.health ul li div{
  float: left;
  width: 11rem;
  margin-top: 0.3rem;
}
.health ul li p{
  font-size: 0.5rem;
  color: #999;
  padding-top: 0.5rem;
}
/*----------------------健康资讯结束---------------------*/
/*----------------------底部开始---------------------*/

/*----------------------底部结束---------------------*/
</style>