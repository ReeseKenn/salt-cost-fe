import { defineComponent } from 'vue';
import s from "./First.module.scss";
import time from "../../assets/icons/time.svg";
import { RouterLink } from "vue-router";
import divide from "../../assets/icons/divide.svg";

export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={time} />
          <h2>每日提醒，账单不再遗漏</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to="/welcome/1"><img src={divide} style="color:0A3D62;width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/2"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/3"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/4"><img src={divide} style="width: 36px;" /></RouterLink>
        </div>
      </div>
    )
  }
})
