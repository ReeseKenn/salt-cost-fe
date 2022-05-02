import {defineComponent, PropType} from 'vue';
import s from './Icon.module.scss';

export const Icon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={`#${props.name}`} onClick={props.onClick}/>
      </svg>
    )
  }
})