<template>
  <div class="page-films">
    <!-- 二级路由页面 -->
    <div class="tabs">
      <div class="now">
        <!-- 正在热映 -->
        <Now />
      </div>
      <div class="future">
        <!-- 即将上映 -->
        <Future />
      </div>
    </div>
  </div>
</template>

<script>
import Now from '../../components/now.vue'
import Future from '../../components/future.vue'
export default {

  name: 'Films',
  components: {
    Now,
    Future
  }
}
</script>
