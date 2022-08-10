<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment()">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { CounterKey, UseCounter } from '~/composables/use-counter'

export default defineComponent({
  setup() {
    const { count, increment } = inject(CounterKey) as UseCounter
    return {
      count,
      increment,
    }
  },
})
</script>
