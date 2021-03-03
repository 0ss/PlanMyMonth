<template>

    <button class="py-1 focus:outline-none font-normal text-normal text-white " @click="showModal = true">
       {{header}}
    </button>

    <div class="mt-5" v-show="showModal">
        <div class=" fixed z-10 top-0 left-0 flex items-center justify-center w-full h-full" style="background-color: rgba(0,0,0,.5);"  >
            <div class="w-96 mx-2 text-left rounded shadow-xl dark-bg">
                <div class="rounded p-4 shadow-sm dark-light-bg font-bold"  >
                    {{header}}
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="flex flex-col mt-3 px-5">
                        <div class="flex flex-col my-2">
                            <span class="py-1">
                                Name
                            </span>
                            <input 
                                class="p-1 rounded border-gray-300 outline-none dark-input-bg"
                                placeholder="Salah"
                                v-model="name"
                            >
                        </div>
                        <div class="my-3">
                            Face Icon
                            <span class="text-xs font-light">
                                optional, but why not ?
                            </span>
                        </div>
                        <div class="flex flex-wrap mx-auto">
                                <span
                                v-for="(i, index) in icons" :key="index" 
                                class="my-1 mx-3 text-2xl"
                                @click="icon = i"
                                :class="icon == i ? 'rounded border border-gray-300' : ''"
                                >
                                    {{i}}
                                </span>
                       </div>
                        <div class="flex justify-end mt-5 mb-2">
                            <btn class="mx-3" content="Set name and Icon">
                            </btn>
                            <btn content="Cancel"  @click="showModal = false">
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
      header: {
          type: String,
          required: true
      },
    
  },

    data(){
        return{
            showModal:false,
            name: "",
            icons: ['👶','👩🏼‍','👨🏼‍🦱','👩🏽‍🦰','👨‍🦰','🧑🏻‍','👮🏼','👩🏻‍⚕️','🧑','👩🏼','🧟‍♂️','🧟‍♀️'],
            icon: ''
        }
    },
    methods: {
        handleSubmit(){
            const {name, icon } = this;
            if(!name)
                return;
            
            const full = `${name} ${icon? icon : ''}`
            this.$store.dispatch('setName', full)
            this.showModal = false;
            this.name = "";
  

        },

    }, 
    watch: {
        icon(){
            console.log(this.icon)
        }
    }
  
}
</script>


<style lang="scss"  >





</style>
