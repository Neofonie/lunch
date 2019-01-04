import Vue from 'vue'
import Router from 'vue-router'
import LotteryView from '@/views/LotteryView'
import ResultView from '@/views/ResultView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'll-ausloser',
      component: LotteryView,
      meta: {title: 'Lunch-Lotterie - Ausloser'}
    },
    {
      path: '/result',
      name: 'll-ergebnissliste',
      component: ResultView,
      meta: {title: 'Lunch-Lotterie - Ergebnissliste'}
    }
  ]
})
