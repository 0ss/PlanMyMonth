<template>


 <side-bar :show="showSideBar">
  </side-bar>
    <top-bar @hide="showSideBar = !showSideBar">
  </top-bar>

 
 <div 
    class="flex justify-center mx-auto mt-32 h-full items-center w-11/12 text-white"
    v-if="noResult"
  >
    <div class="text-xl">
      Sorry, there's no {{type=='priority'? 'task' : type}}
      with the {{type}} 
      {{searchedInput}}
    </div>
  </div>
  <div 
    v-else
  >
    <div class="flex justify-center mx-auto mt-20 w-10/12 text-white">
      <div class="mt-1 my-20 w-4/6" >
        <div class="flex flex-col text-xl">
          <span>
          
          Results from the store match with  {{type}}    "{{searchedInput}}"
           {{type == 'tag' ? '📌' : ''}}
          </span>
          
        </div>
        <div v-for="result in resultsFromStore" class="mt-5 p-3 dark-light-bg rounded shadow-xl"  >
            <div>
              {{result.date ? result.date : 'No date was set for this'}}
            </div>
            <hr class="my-1"> 
             <show-tasks 
                :date="result.date"
                :only="result.task"
              >
            </show-tasks>    
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
        searchedInput: '',
        type: '',
        resultsFromStore : [],
        noResult: true
    }
  },
   beforeRouteUpdate (to, from, next) {
    const param = to.params.input;
    console.log(param)
    if(this.searchedInput !== param.substring(param.indexOf('-')+1)){
        const input = to.params.input;
        this.type = input.substring(0,input.indexOf('-'));
        this.searchedInput = input.substring(input.indexOf('-')+1)
        this.getFromStore();
    }
  },
  created(){
      const input = this.$route.params.input;
      this.type = input.substring(0,input.indexOf('-'));
      this.searchedInput = input.substring(input.indexOf('-')+1)
      this.getFromStore();
  },
  
  methods:{
      getFromStore(){
        switch(this.type){
          case 'task':
            const searchedTask = this.tasks.filter(e => e.task == this.searchedInput);
            this.resultsFromStore = searchedTask;
            this.noResult = this.resultsFromStore.length <= 0; 
            break;

          case 'tag':
            const searchedTag = this.tasks.filter(e => {
              if(!e.selectedTags){
                return false
              }
              else{
                const tags = e.selectedTags.filter(tag => tag.toLowerCase() == this.searchedInput);
                return tags.length > 0;
              }  
            });
            this.resultsFromStore = searchedTag;
            //console.log(this.resultsFromStore)
            this.noResult = this.resultsFromStore.length <= 0; 
            break;

          case 'priority':
            const searchedPriority = this.tasks.filter(e => e.priority.toLowerCase() == this.searchedInput);
            this.resultsFromStore = searchedPriority;
            //console.log(searchedPriority, this.resultsFromStore)
            this.noResult = this.resultsFromStore.length <= 0;
            break;
          
        }
         
      }
  },
  computed :mapState(['tasks'])
}
</script>

<style lang="scss">

</style>