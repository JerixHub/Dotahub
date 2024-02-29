<template>
    <div v-if="userWordcloud">
      <span v-for="(value,key) in userWordcloud.all_word_counts" :key="key" class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{{ `${key} ${value}` }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
  userWordcloud: {
    type: Array,
    default: () => []
  }
})
</script>
