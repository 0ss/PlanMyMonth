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

//console.log(store.state.darkMode, document.getElementsByClassName('dark-bg'))