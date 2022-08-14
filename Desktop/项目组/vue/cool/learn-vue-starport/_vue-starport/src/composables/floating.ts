import {ref, reactive } from "vue";

export const metadata = reactive<any>({
    props:{},
    attrs:{}
})

export  const proxyEl = ref<HTMLElement | null>()