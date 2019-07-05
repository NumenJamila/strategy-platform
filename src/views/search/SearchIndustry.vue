<template>
  <Main searchBar> 
    <div class="search-page">
      <tabItemBar :whichItem="whichItem" @tabClick="tabClick"></tabItemBar>
      <div v-for="info in searchResultList" :key="info.url">
        <SearchResultItem :info="info"></SearchResultItem>
      </div>
    </div>
  </Main>
</template>

<script>
// @ means "src"
import Main from "@/components/main";
import tabItemBar from "@/components/tabItemBar";
import SearchResultToolBar from "@/components/searchBar/SearchResultToolBar.vue";
import SearchResultItem from "@/components/searchBar/SearchResultItem.vue";
// import DB from "@/data/search.json";
export default {
  data() {
    return {
      msg: this.$route.params.searchText,
      searchResultList: [],
      whichItem: "SearchIndustry"
    };
  },
  components: {
    SearchResultToolBar,
    SearchResultItem,
    Main,
    tabItemBar
  },
  created() {
    this.doSearchResult();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.doSearchResult();
  },
  methods: {
    doSearchResult() {},
    goUrl(url) {
      this.$router.push({name: url});
    },
    tabClick(e) {
      let that = this
      console.log(e)
      that.goUrl(e)
    },
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
