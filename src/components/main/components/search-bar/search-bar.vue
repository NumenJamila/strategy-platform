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
      searchText:""
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
