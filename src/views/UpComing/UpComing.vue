<template >
 
 <side-bar :show="showSideBar" class="h-full">
      </side-bar>
    <top-bar @hide="showSideBar = !showSideBar">
    </top-bar>
      

    <div class="flex justify-center mx-auto mt-20 w-10/12 text-white">
      <div class="mt-1 my-20 w-4/6" >
        <div v-for="date in getPeriod" class="mt-5"  >
            <div>
              {{date}}
            </div>
            <hr class="my-1"> 
             <show-tasks :date="date">

            </show-tasks>
            <span>
              +
            </span>
            <modal
            type="Task"
            :date="date"
            >
            </modal>
          </div>
      </div>
    </div>
   
</template>

<script>
import SideBar from '@/components/SideBar/SideBar'
import TopBar from '@/components/TopBar/TopBar'
import Modal from '@/components/Modal/Modal'
import ResizeEvent from '@/mixins/ResizeEvent.js'
import { mapState } from 'vuex'
import showTasks from '@/components/common/showTasks.vue'

export default {
  name: 'TodoApp',
  components: { SideBar, TopBar, Modal , showTasks },
  mixins: [ResizeEvent], 
   beforeRouteUpdate (to, from, next) {
    this.period = to.params.period == 'week' ? 7 : 30;;
    next();
  },
  created(){
    this.period = this.$route.params.period == 'week' ? 7 : 30;
  },
  data(){
    return{
      period: ''
    }
  },
  computed: {
    getPeriod(){
      const dates = [];
      for(let i =1; i<=this.period; i++){
          dates.push(new Date(new Date().getTime()+86400000*i).toString().substring(0,16))
      }  
      console.log(dates)
      return dates
    },
    ...mapState(['tasks'])
  },
  watch:{
    period(){
    }
  }
}
</script>
<style lang="scss" module>


hr{
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

</style>
