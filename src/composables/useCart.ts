import { computed, ref } from 'vue'

// Prices are stored in cents to avoid floating point errors
export function useCart() {
  const items = ref<{ priceCents: number; qty: number }[]>([])
  const totalCents = computed(() =>
    items.value.reduce((sum, i) => sum + i.priceCents * i.qty, 0),
  )

  function add(priceCents: number, qty = 1) {
    items.value.push({ priceCents, qty })
  }

  return { items, totalCents, add }
}
