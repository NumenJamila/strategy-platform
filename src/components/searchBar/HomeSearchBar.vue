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
  width: 400px;
}
.input-search {
  outline: none;
  width: 82%;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #dfe1e5;
  vertical-align: bottom;
  font-size: 1.4em;
  border-radius: 5px 0 0 5px;
  padding: 20px;
}
.btn-search {
  outline: none;
  width: 18%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  background-color: #3388ff;
  color: #fff;
  font-size: 3em;
  border: none;
  border-radius: 0 5px 5px 0;
}
</style>
