<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part">朋友</router-link>
      
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import button from './components/button.vue'
export default {
  components:{
    button
  }
};
</script>

<style scoped>
/* 省略了 其他样式 */
.footer_wrap .router-link-active{
  color: white;
  background: black;
}
</style>