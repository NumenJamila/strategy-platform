<template>
  <Main searchBar>
    <div class="search-page">
      <tabItemBar :whichItem="whichItem" @tabClick="tabClick" class="tab-pane-class"></tabItemBar>
      <Layout>
        <Layout>
          <Content class="content-left">
            <div v-for="info in searchResultList" :key="info.url">
              <div class="search-company-item">
                <div class="company-title" @click="goCompanyDetail">
                  <img class="company-logo" :src="info.companyLogo" alt />
                  <span class="company-Name">{{info.companyName}}</span>
                  <span class="tag-name" v-for="tag in info.tagName" :key="tag">[{{tag}}]</span>
                </div>
                <div class="company-desc">{{info.companyDesc}}</div>
              </div>
            </div>
          </Content>
          <Sider class="content-right">
            <div class="company-relevant">
              <div class="company-relevant-name">海尔相关项目</div>
              <div class="company-relevant-item">1.COSMO</div>
              <div class="company-relevant-item">2.COSMO</div>
              <div class="company-relevant-item">3.COSMO</div>
              <div class="company-relevant-item">4.COSMO</div>
            </div>
            <div class="company-relevant">
              <div class="company-relevant-name">海尔相关项目</div>
              <div class="company-relevant-item">1.COSMO</div>
              <div class="company-relevant-item">2.COSMO</div>
              <div class="company-relevant-item">3.COSMO</div>
              <div class="company-relevant-item">4.COSMO</div>
            </div>
          </Sider>
        </Layout>
      </Layout>
    </div>
  </Main>
</template>

<script>
// @ means "src"
import Main from "@/components/main";
import tabItemBar from "@/components/tabItemBar";
import SearchResultItem from "@/components/searchBar/SearchResultItem.vue";
// import DB from "@/data/search.json";
export default {
  data() {
    return {
      msg: this.$route.params.searchText,
      whichItem: "SearchCompany",
      searchResultList: [
        {
          companyName: "惠州巨合",
          tagName: ["战略合作伙伴", "电商", "物联网"],
          companyDesc:
            "在进行页面布局时，边框是我们最常用的的属性之一我们可以通过边框查看元素位置大小等但是有时我们却又不希望看到这些边框，一些元素的默认边框，比如input标签等我们可以选择隐藏或者去除",
          companyLogo:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105402388,3234073623&fm=11&gp=0.jpg"
        },
        {
          companyName: "惠州巨合",
          tagName: ["战略合作伙伴", "电商", "物联网"],
          companyDesc:
            "在进行页面布局时，边框是我们最常用的的属性之一我们可以通过边框查看元素位置大小等但是有时我们却又不希望看到这些边框，一些元素的默认边框，比如input标签等我们可以选择隐藏或者去除",
          companyLogo:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105402388,3234073623&fm=11&gp=0.jpg"
        },
        {
          companyName: "惠州巨合",
          tagName: ["战略合作伙伴", "电商", "物联网"],
          companyDesc:
            "在进行页面布局时，边框是我们最常用的的属性之一我们可以通过边框查看元素位置大小等但是有时我们却又不希望看到这些边框，一些元素的默认边框，比如input标签等我们可以选择隐藏或者去除",
          companyLogo:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105402388,3234073623&fm=11&gp=0.jpg"
        },
        {
          companyName: "惠州巨合",
          tagName: ["战略合作伙伴", "电商", "物联网"],
          companyDesc:
            "在进行页面布局时，边框是我们最常用的的属性之一我们可以通过边框查看元素位置大小等但是有时我们却又不希望看到这些边框，一些元素的默认边框，比如input标签等我们可以选择隐藏或者去除",
          companyLogo:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105402388,3234073623&fm=11&gp=0.jpg"
        },
        {
          companyName: "惠州巨合",
          tagName: ["战略合作伙伴", "电商", "物联网"],
          companyDesc:
            "在进行页面布局时，边框是我们最常用的的属性之一我们可以通过边框查看元素位置大小等但是有时我们却又不希望看到这些边框，一些元素的默认边框，比如input标签等我们可以选择隐藏或者去除",
          companyLogo:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105402388,3234073623&fm=11&gp=0.jpg"
        },
        {
          companyName: "惠州巨合",
          tagName: ["战略合作伙伴", "电商", "物联网"],
          companyDesc:
            "在进行页面布局时，边框是我们最常用的的属性之一我们可以通过边框查看元素位置大小等但是有时我们却又不希望看到这些边框，一些元素的默认边框，比如input标签等我们可以选择隐藏或者去除",
          companyLogo:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105402388,3234073623&fm=11&gp=0.jpg"
        }
      ]
    };
  },
  components: {
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
      this.$router.push({ name: url });
    },
    tabClick(e) {
      let that = this;
      console.log(e);
      that.goUrl(e);
    }
  }
};
</script>
<style <style lang="less" scoped>
.search-page {
  min-width: 1200px;
}
.tab-pane-class {
  padding-left: 108px;
}
.content-left {
  width: 600px;
  padding: 0 120px;
}
.search-company-item {
  padding: 10px;
  .company-title {
    cursor: pointer;
    margin-bottom: 10px;
    height: 30px;
    .company-logo {
      height: 100%;
      vertical-align: middle;
    }
    .company-Name {
      padding: 0 10px;
      line-height: 30px;
      font-size: 16px;
      font-weight: 500;
      color: #32beff;
    }
    .tag-name {
      color: #009966;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .company-desc {
    color: #949494;
  }
}
.content-right {
  border-left: 1px solid #e1e1e1;
  width: 384px;
  padding-right: 120px;
  .company-relevant {
    padding: 20px 20px 0 20px;
    .company-relevant-name {
      padding: 20px 0 10px;
      font-size: 16px;
      font-weight: 700;
      color: #949494;

    }
    .company-relevant-item {
      padding: 0px 10px;;
      font-size: 16px;
      font-weight: 700;
      color: #32beff;
    }
  }
}
</style>

<style>
.content-right {
  background: none !important;
  width: 400px !important;
  min-width: 400px !important;
  max-width: 400px !important;
  flex: 0 0 400px !important;
}
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
