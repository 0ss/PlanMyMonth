<template>

    <button class="py-1 px-1 rounded focus:outline-none font-light text-sm text-white hover-dark-light" @click="showModal = true">
        Add {{type}}
        
    </button>

    <div class="mt-5 " v-show="showModal">
        <div class=" fixed top-0 left-0 flex items-center justify-center w-full h-full" style="background-color: rgba(0,0,0,.5);"  >
            <div class=" h-auto w-96 mx-2 text-left rounded shadow-xl dark-bg">
                <div class="rounded p-4 shadow-sm dark-light-bg font-bold"  >
                    Add {{type}}
                    <span v-show="type=='Project'">
                        🍕 
                    </span>
                    <span class="font-light">

                        <span v-show="type=='Task'">
                               &nbsp;|
                        </span>
                        {{project ? project : date}}
                    </span>
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="flex flex-col mt-3 px-5">
                        <div class="flex flex-col my-2">
                            <span class="py-1">
                                {{type}}
                            </span>
                            <input 
                                
                                class="task p-1 rounded border-gray-300 outline-none dark-input-bg"
                                placeholder="Math homework from page 10 first question"
                                v-model="task"
                            >
                        </div>
                        <div v-if="type=='Project'">
                           <div class="flex flex-row my-1">
                            <span>
                                Add to favourites        
                            </span>
                            <switch-btn @checked="checkIsFav">
                            </switch-btn>
                            
                            </div>
                        </div>
                        <div v-else>
                            <div class="flex flex-col my-2">
                                <span class="py-1">
                                    Comments <br>
                                    <span class="text-xs font-thin">
                                        This is just an optional field, for
                                        additional information. You can just 
                                        leave it empty.
                                    </span>
                                </span>
                                <input 
                                    class="comments p-1 rounded border-gray-300 outline-none dark-input-bg"
                                    placeholder="Grap a drink. Call emma to solve the homework together"
                                    v-model="comments"
                                >
                            </div>
                            <slot name="projectTask">
                            </slot>
                        <div class="flex justify-center my-2">
                        <div 
                            class="mx-2 py-2 px-10 rounded dark-light-bg cursor-pointer focus:outline-none"
                            @click="priorityBtn=!priorityBtn; tagsBtn= false;"
                            :class="{'bg-black text-white': priorityBtn}"
                        >
                            Priority 🛎️

                        </div>
                        <div 
                            class="mx-2 py-2 px-10 rounded dark-light-bg  cursor-pointer focus:outline-none"
                            @click="tagsBtn= !tagsBtn; priorityBtn= false;"
                            :class="{'bg-black text-white': tagsBtn}"
                        >
                            Tags 🔖

                        </div>
                        </div>
                            <div v-show="priorityBtn" class=" rounded shadow-xl dark-light-bg">
                                <div class="flex flex-col p-5">
                                    <div class="flex flex-col mb-3">
                                        Set priority of your task
                                        <span class="text-xs font-thin"> 
                                        not necessarily but recommended
                                        </span>
                                    </div>
                                    <div class="flex items-center" v-for="(p, index) in priorities" :key="index">
                                        <div class="flex my-1" >
                                            <flag-icon 
                                                :fill="getFlagColor(p)" 
                                                :stroke="getFlagColor(p)"
                                                @click="priority = p"
                                                :class="priority == p ? 'rounded border border-gray-300' : ''"
                                            >
                                            </flag-icon>
                                            <span class="mx-3">
                                                {{p}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="tagsBtn" class="rounded shadow-xl dark-light-bg">
                                <div class="flex flex-col p-5">
                                    <div class="flex flex-col mb-3">
                                        Add tags for your task
                                        <span class="text-xs font-thin"> 
                                        not necessarily but recommended
                                        </span>
                                    </div>
                                    <div>
                                    <div class="mb-3 rounded  my-1 py-1 px-1  dark-input-bg focus:outline-none">
                                        <input 
                                            class="w-11/12 outline-none dark-input-bg "
                                            v-model="newTag"
                                            placeholder="Enter new tag"
                                        >
                                        <span 
                                            @click="addTag" 
                                            title="Insert tag"
                                            class="cursor-pointer"
                                        >
                                            ✏️
                                        </span>

                                    </div>

                                    </div>
                                    <div class="flex flex-col justify-between">
                                        <div 
                                        class="flex justify-between my-1" 
                                        v-for="(tag, index) in tags" 
                                        :key="index"
                                        >
                                                <label :for="date+tag"
                                                class="rounded text-xs"> 
                                                📌
                                                    {{tag}}
                                                </label> 
                                                <input 
                                                    type="checkbox"
                                                    v-model="selectedTags"
                                                    :id="date+tag"
                                                    :value="tag"
                                                    class="border-none rounded-full w-4 h-4 cursor-pointerbg-gray-100 focus:outline-none"
                                                />   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-10 mb-2">
                            <btn class="mx-3" content="Add Task" type="submit">
                            </btn>
                            <btn content="Cancel"  @click="showModal = false" type="button">
                            </btn>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SwitchBtn from './SwitchBtn.vue'
import Btn from '../common/Btn.vue'
import FlagIcon from './flagIcon.vue'
import flagColors from '@/mixins/flagColors.js'
import { mapGetters, mapState } from 'vuex'

export default {
  components: { SwitchBtn, Btn, FlagIcon },
  mixins: [flagColors],
  props: {
      type: {
          type: String,
          required: true
      },
      project:{
          type: String,
          required: false
      },
      date: {
          type: String  ,
          required: false,
      },
  },

    data(){
        return{
            showModal:false,
            task: "",
            comments: "",
            priorities: ['High', 'Medium', 'Low', 'None'],
            tags:['Family','Personal', 'Work'],
            priority : "None",
            selectedTags:[],
            isFav: false,
            newTag: "",
            priorityBtn: false,
            tagsBtn:false,
        }
    },
    computed: {
         dark(){
            return this.$store.state.darkMode;
        }   
    },
    methods: {
        addTag(){
            const { newTag } = this;
            if(!newTag){
                return;
            }
                
            this.tags.push(newTag);
            this.newTag = ""
            
        },
        handleSubmit(){
            if(this.type == 'Project'){
                this.submitProject();
                return
            }
            const {date, task, comments, priority} = this;
            const finish = false; 
            const project = this.project ? this.project : ''
            if(!task)
                return;
            const selectedTags = Object.values(this.selectedTags) 
            const id = Date.now()
            this.$store.dispatch('addTask', {
                id, date, task, comments, priority, selectedTags, finish, project
            })
            console.log(this.data, this.project)
            this.showModal = false;
            this.task = "";
            this.comments = "";
            if(this.project){
                this.project = "";
            }
            console.log(this.project)

            this.selectedTags = [];

        },
        checkIsFav(status){
            this.isFav = status
        },
        submitProject(){
            const {task, isFav} = this;
            const project = task
            if(!project)
                return;

            const id = Date.now()
            this.$store.dispatch('addProject', {
                id, project, isFav
            })
            this.showModal = false;
            this.task = "";
            this.isFav = false;
        }
    }, 
}
</script>


<style lang="scss"  >

/* appearance for checked radiobutton */
.priority:checked{
    background: black;
}
.tags:checked{
    background: black;
}
.task, .comments::placeholder{
    font-size: 12px;
}

.modal{
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  &::-webkit-scrollbar-thumb {
    background: #6649b8;
  }
}



</style>
