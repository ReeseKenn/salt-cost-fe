import {defineComponent, PropType, reactive, toRaw} from 'vue';
import s from './TagCreate.module.scss';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {RouterLink} from "vue-router";
import {Button} from '../../shared/Button';
import {EmojiSelect} from "../../shared/EmojiSelect";

export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: ''
    })
    const onSubmit = (e: Event) => {
      console.log(toRaw(formData))
      // const rules = [
      //   {key: 'name', required: true, message: '必填'},
      //   {key: 'name', pattern: /^.{1,4}/, message: '只能填1到4个字符'},
      //   {key: 'sign', required: true, message: '必填'}
      // ]
      // const errors = validate(formData,rules)
      // errors = {
      //   name: ['error1', 'error2'],
      //   sign: ['error3', 'error4']
      // }
      e.preventDefault()

    }
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <RouterLink to="/items/create"><Icon name="left" class={s.navIcon}/></RouterLink>,
        default: () => (
          <form class={s.form} onSubmit={onSubmit}>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model={formData.name} class={[s.formItem, s.input, s.error]}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号 {formData.sign}</span>
                <div class={s.formItem_value}>
                  <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <p class={s.tips}>记账时长按标签即可进行编辑</p>
            <div class={s.formRow}>
              <div class={s.formItem_value}>
                <Button class={[s.formItem, s.button]}>确定</Button>
              </div>
            </div>

          </form>
        )
      }}</MainLayout>
    )
  }
})
