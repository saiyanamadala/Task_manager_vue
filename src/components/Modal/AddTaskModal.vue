<script setup>
import { useTaskStore } from '../../stores/tasksStore';
const store= useTaskStore();
let newTask={completed:false}
</script>

<template>
    <div class="add-task">
      <h3>Add a new task</h3>
      <!-- <label for="title">Title</label> -->
      <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..."><br />
      <!-- <label for="description">Description</label> -->
      <textarea v-model="newTask.description" name="description" rows="4" placeholder="Enter a description..." /><br />
      <button class="btn gray" @click="store.addTask(newTask)">Add Task</button>
      </div>
</template>

<style lang="scss" scoped>
    input,textarea{
        border: 1px solid black;
        margin-bottom: 10px;
        width: 100%;
        border-radius: 5px;
        padding: 10px;
    }

    
</style>