
<script setup>
import Add from '../components/Add.vue'
import { ref } from 'vue'
var str = ref(1)
</script>
<template>
  <h1>我是张星</h1>
  <Add :str="str" />
</template>

<style>
</style>