<script setup>
// import jsonLogic from 'json-logic-js'

// const rule = {
//   and: [
//     {
//       '==': [
//         { var: 'name' },
//         'John Doe'
//       ]
//     },
//     {
//       '>=': [
//         { var: 'age' },
//         30
//       ]
//     },
//     {
//       'in': [
//         { var: 'location' },
//         ['Taipei', 'New York']
//       ]
//     }
//   ]
// };

// const data = {
//   name: 'John Doe',
//   age: 30,
//   location: 'Taipei'
// };

// const result = jsonLogic.apply(rule, data);
// console.log(result);
import { ref } from "vue";
import MultiFilter from "./components/MultiFilter.vue";

const filterGroup = ref([{ sid: 1 }]);

const addHandler = () => {
  if (filterGroup.value.length > 0) {
    filterGroup.value.push({
      ...filterGroup.value[0],
      sid: filterGroup.value[filterGroup.value.length - 1].sid + 1,
    });
  } else {
    filterGroup.value.push({ sid: 1 });
  }
};

const removeHandler = (id) => {
  filterGroup.value = filterGroup.value.filter((e, i) => {
    return e.sid !== id;
  });
};
</script>

<template>
  <div class="container">
    <div class="filter-wrap" v-for="filter in filterGroup" :key="filter.sid">
      <MultiFilter />
      <el-button type="danger" circle><el-icon><Delete /></el-icon></el-button>
    </div>
    <button @click="addHandler" v-if="filterGroup.length < 3">+</button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

button {
  margin-left: 10px;
}
</style>
