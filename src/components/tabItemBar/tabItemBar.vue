<template>
  <Tabs @on-click="tabClick" :value="whichItem">
        <TabPane label="公司" name="Search">全部</TabPane>
        <TabPane label="公司" name="SearchCompany">公司</TabPane>
        <TabPane label="行业" name="SearchIndustry">行业</TabPane>
        <TabPane label="区域" name="SearchRegion">区域</TabPane>
        <TabPane label="资讯报告" name="SearchReport">资讯报告</TabPane>
        <TabPane label="政策文件" name="SearchPolicy">政策文件</TabPane>
      </Tabs>
</template>
<script>

export default {
  name: "tabItemBar",
  components: {

  },
  data() {
    return {};
  },
  props: {
    whichItem: {
      type: String,
      default: "Search"
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
