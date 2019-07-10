<template>
  <Main searchBar>
    <div class="detail-page customize-container-center">
      <div class="detail-left">
        <div class="detail-company-name">
          <Icon class="more-icon" type="ios-arrow-forward" />
          <span class="company-Name">{{info.companyName}}</span>
          <span class="tag-name" v-for="tag in info.tagName" :key="tag">[{{tag}}]</span>
        </div>
        <Tabs value="name1">
          <TabPane label="基本信息" name="name1">
            <div class="tab-item"></div>
            <!--向下的三角形-->
            <!-- <div class="border-up-empty">
              <span></span>
            </div>-->
          </TabPane>
          <TabPane label="合作信息" name="name2">标签二的内容</TabPane>
          <TabPane label="综合评价" name="name3">标签三的内容</TabPane>
          <TabPane label="投融资" name="name3">标签三的内容</TabPane>
          <TabPane label="导航" name="name3">标签三的内容</TabPane>
        </Tabs>
      </div>
      <div class="detail-right"></div>
    </div>
  </Main>
</template>

<script>
// @ means "src"
import Main from "@/components/main";

export default {
  data() {
    return {
      info: {
        companyName: "惠州巨合电子商务有限公司",
        tagName: ["战略合作伙伴", "电商", "物联网"]
      }
    };
  },
  components: {
    Main
  },
  created() {},

  methods: {}
};
</script>
<style <style lang="less" scoped>
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
