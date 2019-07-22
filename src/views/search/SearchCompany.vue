<template>
  <Main searchBar @mainSearch="searchCompany">
    <div class="search-page customize-container-center">
      <tabItemBar :whichItem="whichItem" @tabClick="tabClick" class="tab-pane-class"></tabItemBar>
      <Layout>
        <Layout>
          <Content class="content-left">
            <div v-for="info in tableData" :key="info.url">
              <div class="search-company-item">
                <div class="company-title" @click="goCompanyDetail(info.companyNo)">
                  <img class="company-logo" :src="info.companyLogo" alt />
                  <span class="company-Name">{{info.companyName}}</span>
                  <span class="tag-name" v-for="tag in info.tagName" :key="tag">[{{tag}}]</span>
                </div>
                <div class="company-desc">{{info.companyDesc}}</div>
              </div>
            </div>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="entityCount" show-total show-elevator page-size=8 :current="1" @on-change="changePage"></Page>
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
import { constants } from 'crypto';
import companyinfo from "@/api/companyinfo"
// import DB from "@/data/search.json";
export default {
  data() {
    return {
      msg: this.$route.params.searchText,
      
      whichItem: "SearchCompany",
      queryCondition: {
        pageNo: 1,
        pageSize:5,
        companyName: "",
        regCapital: 0,
        finanSituation: "",
        industry: "",
        sortCondition: "",
        importantFocus: "",
        companyType: "",
        provinceCode: "",
        cityCode: "",
        tagName: ""
        
      },
      tableData: [],
      entityCount: 1
    }
    
  },
  components: {
    SearchResultItem,
    Main,
    tabItemBar
  },
  created() {
    
    this.queryCondition.companyName = this.$route.query.companyName
    this.doSearchResult();
    
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.doSearchResult();
  },
  methods: {
    goCompanyDetail(companyNo) {
      this.$router.push({
        path: '/companydetail',
        query: {
          companyNo: companyNo
        }
      })
    },
    doSearchResult() {
      companyinfo.queryCompany(
          this.queryCondition
      ).then(res=>{
        if(res.data.isSuccess){
            this.tableData = res.data.data.entities;
            this.entityCount =  res.data.data.entityCount;
        }else{
         this.$Message.info({
                content: res.data.msg,
                duration: 3
            });
        }
      });
    },
    goUrl(url) {
      this.$router.push({ name: url });
    },
    tabClick(e) {
      let that = this;
      that.goUrl(e);
    },
    searchCompany(searchText){
      console.log("searchText");
      console.log(searchText);
      this.queryCondition.companyName = searchText;
      this.doSearchResult();
    },
    changePage(currentNo){
      this.queryCondition.pageNo = currentNo
      this.doSearchResult();
    }
  }
};
</script>
<style lang="less" scoped>
.search-page {
  
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
      padding: 0px 10px;
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
