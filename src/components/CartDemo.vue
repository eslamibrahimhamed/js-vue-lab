<script setup lang="ts">
import { ref } from 'vue'
import { useCart } from '@/composables/useCart'

const { items, totalCents, add } = useCart()
const price = ref(100)
const qty = ref(1)

function addItem() {
  add(Math.round(price.value * 100), qty.value)
}
</script>

<template>
  <h2>Cart</h2>
  <label>Price <input v-model.number="price" type="number" step="0.01" /></label>
  <label>Qty <input v-model.number="qty" type="number" min="1" /></label>
  <button @click="addItem">Add</button>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ (item.priceCents / 100).toFixed(2) }} × {{ item.qty }}
    </li>
  </ul>
  <p>Total: {{ (totalCents / 100).toFixed(2) }}</p>
</template>
