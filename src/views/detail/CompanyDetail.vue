<template>
  <Main :searchBar="true">
    <div class="detail-page customize-container-center">
      <div class="detail-left">
        <div class="detail-company-name">
          <Icon class="more-icon" type="ios-arrow-forward" />
          <span class="company-Name">{{info.companyName}}</span>
          <span class="tag-name" v-for="tag in info.tagName" :key="tag">[{{tag}}]</span>
        </div>
        <Tabs value="name1">
          <TabPane label="基本信息" name="name1">
            <div class="tab-item">
              公司描述：{{info.companyDesc}}
              <br/>
              <br/>
               经营期限:{{info.startTerm}}z至{{info.endTerm}}<br/><br/>
                  注册地址：{{info.regAddress}}<br/><br/>
                  注册资金：{{info.regCapital}}<br/><br/>
                  组织机构代码：{{info.orgCode}}<br/><br/>
                  核准日期：{{info.approvalDate}}<br/><br/>
                  所属行业：{{info.industry}}<br/><br/>
                  联系电话：{{info.contactPhone}}<br/><br/>
                  公司网址： <a href="">{{info.website}}</a><br/><br/>
                  经营范围：{{info.businessScope}}<br/>
            </div>
            
            <!--向下的三角形-->
            <!-- <div class="border-up-empty">
              <span></span>
            </div>-->
          </TabPane>
          <TabPane label="合作信息" name="name2">
              <div v-for="info in cooperate" :key="info.cooperateContext">
                  {{info.cooperateContext}}<br/>
                  {{info.firstPartyName}}<br/>
                  {{info.cooperateStatus}}<br/>
                 
                  <div @click="cooperateDetail(info.id)">查看详情</div>
                  <hr>
              </div>
          </TabPane>
          <TabPane label="综合评价" name="name3">
              公司综合评价
          </TabPane>
          <TabPane label="投融资" name="name4">+
              投融资信息展示
          </TabPane>
          <TabPane label="导航" name="name5">
              导航栏信息展示
          </TabPane>
        </Tabs>
      </div>
      <div class="detail-right"></div>
    </div>
  </Main>
</template>

<script>
// @ means "src"
import Main from "@/components/main";
import companyinfo from "@/api/companyinfo"
export default {
 
  data() {
    return {
      info: {
        companyName: "惠州巨合电子商务有限公司",
        tagName: ["战略合作伙伴", "电商", "物联网"],
        companyDesc:"",
        businessScope:""
      },
      cooperate:[],
      queryCondition:{
        companyNo:""
      }
    };
  },
  components: {
    Main
  },
  created() {
      this.companyNo = this.$route.query.companyNo;
      this.queryCondition.companyNo = this.companyNo,
      this.getCompanyInfo(this.queryCondition)
  },

  methods: {
    getCompanyInfo(){
      companyinfo.getCompanyInfo(
          this.queryCondition
      ).then(res=>{
        if(res.data.isSuccess){
            this.info = res.data.companyInfo;
            this.cooperate = res.data.cooperate;
        }else{
          this.$Message.info(res.data.msg);
        }
      });
    },
    cooperateDetail(id) {
      this.$router.push({
        path: '/cooperateDetail',
        query: {
          id: id
        }
      })
    },
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
