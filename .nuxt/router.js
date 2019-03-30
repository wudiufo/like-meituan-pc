import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _6b27fdb4 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _715fff41 = () => interopDefault(import('..\\pages\\changeCity.vue' /* webpackChunkName: "pages_changeCity" */))
const _6b787a57 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages_detail" */))
const _4b821024 = () => interopDefault(import('..\\pages\\exit.vue' /* webpackChunkName: "pages_exit" */))
const _1287cfd3 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _61aaed38 = () => interopDefault(import('..\\pages\\order.vue' /* webpackChunkName: "pages_order" */))
const _679da32c = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */))
const _28e2d429 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _48e02cbc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cart",
      component: _6b27fdb4,
      name: "cart"
    }, {
      path: "/changeCity",
      component: _715fff41,
      name: "changeCity"
    }, {
      path: "/detail",
      component: _6b787a57,
      name: "detail"
    }, {
      path: "/exit",
      component: _4b821024,
      name: "exit"
    }, {
      path: "/login",
      component: _1287cfd3,
      name: "login"
    }, {
      path: "/order",
      component: _61aaed38,
      name: "order"
    }, {
      path: "/products",
      component: _679da32c,
      name: "products"
    }, {
      path: "/register",
      component: _28e2d429,
      name: "register"
    }, {
      path: "/",
      component: _48e02cbc,
      name: "index"
    }],

    fallback: false
  })
}
