<template>

    <form @submit.prevent="fetchTask">
        <div class="search ml-2 outline-none border-gray-600 rounded py-1 px-1 dark-input-bg">
            <input 
            class="ml-3 border-none outline-none bg-transparent"
            placeholder="Find task by name"
            v-model="searchQuery"
            >
            <i 
            class="fas fa-search px-1 cursor-pointer sm-icon"
            @click="fetchTask"
            >
            </i>
            <i 
                class="fas fa-times  px-1 cursor-pointer sm-icon"
                @click="searchQuery = ''"
            >     
            </i>
        </div>
    </form>

</template>

<script>
    export default {
        data(){
            return {
                searchQuery: ""
            }
        },
        methods:{
            fetchTask(){
                this.$router.push(
                    {path: `/app/search/task-${this.searchQuery}`}
                )
            }
        }
        
    }
</script>

<style lang="scss" >


// @media only screen and (max-width: 900px) {
//   .sm-icon {
//       font-size: 10px;
//     }
// }
  
</style>