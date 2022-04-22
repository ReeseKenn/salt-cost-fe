import { defineComponent } from "vue";
import s from "./WelcomLayout.module.scss";
import { RouterLink } from "vue-router";
import divide from "../../assets/icons/divide.svg";

export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const {slots} = context;
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()}
          {slots.title?.()}
        </div>
        <div class={s.actions}>
          <RouterLink to="/welcome/1"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/2"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/3"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/4"><img src={divide} style="width: 36px;" /></RouterLink>
        </div>
      </div>
    )
  }
})
