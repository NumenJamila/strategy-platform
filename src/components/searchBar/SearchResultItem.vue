<template>
  <div class="search-result-item">
    <a class="search-result-link" :href="info.url">
      <img class="company-logo" src="@/assets/img/jh-logo.png" alt="">
      <div class="title">{{ info.title }}</div>
      <div class="url">{{ info.url }}</div>
      <div class="desc">{{ info.date }} - {{ info.desc }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="less" scoped>
.search-result-item {
  text-align: left;
  padding: 20px;
  .search-result-link {
    text-decoration: none;
  }
  .company-logo {
    display: inline-block;
    height: 20px;;
  }
  .title {
    display: inline-block;
    color: #190daa;
    font-size: 1.2em;
  }
  .url {
    color: #006620;
    font-weight: bold;
  }
  .desc {
    color: #545454;
  }
}
</style>
