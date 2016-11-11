<template>
<div class="mypage" @click="carousel">
  <img src="~imgs/01.png">
  <div class="footer">Copyright @ Ulight Corporation</div>
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
    carousel: function(){
      window.location.href="carousel";
    },
  }
}
</script>

<style scoped>
.mypage{
  font-size: 0.8rem;
  height: 100vh;
  background: #2a8bc3;
}
img{
  position: absolute;
  bottom: 54.5vh;
  left: 30.4vw;
  width: 39.5vw;
  height: 22.18vh;
}
.footer{
  position: absolute;
  bottom: 8.24vh;
  text-align: center;
  width: 100%;
  height: 1.5rem;
  color: white;
  font-size: 0.6rem;
}
</style>