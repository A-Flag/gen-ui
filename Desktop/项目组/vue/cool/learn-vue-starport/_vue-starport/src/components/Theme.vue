<template>
    <div  :class="props.class" style="overflow:hidden;" @click="a =!a">
        <!-- 123 {{props.class}} -->
       
        <img v-if="a" src="https://images.unsplash.com/photo-1660146522351-1da490ebf136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1018&q=80" alt="">
        <img v-else  src="https://images.unsplash.com/photo-1660384476017-baac63c164bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60" alt="">
    </div>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
    const a = ref(false)

    const props = defineProps<{
        class:string
    }>()
    console.log(props.class,'class--')
</script>

<style>
/* .index{
width:200px;height:200px;border-radius: 200px;
border-radius: 200px;
}
 .foo{
 width:300px;height:300px;
 border-radius: 200px;
   
  }  */
</style>