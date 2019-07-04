<template>
  <Layout style="height: 100%" class="main">
    <Layout>
      <Header class="header-con">
        <header-bar>
          <user
            :message-unread-count="unreadCount"
            :nickName="userNickName"
            :user-avatar="userAvatar"
          />
        </header-bar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <keep-alive>
              <router-view />
            </keep-alive>
            <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import HeaderBar from "./components/header-bar";
import User from "./components/user";
import ABackTop from "./components/a-back-top";

import "./main.less";
export default {
  name: "Main",
  components: {
    HeaderBar,
    User,
    ABackTop
  },
  data() {
    return {
      
    };
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
      return 2
      // return this.$store.state.user.unreadCount;
    }
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style>
.ivu-layout-header {
  height: 50px !important;
  line-height: 50px !important;
}
</style>
