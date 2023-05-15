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
import { onBeforeMount, ref, watch } from "vue";
import MultiFilter from "./components/MultiFilter.vue";

const initFilter = { column: "", operator: "", value: "" };

const filterGroup = ref([{ sid: 1, column: "", operator: "", value: "" }]);

const groupOperatorOption = ref([
  { value: "and", label: "and", default: true },
  { value: "or", label: "or" },
]);

const groupOperator = ref("");

onBeforeMount(() => {
  groupOperator.value = groupOperatorOption.value[0].value;
});

const addHandler = () => {
  if (filterGroup.value.length > 0) {
    filterGroup.value.push({
      ...initFilter,
      sid: filterGroup.value[filterGroup.value.length - 1].sid + 1,
    });
  } else {
    filterGroup.value.push({ ...initFilter, sid: 1 });
  }
};

const removeHandler = (id) => {
  filterGroup.value = filterGroup.value.filter((e, i) => {
    return e.sid !== id;
  });
};

const showFilter = () => {
  if (filterGroup.value.length > 1) {
    console.log([...filterGroup.value, { groupOperator: groupOperator.value }]);
  } else {
    console.log(filterGroup.value);
  }
};

// watch(
//   () => filterGroup.value,
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue);
//   },
//   {
//     deep: true,
//   }
// );
</script>

<template>
  <div class="container">
    <div
      class="filter-wrap"
      v-for="(filter, index) in filterGroup"
      :key="filter.sid"
    >
      <div class="operator-wrap">
        <el-select
          v-if="index == 1"
          v-model="groupOperator"
          :label="groupOperator"
        >
          <el-option
            v-for="item in groupOperatorOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <el-text
        class="operator-text"
        size="large"
        v-if="index !== 0 && index !== 1"
      >
        {{ groupOperator + " " }}
      </el-text>
      <MultiFilter
        v-model:column="filterGroup[index].column"
        v-model:operator="filterGroup[index].operator"
        v-model:value="filterGroup[index].value"
      />
      <el-button type="danger" circle @click="removeHandler(filter.sid)"
        ><el-icon><Delete /></el-icon
      ></el-button>
    </div>
    <div class="button-group">
      <el-button
        type="primary"
        circle
        @click="addHandler"
        v-if="filterGroup.length < 3"
        ><el-icon><Plus /></el-icon
      ></el-button>
      <button @click="showFilter">show filter</button>
    </div>
  </div>
  <div class="filterGroupShow">
    <ul v-for="filter in filterGroup">
      <li><span>COLUMN: </span>{{ filter.column }}</li>
      <li><span>OPERATOR: </span>{{ filter.operator }}</li>
      <li><span>VALUE: </span>{{ filter.value }}</li>
    </ul>
  </div>
  <div>{{ filterGroup }}</div>
</template>

<style scoped>
.container {
  width: 100%;
}
.filter-wrap {
  margin: 5px 0;
}
.operator-wrap {
  width: 80px;
  margin: 5px 0;
}
button {
  margin-left: 10px;
}
.button-group {
  margin-top: 10px;
}

ul {
  margin: 5px;
  border: 1px solid #ccc;
}
</style>
