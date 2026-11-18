<script setup lang="ts">
import ItemCodeInput from '@/components/ItemCodeInput.vue'
import DiscountCalculator from '@/components/DiscountCalculator.vue'
import CartDemo from '@/components/CartDemo.vue'
import BigIdDemo from '@/components/BigIdDemo.vue'
import { computed } from 'vue'



const a = { id: 1 }
const b = { id: 1 }
const c = a
const selected = [{ id: 5 }]

const isSelected = computed(() => {
  const row = selected[0]!     // the same object, not a new one
   return selected.includes(row)

})

const rows = ['0 a', '1 b', '2 c', '3 d', '4 e']

const slice = computed(() => {
  return rows.slice(0, 3)
})
</script>

<template>
  <h1>JS Vue Lab</h1>
  <ItemCodeInput />
  <DiscountCalculator />
  <CartDemo />
  <BigIdDemo />
  a = { id: 1 } <br>
  b = { id: 1 } <br>
  c = a <br>
  <div>a === b: {{ a === b }}</div>
  <div>a === c: {{ a === c }}</div>
  <div>b === c: {{ b === c }}</div>
  <div>isSelected: {{ isSelected }}</div>
  <div>slice: {{ slice }}</div>

</template>
