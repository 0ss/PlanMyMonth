<template>
    <template v-if="getThisDayTasks.length >0">
        <div 
            class="flex justify-between align-center my-2"
            v-for="task in getThisDayTasks" 
            :key="task.id"
        >
            <div>
                <task-and-details 
                    :id="task.id" 
                    :date="task.date"
                    :task="task.task"
                    :comments="task.comments"
                    :priority="task.priority"
                    :selectedTags="task.selectedTags"
                    :finish ="task.finish"
                    :project="task.project"
                    >
                </task-and-details>
            </div>
            <div class="flex">
                <span
                v-if="task.project"
                class="p-1 rounded-lg dark-input-bg text-xs"
                >
                    {{task.project}} 🍕
                </span>
                <span
                v-if="isProjectFav(task.project)"
                class="ml-1 p-1 rounded-lg dark-input-bg text-xs"
                >
                    ⭐
                </span>
                <span class="mx-2">
                    <flag-icon 
                        :fill="getFlagColor(task.priority)" 
                        :stroke="getFlagColor(task.priority)"
                        style="cursor: default"

                    >
                    </flag-icon>
                </span>
                <span
                    class="cursor-pointer"
                    @click="removeTask(task.id)"
                >
                    🗑️
                </span>
            </div>
        </div>
    </template> 
</template>

<script>
import taskAndDetails from './taskAndDetails.vue';
import flagColors from '@/mixins/flagColors.js'
import FlagIcon from '../../components/Modal/flagIcon.vue';
export default {
  components: { taskAndDetails, FlagIcon },
  mixins: [flagColors],
    props: {
        date: {
            type: String,
            required: false
        },
        only: { // This props if only I want specfic task from a date
            type:String,
            requried: false
        },
        projectName :{
            type:String,
            requried: false
        },
        finished :{
            type:Boolean,
            requried: false
        },
        unfinished :{
            type:Boolean,
            requried: false
        },
        finishedTasksProject:{
            type:String,
            requried: false
        },
         unfinishedTasksProject:{
            type:String,
            requried: false
        },
    
    
    },
    data(){
        return {
        }
    },
    mounted(){
    },
    methods:{
        removeTask(id){
            this.$store.dispatch('removeTask', {id})
        },
        isProjectFav(project){
            return (
                project 
                ? this.$store.state.projects.filter(e => e.project == project)[0]?.isFav
                : false
            )
        }
    },
    computed : {
        getThisDayTasks(){
            const tasks = this.$store.state.tasks;
            if(this.only){
                const tasksWithOnly = tasks.filter(task => task.date === this.date )
                return tasksWithOnly.filter(task => task.task == this.only)
            }
            else if(this.finished){
                return tasks.filter(task => task.finish )
            }
            else if(this.unfinished){
                return tasks.filter(task => !task.finish )

            }
            else if(this.projectName){
                return tasks.filter(task => task.project === this.projectName )
            }
            else if(this.finishedTasksProject){
                console.log(this.finishedTasksProject)
             return this.$store.state.tasks.filter(e => e.project == this.finishedTasksProject && e.finish)

            }
            else if(this.unfinishedTasksProject){
             return this.$store.state.tasks.filter(e => e.project == this.unfinishedTasksProject && !e.finish)

            }


            return tasks.filter(task => task.date === this.date )
            
        },

      
    }
}
</script>

<style lang="scss" >

</style>