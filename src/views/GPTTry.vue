<template>
  <div>
    <el-select v-model="selectedOperator" @change="handleOperatorChange" placeholder="Select operator">
      <el-option v-for="operator in operators" :key="operator.value" :label="operator.label" :value="operator.value" />
    </el-select>

    <div v-if="selectedOperator !== 'is_not_empty' && selectedOperator !== 'is_empty'">
      <el-select v-model="selectedProperty" @change="handlePropertyChange" placeholder="Select property">
        <el-option v-for="property in properties" :key="property.property" :label="property.label" :value="property.property" />
      </el-select>
    </div>

    <div v-if="selectedProperty && selectedOperator !== 'is_not_empty' && selectedOperator !== 'is_empty'">
      <el-select v-model="selectedValue" @change="handleValueChange" placeholder="Select value">
        <el-option v-for="value in values" :key="value.value" :label="value.label" :value="value.value" />
      </el-select>
    </div>

    <div v-if="hasFilters">
      <div v-for="(filter, index) in filters" :key="index">
        <filter-component :filters="filter.filters" :operator="filter.operator" @update:filters="updateFilters" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent',
  props: {
    filters: Array,
    operator: String,
  },
  data() {
    return {
      selectedOperator: '',
      selectedProperty: '',
      selectedValue: '',
      operators: [
        { value: 'enum_contains', label: 'Enum Contains' },
        { value: 'enum_does_not_contain', label: 'Enum Does Not Contain' },
        { value: 'string_is', label: 'String Is' },
        // Add more operators as needed
      ],
      properties: [
        { property: 'R]c^', label: 'R]c^' },
        // Add more properties as needed
      ],
      values: [
        { value: 'Template', label: 'Template' },
        { value: 'Meeting', label: 'Meeting' },
        // Add more values as needed
      ],
    };
  },
  computed: {
    hasFilters() {
      return this.filters && this.filters.length > 0;
    },
  },
  methods: {
    handleOperatorChange() {
      // Handle operator change
    },
    handlePropertyChange() {
      // Handle property change
    },
    handleValueChange() {
      // Handle value change
    },
    updateFilters(updatedFilters) {
      // Emit updated filters to parent component
      this.$emit('update:filters', updatedFilters);
    },
  },
};
</script>
