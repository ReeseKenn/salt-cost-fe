import { FunctionalComponent } from 'vue';
import s from "./WelcomLayout.module.scss";
import data from "../../assets/icons/data.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third: FunctionalComponent = () => {
  return <WelcomeLayout>
    {{
      icon: () => <img class={s.pig} src={data} />,
      title: () => <h2>可视化设计，收支一目了然</h2>
    }}
  </WelcomeLayout>
}

Third.displayName = 'Third';
