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
import { onBeforeMount, ref, computed } from "vue";
import MultiFilter from "./components/MultiFilter.vue";
import axios from "axios";

const initFilter = { column: "", operator: "", value: "" };

const filterGroup = ref([
  { sid: 1, column: "", operator: "", value: "", belong: "main", filters: [] },
]);

const groupOperatorOption = ref([
  { value: "and", label: "and" },
  { value: "or", label: "or" },
]);

const groupOperator = ref("");
const subGroupOperator = ref("");

const dataFromServer = ref([]);

onBeforeMount(() => {
  groupOperator.value = groupOperatorOption.value[0].value;
  subGroupOperator.value = groupOperatorOption.value[0].value;
});

const addHandler = () => {
  if (filterGroup.value.length > 0) {
    filterGroup.value.push({
      ...initFilter,
      belong: "main",
      filters: [],
      sid: filterGroup.value[filterGroup.value.length - 1].sid + 1,
    });
  } else {
    filterGroup.value.push({
      ...initFilter,
      filters: [],
      sid: 1,
      belong: "main",
    });
  }
};

const addSubGroupHandler = (index) => {
  const filters = filterGroup.value[index].filters;
  const hasGroupOperatorAnd = filters.some(
    (item) => item.groupOperator === "and" || item.groupOperator === "or"
  );

  if (filters.length < 1 && !hasGroupOperatorAnd) {
    filters.push({ ...initFilter, belong: "sub" });
  } else if (filters.length === 1 && !hasGroupOperatorAnd) {
    filters.push({ ...initFilter, belong: "sub" }, { groupOperator: "and" });
  } else if (filters.length > 1 && hasGroupOperatorAnd) {
    filters.splice(1, 0, { ...initFilter, belong: "sub" });
  } else {
    filters.push({ ...initFilter, belong: "sub" });
  }
};

const removeHandler = (belong, index, mainIndex) => {
  if (belong === "main") {
    if (filterGroup.value.length === 1) return;
    const arr1 = filterGroup.value.slice(0, index);
    const arr2 = filterGroup.value.slice(index + 1);
    filterGroup.value = arr1.concat(arr2);
  } else if (belong === "sub") {
    if (filterGroup.value[mainIndex].filters.length <= 2) {
      filterGroup.value[mainIndex].filters = [];
    } else {
      const arr1 = filterGroup.value[mainIndex].filters.slice(0, index);
      const arr2 = filterGroup.value[mainIndex].filters.slice(index + 1);
      filterGroup.value[mainIndex].filters = arr1.concat(arr2);
    }
  }
};

const showData = async () => {
  if (filterGroup.value.length > 1) {
    const condition = [
      ...filterGroup.value,
      { groupOperator: groupOperator.value },
    ];
    const { data } = await axios.post(
      `http://localhost:6001/filterData`,
      condition
    );

    console.log(data);
    dataFromServer.value = data;
  } else {
    // console.log(filterGroup.value);
    const { data } = await axios.post(
      `http://localhost:6001/filterData`,
      filterGroup.value
    );
    console.log(data);
    dataFromServer.value = data;
  }
};

const showFilter = () => {
  console.log(filterGroup.value);
};

const isOperator = (obj) => {
  return obj.groupOperator === "and" || obj.groupOperator === "or";
};
</script>

<template>
  <div class="container">
    <div class="operator-select">
      <el-select
        v-if="filterGroup.length > 1 || filterGroup[0].filters.length > 0"
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
    <div
      class="filter-wrap"
      v-for="(filter, index) in filterGroup"
      :key="filter.sid"
    >
      <div class="operator-wrap">
        <el-text class="operator-text" size="large" v-if="index !== 0">
          {{ groupOperator }}
        </el-text>
      </div>
      <MultiFilter
        v-model:column="filterGroup[index].column"
        v-model:operator="filterGroup[index].operator"
        v-model:value="filterGroup[index].value"
      />
      <el-button
        type="danger"
        circle
        @click="removeHandler(filter.belong, index)"
        ><el-icon><Delete /></el-icon
      ></el-button>
      <el-button
        type="warning"
        size="small"
        circle
        @click="addSubGroupHandler(index)"
        v-if="
          filter.filters.filter((item) => item.groupOperator !== 'and')
            .length <= 3
        "
        ><el-icon><Plus /></el-icon
      ></el-button>
      <div v-for="(sub, index2) in filter.filters">
        <div class="secondFilterGroup" v-if="!isOperator(sub)">
          <span v-if="index2 === 0">WHERE </span
          ><span v-else style="margin-left: 60px"></span>
          <el-text
            class="operator-text"
            size="large"
            v-if="index2 !== 0 && index2 !== 1"
          >
            {{
              filterGroup[index].filters[filterGroup[index].filters.length - 1]
                .groupOperator
            }}
          </el-text>
          <div class="operator-select">
            <el-select
              v-if="filter.filters.length > 1 && index2 === 1"
              v-model="
                filterGroup[index].filters[
                  filterGroup[index].filters.length - 1
                ].groupOperator
              "
              :label="
                filterGroup[index].filters[
                  filterGroup[index].filters.length - 1
                ].groupOperator
              "
            >
              <el-option
                v-for="item in groupOperatorOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <MultiFilter
            v-model:column="filterGroup[index].filters[index2].column"
            v-model:operator="filterGroup[index].filters[index2].operator"
            v-model:value="filterGroup[index].filters[index2].value"
          />
          <el-button
            type="danger"
            size="small"
            circle
            @click="removeHandler(sub.belong, index2, index)"
            ><el-icon><Delete /></el-icon
          ></el-button>
        </div>
      </div>
    </div>
    <div class="button-group">
      <el-button
        type="primary"
        circle
        @click="addHandler"
        v-if="filterGroup.length < 5"
        ><el-icon><Plus /></el-icon
      ></el-button>
      <!-- <button @click="showData">show data</button> -->
      <!-- <button @click="showFilter">show filterGroup</button> -->
    </div>
    <div class="filterGroupShow">
      <pre>{{ [...filterGroup, { groupOperator: groupOperator }] }}</pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  > .operator-select {
    width: 75px;
    position: absolute;
    top: 36px;
  }
}
.filter-wrap {
  margin: 5px 0;
}
.operator-wrap {
  width: 80px;
  margin: 5px 0;
  display: inline-block;
}
.operator-select {
  width: 75px;
  display: inline-block;
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
pre {
  margin: 20px;
}

.secondFilterGroup {
  margin-left: 80px;
  background-color: #ccc;
  padding: 10px;
  width: 70%;
}
</style>
