import { FunctionalComponent } from 'vue';
import s from "./welcome.module.scss";

export const Third: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#data' />
    </svg>
    <h2>可视化设计，收支一目了然</h2>
  </div>
}

Third.displayName = 'Third';
