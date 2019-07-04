<template>
  <div class="round-search-bar">
    <input v-model="searchText" type="text" class="input-search" @keydown.enter="doSearch" />
    <button class="btn-search" @click="doSearch">
      <Icon type="ios-search" />
    </button>
  </div>
</template>

<script>

export default {
  name: "round-search-bar",
  props: ["search"],
  data() {
    return {
      searchText: this.search
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
      return 2;
      // return this.$store.state.user.unreadCount;
    }
  },
  methods: {
    doSearch() {
      console.log("点击了搜索");
    }
  }
};
</script>

<style lang="less" scoped>
.round-search-bar {
  width: 400px;
  position: relative;
  display: inline-block;
  .input-search {
    outline: none;
    width: 100%;
    height: 30px;
    border-radius: 25px;
    border: 1px solid #dfe1e5;
    padding: 20px;
    box-sizing: border-box;
    font-size: 1.2em;
  }
  .btn-search {
    // height: 30px;
    position: absolute;
    right: 8px;
    font-size: 3em;
    top: 50%;
    transform: translateY(-55%);
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
