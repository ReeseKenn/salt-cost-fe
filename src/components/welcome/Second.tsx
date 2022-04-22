import { FunctionalComponent } from 'vue';
import s from "./WelcomLayout.module.scss";
import time from "../../assets/icons/time.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Second: FunctionalComponent = () => {
  return <WelcomeLayout>
    {{
      icon: () => <img class={s.pig} src={time} />,
      title: () => <h2>每日提醒，账单不再遗漏</h2>
    }}
  </WelcomeLayout>
}

Second.displayName = 'Second';
