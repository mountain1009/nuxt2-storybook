import { onGlobalSetup, provide } from '@nuxtjs/composition-api'
import useCounter, { CounterKey } from '~/composables/use-counter'

export default () => {
  onGlobalSetup(() => {
    provide(CounterKey, useCounter())
  })
}
