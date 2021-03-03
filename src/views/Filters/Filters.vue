<template>

 <side-bar :show="showSideBar">
  </side-bar>

    <top-bar @hide="showSideBar = !showSideBar">
  </top-bar>

 
  <div 
    v-if="tasksSameName.length ==0" 
    class="flex justify-center mx-auto h-full items-center w-11/12 text-white"
  >
    <div class="text-xl">
      Sorry, there's no with the name {{searchedTask}}
    </div>
  </div>

  <div v-else>
    <div class="flex justify-center mx-auto mt-20 w-10/12 text-white">
      <div class="mt-1 my-20 w-4/6" >
        <div class="text-xl">
          You searched for 
          <span>
            "{{searchedTask}}"
          </span>
        </div>
        <div v-for="task in tasksSameName" class="mt-5"  >
            <div>
              {{task.date}}
            </div>
            <hr class="my-1"> 
             <show-tasks :date="task.date">
            </show-tasks>
            <span>
              +
            </span>
            <modal
            header="Add Task"
            :date="task.date"
            >
            </modal>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from '@/components/SideBar/SideBar'
import TopBar from '@/components/TopBar/TopBar'
import ResizeEvent from '@/mixins/ResizeEvent.js'
import ShowTasks from '../../components/common/showTasks.vue'
import Modal from '../../components/Modal/Modal.vue'
import { mapState } from 'vuex'

export default {
  components: {SideBar, TopBar, ShowTasks, Modal },
  name: 'SearchPage',
  mixins: [ResizeEvent],

  data(){
    return{
        filterInput: '',
    }
  },
  created(){
      this.filterInput = this.$route.params.input;
      console.log(filterInput)
      this.getTaskInfo();
      
  },
  updated() {
    if(this.searchedTask !== this.$route.params.task){
        this.searchedTask = this.$route.params.task;
        this.getTaskInfo();
    }
  },

  methods:{
      getTaskInfo(){
        
          const searchedTask = this.tasks.filter(e => e.task == this.searchedTask);
          this.tasksSameName = searchedTask;
          console.log(this.tasksSameName.length)
      }
  },
  computed :mapState(['tasks'])
}
</script>

<style lang="scss">

</style>