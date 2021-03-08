<template>
    <div class="flex flex-col my-4 pl-2">
        <div>
            🍕 {{project}}
             <span class="ml-2 text-xs font-light">
                 <span v-show="numOfProjectsTasks >0">
                     {{getPrecent(numOfProjectsTasks,getFinishedProjectTasks.length)}} of 
                    {{project}} tasks are done
                 </span>
            </span>
        </div>
        <div class="flex mt-3 ml-3 " @click="showFinishedProjectTask = !showFinishedProjectTask">
            <arrow :clicked="showFinishedProjectTask"></arrow>
            <span>
                Finished
                <span class="mx-2 py-1 px-2 rounded-3xl dark-bg">
                {{getFinishedProjectTasks.length}}
                </span>
            </span>
        </div>

        <div v-show="showFinishedProjectTask" class="ml-5">
            <show-tasks :finishedTasksProject="project" >
            </show-tasks>
        </div>
        
        <div class="flex mt-3 ml-3" @click="showUnFinishedProjectTask = !showUnFinishedProjectTask">
            <arrow :clicked="showUnFinishedProjectTask"></arrow>
            <span>
            UnFinished
                <span class="mx-2 py-1 px-2 rounded-3xl dark-bg">
                {{getUnFinishedProjectTasks.length}}
                </span>
            </span>                  
        </div>

        <div v-show="showUnFinishedProjectTask" class="ml-5">
            <show-tasks :unfinishedTasksProject="project">
            </show-tasks>
        </div>
    </div>
</template>

<script>
import ShowTasks from '../../components/common/showTasks.vue';
import Arrow from '../../components/SideBar/Arrow.vue';
export default {
  components: { Arrow, ShowTasks },
    name:'StatProject',
    props:{
        project:{
            type:String,
            required: true
        }
    },
    data(){
        return{
            showFinishedProjectTask:false,
            showUnFinishedProjectTask:false
        }
    },
    computed:{
        numOfProjectsTasks(){
           return this.$store.state.tasks.filter(e => e.project == this.project).length;
        },
        getFinishedProjectTasks(){
            return this.$store.state.tasks.filter(e => e.project == this.project && e.finish)
        },
        getUnFinishedProjectTasks(){
            return this.$store.state.tasks.filter(e => e.project == this.project && !e.finish)
        }
    },
    methods: {
        getPrecent(tasks, finished){
            return `${ String((finished/tasks)*100).substring(0,4) }%`
        }
    }
}
</script>

<style>

</style>