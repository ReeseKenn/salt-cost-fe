import { defineComponent } from 'vue';
import s from './Icon.module.scss';
export const Icon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    )
  }
})