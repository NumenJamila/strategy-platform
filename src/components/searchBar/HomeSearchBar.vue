<template>
  <div class="home-search-bar">
    <input class="input-search" v-model="searchText" @keydown.enter="doSearch" />
    <button class="btn-search" @click="doSearch">
      <Icon type="ios-search" />
    </button>
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
    }
  }
};
</script>

<style lang="less" scoped>
.home-search-bar {
  width: 480px;
}
.input-search {
  outline: none;
  width: 84%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #32beff;
  vertical-align: middle;
  font-size: 1.2em;
  border-radius: 5px 0 0 5px;
  padding: 10px;
}
.btn-search {
  outline: none;
  width: 16%;
  height: 40px;
  line-height: 1;
  box-sizing: border-box;
  background-color: #32beff;
  vertical-align: middle;
  color: #fff;
  font-size: 3em;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
</style>
