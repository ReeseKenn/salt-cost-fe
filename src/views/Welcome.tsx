import { defineComponent, h, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterLink, RouterView, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import divide from "../assets/icons/divide.svg";
import { Button } from "../shared/Button";

export const Welcome = defineComponent({
  setup: (props, context) => {
    const router = useRouter()
    let currentRoute = router.currentRoute.value.path
    // 监听路由变化
    router.afterEach(() => {
      currentRoute = router.currentRoute.value.path
    })
    return () => <div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#salt' />
        </svg>
        <h2>海盐账本</h2>
      </header>
      <main class={s.main}>
        <RouterView>
          {({Component: X, route: R}: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
            <Transition
              enterFromClass={s.slide_fade_enter_from}
              enterActiveClass={s.slide_fade_enter_active}
              leaveToClass={s.slide_fade_leave_to}
              leaveActiveClass={s.slide_fade_leave_active}>
              {X}
            </Transition>
          }
        </RouterView>
      </main>
      <footer>

        <div class={s.actions}>
          <RouterLink to="/welcome/1">
            <svg class={router.currentRoute.value.path === '/welcome/1' ? s.active : ''}>
              <use xlinkHref='#divide' />
            </svg>
          </RouterLink>
          <RouterLink to="/welcome/2">
            <svg class={router.currentRoute.value.path === '/welcome/2' ? 'active' : ''}>
              <use xlinkHref='#divide' />
            </svg>
          </RouterLink>
          <RouterLink to="/welcome/3">
            <svg class={router.currentRoute.value.path === '/welcome/3' ? 'active' : ''}>
              <use xlinkHref='#divide' />
            </svg>
          </RouterLink>
          <RouterLink to="/welcome/4">
            <svg class={router.currentRoute.value.path === '/welcome/4' ? 'active' : ''}>
              <use xlinkHref='#divide' />
            </svg>
          </RouterLink>
        </div>
        {/*如果当前路由是/welcome/4,展示button*/}
        {router.currentRoute.value.path === '/welcome/4' &&
          <RouterLink to="/start">
            <div class={s.button_wrapper}>
              <Button onClick={() => {
              }} class={s.button}>开启应用</Button>
            </div>
          </RouterLink>}
      </footer>
    </div>
  }
})
