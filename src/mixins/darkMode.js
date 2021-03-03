


// export default {

//     created(){
//         this.$store.state.darkMode ? this.setDark() : this.removeDark();
//     },
//     methods: {
//         setDark(){
//             document.getElementsByClassName('text-white').forEach(e =>{
//                 e.classList.remove('lightmode-text');
//               });
//               document.getElementsByClassName('dark-bg').forEach(e => {
//                   e.classList.remove('light-bg');
//               });
//               document.getElementsByClassName('dark-light-bg').forEach(e => {
//                   e.classList.remove('light-light-bg');
//               });
//               document.getElementsByClassName('dark-input-bg').forEach(e => {
//                   e.classList.remove('light-input-bg');
//               });
//               document.getElementsByClassName('hover-dark-light').forEach(e => {
//                 e.classList.remove('hover-light-light');
//               });
//             },
//             removeDark(){
//                 document.getElementsByClassName('text-white').forEach(e =>{
//                     e.classList.add('lightmode-text');
//                   });
//                   document.getElementsByClassName('dark-bg').forEach(e => {
//                       e.classList.add('light-bg');
//                   });
//                   document.getElementsByClassName('dark-light-bg').forEach(e => {
//                       e.classList.add('light-light-bg');
//                   });
//                   document.getElementsByClassName('dark-input-bg').forEach(e => {
//                       e.classList.add('light-input-bg');
//                   });
//                   document.getElementsByClassName('hover-dark-light').forEach(e => {
//                     e.classList.add('hover-light-light');
//                   });
//                   document.getElementsByClassName('bg-black').forEach(e => {
//                     e.classList.add('white-bg');
//                   });
                  
//             }           
//         },  
//     watch: {
//         '$store.state.darkMode': function() {
//           //console.log(this.$store.state.darkMode)
//           if(this.$store.state.darkMode == true){
//               this.setDark();
//           }
//            else if(this.$store.state.darkMode == false){
//             this.removeDark();
//             }
//         }
//     }
// }

