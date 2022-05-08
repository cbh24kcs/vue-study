<template>
  <div>
    <demo-007 />
  </div>
</template>

<script>
export default {
  components: {
    'demo-001': () => import('./demos/demo-001.vue'),
    'demo-002': () => import('./demos/demo-002.vue'),
    'demo-003': () => import('./demos/demo-003.vue'),
    'demo-004': () => import('./demos/demo-004-axios-test.vue'),
    'demo-005': () => import('./demos/demo-005-v-pre.vue'),
    'demo-006': () => import('./demos/demo-006-绑定class.vue'),
    'demo-007': () => import('./demos/demo-007-class绑定数组.vue'),
  },
};
</script>




