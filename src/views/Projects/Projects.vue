<template >
   <side-bar :show="showSideBar">
  </side-bar>
    <top-bar @hide="showSideBar = !showSideBar">
  </top-bar>

 

  <div class="flex justify-center mx-auto mt-20 w-11/12 text-white">
      <div class="mt-1 my-20 w-4/6" >
        <div class="text-xl">
           Project 
           <span class="text-sm font-light">
             {{project?.project}}
           </span>
        </div> 

        <div class="flex justify-between mt-10">
          <div>
            Project Tasks 🎉
          </div>
            <div class="bg-dark">
              <btn content="Delete project" @click="removeProject(project.id)">
              </btn>
            </div>
        </div>
        <div>
          <hr class="">
          <show-tasks :projectName="project?.project" >
          </show-tasks>
            <span>
              +
            </span>
            <modal
                type="Task"
                :project="project?.project"
                :date="getDate"
            >
                <template #projectTask>
                    <label class="my-1 ">
                        Want to assign a date to the task ?
                        <br>
                        <span class="text-xs font-light">
                        optional, and up to one month.
                        </span>
                    </label>  
                    <div class="flex flex-row justify-center">
                        <button 
                        type="button"
                        class="mx-1 py-1 px-5 rounded dark-light-bg cursor-pointer text-xs font-semibold  focus:outline-none"
                        :class="{'bg-black text-white': yesAssignDate}"
                        @click="yesAssignDate = true, noAssignDate=false"

                        >
                          Yes
                        </button>
                        <button 
                        type="button"
                        class="mx-1 py-1 px-5 rounded dark-light-bg cursor-pointer text-xs font-semibold  focus:outline-none"
                        :class="{'bg-black text-white': noAssignDate}"
                        @click="yesAssignDate = false, noAssignDate=true"
                        >
                            No
                        </button>
                    </div>      
                    <div class="flex justify-center">
                      <input 
                        type="date" 
                        name="myDate"
                        ref="taskDate" 
                        v-show="yesAssignDate"
                        v-model="date"
                        class="my-3 px-3 w-6x 
                        /12 rounded border-none  shadow-xl font-semibold focus:outline-none "
                        :min="getMinDateRange"
                        :max="getMaxDateRange"
                    >
                    </div>
                </template>  
                      
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
import { mapState } from 'vuex'
import Btn from '../../components/common/Btn.vue'

// @ is an alias to /src

export default {
  components: { SideBar, TopBar , Modal, ShowTasks, Btn},
  name: 'TodoApp',
  mixins: [ResizeEvent],
  data(){
    return{
        searchedProject: '',
        project: '',
        taskDate:'',
        date:'',
        showInputDate: true,
        yesAssignDate: false,
        noAssignDate: true
    }
  },
   beforeRouteUpdate (to, from, next) {
    this.searchedProject = to.params.project;
    this.getProjectFromStore;
    next();
  },
  created(){
      this.searchedProject = this.$route.params.project;
      this.getProjectFromStore;
      this.getDate;
  },
  methods:{
    removeProject(id){
      this.$store.dispatch('removeProject', {id});
      this.$router.push('/app/')
    }
    
  },
  computed : {
      getMinDateRange(){
        const date = new Date();
        const zeroBeforeMonth = date.getUTCMonth()+1 < 10 ? 0 : '';
        const zeroBeforeDay = date.getUTCDate() < 10 ? 0 : '' 
        return `${date.getUTCFullYear()}-${zeroBeforeMonth}${date.getUTCMonth()+1}-${zeroBeforeDay}${date.getUTCDate()}`
      },
       getMaxDateRange(){
        const date = new Date(new Date().getTime()+86400000*30);
        const zeroBeforeMonth = date.getUTCMonth()+1 < 10 ? 0 : '';
        const zeroBeforeDay = date.getUTCDate() < 10 ? 0 : '' 
        return `${date.getUTCFullYear()}-${zeroBeforeMonth}${date.getUTCMonth()+1}-${zeroBeforeDay}${date.getUTCDate()}`
       },
      getProjectFromStore(){
      const { projects } = this.$store.state;
      projects.forEach(e => {
      })
      this.project = projects.filter(e => e.project == this.searchedProject)[0];
      return 
      },
      getDate(){
          if(this.noAssignDate || !this.date){
              return null;
          }
          return  new Date(this.date).toString().substring(0,16);
      }
    },
    watch: {
      date(){
      }
    }
}
</script>
<style lang="scss" scoped>

.wrapper{
  display:flex;
  flex-direction: row;
}

input[type="date"] {
    background-color: rgb(255, 255, 255) !important;
    color: black;
    &::-webkit-datetime-edit-month-field {
    color: rgb(0, 0, 0);
  }
  &::-webkit-datetime-edit-day-field {
    color: rgb(0, 0, 0);
  }
  &::-webkit-datetime-edit-year-field {
    color: rgb(0, 0, 0);
  }

}
</style>
