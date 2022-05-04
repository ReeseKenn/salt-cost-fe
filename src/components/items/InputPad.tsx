import {defineComponent, PropType, ref} from 'vue';
import s from './InputPad.module.scss';
import {time} from '../../shared/time'
import {DatetimePicker, Popup} from 'vant'
import {Icon} from "../../shared/Icon";

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const now = new Date()
    const refDate = ref<Date>(now)
    const buttons = []
    const refPopupVisible = ref(false)
    const showDatePicker = () => refPopupVisible.value = true
    const hideDatePicker = () => refPopupVisible.value = false
    const setDate = (date: Date) => { refDate.value = date ; hideDatePicker() }
    return () => <>
      <div>
        <span class={s.date}>
          <Icon name="date" class={s.icon}/>
          <span>
            <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show={refPopupVisible.value}>
              <DatetimePicker value={refDate.value} type="date" title="请选择年月日"
              onConfirm={setDate} onCancel={hideDatePicker}/>
            </Popup>
          </span>
        </span>
        <span class={s.amount}>199.12</span>
      </div>

      <div class={s.wrapper}>InputPad</div>
    </>
  }
})