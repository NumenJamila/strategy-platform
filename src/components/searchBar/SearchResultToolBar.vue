<template>
  <div class="search-result-toolbar">
    <img class="logo" src="@/assets/mysearch_logo_small.png" @click="goHome">
    <RoundSearchBar :search="search"></RoundSearchBar>
    <user class="user-bar" :message-unread-count="unreadCount" :nickName="userNickName" :user-avatar="userAvatar" />
  </div>
</template>

<script>
// @ means "src"
import RoundSearchBar from "@/components/searchBar/RoundSearchBar";
import User from "@/components/main/components/user";
export default {
  components: {
    RoundSearchBar,
    User
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  },
  props: ["search"]
};
</script>

<style lang="less" scoped>
.user-bar {
  float: right;
}
.search-result-toolbar {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #dfe1e5;
  .logo {
    height: 30px * 0.8;
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>

