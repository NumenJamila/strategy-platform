<template>
  <Main searchBar @mainSearch="searchInformation">
    <div class="search-page customize-container-center">
      <!-- <div class="tab-pane-title">{{this.queryCondition.informationName}}</div>  -->
      <tabItemBar :whichItem="whichItem" @tabClick="tabClick"></tabItemBar>
      <Tabs type="card" class="ivu-tabs-bar-update" @on-click="typeChange" >
        <TabPane label="最新资讯">
          <div class="wrapper">
            <div class="container">
              <Table
                highlight-row
                ref="currentRowTable"
                :show-header="false"
                :border="false"
                :columns="reportsColumns"
                :data="informationData"
              ></Table>
            </div>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="entityCount" show-elevator show-total :current="1" @on-change="changePage"></Page>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="行业报告">
          <div class="wrapper">
            <div class="container">
              <Table
                highlight-row
                ref="currentRowTable"
                :show-header="false"
                :border="false"
                :columns="reportsColumns"
                :data="informationData"
              ></Table>
            </div>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="entityCount" show-elevator show-total :current="1" @on-change="changePage"></Page>
              </div>
            </div>
          </div>

        </TabPane>
      </Tabs>
      <div class="other-project">
        <div class="other-container">
          <div class="other-item">
            <div class="other-item-title">
              <span>我的收藏</span>
              <span class="read-more">
                <a @click="getMoreCollect">查看更多</a>
                <Icon type="ios-arrow-forward" />
              </span>
            </div>
            <div class="other-item-container">
              <div v-for="info in collectData" :key="info.id">
                <div class="project-item">
                  <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                  <div><a class="project-item-name" @click="getCollectOrHistoryInformationDetail(info.informationId)">{{info.informationName}}</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="other-item">
            <div class="other-item-title">
              <span>浏览历史</span>
              <span class="read-more">
                <a @click="getMoreHistory">查看更多</a>
                <Icon type="ios-arrow-forward" />
              </span>
            </div>
            <div class="other-item-container">
              <div v-for="info in historyData" :key="info.id">
                <div class="project-item">
                  <img src="https://avatar.csdn.net/1/2/3/3_liu_liu57.jpg" alt />
                  <div><a class="project-item-name" @click="getCollectOrHistoryInformationDetail(info.informationId)">{{info.informationName}}</a></div>
                 </div>
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
import { queryInformation, collected, queryCollectedAndHistory } from '@/services';
// import information from "@/api/information";
// import collect from "@/api/collect";
import { constants } from 'crypto';

export default {
  data() {
    return {
      msg: this.$route.params.searchText,
      searchResultList: [],
      whichItem: "SearchReport",
      reportsColumns: [
        {
          title: "名称",
          key: "informationName",
          width: 300,
          render:(h,params) =>{
            return h("div",[
               h(
                 'a',
                
                  {
                     style:{
                       color:"#515a6e"
                   },
                    on: { click: () => {
                        this.GetInformationDetail(params.row.informationId);
                      },
                    }
                  },
                  params.row.informationName
               )
            ])
          }
        },
        {
          title: "来源",
          key: "source",
          width: 100,
        },
        {
          title: "时间",
          key: "createTime",
          width: 160,
        },
        {
          title: "操作",
          key: "action",
          width: 200,
          align: "left",
          render: (h, params) => {
            if(params.row.informationType == 1){
                return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: params.row.collect? 'error' : 'primary',
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.collectInformation(params.index);
                      }
                    }
                  },
                
                  params.row.collect?"已收藏":"收藏"
                )
              ])
            }else{
              return h("div", [
               h(
                "Button",
                {
                  props: {
                    type: 'primary',
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.downLoadFile(params.index);
                    }
                  }
                 },
                 "下载"
               ),
                h(
                  "Button",
                  {
                    props: {
                      type: params.row.collect? 'error' : 'primary',
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.collectInformation(params.index);
                      }
                    }
                  },
                
                  params.row.collect?"已收藏":"收藏"
                )
              ],
              )
            }
          }
        },
      ],
      
      informationData: [],
      reportData: [],
      historyData:[],
      collcetData:[],
      queryCondition:{
        pageNo: 1,
        pageSize:8,
        informationName:"",
        informationType:1
      },
      collected:{
        collectName:"",
        collectedType:"",
        collectId:""
      },
      entityCount:1,
      tabIndex: 0,
      queryCollectAndHistoryCondition:{
        type:2
      }
    };
  },
  components: {
    SearchResultItem,
    Main,
    tabItemBar
  },
  created() {
    this.queryCondition.informationName = this.msg;
    this.doSearchResult();
    this.queryCollectAndHistory();
  },
  
  beforeRouteUpdate(to, from, next) {
    next();
    this.doSearchResult();
    this.queryCollectAndHistory();
  },
  methods: {
    doSearchResult() {
      queryInformation(this.queryCondition).then(res=>{
        if(res.data.isSuccess){
          this.informationData = res.data.information.entities;
          this.entityCount = res.data.information.entityCount;
        }else{
           this.$Message.info({
                content: res.data.msg,
                duration: 3
            });
        }
      })
    },
    queryCollectAndHistory(){
      queryCollectedAndHistory(this.queryCollectAndHistoryCondition).then(res =>{
        if(res.data.isSuccess){
            this.historyData = res.data.historyList;
            console.log(this.historyData);
            this.collectData = res.data.collectList;
            console.log(this.collectData);
        }else{
          this.$Message.info(
            {
              content: res.data.msg,
              duration: 3
            }
          )}
      })
    },
    goUrl(url) {
      this.$router.push({ name: url });
    },
    tabClick(e) {
      let that = this;
      that.goUrl(e);
    },
    //查找资讯信息
    searchInformation(searchText){
      this.queryCondition.informationName = searchText;
      this.doSearchResult();
    },

    GetInformationDetail(informationId){
     this.$router.push({
        path: '/informationDetail',
        query: {
          informationId: informationId
        }
      })
    },
    getCollectOrHistoryInformationDetail(params){
      this.$router.push({
        path:'/informationDetail',
        query:{
          informationId: params
        }
      })
    },

    //更换tab时，切换资讯信息的type
    typeChange(e){
      if(this.tabIndex == e){
        return;
      }
      this.tabIndex =e;
      if(this.queryCondition.informationType == 1){
          this.queryCondition.informationType = 2;
          this.queryCollectAndHistoryCondition.type = 3;
        }else{
          this.queryCondition.informationType = 1;
          this.queryCollectAndHistoryCondition.type = 2;
        }
        this.queryCondition.pageNo = 1;
        this.doSearchResult();
        this.queryCollectAndHistory();
    },
    //换页请求数据
    changePage(currentNo){
      this.queryCondition.pageNo = currentNo
      this.doSearchResult();
     
    },
    //收藏操作，点击收藏，再点击取消收藏
    collectInformation(params){
      this.collected.collectId = this.informationData[params].informationId;
      this.collected.collectName = this.informationData[params].informationName;
      if(this.informationData[params].informationType == 1){
        this.collected.collectedType = 2;
      }else{
        this.collected.collectedType = 3;
      }

      collected(this.collected).then(res=>{
          if(res.data.isSuccess){
            if(res.data.isCollect){
              //图标改成已收藏
              this.informationData[params].collect = true;
            }else{
              //图标改成收藏
              this.informationData[params].collect = false;
            }
            this.$Message.info({
                  content: res.data.msg,
                  duration: 3
              });
          }else{
            this.$Message.info({
                  content: res.data.msg,
                  duration: 3
              });
          }
      })
  },
  getMoreCollect(){
      this.$router.push({
        path:"/collected",
      })
  },
  getMoreHistory(){
    this.$router.push({
        path:"/history",
      })
    }
  }
}
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


