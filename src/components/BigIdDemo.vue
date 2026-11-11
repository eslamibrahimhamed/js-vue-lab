<script setup lang="ts">
import { computed, ref } from 'vue'

const id = ref('9007199254740993')

const asNumber = computed(() => String(Number(id.value)))
const asBigInt = computed(() => {
  try {
    return BigInt(id.value).toString()
  } catch {
    return 'Not an integer'
  }
})
const isSafe = computed(() => Number.isSafeInteger(Number(id.value)))
const changed = computed(() => asNumber.value !== asBigInt.value)
</script>

<template>
  <h2>Big IDs</h2>
  <label>Invoice ID from API <input v-model="id" /></label>
  <p>As number: {{ asNumber }}</p>
  <p>As BigInt: {{ asBigInt }}</p>
  <p>Safe integer: {{ isSafe }}</p>
  <p>Number changed the value: {{ changed }}</p>
</template>
