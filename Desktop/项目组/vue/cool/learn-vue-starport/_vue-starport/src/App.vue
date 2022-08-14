

<template>
  <div>
    <!-- <div style="position: absolute;left: 46%;top:50px;"> -->
        <router-view/>
    <!-- </div> -->
    <FloatContainer v-slot="props">
      <Theme v-bind="props"> </Theme>
    </FloatContainer>
  </div>
</template>
<script lang="ts" setup>
    import Theme from './components/Theme.vue'
    import FloatContainer from './components/FloatContainer.vue'
</script>

<style scoped>
/* .logo {
  position: absolute;left: 30px;top:50px;
} */


</style>
