<template>
    <div class="home-bg flex flex-col w-full">
        <div class="flex flex-col my-10 mx-auto">
            <div>
                <img src="../../public/PMM.png" class="mx-auto" >
            </div>
            <div class="head-text mt-3 text-4xl ">
                Plan My Month App
            </div>
            <div class="small-text my-3">
                A web-based app for organzing people's month easily.
            </div>
        </div>
        <div>
        <div class="flex flex-col w-2/5 justify-center my-3 mx-auto pt-7 pb-4 px-6 border rounded bg-white font-normal">
                <div class="text-center">
                      PMM is only available as a demo. Your work will be saved to local storage and 
                    <span class="font-bold">
                        not
                    </span> 
                    persisted in any database or cloud.
                </div>
                <router-link 
                    to="/app" 
                    class="demo-btn mt-3 mx-auto rounded p-1  text-center">
                    <span class="py-1 px-3 font-semibold text-white">
                        View demo
                    </span>
                </router-link>
            </div>
        </div>
        <div class="flex flex-col mx-auto">
            <div class="head-text my-5 text-3xl">
                Features
            </div>
            <ul class="text-left">
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </li>
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </li>
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </li>
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </li>
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </li>
                <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </li>
            </ul>
        </div>
        <div class="flex flex-col justify-center p-32 bg-white">
            asdsa
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">

.home-bg{
    height: 100vh;
    width:100%;
    background: #f2f2f2;
}
.head-text{
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif ;
    color:#404040;
}
.small-text{
   color: #888;
}
.demo-btn{
    background: #85144b;

}

</style>