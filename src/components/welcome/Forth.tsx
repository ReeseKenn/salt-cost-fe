import { FunctionalComponent } from 'vue';
import s from "./welcome.module.scss";

export const Forth: FunctionalComponent = () => {

  return <div class={s.card}>
    <svg>
      <use xlinkHref='#cloud' />
    </svg>
    <h2>云备份，不惧数据丢失</h2>
  </div>

}

Forth.displayName = 'Forth';
