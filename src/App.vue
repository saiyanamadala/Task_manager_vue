<script setup>
import { ref, reactive, computed } from 'vue';
import Tasks from './components/Tasks.vue';
import Filter from './components/Filter.vue';
import ModalWindow from './components/Modal/ModalWindow.vue';
import {useTaskStore} from './stores/tasksStore.js';
import AddTaskModal from './components/Modal/AddTaskModal.vue';


const store= useTaskStore();
store.$subscribe((mutation,state)=>{
  localStorage.setItem('tasks',JSON.stringify(state.tasks));
})

</script>

<template>

  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          Tasks Manager
        </h1>
      </div>

      <div class="header-side">
        <button @click="store.ModalIsActive=true" class="btn secondary">+ AddTask</button>
      </div>

    </div>
    
    <Filter/>

    <div class="tasks">

      <Tasks v-for="(task,index) in store.filteredTasks" :key="index" :task="task"/>
      
    </div>

    
    

    <ModalWindow @closePopUp="store.ModalIsActive=false" v-if="store.ModalIsActive">
      <AddTaskModal/>
    </ModalWindow>

  </main>
  
   

</template>


<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }

}



.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}



.add-task {
  margin-top: 60px;

  input, textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
    border: 1px solid black;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}


</style>