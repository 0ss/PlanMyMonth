<template>
    <div class="fixed top-0 flex justify-between border-none w-screen shadow dark-light-bg text-white" >
        <div class="top1-list flex items-center py-3">
            <ul class="top1-list-ul flex ml-5 list-none">
                <li class="mt-1 px-1.5 cursor-pointer">
                    <open-icon @click="$emit('hide')" color="white" >
                    </open-icon>
                </li>
                <li class="mt-1 px-1.5 cursor-pointer" > 
                   <home-icon color="white">
                   </home-icon>
                </li>
                <li>
                    <search>
                    </search> 
                </li>
            </ul>
        </div>
        <div class="top2-list flex py-4 px-5 ">
            <span class="mx-2 py-3 px-3 rounded-3xl dark-input-bg stat">
                <router-link to="/app/stat">
                    🏆
                </router-link>
            </span>
            <div class="py-2 px-3 rounded-3xl dark-input-bg name ">
                <modal-name :header="getName">    
                </modal-name>
            </div>
        </div>
    </div>
</template>

<script>
import ModalName from '../Modal/ModalName.vue'
import HomeIcon from './HomeIcon'
import OpenIcon from './OpenIcon'
import Search from './Search'
export default {
  components: { OpenIcon, HomeIcon, Search, ModalName },
    data(){
        return{
            isOpen: true,
            isDark: true
        }
    },
    created(){
        //get Name
    },
    methods:{

       
    },
    computed:{
        getName(){
            const { name } = this.$store.state; 
            return name ? name : "What's your name?"
        }
    },
    watch: {
        isDark(){
            this.$store.dispatch('setDarkMode', this.isDark)
        }
    }

}
</script>

<style lang="scss" >


@media only screen and (max-width: 500px) {
    .name{
      display: none;
    }
    .stat{
        margin: 0;
        padding: 6px;
    }
}
</style>