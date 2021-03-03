<template>
    <svg width="24" height="24" class="cursor-pointer">
        <g :fill="fill">
            <path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z"></path>
            <path :stroke="stroke" d="M5.5 13.58s2.42-1.32 6.5.02 7.5.03 7.5.03l-.02-7.95c.01-.05-3.4 1.26-7.48-.08s-6.5-.02-6.5-.02v7.93">
            </path>
        </g>
    </svg>
</template>

<script>
    export default {
        props: {
            fill :{
                type:String,
                required: false
            },
            stroke :{
                type:String,
                required: false
            },
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>

</style>