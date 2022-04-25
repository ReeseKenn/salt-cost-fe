import { FunctionalComponent } from 'vue';
import s from './welcome.module.scss';

export const First: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#pig' />
    </svg>
    <h2>随时随地，想记就记</h2>
  </div>
}

First.displayName = 'First';
