import { createStore } from 'vuex'


export default createStore({
  state: {
    tasks: [],
    tags: [],
    projects: [],
    darkMode: true,
    name: ''
  },
  mutations: {
    addTask(state, task){
      task = {...task, task: task.task.trim()}

      state.tasks.push(task) 
      localStorage.setItem('tasks',JSON.stringify(state.tasks));
    },
    addProject(state, project){
      
      project = {...project, project: project.project.trim()}

      state.projects.push(project) 
      localStorage.setItem('projects',JSON.stringify(state.projects));
    },
    setTasks(state, payload) {
       state.tasks = JSON.parse(payload);
    },
    setTags(state, payload) {
      state.tags = JSON.parse(payload);
   },
   setName(state, payload) {
    state.name = payload
    localStorage.setItem('name', state.name)
 },
   setDarkMode(state, payload) {
    state.darkMode = payload;
    localStorage.setItem('darkMode',payload);
  },
   setProjects(state, payload) {
    state.projects = JSON.parse(payload);
    },
    removeTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
      localStorage.setItem('tasks',JSON.stringify(state.tasks));
    },
    removeProject(state, id){
      const project = state.projects.filter(project => project.id == id)[0]?.project
      state.projects = state.projects.filter(project => project.id !== id)
      localStorage.setItem('projects',JSON.stringify(state.projects));

      state.tasks = state.tasks.filter(e => e.project !== project);
      localStorage.setItem('tasks',JSON.stringify(state.tasks));

    },
    finishTask(state, {id, finish}){
      state.tasks = state.tasks.map(task =>{
        if(task.id == id){
          task.finish = finish;

        }
        return task
      });
      localStorage.setItem('tasks',JSON.stringify(state.tasks));
    },
    setTasksToStorage(state){
      localStorage.setItem('tasks',JSON.stringify(state.tasks));

    }
    
  },
  actions: {
    initStore({commit}){
      const tasks = localStorage.getItem('tasks');
      const tags = localStorage.getItem('tags');
      const projects = localStorage.getItem('projects');
      const darkMode = localStorage.getItem('darkMode');
      const name = localStorage.getItem('name')
      if(!tasks && tasks == null){ 
        localStorage.setItem('tasks',JSON.stringify([]));
        return;
      }
      if(!tags && tags == null){ 
        localStorage.setItem('tags',JSON.stringify(['Family', 'Personal', 'Work']));
        return;
      }
      if(!projects && projects == null){ 
        localStorage.setItem('projects',JSON.stringify([]));
        return;
      }
      if(!darkMode && darkMode == null){ 
        localStorage.setItem('darkMode',true);
        return;
      }
      if(!name && name == null){ 
        localStorage.setItem('name','');
        return;
      }
      commit('setTasks', tasks)
      commit('setTags', tags)
      commit('setProjects', projects)
      commit('setDarkMode', darkMode)
      commit('setName', name)


      return;
    },
    cleanStore({commit}){
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const today = Date.now();
      const cleanedTasks = tasks.filter(e => {
        if( ((today-new Date(e.date).getTime())/1000) > (84600*2) ){
          return false
        }
        return true
      });
      commit('setTasks', JSON.stringify(cleanedTasks))
      commit('setTasksToStorage')
      return;
    },
    addTask({commit}, task){
     commit('addTask',task )
    },
    addProject({commit}, project){
     commit('addProject',project )
    },
    removeTask({commit}, {id}){
      commit('removeTask',id )
     },
     removeProject({commit}, {id}){
      commit('removeProject',id )
     },
     finishTask({commit}, payload){
       commit('finishTask', payload)
     },
     setDarkMode({commit}, payload){
       commit('setDarkMode', payload)
     },
     setName({commit}, payload){
      commit('setName', payload)
    }
      
  },
  getters: {
    getTags(state){
      return state.tags;
    }
    
  }
  
})

// {
//   "id": "bc638579-0ed5-4a9e-b17a-71375092e2e7",
//   "text": "# Scratchpad\n\nThe easiest note to find.",
//   "category": "",
//   "scratchpad": true,
//   "favorite": false,
//   "created": "2021-01-15T13:49:34+03:00",
//   "lastUpdated": "2021-01-15T13:49:34+03:00"
// },

// [
//   {
//     "id": Date.now(),
//     "data": ""
//     "task": "# Scratchpad\n\nThe easiest note to find."
//     "priority": ""
//     "tags": [],
//     "created": "2021-01-15T13:49:34+03:00",
//   },
// ]

// [
//   {
//     "id":Date.now(),
//     "name": "",
//     "category" : ""
//   }
// ]