import { FunctionalComponent } from 'vue';
import s from "./welcome.module.scss";
import cloud from "../../assets/icons/cloud.svg";

export const Forth: FunctionalComponent = () => {

  return <div class={s.card}>
    <img class={s.pig} src={cloud} />
    <h2>云备份，不惧数据丢失</h2>
  </div>

}

Forth.displayName = 'Forth';
