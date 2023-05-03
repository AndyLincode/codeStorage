<template>
  <div class="about">
    <h1>v-for</h1>
    <ul>
      <li class="todoItem" v-for="todo in todos" :key="todo.id">
        <h2 class="todoTitle">{{ todo.title }}</h2>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue';



const todos = reactive([
  {
    id: 1,
    title: 'JavaScript',
    checked: false
  },
  {
    id: 2,
    title: 'React',
    checked: false
  },{
    id: 3,
    title: 'Vue',
    checked: false
  },{
    id: 4,
    title: 'Tailwind',
    checked: false
  },{
    id: 5,
    title: 'Python',
    checked: false
  }
])


</script>

<style scoped>
h2.done {
  text-decoration: line-through;
}
li {
  list-style: none;
}
.todoItem {
  border: 2px solid lightblue;
  border-radius: 15px;
  margin: 10px 0;
  background-color: #d3d2d2d3;
}
.todoTitle {
  display: inline;
  margin-left: 10px;
}
</style>
