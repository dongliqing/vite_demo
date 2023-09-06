<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="text-white">
    123
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
