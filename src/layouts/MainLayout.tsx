import {defineComponent} from 'vue';
import {Navbar} from "../shared/Navbar";
import s from './MainLayout.module.scss';

export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <Navbar class={s.nav}>{
          {
            default: () => context.slots.title?.(),
            icon: () => context.slots.icon?.()
          }
        }</Navbar>
        {context.slots.default?.()}
      </div>
    )
  }
})