<script setup>

import {useTaskStore} from '@/stores/tasksStore';
const store= useTaskStore();

</script>

<template>
    <div class="filters">
      <div>
        <p>Filter by state</p>
        <div class="badges">
          <div @click="store.setFilter('Not Done')" class="badge" :class="{selected : store.filterBy==='Not Done'}">
            To-Do
          </div>
          <div @click="store.setFilter('Done')" class="badge" :class="{selected : store.filterBy==='Done'}">
            Done
          </div>
          <span class="clear" v-if="store.filterBy" @click="store.setFilter('')">
            x clear
          </span>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;
  }

  .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }

}
</style>