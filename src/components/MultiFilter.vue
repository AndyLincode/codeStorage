<template>
  <el-select
    :model-value="column"
    :label="column"
    clearable
    @change="columnHandler"
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
    :model-value="operator"
    :label="operator"
    @change="operatorHandler"
    placeholder="Select"
  >
    <el-option
      v-for="item in operatorOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select
    v-if="subItem.multiple"
    :model-value="value"
    @change="valueHandler"
    :disabled="!column"
    multiple
    :multiple-limit="subItem?.multiple ? 3 : 0"
    placeholder="Select"
  >
    <el-option
      v-for="item in subItem[column]"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select
    v-else
    :model-value="value"
    multiple
    :multiple-limit="1"
    @change="valueHandler"
    :disabled="!column"
    placeholder="Select"
  >
    <el-option
      v-for="item in subItem[column]"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>
import { ref, toRefs, watchEffect, watch } from "vue";

// // 幾個條件
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

// // 運算子
const operatorOptions = [
  { value: "==", label: "is" },
  { value: "!==", label: "is not" },
];

// // 條件選項 (透過Api來拉取有哪些選項??)
const initSubItem = [
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
const subItem = ref([]);

const clearHandler = () => {
  emit("update:column", "");
  emit("update:value", "");
  subItem.value = [];
};

const props = defineProps(["column", "operator", "value"]);
const { column, operator } = toRefs(props);
const emit = defineEmits(["update:column", "update:operator", "update:value"]);

const columnHandler = (e) => {
  emit("update:column", e);
  emit("update:value", []);
  subItem.value = [];
};
const operatorHandler = (e) => {
  emit("update:operator", e);
};
const valueHandler = (e) => {
  emit("update:value", e);
};

watchEffect(() => {
  console.log(column.value);
});

watch(
  () => column.value,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    if (newValue) {
      const index = options.findIndex((v, i) => v.value === column.value);
      subItem.value = initSubItem[index];
      console.log(subItem.value);
    }
  }
);
</script>

<style scoped></style>
