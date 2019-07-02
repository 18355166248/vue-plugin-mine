import { addClass, removeClass } from 'common/js/dom'

const data = {
  beforeEnter(el) {
    console.log(el.dataset)
    if (!el.dataset) el.dataset = {}
  },
  enter(el) {
    console.log(el)
  },
  afterEnter(el) {
    console.log(el)
  },
  beforeLeave(el) {
    console.log(el)
  },
  leave(el) {
    console.log(el)
  },
  afterLeave(el) {
    console.log(el)
  }
}
export default {
  name: 'jiangCollapseTransition',
  functional: true,
  render(h, { children }) {
    return h(
      'transition',
      {
        on: data
      },
      children
    )
  }
}
