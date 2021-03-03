<template >
  
  <side-bar :show="showSideBar">
  </side-bar>
    <top-bar @hide="showSideBar = !showSideBar">
  </top-bar>

  

  <div class="flex justify-center mx-auto mt-20 w-11/12 text-white">
      <div class="mt-1 my-20 w-4/6" >
        <div class="text-xl">
           Today 
           <span class="text-sm font-light">
             {{getToday}}
           </span>
        </div> 

         <div class="mt-10">
          Yesterday ‧  Overdue ‧ {{getYesterday}}
          <hr class="my-1">
          <show-tasks :date="getYesterday" >
          </show-tasks>
        </div>

        <div class="mt-10">
          Today ‧ {{getToday}}
          <hr class="my-1">
          <show-tasks :date="getToday" >
          </show-tasks>
            <span>
              +
            </span>
            <modal
            type="Task"
            :date="getToday"
            >
            </modal> 
        </div>
      </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar/SideBar'
import TopBar from '@/components/TopBar/TopBar'
import ResizeEvent from '@/mixins/ResizeEvent.js'
import Modal from '../../components/Modal/Modal.vue'
import ShowTasks from '@/components/common/showTasks.vue'

// @ is an alias to /src

export default {
  components: { SideBar, TopBar , Modal, ShowTasks},
  name: 'TodoApp',
  mixins: [ResizeEvent],
  data(){
    return{
    }
  },
  computed : {
    getYesterday(){
      return new Date(new Date()-(86400*1000)).toString().substring(0,16)

    },
    getToday(){
      return new Date().toString().substring(0,16);
    }
  }  
}
</script>
<style lang="scss" module>

.wrapper{
  display:flex;
  flex-direction: row;
}

</style>
