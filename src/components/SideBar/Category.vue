<template>
  
  <div class="my-2">
    <div 
      class="flex" 
      @click="showProjects = !showProjects"
    >
        <arrow :clicked="showProjects">
        </arrow> 
        <span>
          {{name}}
        </span>
    </div>
    <ul class="list-none px-3 text-sm" v-show="showProjects">
        <slot >
        </slot>
    </ul>
  </div>
</template>

<script>
import Arrow from './Arrow'


export default {
  components: { Arrow },
  name: 'SideBarProjects',
  props:{
      name: {
          type:String,
          require: true
      }
  },
  data(){
    return{
      showProjects: true
      
    }
  },
  methods: {
      addProjectInput(){

      }
  },
  mounted(){
  }
}
</script>
<style lang="scss" module>





</style>
