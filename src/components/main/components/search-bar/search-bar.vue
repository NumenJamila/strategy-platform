<template>
  <div class="home-search-bar">
    <div class="container">
      <img class="logo" src="@/assets/img/logo-search.png" @click="goHome" />
      <input class="input-search" v-model="searchText" @keydown.enter="doSearch" />
      <button class="btn-search" @click="doSearch">
        <Icon type="ios-search" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ""
    };
  },
  
  methods: {
    doSearch() {
      this.$emit("doSearch", this.searchText);
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.home-search-bar {
  display: inline-block;
  // width: 300px;
  height: 50px;
  line-height: 50px;
}
.container {
  width: 100%;
  height: 100%;
}
.logo {
  height: 26px;
  vertical-align: middle;
  margin-right: 20px;
}
.input-search {
  outline: none;
  width: 200px;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  border: 1px solid #dfe1e5;
  // vertical-align: top;
  vertical-align: middle;
  font-size: 1.2em;
  border-radius: 5px 0 0 5px;
  padding: 6px;
}
.btn-search {
  outline: none;
  width: 50px;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  background-color: #3388ff;
  // vertical-align: top;
  vertical-align: middle;
  color: #fff;
  font-size: 2.4em;
  border: none;
  border-radius: 0 5px 5px 0;
}
</style>
