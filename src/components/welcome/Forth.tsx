import { FunctionalComponent } from 'vue';
import s from "./WelcomLayout.module.scss";
import cloud from "../../assets/icons/cloud.svg";
import { Button } from "../../shared/Button";
//引入路由函数
import { useRouter } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Forth: FunctionalComponent = () => {
  const router = useRouter();
  const onClick = () => {
    router.push({
      path: "/start"
    });
  }
  return <>
    <WelcomeLayout>
      {{
        icon: () => <img class={s.pig} src={cloud} />,
        title: () => <h2>云备份，不惧数据丢失</h2>
      }}
    </WelcomeLayout>
    <div class={s.button_wrapper}>
      <Button class={s.button} onClick={onClick}>开启应用</Button>
    </div>
  </>
}

Forth.displayName = 'Forth';
