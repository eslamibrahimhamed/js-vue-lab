<script setup lang="ts">
import { computed, ref } from 'vue'
import { applyDiscount } from '@/utils/applyDiscount'

const price = ref(200)
const percent = ref(10)

const result = computed(() => {
  try {
    return `Final price: ${applyDiscount(price.value, percent.value)}`
  } catch (error) {
    return `Error: ${(error as Error).message}`
  }
})
</script>

<template>
  <h2>Discount</h2>
  <label>Price <input v-model.number="price" type="number" /></label>
  <label>Discount % <input v-model.number="percent" type="number" /></label>
  <p>{{ result }}</p>
</template>
