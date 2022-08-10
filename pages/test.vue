<template>
  <div>
    <Counter />
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Counter from '~/components/Counter/Counter.vue'
export default defineComponent({
  components: { Counter },
  setup() {},
})
</script>
