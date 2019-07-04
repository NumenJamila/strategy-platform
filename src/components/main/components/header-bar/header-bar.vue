<template>
  <div class="header-bar">

    <div class="custom-content-con">
      <slot></slot>
      <tabPane />
    </div>
  </div>
</template>
<script>
import tabPane from './tabpane'
import './header-bar.less'
export default {
  name: 'HeaderBar',
  components: {
    tabPane
  },
  props: {
    collapsed: Boolean
  },
  computed: {
 
  },
  methods: {

  }
}
</script>
