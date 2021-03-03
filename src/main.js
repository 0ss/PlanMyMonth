import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

createApp(App).use(store).use(router).mount('#app')

// const cols = document.getElementsByClassName('dark-bg');
//   for(let i = 0; i < cols.length; i++) {
//     cols[i].style.backgroundColor = 'white';
// }
document.documentElement.style.setProperty('text-white', 'black');

const cols = document.getElementsByClassName('text-white');
cols.forEach(e => {
    console.log(e)
});
for(var i = 0; i < cols.length; i++) {
     console.log('s',cols[i])
    cols[i].backgroundColor = 'black';
}


//console.log(store.state.darkMode, document.getElementsByClassName('dark-bg'))