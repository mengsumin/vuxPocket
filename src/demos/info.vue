<template>
<div class="mypage">
  <div id="header">
    <img src="~pics/03_12.png" @click="index">资讯
  </div>
  <div class="logo"><img src="~imgs/03_07.png"></div>
  <div class="assistedfood">
    <p>添加辅食</p>
    <p>随着宝宝一天天长大，光吃母乳或者婴儿配方奶已经无法满足宝宝的营养需求。所以这段时间，还应给予宝宝添加辅食。婴儿辅食包括米粉、泥糊状食品以及其他的一些家制食品。辅食对成长中的</p>
    <div class="assistedfood-content"><span>宝宝几个月可以添加辅食</span></div>
    <p>1、母乳宝宝在经过6个月以后，妈妈的乳汁分泌量会逐渐减少，宝宝的食量也已经开始增加，这时光喝母乳已经不足以应付宝宝1天的营养。</p>
    <p>2、6-12个月大的宝宝，正是发展咀嚼与吞咽的关键期，对于宝宝来说，咀嚼he吞咽能力是需要学习的，如果没有练习，到了1岁以后，就会咀嚼尝试，即使宝宝肯吃，有时也会马上吐掉，造成喂食上的困难。</p>
    <p>3、辅食能提供更多元完整的各种营养，包括：米粉、泥糊状食品以及其他的一些家制食品。米粉、泥糊状食品以及其他的一些家制食品。米粉、泥糊状食品以及其他的一些家制食品。</p>
    <p>4、辅食能提供更多元完整的各种营养，包括：米粉、泥糊状食品以及其他的一些家制食品。米粉、泥糊状食品以及其他的一些家制食品。米粉、泥糊状食品以及其他的一些家制食品。</p>
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
    index: function(){
      window.location.href="index"
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
#header{
  width: 100%;
  height: 2.25rem;
  line-height: 2.25rem;
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
.logo img{
  width: 100%;
  height: 8rem;
}
.assistedfood p:nth-of-type(1){
  text-align: center;
  margin: 0.6rem 0 0;
}
.assistedfood p:nth-of-type(2){
  margin: 0 0.9rem;
  text-indent: 1.6rem;
  line-height: 1.2rem;
  margin-top: 0.6rem;
  letter-spacing: 0.003125rem;
  font-size: 0.75rem;
}

.assistedfood-content{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  margin-top: 1rem;
  color: #005e94;
}
.assistedfood-content span{
  margin-left: 1rem;
  padding: 0 0.2rem;
  border-left: 0.15rem solid  #005e94;
}
.assistedfood p:nth-of-type(3){
  margin: 0 0.6rem;
  text-indent: 1.6rem;
  line-height: 1.2rem;
  margin-top: 0.85rem;
  letter-spacing: 0.003125rem;
  font-size: 0.75rem;
}
.assistedfood p:nth-of-type(4){
  margin: 0 0.6rem;
  text-indent: 1.6rem;
  line-height: 1.2rem;
  margin-top: 0.85rem;
  letter-spacing: 0.003125rem;
  font-size: 0.75rem;
}
.assistedfood p:nth-of-type(5){
  margin: 0 0.6rem;
  text-indent: 1.6rem;
  line-height: 1.2rem;
  margin-top: 0.85rem;
  letter-spacing: 0.003125rem;
  font-size: 0.75rem;
}
.assistedfood p:nth-of-type(6){
  margin: 0 0.6rem;
  text-indent: 1.6rem;
  line-height: 1.2rem;
  margin-top: 0.85rem;
  letter-spacing: 0.003125rem;
  font-size: 0.75rem;
}
</style>