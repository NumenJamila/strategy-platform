<template>
  <div class="search-page">
    <SearchResultToolBar :search="msg"></SearchResultToolBar>
    <div v-for="info in searchResultList" :key="info.url">
      <SearchResultItem :info="info"></SearchResultItem>
    </div>
    <Tabs>
        <TabPane label="全部" >全部</TabPane>
        <TabPane label="公司" >公司</TabPane>
        <TabPane label="行业" >行业</TabPane>
        <TabPane label="区域" >区域</TabPane>
        <TabPane label="资讯报告" >资讯报告</TabPane>
        <TabPane label="政策文件" >政策文件</TabPane>
    </Tabs>
  </div>
</template>

<script>
// @ means "src"
import SearchResultToolBar from "@/components/searchBar/SearchResultToolBar.vue";
import SearchResultItem from "@/components/searchBar/SearchResultItem.vue";
// import DB from "@/data/search.json";
export default {
  data() {
    return {
      msg: this.$route.params.searchText,
      searchResultList: []
    };
  },
  components: {
    SearchResultToolBar,
    SearchResultItem
  },
  created() {
    this.doSearchResult();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.doSearchResult();
  },
  methods: {
    doSearchResult() {
      
    }
  }
};
</script>
<style>
.ivu-tabs-bar {
  border-bottom: 0 !important;
}
.ivu-tabs-nav {
  margin: 0 30px;
}
.ivu-tabs-nav .ivu-tabs-tab {
  padding: 5px 4px;
  /* margin-right: 0; */
}
</style>
