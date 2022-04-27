import {defineComponent, ref, watchEffect} from 'vue';
import s from './welcome.module.scss';
import {useRouter} from "vue-router";
import {useSwipe} from "../../hooks/useSwipe";

export const First = defineComponent({
  setup() {
    const div = ref<HTMLDivElement>()
    const router = useRouter()
    const { swiping, direction } = useSwipe(div, {
      beforeStart: e => e.preventDefault()
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/welcome/2')
      }
    })
    return () => (
        <div class={s.card} ref={div}>
          <svg>
            <use xlinkHref='#pig'></use>
          </svg>
          <h2>随时随地，想记就记</h2>
        </div>
    )
  }
})

