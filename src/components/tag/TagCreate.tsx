import {defineComponent, PropType} from 'vue';
import s from './TagCreate.module.scss';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {RouterLink} from "vue-router";
import { Button } from '../../shared/Button';

export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <RouterLink to="/items/create"><Icon name="left" class={s.navIcon}/></RouterLink>,
        default: () => (
          <form class={s.form}>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input class={[s.formItem,s.input,s.error]}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号</span>
                <div class={s.formItem_value}>
                  <div class={[s.formItem,s.emojiList,s.error]}>
                    <nav>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                      <span>表情</span>
                    </nav>
                    <ol>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                    </ol>
                  </div>
                  
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
