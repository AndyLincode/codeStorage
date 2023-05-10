<template>
  <div>
    <button @click="sortByKey('email', 'desc')">排序</button>
    <ul>
      <li v-for="user in users">
        編號: {{ user.id }}
        姓名: {{ user.name }}
        電話: {{ user.phone }}
        email: {{ user.email }}
        <button @click="removeUser(user.id)">刪除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import useListData from '../composables/useListData';

const {data: users, removeItem: removeUser, sortByKey} = useListData([
  {id:1, name:"Andy", phone:"0912345678", email:"aaa@mail.com"},
  {id:2, name:"Kevin", phone:"0912222222", email:"bbb@mail.com"},
  {id:3, name:"Ivy", phone:"0912333333", email:"ccc@mail.com"},
  {id:4, name:"Sam", phone:"0912444444", email:"ddd@mail.com"},
  {id:5, name:"May", phone:"0912555555", email:"eee@mail.com"},
])
</script>

<style lang="scss" scoped>

</style>