export default {
    data(){
        return{
            High:'#DE4C4A',
            Medium: '#F49C18',
            Low:'#4073d6',
            None: '#c7c7c7'
            //flagsColor: ['#DE4C4A','#F49C18','#4073d6','#c7c7c7'],
        }
    },
    methods:{
        getFlagColor(p){
           return (
               p === 'High' ? this.High :
               p === 'Medium' ? this.Medium :
               p === 'Low' ? this.Low :
               this.None

           )
        }
    }
}