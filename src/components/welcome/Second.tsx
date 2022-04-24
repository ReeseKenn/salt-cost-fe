import { FunctionalComponent } from 'vue';
import s from "./welcome.module.scss";
import time from "../../assets/icons/time.svg";

export const Second: FunctionalComponent = () => {
  return <div class={s.card}>
    <img class={s.pig} src={time} />
    <h2>每日提醒，账单不再遗漏</h2>
  </div>
}

Second.displayName = 'Second';
