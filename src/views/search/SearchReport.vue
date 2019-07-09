<template>
  <Main searchBar>
    <div class="search-page customize-container-center">
      <div class="tab-pane-title">人工智能</div>
      <tabItemBar :whichItem="whichItem" @tabClick="tabClick"></tabItemBar>
      <Tabs type="card" class="ivu-tabs-bar-update">
        <TabPane label="最新资讯">
          <div class="wrapper">
            <div class="container">
              <Table
                highlight-row
                ref="currentRowTable"
                :show-header="false"
                :border="false"
                :columns="columns7"
                :data="data6"
              ></Table>
            </div>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="100" show-elevator show-sizer :current="1" @on-change="changePage"></Page>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="行业报告">标签二的内容</TabPane>
      </Tabs>
      <div class="other-project">
        <div class="other-container">
          <div class="other-item">
            <div class="other-item-title">
              <span>我的收藏</span>
              <span class="read-more">
                查看更多
                <Icon type="ios-arrow-forward" />
              </span>
            </div>
            <div class="other-item-container">
              <div class="project-item">
                <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                <div class="project-item-name">促进新一代人工智能健康促进新一代人工智能健康促进新一代人工智能健康促进新一代人工智能健康</div>
              </div>
              <div class="project-item">
                <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                <div class="project-item-name">促进新一代人工智能健康</div>
              </div>
              <div class="project-item">
                <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                <div class="project-item-name">促进新一代人工智能健康</div>
              </div>
            </div>
          </div>
          <div class="other-item">
            <div class="other-item-title">
              <span>我的收藏</span>
              <span class="read-more">
                查看更多
                <Icon type="ios-arrow-forward" />
              </span>
            </div>
            <div class="other-item-container">
              <div class="project-item">
                <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                <div class="project-item-name">促进新一代人工智能健康促进新一代人工智能健康促进新一代人工智能健康促进新一代人工智能健康</div>
              </div>
              <div class="project-item">
                <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                <div class="project-item-name">促进新一代人工智能健康</div>
              </div>
              <div class="project-item">
                <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                <div class="project-item-name">促进新一代人工智能健康</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      searchResultList: [],
      whichItem: "SearchReport",
      columns7: [
        {
          title: "名称",
          key: "name",
          width: 300,
        },
        {
          title: "来源",
          key: "source",
          width: 100,
        },
        {
          title: "时间",
          key: "time",
          width: 100,
        },
        {
          title: "操作",
          key: "action",
          width: 60,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "收藏"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
        },
        {
          name: "促进新一代人工智能健康发展（适势求是）",
          source: "人民日报",
          time: "2019-6-30"
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
<style lang="less">
.ivu-tabs-bar-update {
  margin: 10px 0;
  .ivu-tabs-bar {
    border-bottom: 1px solid #32beff;
  }
  .ivu-tabs-nav {
    margin-left: 128px;
  }
}
.ivu-table td {
  border-bottom: none;
}
.ivu-tabs-nav {
  // margin: 0 30px;
}
.tab-pane-title {
  border-left: 6px solid #32beff;
  position: absolute;
  left: 0px;
  top: 54px;
  padding: 2px 10px;
  font-size: 18px;
  font-weight: 600;
}
.ivu-tabs-nav .ivu-tabs-tab {
  padding: 5px 4px;
  /* margin-right: 0; */
}
div.ivu-card-body {
  padding: 0;
}
div.ivu-table-wrapper {
  border: none;
}
.ivu-table:before {
  content: "";
  width: 100%;
  height: 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}
.ivu-table:after {
  content: "";
  width: 0px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
}
</style>
<style lang="less" scoped>
.search-page {
  position: relative;
}
.ivu-tabs-bar-update {
  width: 800px;
  float: left;
}
.other-project {
  width: 360px;
  float: right;
  padding: 0 20px;
  border-left: 1px solid #d9d7d5;
  .other-container {
    padding: 0 20px 20px 20px;
    .other-item {
      margin-bottom: 20px;
      .other-item-title {
        border-bottom: 2px solid #999;
        padding-bottom: 6px;
        font-size: 16px;
        font-weight: 500;
        color: #32beff;
        span.read-more {
          float: right;
          font-size: 14px;
          color: #999;
        }
      }
      .other-item-container {
        padding: 10px;
        .project-item {
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin: 10px 0;
          img {
            width: 20px;
            height: 20px;
          }
          .project-item-name {
            padding-left: 10px;
            font-size: 14px;
            color: #32beff;
          }
        }
      }
    }
  }
}
</style>


