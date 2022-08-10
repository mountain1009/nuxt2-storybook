import { InjectionKey, ref } from '@nuxtjs/composition-api'

const useCounter = () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  return {
    count,
    increment,
  }
}

export default useCounter

export type UseCounter = ReturnType<typeof useCounter>

export const CounterKey: InjectionKey<UseCounter> = Symbol('useCounter')
