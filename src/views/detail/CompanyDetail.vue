<template>
  <Main @mainSearch="mainSearch" :searchText="searchText">
    <div class="detail-page customize-container-center">
      <div class="detail-left">
        <div class="detail-company-name">
          <Icon class="more-icon" type="ios-arrow-forward" />
          <span class="company-Name">{{companyInfo.companyName}}</span>
          <span class="tag-name" v-for="tag in companyInfo.tagList " :key="tag">[{{tag}}]</span>
        </div>
        <Tabs value="name1">
          <TabPane label="基本信息" name="name1">
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
          </TabPane>
          <TabPane label="合作信息" name="name2">
            <!-- <div v-for="info in cooperate" :key="info.cooperateContext">
              {{info.cooperateContext}}
              <br />
              {{info.firstPartyName}}
              <br />
              {{info.cooperateStatus}}
              <br />

              <div @click="cooperateDetail(info.id)">查看详情</div>
              <hr />
            </div>-->
            <div class="timeline">
              <ol>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li></li>
              </ol>
              <div class="arrows">
                <button class="arrow arrow-pre disabled">
                  <Icon type="ios-arrow-dropleft-circle" />
                </button>

                <button class="arrow arrow-next">
                  <Icon type="ios-arrow-dropright-circle" />
                </button>
              </div>
            </div>
          </TabPane>
          <TabPane label="综合评价" name="name3">公司综合评价</TabPane>
          <TabPane label="投融资" name="name4">
            +
            投融资信息展示
          </TabPane>
          <TabPane label="导航" name="name5">导航栏信息展示</TabPane>
        </Tabs>
      </div>
      <div class="detail-right"></div>
    </div>
  </Main>
</template>

<script>
// @ means "src"
import Main from "@/components/main";
// import companyinfo from "@/api/companyinfo"
import { getCompanyInfoByNo } from "@/services";
import "@/assets/CompanyDetail/hammer.min.js";
// import'@/assets/CompanyDetail/timeline.js'
import "@/assets/CompanyDetail/timeline.css";

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
      searchText: "",
      companyInfo: {},
      cooperate: [],
      queryCondition: {
        companyNo: ""
      }
    };
  },
  components: {
    Main
  },
  created() {
    this.companyNo = this.$route.query.companyNo;
    (this.queryCondition.companyNo = this.companyNo),
      this.GetCompanyInfoByNo(this.queryCondition);
  },
  mounted() {
    const timeline = document.querySelector(".timeline ol"),
      elH = document.querySelectorAll(".timeline ol div"),
      arrows = document.querySelectorAll(".arrows .arrow"),
      arrowPrev = document.querySelector(".timeline .arrows .arrow-pre"),
      arrowNext = document.querySelector(".timeline .arrows .arrow-next"),
      firstItem = document.querySelector(".timeline li:first-child"),
      lastItem = document.querySelector(".timeline ol li:last-child"),
      xScrolling = 280,
      disabledClass = "disabled";

    window.addEventListener("load", init, false);
    function init() {
      setEqualHeight(elH);
      arrowPrev.disabled = true;
      animateTl(xScrolling, arrows, timeline);
      setSwipeFn(timeline, arrowPrev, arrowNext);
      setKeyboardFn(arrowPrev, arrowNext);
    }

    function setEqualHeight(el) {
      var largestHeight = (el[0] && el[0].offsetHeight) || 0,
        length = el.length;

      for (var i = 1; i < length; i++) {
        if (el[i].offsetHeight > largestHeight) {
          largestHeight = el[i].offsetHeight;
        }
      }

      for (var i = 0; i < length; i++) {
        el[i].style.height = largestHeight + "px";
      }
    }

    function animateTl(scrolling, el, tl) {
      for (var i = 0; i < el.length; i++) {
        var count = 0;
        el[i].addEventListener(
          "click",
          function() {
            if (!arrowPrev.disabled) {
              arrowPrev.disabled = true;
            }

            if (!arrowNext.disabled) {
              arrowNext.disabled = true;
            }

            var sign = this.classList.contains("arrow-pre") ? "" : "-";

            if (count === 0) {
              tl.style.transform = "translateX( -" + scrolling + "px )";
            } else {
              var tlStyle = getComputedStyle(tl),
                values =
                  parseInt(
                    tlStyle.getPropertyValue("transform").split(",")[4]
                  ) + parseInt(sign + scrolling);
              tl.style.transform = "translateX(" + values + "px )";
            }
            count += 1;

            setTimeout(() => {
              isElementInViewport(firstItem)
                ? setBtnState(arrowPrev)
                : setBtnState(arrowPrev, false);
              isElementInViewport(lastItem)
                ? setBtnState(arrowNext)
                : setBtnState(arrowNext, false);
            }, 1100);
          },
          false
        );
      }
    }

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function setBtnState(el, flag = true) {
      if (flag) {
        el.classList.add(disabledClass);
      } else {
        if (el.classList.contains(disabledClass)) {
          el.classList.remove(disabledClass);
        }
        el.disabled = false;
      }
    }

    function setSwipeFn(tl, prev, next) {
      const hammer = new Hammer(tl);
      hammer.on("swipeleft", () => {
        next.click();
      });
      hammer.on("swiperight", () => {
        prev.click();
      });
    }

    function setKeyboardFn(prev, next) {
      document.addEventListener("keydown", e => {
        if (e.which === 37 || e.which === 39) {
          var timelineOffsetTop = timeline.offsetTop,
            y = window.pageYOffset;

          if (timelineOffsetTop !== y) {
            window.scrollTo(0, timelineOffsetTop);
          }

          if (e.which === 37) {
            prev.click();
          }

          if (e.which === 39) {
            next.click();
          }
        }
      });
    }
  },
  methods: {
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
  // border-radius: 8px;
  margin: 20px;
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
</style>
