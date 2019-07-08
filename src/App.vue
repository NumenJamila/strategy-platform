<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
  min-width: 1000px;
}
</style>
