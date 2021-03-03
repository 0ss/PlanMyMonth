<template>
    <svg class="menu_icon" width="24" height="24" viewBox="0 0 24 24" :fill="getColor"
    
    >
        <path fill-rule="evenodd" d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"></path></svg>
</template>

<script>
       export default {
        props :{
            color : {
                type: String,
                required: false,
                default: 'white'
            }
        },
        computed : {
            getColor(){
                return this.color
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>