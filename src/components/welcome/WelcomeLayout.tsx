import { FunctionalComponent } from "vue";
import s from "./WelcomLayout.module.scss";
import { RouterLink } from "vue-router";
import divide from "../../assets/icons/divide.svg";

export const WelcomeLayout: FunctionalComponent = (props, context) => {
  const {slots: {icon, title}} = context;
  return (
    <div class={s.wrapper}>
      <div class={s.card}>
        {icon?.()}
        {title?.()}
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
