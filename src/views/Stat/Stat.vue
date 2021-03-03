<template >
 <side-bar :show="showSideBar">
  </side-bar>

    <top-bar @hide="showSideBar = !showSideBar">
  </top-bar>

  <div class="flex justify-center mx-auto mt-20 w-11/12 text-white">
  
      <div class="mt-3 my-20 w-4/6" >
        <div class="text-xl">
           Activties Overview 🎉
           <span class="text-sm font-light">
             {{getName}}
           </span>
           <div class="mt-5 p-3 dark-light-bg rounded shadow-xl">
             <div class=" text-lg">
               Tasks 
               <span class="ml-2 text-xs font-light">
                 {{getPrecent(numOfTasks,numOfTasksFin)}} of tasks are done
               </span>
             </div>
             <div class="text-sm">
                <span>
                  Number Of Tasks 
                  <span class="mx-2 py-1 px-2 rounded-3xl dark-bg">
                    {{numOfTasks}}
                  </span>
                </span>
                <div class="flex flex-col pl-2">
                  <div class="flex mt-3" @click="showFinishedTask = !showFinishedTask">
                    <arrow :clicked="showFinishedTask"></arrow>
                    <span>
                      Finished
                      <span class="mx-2 py-1 px-2 rounded-3xl dark-bg">
                        {{numOfTasksFin}}
                      </span>
                    </span>
                  </div>

                  <div v-show="showFinishedTask" class="ml-4">
                     <show-tasks finished >
                    </show-tasks>
                  </div>
                 
                  <div class="flex mt-3" @click="showUnFinishedTask = !showUnFinishedTask">
                    <arrow :clicked="showUnFinishedTask"></arrow>
                      <span>
                      UnFinished
                      <span class="mx-2 py-1 px-2 rounded-3xl dark-bg">
                        {{numOfTasksUnFin}}
                      </span>
                    </span>                  
                  </div>

                  <div v-show="showUnFinishedTask" class="ml-4">
                     <show-tasks unfinished >
                    </show-tasks>
                  </div>
   
               </div>
             </div>
           </div>

           <div class="mt-5 p-3 dark-light-bg rounded shadow-xl">
             <div class=" text-lg">
               Projects 
             </div>
             <div class="text-sm">
                <span>
                  Number Of Projects 
                  <span class="mx-2 py-1 px-2 rounded-3xl dark-bg">
                      {{numOfProjects}}
                  </span>
                </span>
                <div v-for="project in projects">
                  <stat-project :project="project.project">   
                  </stat-project>
                </div>
             </div>
           </div>
            
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
import { mapState } from 'vuex'
import Btn from '../../components/common/Btn.vue'
import Arrow from '../../components/SideBar/Arrow.vue'
import StatProject from './StatProject.vue'

// @ is an alias to /src

export default {
  components: { SideBar, TopBar , Modal, ShowTasks, Btn, Arrow, StatProject, ShowTasks},
  name: 'Stat',
  mixins:[ResizeEvent],
  data(){
    return{
      showUnFinishedTask:false,
      showFinishedTask:false,
    }
  },
  mounted(){
    console.log('stat',this.projects)
  },
  computed:{
    ...mapState(['projects']),
    getName(){
      const { name } = this.$store.state;
      return name ? `#${name}` : ''
    },
    numOfTasks(){
      return this.$store.state.tasks.length;
    },
    numOfProjects(){
      return this.$store.state.projects.length;
    },
    numOfTasksFin(){
      //console.log(this.$store.state.tasks)
      return this.$store.state.tasks.filter(e => e.finish).length;
    },
    numOfTasksUnFin(){
      console.log('un finish' , this.$store.state.tasks.filter(e => !e.finish))
      return this.$store.state.tasks.filter(e => !e.finish).length;
    }
  },
  methods: {
    getPrecent(tasks, finished){
      return `${ String((finished/tasks)*100).substring(0,3) }%`
    }
  }
  
}
</script>
<style lang="scss" scoped>


</style>
