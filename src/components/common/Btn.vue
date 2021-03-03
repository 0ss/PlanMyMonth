<template>
    <button class="outline-none border-none py-2 px-4 black-bg cursor-pointer text-xs	font-semibold focus:outline-none transition"
    :type="type"
    :class="dark ? 'hover:bg-black' : 'hover:bg-gray-200'"
    > 
        {{content}}
    </button>
</template>

<script>


export default {
  name: 'Btn',
  props: {
    content: {
      type:String,
      require: true
    },
    type:{
      type:String,
      required: false
    }
  },
  data(){
    return{
      btn: 'btn'
    }
  },
  methods:{
     
  },
  computed:{
    dark(){
      return this.$store.state.darkMode;
    }
  }
  
}
</script>
<style lang="scss" module>

</style>
