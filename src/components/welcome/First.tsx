import { defineComponent } from 'vue';
import pig from '../../assets/icons/pig.svg';
import s from './First.module.scss';
import { RouterLink } from 'vue-router';
import divide from "../../assets/icons/divide.svg";

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={pig} />
          <h2>随时随地，想记就记</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to="/start"><img src={divide} style="color:0A3D62;width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/2"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/start"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/start"><img src={divide} style="width: 36px;" /></RouterLink>
        </div>
      </div>
    )
  }
})
