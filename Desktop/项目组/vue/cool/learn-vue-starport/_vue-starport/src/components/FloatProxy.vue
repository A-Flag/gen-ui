

<script lang="ts" setup>
import { onMounted, ref, useAttrs } from 'vue'
import {metadata,proxyEl} from '../composables/floating.ts'
const props = defineProps<{}>()

const attrs = useAttrs()
const el = ref<HTMLElement>()
metadata.props = props
metadata.attrs = attrs

console.log("-- proxyEl.value", proxyEl.value)

onMounted(()=>{
    proxyEl.value = el.value
})

//   export default {
//       inheritAttrs:false
//   }

</script>

<template>
       <!-- <div ref="el" style=" background: #ccc;"> -->
        <!-- <div ref="el"> -->
           <slot/>
       <!-- </div> -->
</template>