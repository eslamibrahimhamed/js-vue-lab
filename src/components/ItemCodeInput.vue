<script setup lang="ts">
import { computed, ref } from 'vue'
import { formatItemCode } from '@/utils/formatItemCode'

const code = ref('')
const formattedCode = computed(() => formatItemCode(code.value))
</script>

<template>
  <label>
    Item code
    <input v-model="code" placeholder="  ab-123  " />
  </label>
  <p>Typed: "{{ code }}"</p>
  <p>Saved as: "{{ formattedCode }}"</p>
</template>
