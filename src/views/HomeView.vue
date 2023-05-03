<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';

const api = "http://localhost:3000/login";
const userInfo = reactive({
  account: '',
  password: '',
})
const token = ref(localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '');

// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['reference'] = window.location.href;



const loginHandler = async (userInfo) => {
  const res = await axios.post(api,
    {
      account: userInfo.account,
      password: userInfo.password,
    },
  );

  localStorage.setItem('token', res.data.accessToken)
  token.value = res.data.accessToken
}

const postData = async () => {
  console.log(token.value);
  const res = await axios.post('http://localhost:3000/getData', { data: 'test' }, {
    headers: {
      'authorization': `Bearer ${token.value}`,
      'reference': '123'
    },
  });
  console.log(res.data);
}



</script>

<template>
  <main>
    <input type="text" name="account" id="account" v-model="userInfo.account">
    <br>
    <input type="text" name="password" id="password" v-model="userInfo.password">
    <br>
    <button @click="loginHandler(userInfo)">login</button>
    <button @click="postData">postData</button>
  </main>
</template>

