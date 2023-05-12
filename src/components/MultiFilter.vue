<template>
    <el-select
      v-model="condition1"
      clearable
      @clear="clearHandler"
      placeholder="Select"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="operatorSelect"
      :disabled="!condition1"
      placeholder="Select"
    >
      <el-option
        v-for="item in operator"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="condition2"
      clearable
      :disabled="!condition1"
      :multiple="subOptions?.multiple"
      :multiple-limit="subOptions?.multiple ? 3 : 0"
      placeholder="Select"
    >
      <el-option
        v-for="item in subOptions[condition1]"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  <!-- <el-select
    v-model="condition1"
    clearable
    @clear="clearHandler"
    placeholder="Select"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select
    v-model="operatorSelect"
    :disabled="!condition1"
    placeholder="Select"
  >
    <el-option
      v-for="item in operator"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select
    v-model="condition2"
    clearable
    :disabled="!condition1"
    :multiple="subOptions?.multiple"
    :multiple-limit="subOptions?.multiple ? 3 : 0"
    placeholder="Select"
  >
    <el-option
      v-for="item in subOptions[condition1]"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select> -->
  <!-- <div>{{ subOptions[condition1] }}</div> -->
</template>

<script setup>
import { ref, watch } from "vue";

const condition1 = ref("");
const condition2 = ref("");
const subOptions = ref([]);
const operatorSelect = ref("");
const filterGroup = ref([
  {
    sid: 1,
    column: condition1.value,
    operator: operatorSelect.value,
    value: condition2.value,
  },
]);

// 幾個條件
const options = [
  {
    value: "DATA_SOURCE",
    label: "DATA_SOURCE",
  },
  {
    value: "CALL_TYPE",
    label: "CALL_TYPE",
  },
  {
    value: "CALL_CASE_LOG_FROM",
    label: "CALL_CASE_LOG_FROM",
  },
];

// 運算子
const operator = [
  { value: "==", label: "is" },
  { value: "!==", label: "is not" },
];

// 條件選項 (透過Api來拉取有哪些選項??)
const subItem = [
  {
    multiple: false,
    DATA_SOURCE: [
      { value: "APAC", label: "APAC" },
      { value: "EMEA", label: "EMEA" },
      { value: "NA", label: "NA" },
    ],
  },
  {
    multiple: true,
    CALL_TYPE: [
      {
        value: "IB_CALL-AfterSale(JP)",
        label: "IB_CALL-AfterSale(JP)",
      },
      { value: "IB_CALL-PreSale(JP)", label: "IB_CALL-PreSale(JP)" },
      { value: "CHAT", label: "CHAT" },
      { value: "MAIL", label: "MAIL" },
      { value: "OB_CALL(JP)", label: "OB_CALL(JP)" },
      { value: "REMOTE", label: "REMOTE" },
    ],
  },
  {
    multiple: true,
    CALL_CASE_LOG_FROM: [
      { value: "Call center", label: "Call center" },
      { value: "Chat", label: "Chat" },
      { value: "Retailer", label: "Retailer" },
      { value: "Corporate", label: "Corporate" },
      { value: "Giga School", label: "Giga School" },
      { value: "Express Code", label: "Express Code" },
      { value: "Remote Support", label: "Remote Support" },
    ],
  },
];

const clearHandler = () => {
  condition1.value = "";
  condition2.value = "";
  subOptions.value = [];
  operatorSelect.value = "";
};

// const index = ref(options.findIndex((v, i) => v.value === "DATA_SOURCE"));
// console.log(index.value);

watch(condition1, () => {
  const index = options.findIndex((v, i) => v.value === condition1.value);
  subOptions.value = subItem[index];
  // console.log(subOptions.value);
});
</script>

<style scoped></style>
