import { defineComponent } from 'vue';
import pig from '../../assets/icons/pig.svg';
import s from './WelcomLayout.module.scss';
import { WelcomeLayout } from "./WelcomeLayout";

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={pig} alt="pig" class={s.icon} />,
          title: () => <h2>随时随地，想记就记</h2>
        }}
      </WelcomeLayout>
    )
  }
})
