import Counter from './Counter.vue'

export default {
  title: 'counter',
  component: Counter,
}

const Template = (_: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { Counter },
  template: '<Counter v-bind="$props" />',
})

export const defalut = Template.bind({})
