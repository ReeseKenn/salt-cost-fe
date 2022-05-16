import {defineComponent, PropType, ref} from 'vue';
import s from './ItemCreate.module.scss';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {Tab, Tabs} from "../../shared/Tabs";
import {InputPad} from "./InputPad";

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    const refExpensesTags = ref([
        {id:1, name:'吃饭', sign:'￥',category:'expenses'},
        {id:2, name:'交通', sign:'￥',category:'expenses'},
        {id:3, name:'日用', sign:'￥',category:'expenses'},
        {id:4, name:'DRS', sign:'￥',category:'expenses'}
    ])
    const refIncomeTags = ref([
      {id:11, name:'薪水', sign:'￥',category:'income'},
      {id:12, name:'其他', sign:'￥',category:'income'}
    ])
    return () => (
      <MainLayout>{
        {
          title: () => '记一笔',
          icon: () => <Icon name="left" class={s.navIcon}/>,
          default: () => <>
            <Tabs v-model:selected={refKind.value}>
              {/*<Tabs selected={refKind.value} onUpdateSelected={name => refKind.value = name}>*/}
              <Tab name="支出">{refExpensesTags.value.map(tag=>{
                return <span>{tag.name}</span>
              })}</Tab>
              <Tab name="收入">{refIncomeTags.value.map(tag=>{
                return <span>{tag.name}</span>
              })}</Tab>
            </Tabs>
            <div class={s.inputPad_wrapper}>
              <InputPad/>
            </div>
          </>
        }
      }</MainLayout>
    )
  }
})
