import {defineComponent} from 'vue';
import {Icon} from './Icon';
import s from './FloatButton.module.scss';
export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function
    },
  },
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name={props.iconName} class={s.icon}/>
      </div>
    )
  }
})