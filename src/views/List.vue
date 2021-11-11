<template>
  <div>
    <div>{{name}}</div>
    <div>请输入你的内容：<input type="text" v-model='pp'></div>
    <div>你输入的内容是：{{pp}}</div>
  </div>
</template>
<script>
import { ref, customRef } from 'vue'
export default {
  setup () {
    let name = ref('我是Gyx')
    let pp = myref('')
    function myref (value) {
      let timeout
      return customRef((track, trigger) => {
        return {
          get () {
            track();
            return value
          },
          set (newvalue) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              value = newvalue;
              trigger()
            }, 1000)
          }
        }
      })
    }
    return {
      name,
      pp
    }
  },
}
</script>
<style scoped>
</style>
