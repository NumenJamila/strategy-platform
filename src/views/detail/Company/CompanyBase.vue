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
            <li class="numen-active">
              <a @click="goUrl('CompanyBase')" href="#">基础信息</a>
              <span></span>
            </li>
            <li>
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
          <table class="table -striped-col -border-top-none -breakall">
            <tbody>
              <tr>
                <td width="144px">企业名称</td>
                <td width="308px">{{companyInfo.companyName}}</td>
                <td width="150px">法人代表</td>
                <td colspan="2">{{companyInfo.legalRepresentative}}</td>
              </tr>
              <tr>
                <td width="144px">企业网站</td>
                <td colspan="3">
                  <span class>{{companyInfo.website}}</span>
                </td>
              </tr>
              <tr>
                <td width="144px">企业简介</td>
                <td colspan="3">
                  <span class>{{companyInfo.companyDesc}}</span>
                </td>
              </tr>
              <tr>
                <td width="144px">注册资本</td>
                <td width="308px">
                  <div title="1000万人民币">{{companyInfo.regCapital}}</div>
                </td>
                <td width="144px">资本类型</td>
                <td width="308px">
                  <div title="1000万人民币">{{companyInfo.capitalType | formatCapitalType}}</div>
                </td>
              </tr>
              <tr>
                <td width="150px">经营状态</td>
                <td width>{{companyInfo.manageStatus}}</td>
                <td width="150px">融资情况</td>
                <td>{{companyInfo.finanSituation}}</td>
              </tr>
              <tr>
                <td width="144px">统一社会信用代码</td>
                <td width="308px">{{companyInfo.socialCreditCode}}</td>
                <td width="150px">组织机构代码</td>
                <td colspan="2">{{companyInfo.orgCode}}</td>
              </tr>
              <tr>
                <td width="144px">联系电话</td>
                <td width="308px">{{companyInfo.contactPhone}}</td>
                <td width="150px">联系邮箱</td>
                <td colspan="2">{{companyInfo.companyEmail}}</td>
              </tr>
              <tr>
                <td width="144px">公司类型</td>
                <td width="308px">{{companyInfo.companyType}}</td>
                <td width="150px">行业</td>
                <td colspan="2">{{companyInfo.industry}}</td>
              </tr>
              <tr>
                <td width="144px">重要焦点</td>
                <td width="308px">{{companyInfo.importantFocus}}</td>
                <td width="150px">标签</td>
                <td colspan="2">{{companyInfo.tagName}}</td>
              </tr>
              <tr>
                <td width="144px">成立日期</td>
                <td width="308px">
                  <div title=" ">{{companyInfo.startTerm}}</div>
                </td>
                <td width="144px">营业期限</td>
                <td width="308px">
                  <span>{{companyInfo.endTerm}}</span>
                </td>
              </tr>
              <tr>
                <td width="144px">人员规模</td>
                <td width="308px">{{companyInfo.companyPeopleNum}}</td>
                <td width="150px">核准日期</td>
                <td colspan="2">{{companyInfo.approvalDate}}</td>
              </tr>

              <tr>
                <td width="144px">注册地址</td>
                <td colspan="4">{{companyInfo.regAddress}}</td>
              </tr>
              <tr>
                <td width="144px">详细地址</td>
                <td colspan="4">
                  <span class>{{companyInfo.addressDetail}}</span>
                </td>
              </tr>
              <tr>
                <td width="144px">经营范围</td>
                <td colspan="4">
                  <span class>{{companyInfo.businessScope}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--向下的三角形-->
        <!-- <div class="border-up-empty">
              <span></span>
        </div>-->
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
  /* 局部过滤器 */
  filters: {
    /* 格式化注册资本类型 */
    formatCapitalType(val) {
      switch (val) {
        case 0:
          return "人民币";
          break;
        case 1:
          return "美元";
          break;
        default:
          return "-";
      }
    }
  },
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
  // margin: 20px;
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
.nav .nav-centent li a:hover+span::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -11px;
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