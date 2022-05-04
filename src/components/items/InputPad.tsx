import {defineComponent, PropType, ref} from 'vue';
import s from './InputPad.module.scss';
import {time} from '../../shared/time'

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refDate = ref<Date>()
    const now = new Date()
    const buttons = [
    ]
    return () => <>
      <span class={s.date}>
        <span>
          <input type="date" value={time(now).format()}/>
        </span>
      </span>
      <div class={s.wrapper}>InputPad</div>
    </>
  }
})