import { defineComponent, PropType } from 'vue';
import s from './ItemsPage.module.scss';
import { RouterView } from "vue-router";

export const ItemsPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <RouterView/>
      </div>
    )
  }
})