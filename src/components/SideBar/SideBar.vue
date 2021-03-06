<template>
    <div 
      class="fixed sidebar mt-3 h-screen text-base dark-light-bg text-white font-semibold" 
      :class="show ? 'w-56' : 'w-0'"
      style="top:63.5px"
      >
     <div class="px-5 py-3">
        <category name="Calendar">
          <li class="my-2">
              <router-link  to= "/app"  >
                <span class="transition hover:text-gray-300">
                  🌥️ Today   
                </span>       
              </router-link>
          </li>
          <li class="my-2">
            <router-link to= "/app/upcoming/week" 
            >
              <span class="transition hover:text-gray-300">
                🗓️ This week 
              </span>
            </router-link>
          </li>
          <li class="my-2">
            <router-link  to= "/app/upcoming/month"  
            >
              <span class="transition hover:text-gray-300">
                🗓️ This Month 
              </span>
            </router-link>
          </li>
        </category> 
         <category name="Projects"> 
          <li 
            v-for="(p, index) in getProjects"
            :key="index"
            class="my-2"
          >
              <router-link :to="'/app/projects/'+p" >
                <span class="transition hover:text-gray-300">
                  🍕 {{p}} 
                </span>       
              </router-link>
          </li>
            +
          <modal 
            type="Project"
          > 
          </modal>
        </category>
        <category name="Favourite Projects"> 
          <li 
            v-for="(p, index) in getFavProjects"
            :key="index"
            class="my-2"
          >
              <router-link :to="'/app/projects/'+p" >
                <span class="transition hover:text-gray-300">
                  🍕 {{p}} 
                </span>       
              </router-link>
          </li>

        </category> 
        
        <category name="Priority">
             <li 
              class="my-2"
              v-for="(p, index) in priorities" 
              :key="index"
             >
              <router-link :to="'/app/search/priority-'+p.toLowerCase()" >
                <div class="transition hover:text-gray-300">
                  <div class="flex flex-row" >
                    <flag-icon 
                      :fill="getFlagColor(p)" 
                      :stroke="getFlagColor(p)"
                    >
                    </flag-icon>
                    <span class="mx-3">
                        {{p}}
                    </span>
                  </div>  
                </div>       
              </router-link>
          </li>
        </category>
        <category name="Tags">
             <li 
              class="my-2"
              v-for="(tag, index) in getAllTags" 
              :key="index"
             >
              <router-link :to="'/app/search/tag-'+tag.toLowerCase()" >
                <div class="transition hover:text-gray-300">
                  <div class="flex flex-row" >     
                    <span class="mx-3">
                      📌 {{tag}}
                    </span>
                  </div>  
                </div>       
              </router-link>
          </li>
        </category>  
     </div>
        
        
   
    </div>
</template>

<script>

import Arrow from './Arrow'
import Modal from '../Modal/Modal'
import Category from './Category.vue'
import FlagIcon from '../Modal/flagIcon.vue'
import flagColors from '@/mixins/flagColors.js'
import { mapState } from 'vuex'
 
// slots in pop put windows. 
export default {
  components: { Category, Modal, Arrow, Category, FlagIcon  },
  name: 'SideBar',
  mixins: [flagColors],
  props:{
    show:{
      type:Boolean
    }
  },
  data(){
    return{
      priorities: ['High', 'Medium', 'Low', 'None'],
    }
  },
  computed: {
    getAllTags(){
      let allTags = [];
      this.tasks.forEach(e => allTags.push(...e.selectedTags))
      allTags = [...new Set(allTags)]
      return allTags;
    },
    getProjects(){
      return this.$store.state.projects.map(e => e.project);
    },
    getFavProjects(){

      return this.$store.state.projects.filter(e => e.isFav).map(e => e.project);
    },
    ...mapState(['tasks'])
  },
  watch:{
    show(){
    }
  }
}
</script>
<style lang="scss">

.sidebar{
      transition: top ease 0.5s;

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
