
export default {
    data(){
        return{
            showSideBar: true,
        }
    },
    mounted(){
        this.initResizeEvent()
      },
      methods:{
         initResizeEvent(){
            const width = window.innerWidth;
            if(width < 1200)
              this.showSideBar = false;
            else
              this.showSideBar = true;
            
            window.addEventListener("resize", _ => {
            const width = window.innerWidth;
            if(width < 1200)
              this.showSideBar = false
            else
              this.showSideBar = true
            })
        } 
    },
}