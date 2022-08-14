<script setup lang="ts">
import { watch,ref, computed } from 'vue'
import type {StyleValue} from 'vue'
import { metadata , proxyEl} from '../composables/floating.ts'

const rect = ref<DOMRect>(
//     {
//     x:0,
//     y:0,
//     width:0,
//     height:0,
//     left:0,
//     top:0,
//     bottom:0,
//     right:0,

// }as any
)
console.log('proxyEl',proxyEl)

watch(proxyEl,(el)=>{
    console.log('el-2131', el?.getBoundingClientRect(),'rect.value?.left',rect.value?.left)
    // console.log('el',el ?. getClinetRects())
    rect.value = el?.getBoundingClientRect()//?.[0]
},{immediate:true})

const style = computed(():StyleValue=>{
    return {
        transition:'all .5s ease-in-out',
        position:'fixed',
        right:`${rect.value?.right??0}}px`,
        top:`${rect.value?.top??0}}px`
    }
})

</script>

<template>
    <!-- {{metadata.attrs}} -->
    <div :style="style">
        <!-- {{rect}} -->
        <!-- {{metadata}} -->
        <slot v-bind="metadata.attrs" />
        <!-- <slot/> -->
        <!-- {{metadata}} -->
    </div>
   
</template>
