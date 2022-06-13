/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div>
         
        </div>
        <div class="tw-px-3 tw-py-3">
          import your module router to <code>src/router/index.js</code>
        </div>
        <div>
          <pre class="once-code-block">

         
 <code class="once-code-block">           
import BaseRouter from '@/modules/base/router'
import DocsRouter from '@/modules/docs/router'
import <mark>YourModule</mark> from '@/modules/<mark>your-module</mark>/router'

router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
  
     {
      path: '/base',
      component: () => import('../layout/base/main.vue'),
      children: [...BaseRouter]
    },
    {
      path: '/docs',
      component: () => import('../layout/docs/main.vue'),
      children: [...DocsRouter]
    },
 
    <div >
    {
      path: '/<mark>your-module</mark>',
      component: () => import('../layout/<code class="new-code">your-module</code>/main.vue'),
      children: [...<mark>YourModule</mark>]
    },
    </div>
  ]
})
          </code>
           </pre>
        </div>
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  }
}
</script>
<style>
.once-code-block {
  border-radius: 10px;
  padding: 1rem;
  background: var(white-smoke);
}
.theme--light.v-application code.once-code-block {
  background: var(white-smoke);
}
.text-line-through {
  text-decoration: line-through;
  background-color: #2a0000;
}
.text-new {
  background-color: #002a10;
}
div.v-application code.new-code {
  background-color: green;
}


</style>
