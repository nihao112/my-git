<template>
  <div>
    <div>{{name}}</div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    let name = ref('我是Gyx')
    return {
      name
    }
  },
}
</script>
<style scoped>
</style>
