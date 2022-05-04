import {defineComponent, PropType} from 'vue';
import s from './Tabs.module.scss';

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
      required: false
    },
    onUpdateSelected: {
      type: Function as PropType<(selected: string) => void>,
      required: false
    }
  },

  setup: (props, context) => {
    return () => {
      const children = context.slots.default?.()
      if (!children) return () => null
      for (let i = 0; i < children.length; i++) {
        if (children[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> children')
        }
      }
      return <div class={s.tabs}>
        <ol class={s.tabs_nav}>
          {children.map(child =>
            <li
              class={child.props?.name === props.selected ? s.selected : ''}
              onClick={() => context.emit('update:selected', child.props?.name)}
              // onClick={() => props.onUpdateSelected?.(child.props?.name)}
            >
              {child.props?.name}
            </li>)}
        </ol>
      </div>
    }
  }
})

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>{context.slots.default?.()}</div>
    )
  }
})