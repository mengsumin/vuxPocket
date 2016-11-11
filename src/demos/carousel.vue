<template>
<div class="mypage">
  <swiper :list="list" class="swiper"></swiper>
</div>
</template>

<script>
// import Lib from 'assets/Lib.js'
import swiper from '../components/swiper'
export default {
  data(){
    return {
      list: [
        {
          url: 'javascript:',
          img:require('../assets/imgs/02_01.png')
        },
        {
          url: './index',
          img:require('../assets/imgs/02_02.png')
        }
      ]
    }
  },
  components: {
    swiper
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
  height: 100vh;
  background: #fff;
}
.swiper{
  width: 100%;
  height: 100%;
}
</style>