import { defineComponent } from 'vue';
import s from "./First.module.scss";
import cloud from "../../assets/icons/cloud.svg";
import { RouterLink } from "vue-router";
import divide from "../../assets/icons/divide.svg";
import { Button } from "../../shared/Button";
//引入路由函数
import { useRouter } from "vue-router";

export const Forth = defineComponent({
  setup: (props, context) => {
    const router = useRouter();
    const onClick = () => {
      router.push({
        path: "/start"
      });
    }
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={cloud} />
          <h2>云备份，不惧数据丢失</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to="/welcome/1"><img src={divide} style="color:0A3D62;width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/2"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/3"><img src={divide} style="width: 36px;" /></RouterLink>
          <RouterLink to="/welcome/4"><img src={divide} style="width: 36px;" /></RouterLink>
        </div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>开启应用</Button>
        </div>
      </div>
    )
  }
})
