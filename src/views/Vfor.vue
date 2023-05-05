<template>
  <div class="about">
    <h1>v-for</h1>
    <ul>
      <input type="text" v-model="title">
      <button @click="addNewTodo">新增</button>
      <li class="todoItem" v-for="todo in todos" :key="todo.id">
        <input type="checkbox" name="todo-item" :id="todo.id" v-model="todo.checked">
        <label :for="todo.id"><h2 class="todoTitle" :class="{ done: todo.checked}">{{ todo.title }}</h2></label>
      </li>
    </ul>
  </div>





</template>

<script setup>
import { reactive, ref } from 'vue';

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
const title =ref('')

const addNewTodo = ()=> {
  if(!title.value){
    alert('請輸入標題!')
    return
  }
  todos.push({
  id: todos.length + 1,
  title: title.value,
  checked: false,
})
  title.value = ''
}


</script>

<style scoped>
h2.done {
  text-decoration: line-through;
}
h2 {
  cursor: pointer;
}
li {
  list-style: none;
}
input {
  margin-left: 10px;
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
