<template>
  <Layout style="height: 100%" class="main">
    <Layout>
      <Header class="header-con">
        <div class="header-bar customize-container-center">
          <SearchBar @doSearch="mainSearch" v-if="searchBar"></SearchBar>
          <div class="custom-content-con">
            <user
              :message-unread-count="unreadCount"
              :nickName="userNickName"
              :user-avatar="userAvatar"
            />
            <TabPane @on-select="onSelect(e)" v-if="tabPane"></TabPane>
          </div>
        </div>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <slot></slot>
            <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import User from "./components/user";
import ABackTop from "./components/a-back-top";
import SearchBar from "./components/search-bar";
import TabPane from "./components/tab-pane";

import "./main.less";
export default {
  name: "Main",
  components: {
    User,
    ABackTop,
    SearchBar,
    TabPane
  },
  data() {
    return {
      e:""
    };
  },
  props: {
    searchBar: {
      type: Boolean,
      default: false
    },
    tabPane: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    userAvatar() {
      // return "this.$store.state.userInfoSync.userinfo.head";
      return "";
    },
    userNickName() {
      return "nickName";
    },

    unreadCount() {
      return 2;
      // return this.$store.state.user.unreadCount;
    }
  },
  methods: {
    mainSearch(searchText) {
      this.$emit("mainSearch", searchText)
    },
    onSelect(e) {
      this.$emit("onSelect", e)
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="less">
.header-bar{
  width: 100%;
  height: 100%;
  position: relative;
  .custom-content-con{
    float: right;
    height: auto;
    padding-right: 20px;
    line-height: 56px;
    & > *{
      float: right;
    }
  }
}



</style>
