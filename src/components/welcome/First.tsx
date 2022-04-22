import { FunctionalComponent } from 'vue';
import pig from '../../assets/icons/pig.svg';
import s from './WelcomLayout.module.scss';
import { WelcomeLayout } from "./WelcomeLayout";

export const First: FunctionalComponent = () => {
  return <WelcomeLayout>
    {{
      icon: () => <img src={pig} alt="pig" class={s.icon} />,
      title: () => <h2>随时随地，想记就记</h2>
    }}
  </WelcomeLayout>
}

First.displayName = 'First';
