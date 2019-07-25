<template>
  <Main @mainSearch="mainSearch" :searchText="searchText">
    <div class="detail-page customize-container-center">
      <tabItemBar :whichItem="whichItem" @tabClick="tabClick" class="tab-pane-class"></tabItemBar>
      <div class="detail-left">
        <div class="detail-company-name">
          <Icon class="more-icon" type="ios-arrow-forward" />
          <span class="company-Name">{{companyInfo.companyName}}</span>
          <span class="tag-name" v-for="tag in companyInfo.tagList " :key="tag">[{{tag}}]</span>
        </div>
        <div class="nav">
          <ul class="nav-centent">
            <li>
              <a @click="goUrl('CompanyBase')" href="#">基础信息</a>
              <span></span>
            </li>
            <li class="numen-active">
              <a @click="goUrl('CompanyCooperate')" class>合作信息</a>
              <span></span>
            </li>
            <li>
              <a @click="goUrl('CompanyCooperate')" class>综合评价</a>
              <span></span>
            </li>
            <li>
              <a @click="goUrl('CorporateInvestmentFinance')" class>投融资</a>
              <span></span>
            </li>
            <li>
              <a @click="goUrl('CorporateAffiliation')" class>关联</a>
              <span></span>
            </li>
            <li>
              <a @click="goUrl('CompanyNavigation')" class>导航</a>
              <span></span>
            </li>
          </ul>
        </div>
        <div class="tab-item">
          <Timeline>
            <TimelineItem class="time-line-item">
              <Col span="4">2019年06月</Col>
              <Col span="6">《电子商务合同》</Col>
              <Col span="5">部门：海尔COSMO</Col>
              <Col span="4">状态：已完成</Col>
              <Col span="3">
                <Button>查看详情</Button>
              </Col>
            </TimelineItem>
            <TimelineItem class="time-line-item">
              <Col span="4">2019年06月</Col>
              <Col span="6">《电子商务合同》</Col>
              <Col span="5">部门：海尔COSMO</Col>
              <Col span="4">状态：已完成</Col>
              <Col span="3">
                <Button>查看详情</Button>
              </Col>
            </TimelineItem>
            <TimelineItem class="time-line-item">
              <Col span="4">2019年06月</Col>
              <Col span="6">《电子商务合同》</Col>
              <Col span="5">部门：海尔COSMO</Col>
              <Col span="4">状态：已完成</Col>
              <Col span="3">
                <Button>查看详情</Button>
              </Col>
            </TimelineItem>
            <TimelineItem class="time-line-item">
              <Col span="4">2019年06月</Col>
              <Col span="6">《电子商务合同》</Col>
              <Col span="5">部门：海尔COSMO</Col>
              <Col span="4">状态：已完成</Col>
              <Col span="3">
                <Button>查看详情</Button>
              </Col>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div class="detail-right">
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
      </div>
    </div>
  </Main>
</template>

<script>
// @ means "src"
import Main from "@/components/main";
import tabItemBar from "@/components/tabItemBar";
// import companyinfo from "@/api/companyinfo"
import { getCompanyInfoByNo } from "@/services";
import "@/assets/CompanyDetail/hammer.min.js";

export default {

  data() {
    return {
      whichItem: "SearchCompany",
      searchText: "",
      companyInfo: {},
      cooperate: [],
      queryCondition: {
        companyNo: ""
      }
    };
  },
  components: {
    Main,
    tabItemBar
  },
  created() {
    this.companyNo = this.$route.query.companyNo;
    (this.queryCondition.companyNo = this.companyNo),
      this.GetCompanyInfoByNo(this.queryCondition);
  },

  methods: {
    tabClick(e) {
      this.$emit("tabClick", e)
    },
    goUrl(url) {
      this.$router.push({ name: url });
    },
    GetCompanyInfoByNo() {
      getCompanyInfoByNo(this.queryCondition).then(res => {
        if (res.data.isSuccess) {
          this.companyInfo = res.data.data.companyInfo;
          this.cooperate = res.data.data.cooperate;
          if (this.companyInfo) {
            this.companyInfo.tagList = this.companyInfo.tagName.split(",");
          }
        } else {
          this.$Message.info(res.data.msg);
        }
      });
    },
    mainSearch(searchText) {
      // this.queryCondition.companyName = searchText;
      // this.doSearchResult();
    },
    cooperateDetail(id) {
      this.$router.push({
        path: "/cooperateDetail",
        query: {
          id: id
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.detail-page {
  .detail-left {
    width: 800px;
    float: left;
    .detail-company-name {
      border-bottom: 1px solid #999;
      padding-bottom: 12px;
      .more-icon {
        color: #32beff;
        font-size: 26px;
        line-height: 1;
        vertical-align: top;
      }
      .company-Name {
        color: #32beff;
        font-size: 16px;
        padding-right: 10px;
      }
      .tag-name {
        padding-right: 6px;
        color: #009966;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
.tab-item {
  border: 1px solid #999;
  min-width: 600px;
  min-height: 300px;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.table {
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  text-align: center;
  color: #333;
}
.table.-striped-col td:nth-child(odd) {
  background-color: #f0f7fc;
}
.table td {
  padding: 8px;
}
.table td,
.table th {
  border: 1px solid #e4eef6;
  font-weight: 400;
  vertical-align: middle;
}

.border-up-empty {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 30px solid #333;
  position: relative;
  margin: 50px auto;
}
.border-up-empty span {
  display: block;
  width: 0;
  height: 0;
  border-left: 28px solid transparent;
  border-right: 28px solid transparent;
  border-bottom: 28px solid #f0981c;
  position: absolute;
  left: -28px;
  top: 2px;
}
.detail-right {
  border-left: 1px solid #e1e1e1;
  width: 384px;
  float: right;
  padding-left: 60px;
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
.time-line-item {
  height: 50px;
}
</style>
<style type="text/css" scoped>
.nav {
  width: 100%;
  height: 50px;
}
.nav .nav-centent {
  width: 800px;
  margin: 0 auto;
  height: 50px;
}
.nav .nav-centent > li {
  /* width: 120px; */
  height: 50px;
  display: block;
  float: left;
  text-align: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
}
.nav .nav-centent li a {
  /* width: 120px; */
  height: 50px;
  display: block;
  font-size: 14px;
  line-height: 50px;
  color: #666;
}
.nav .nav-centent ul {
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 99;
  width: 100%;
}

.nav .nav-centent li a:hover {
  color: #32beff;
}
.numen-active a {
  color: #32beff !important;
}
.numen-active {
  position: relative;
}
.numen-active span::after,
.nav .nav-centent li a:hover + span::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  height: 0px;
  border-top: 16px solid rgba(0, 0, 0, 0);
  border-right: 16px solid rgba(0, 0, 0, 0);
  border-bottom: 16px solid #32beff;
  border-left: 16px solid rgba(0, 0, 0, 0);

  margin-bottom: 10px;
}
</style>
