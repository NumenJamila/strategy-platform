<template>
  <Layout style="height: 100%" class="main">
    <Layout>
      <Header class="header-con">
        <div class="header-bar customize-container-center">
          <div class="home-search-bar">
            <div class="container">
              <img class="logo" src="@/assets/img/logo-search.png" @click="goHome" />
              <input class="input-search" v-model="searchText" @keydown.enter="doSearch" />
              <button class="btn-search" @click="mainSearch">
                <Icon type="ios-search" />
              </button>
            </div>
          </div>
          <div class="custom-content-con">
            <user
              :message-unread-count="unreadCount"
              :nickName="userNickName"
              :user-avatar="userAvatar"
            />
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
import TabPane from "./components/tab-pane";

import "./main.less";
export default {
  name: "Main",
  components: {
    User,
    ABackTop,
    TabPane
  },
  data() {
    return {
      e: ""
    };
  },
  props: {
    searchText: {
      type: String,
      default: ""
    },
  },
  computed: {
    userAvatar() {
      // return "this.$store.state.userInfoSync.userinfo.head";
      return "";
    },
    userNickName() {
      return "";
    },

    unreadCount() {
      return 0;
      // return this.$store.state.user.unreadCount;
    }
  },
  methods: {
    mainSearch(searchText) {
      this.$emit("mainSearch", searchText);
    },

    goHome() {
      this.$router.push("/");
    }
  },
  mounted() {}
};
</script>
<style lang="less">
.header-bar {
  width: 100%;
  height: 100%;
  position: relative;
  .custom-content-con {
    float: right;
    height: auto;
    padding-right: 20px;
    line-height: 56px;
    & > * {
      float: right;
    }
  }
}
</style>
<style lang="less" scoped>
.home-search-bar {
  // display: inline-block;
  float: left;
  // width: 300px;
  height: 56px;
  line-height: 56px;
}
.container {
  width: 100%;
  height: 100%;
}
.logo {
  // height: 26px;
  cursor: pointer;
  width: 120px;
  vertical-align: middle;
  margin-right: 20px;
}
.input-search {
  outline: none;
  width: 300px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  border: 1px solid #32beff;
  // vertical-align: top;
  vertical-align: middle;
  font-size: 1.2em;
  // border-radius: 5px 0 0 5px;
  padding: 6px;
}
.btn-search {
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  background-color: #32beff;
  // vertical-align: top;
  vertical-align: middle;
  color: #fff;
  font-size: 2.4em;
  border: none;
  // border-radius: 0 5px 5px 0;
}
</style>