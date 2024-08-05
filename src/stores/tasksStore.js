import { defineStore } from 'pinia';
import {reactive, ref, computed} from 'vue';
export const useTaskStore = defineStore('tasks',()=>{
    let tasks= reactive(
        JSON.parse(localStorage.getItem('tasks'))|| []
    );

    let filterBy=ref("");

    let ModalIsActive=ref(false);

    let newTask= reactive({ completed: false});

    function setFilter(value){
        filterBy.value=value;
      }

      const filteredTasks=computed(()=>{
        switch(filterBy.value){
          case 'Not Done':
            return tasks.filter(task=>!task.completed);
          case 'Done':
            return tasks.filter(task=>task.completed);
          default:
            return tasks;
        }
      })

      function addTask(newTask){
        if(newTask.name && newTask.description){
          newTask.id=tasks.length ? Math.max(...tasks.map(item=>item.id))+1 : 1;
          tasks.push(newTask);
          newTask={computed:false};
          ModalIsActive.value=false;
        }
        else{
          alert('enter title and description');
        }
      }
      
      function toggleCompleted(id){
        tasks.forEach(task => {
          if(task.id==id){
            task.completed=!task.completed;
          }
        })
      }

    return{tasks, filterBy, setFilter,filteredTasks, addTask, toggleCompleted, newTask, ModalIsActive};
});