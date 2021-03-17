<template>
    <div class="home-bg flex flex-col w-full">
        <div class="flex flex-col my-10 mx-auto">
            <div>
                <img src="../../public/PMM.png" class="mx-auto" >
            </div>
            <div class="head-text mt-3 text-3xl font-light text-center ">
               <span class="font-normal">P</span>lan 
               <span class="font-normal">M</span>y 
               <span class="font-normal">M</span>onth App
            </div>
            <div class="small-text my-3">
                A web-based app for organzing people's month easily.
            </div>
        </div>
        <div>
        <div class="demo-box flex flex-col w-3/5 justify-center my-3 mx-auto pt-7 pb-4 px-6 border rounded font-normal">
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
        <div class="w-9/12 my-16 mx-auto shadow-2xl">
            <img src="../../public/p2.png" class="rounded-md">
        </div>
        <div class="flex flex-col mx-auto">
            <div class="head-text my-5 mx-auto text-3xl">
               Main Features
            </div>
            <ul class="w-4/6 text-base font-normal mx-auto  list-disc">
                <li>
                    <span class="font-medium">
                        Organzing tasks up to one month - 
                    </span>
                   the ability of adding task for any day up to month
                </li>
                <li>
                    <span class="font-medium">
                        Adding additional comments for any task - 
                    </span>
                   it can be shown on clicking the task, it is used of any additional comments are related to the task
                </li>
                <li>
                    <span class="font-medium">
                        Calendar -
                    </span>
                   view tasks for today, this week and this month
                </li>
                <li>
                    <span class="font-medium">
                        Assigning tags -
                    </span>
                    for tasks, with option of adding new tags, used for making seperation of tasks easier               
                </li>
                <li>
                    <span class="font-medium">
                        Setting priority for tasks -
                    </span>
                    tasks can have priority with colored flag next to them that will appear on the app
                </li>
                <li>
                    <span class="font-medium">
                        Viewing records achievement -
                    </span>
                    view how many tasks have been done with clear precentage
                </li>
                <li>
                    <span class="font-medium">
                        Adding favourite project -
                    </span>
                    that would be on the sidebar on a seperate place from the all projects
                </li>
                <li>
                    <span class="font-medium">
                        Search bar -
                    </span>
                    for searching tasks, the search bar will bring any task that matches or close to the written input
                </li>
                <li>
                    <span class="font-medium">
                        No database -
                    </span>
                    Yes it is a feature, saving the data in the browser is useful for projects like this and faster
                </li>
                <li>
                    <span class="font-medium">
                        Single page application -
                    </span>
                    the app is fast since only one request is needed 
                </li>
                <li>
                    <span class="font-medium">
                        Icons next to task -
                    </span>
                    icons will be set next to tasks to see if this task belongs to what project, or what is the priority of the task and so on.
                </li>
                <li>
                    <span class="font-medium">
                        Filter tasks -
                    </span>
                    by either the priority ( e.g show only high priority task) or filter task by tags ( e.g show only task with the tag 'work')
                </li>
                <li>
                    <span class="font-medium">
                       No tracking or analytics -
                    </span>
                    'nuff said
                </li>
                
            </ul>
        </div>
        <div class="w-9/12 my-16 mx-auto shadow-2xl">
            <img src="../../public/p1.png" class="rounded-md">
        </div>
        <div class="footer flex flex-col justify-center mt-24 p-12 bg-white">
            <div class="flex flex-col mx-auto">
                <a href="https://github.com/akaSalah/PlanMyMonth">
                     <i class="fa fa-github" style="font-size:36px"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.home-bg{
    height: 100%;
    width:100%;
    background: #ffffff !important;
}
.head-text{
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif ;
    color:#404040;
}
.small-text{
   color: #888;
}
.demo-box{
    background: #f2f2f2;

}

.demo-btn{
    background:#6a9dfb;
    &:hover{
        background:#6a9dfbcb;
        transition: 0.3s;

    }
}
.footer{
    background: #f2f2f2;
}
ul{
    li{
        margin:5px 0;
    }
}
</style>