<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick" v-if="nickName">
      <!-- <Badge :dot="!!messageUnreadCount"> -->
      <Badge :dot="!!messageUnreadCount">
        <Avatar v-if="userAvatar" :src="userAvatar" />
        <Avatar v-else icon="ios-person" />
        <span style="padding: 0 8px;">{{nickName}}</span>
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心
          <Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="personal">
          个人信息
          <Badge style="margin-left: 10px"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown @on-click="handleClick" v-else>
      <Badge>
        <Avatar icon="ios-person" />
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="login">登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Login @on-success-valid="handleSubmit" :loginMoadl.sync="loginMoadl"></Login>
  </div>
</template>

<script>
import Login from "@/components/login-form";

import "./user.less";
import { mapActions } from "vuex";
export default {
  components: {
    Login
  },
  name: "User",
  props: {
    userAvatar: {
      type: String,
      default: ""
    },
    nickName: {
      type: String,
      default: ""
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loginMoadl: false
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["handleLogOut"]),

    handleSubmit({ name, password }) {},
    logout() {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: "login"
        });
      });
    },
    personal() {
      this.$router.push({
        name: "personal"
      });
    },
    fucloseModalFunc(e) {
      console.log("fu", e)
      this.loginMoadl = false;
    },
    handleClick(name) {
      switch (name) {
        case "logout":
          this.logout();
          break;
        case "personal":
          this.personal();
          break;
        case "login":
          console.log("denglu");
          this.loginMoadl = true;
          break;
      }
    }
  }
};
</script>
<style>
</style>

