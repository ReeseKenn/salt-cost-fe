import { FunctionalComponent } from 'vue';
import s from "./welcome.module.scss";

export const Second: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#time' />
    </svg>
    <h2>每日提醒，账单不再遗漏</h2>
  </div>
}

Second.displayName = 'Second';
