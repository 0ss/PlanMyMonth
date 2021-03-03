<template>

  <div v-show="showDetails">
        <div class="fixed top-0 left-0 flex items-center justify-center w-full h-full" style="background-color: rgba(0,0,0,.5);" >
            <div class="h-auto w-96 mx-2 text-left dark-bg  text text-white rounded shadow-xl">
                <div class="flex rounded p-4 shadow-sm dark-light-bg font-bold">
                    <span class="mr-2">
                        {{task}}
                    </span>
                   <flag-icon
                        :fill="getFlagColor(priority)"
                        :stroke="getFlagColor(priority)"
                   >
                   </flag-icon>
                </div>
                 <div class="my-4 mx-3 p-3  rounded shadow-lg dark-light-bg">
                      <div 
                      v-if="project"
                      class="flex flex-col items-center my-3 "
                      >
                            <span class="my-1">
                                Project 🍕
                            </span>
                             <span class="text-sm font-light">
                                {{project}}
                            </span>
                        </div>
                        <div class="flex flex-col items-center my-3 ">
                            <span class="my-1">
                                Date  ⌛
                            </span>
                             <span class="text-sm font-light">
                                {{date ? date : 'No date is set '}}
                            </span>
                        </div>
                        <div class="flex flex-col items-center my-3 ">
                            <span class="my-1">
                                Comments 💡
                            </span>
                             <span class="mx-4 text-sm font-light">
                                    {{getComments}}            
                            </span>
                        </div>
                        <div class="flex flex-col items-center my-3 ">
                            <span class="my-1">
                                Tags 📌
                            </span>
                            <div 
                                v-if="selectedTags.length >0"
                                class="flex flex-col"
                            >
                                 <span 
                                    class="text-sm font-md"
                                    v-for="(tag, index) in getTags"
                                    :key="index"
                                >
                                   - {{tag}}            
                            </span>
                            </div>
                            <div v-else class="font-light">
                                No tags for this task
                            </div>
                        </div>
                 </div>
                 <div class="mt-10 mb-2 mx-3 flex justify-end ">
                    <btn content="Close"  @click="showDetails = false">
                    </btn>
                </div>
            </div>
        </div>
    </div>
  
    <input 
        type="checkbox" 
        class="checkbox-round" 
        :id="id"
        @click="finish = !finish"
        :checked="finish"
    />
    <span 
        class="ml-3 p-2 rounded cursor-pointer hover-dark-light"
        :class="finish? 'line-through	text-gray-400': ''"
        @click="showDetails =true"
    >
        {{task}}
    </span>
</template>

<script>
import btn from '@/components/common/Btn.vue'
import FlagIcon from '../../components/Modal/flagIcon.vue'
import flagColors from '@/mixins/flagColors.js'

export default {
    components : { btn, FlagIcon },
    mixins: [flagColors],

    props: {
        id: {
            type: Number,
            required: true
        },
        date:{
            type: String,
        },
        task:{
            type: String,
        },
        comments:{
            type: String,
        },
        priority:{
            type: String,
        },
        selectedTags:{
            type: Array,
        },
        finish :{
            type: Boolean
        },
        project:{
            type: String,
        },
    },

    data(){
        return {
            showDetails: false,

        }
    },
    computed : {
        getComments(){
          return  this.comments ? this.comments : 'No comment for this task' 
        },
         getTags(){
          return  this.selectedTags ? this.selectedTags : 'No tags for this task' 
        }
    },
    mounted(){
        console.log(this.finish)
    },
    watch :{
        finish(){
            console.log(this.finish)
            const { id , finish} = this;
            this.$store.dispatch('finishTask', { id, finish })
        }
    }
}
</script>

<style lang="scss" >
.checkbox-round {
    width: 1.3em;
    height: 1.4em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 0px solid #ddd;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}

.checkbox-round:checked {
    background-color: rgb(56, 56, 56);
}
.checkbox-round::after{
    color: rgb(255, 255, 255);    
    content: "🗸";
    padding: 3px;
}


</style>