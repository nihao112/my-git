<template>
   <div class="test">
      <h3>{{num}}</h3>
      <button @click="num++">增加</button>
      <button @click="num--">减少</button>
      <p></p>
      <p></p>
      <p></p>
   </div>
</template>

<script>
import {ref} from 'vue'
export default{
   name:'Test',
   setup(){
      const num = ref(0)
         return{
         num
      }
   }
   
}
</script>

<style>
p{
   width: 100%;
   height: 50px;
   background: skyblue;
   margin-bottom: 10px;
}
</style>