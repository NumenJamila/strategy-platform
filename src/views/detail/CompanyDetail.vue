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
            <section class="timeline">
              <ol>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 响应式设计，在屏幕宽度低于 768px 的情况下，会变成垂直的时间轴。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 支持左滑右滑操作，利用 Hammer.js 实现。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 支持左右方向键，左方向键的键码为 37， 而右方向键为 39。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 底下不用看了，因为都是复制的。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 响应式设计，在屏幕宽度低于 768px 的情况下，会变成垂直的时间轴。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 支持左滑右滑操作，利用 Hammer.js 实现。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 支持左右方向键，左方向键的键码为 37， 而右方向键为 39。
                  </div>
                </li>
                <li>
                  <div>
                    <time>2017</time> 底下不用看了，因为都是复制的。
                  </div>
                </li>

                <li></li>
              </ol>
              <div class="arrows">
                <button class="arrow arrow-pre disabled">
                  <img src="" alt="pre" />
                </button>

                <button class="arrow arrow-next">
                  <img src="" alt="next" />
                </button>
              </div>
            </section>
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
<style lang="less" scoped>

/*box-sizing:content-box是默认值。
意思是：边框border和内边距padding的值是包含在被作用的标签的width和height之内的。
也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，
内容区的实际宽度会是width减去(border + padding)的计算值。
但是，要注意它不包括外边距margin的值在内。
大多数情况下这使得我们更容易的去设定一个元素的宽高。
*/

/*“::selection”用来改变在浏览器中选中文本后的设置。*/
/*如，被选中后的背景色为红色，被选中后的字体颜色为蓝色*/
::selection {
  background-color: red;
  color: blue;
}

/*white-space：它的属性用来设置如何处理元素内的空白。
默认值为，nornmal，空白会被浏览器给忽略。
pre，空白会被浏览器保留，同<pre>标签的作用类似。
nowrap，文本不会换行，在同一行上继续显示，直到遇到换行符。
pre-wrap，保留空白，但是 正常地进行换行。*/

/*overflow-x，用来设置，如果元素中内容的左右边缘，溢出元素的内容区域的话怎么办？
auto：如果溢出框，则应该提供滚动机制。
hidden：    裁剪内容 - 不提供滚动机制。
scroll：裁剪内容 - 提供滚动机制。*/
.timeline {
  background-color: #456990 !important;
  line-height: 1.5;
  white-space: nowrap;
  overflow-x: hidden;
}
.timeline ol {
  font-size: 0;
  padding: 250px 0;
  width: 100vw;
  transition: all 1s;
}
.timeline ol li {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 3px;
  list-style-type: none;
  background-color: #fff;
}
.timeline ol li:last-child {
  width: 280px;
}
.timeline ol li:not(:first-child) {
  margin-left: 14px;
}
.timeline ol li:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc(101%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f45b69;
}
.timeline ol li div {
  position: absolute;
  left: calc(107%);
  width: 280px;
  padding: 15px;
  font-size: 1rem;
  white-space: normal;
  color: #333;
  background-color: #fff;
}
.timeline ol li div::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
}
.timeline ol li:nth-child(odd) div {
  top: -16px;
  transform: translateY(-100%);
}
.timeline ol li:nth-child(odd) div::before {
  top: 100%;
  border-width: 8px 8px 0 0;
  border-color: #fff transparent transparent transparent;
}
.timeline ol li:nth-child(even) div {
  top: 16px;
}
.timeline ol li:nth-child(even) div::before {
  top: -8px;
  border-width: 0 8px 8px 0;
  border-color: transparent transparent #fff transparent;
}
.timeline div.arrows {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.timeline div.arrows button {
  border: none;
  background-color: #f45b69;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}
.timeline div.arrows button.arrow-pre {
  margin-right: 20px;
}
.timeline div.arrows button.disabled {
  opacity: 0.5;
}
@media screen and (max-width: 768px) {
  .timeline ol {
    width: auto;
    padding: 0;
    transform: 0 !important;
  }
  .timeline ol li {
    width: auto;
    height: auto;
    display: block;
    background-color: transparent;
  }
  .timeline ol li:first-child {
    margin-top: 20px;
  }
  .timeline ol li:not(:first-child) {
    margin-left: auto;
  }
  .timeline ol li div {
    width: 94%;
    height: auto !important;
    margin: 0 auto 25px;
    position: static;
  }
  .timeline ol li:nth-child(odd) div {
    transform: none;
  }
  .timeline ol li:nth-child(odd) div::before,
  .timeline ol li:nth-child(even) div::before,
  .timeline ol li:not(:last-child)::after {
    display: none;
  }
  .timeline div.arrows {
    display: none;
  }
}
</style>