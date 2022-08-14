import { createRouter, createWebHashHistory,RouteRecordRaw} from "vue-router";
import type { App } from "vue";

//  // hash模式：createWebHashHistory，history模式：createWebHistory
  const routes:Array<RouteRecordRaw> = [
        {
             path: '/',
            redirect: '/index'
        },
        {
          path: '/index',
          name: 'index',
          component: () => import('../pages/index.vue'),
        },
        {
            path: '/foo',
            name: 'foo',
            component: () => import('../pages/foo.vue'),
          },
      ]

const router = createRouter({

  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}


router.beforeEach((to,from,next)=>{
  next()
})


export default router;


