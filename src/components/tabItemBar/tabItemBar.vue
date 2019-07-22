<template>
  <Tabs @on-click="tabClick" :value="whichItem">
        <TabPane label="全部" name="Search"></TabPane>
        <TabPane label="公司" name="SearchCompany"></TabPane>
        <TabPane label="行业" name="SearchIndustry"></TabPane>
        <TabPane label="区域" name="SearchRegion"></TabPane>
        <TabPane label="资讯报告" name="SearchReport"></TabPane>
        <TabPane label="政策文件" name="SearchPolicy"></TabPane>
      </Tabs>
</template>
<script>

export default {
  name: "tabItemBar",
  components: {

  },
  data() {
    return {
    };
  },
  props: {
    whichItem: {
      type: String,
      default: ""
    }
  },

  methods: {
    tabClick(e) {
      this.$emit("tabClick", e)
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="less">

</style>
