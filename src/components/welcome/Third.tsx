import { FunctionalComponent } from 'vue';
import s from "./welcome.module.scss";
import data from "../../assets/icons/data.svg";

export const Third: FunctionalComponent = () => {
  return <div class={s.card}>
    <img class={s.pig} src={data} />
    <h2>可视化设计，收支一目了然</h2>
  </div>
}

Third.displayName = 'Third';
