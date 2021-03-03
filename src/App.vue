<template>
 
  <router-view/>
</template>

<script>
import darkMode from '@/mixins/darkMode.js'
export default{
  mixins: [darkMode],

  created(){
    this.$store.dispatch('initStore');
    this.$store.dispatch('cleanStore');
  }
}

</script>
<style lang="scss" >


#app{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  height: 100%;
}

</style>
