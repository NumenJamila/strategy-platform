<template>
  <Main :tabPane="true">
    <div class="home">
      <div class="search-logo-wrapper">
        <MySearchLogo class="my-search-logo"></MySearchLogo>
        <HomeSearchBar class="home-search-bar"></HomeSearchBar>
      </div>
    <div class="layout-footer-center">
        <div class="qrCode">
          <img src="@/assets/img/index-qr-code.png" alt />
          <p>官方小程序</p>
        </div>
        <div>网站备案/许可证号：鲁ICP备09897989号 Copyright@2015-2030海尔集团 All Right Resevivel</div>
      </div>
    </div>
  </Main>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/main";
import MySearchLogo from "@/components/searchBar/MySearchLogo.vue";
import HomeSearchBar from "@/components/searchBar/HomeSearchBar.vue";
export default {
  name: "home",
  components: {
    MySearchLogo,
    HomeSearchBar,
    Main
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
// height: 100%;
// min-height: 480px;
}
.search-logo-wrapper {
  margin: 60px auto 0px auto;
}
.my-search-logo {
  margin: 20px auto;
  text-align: center;
}
.home-search-bar {
  margin: auto;
}
.layout-footer-center {
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
}
.qrCode {
  width: 100px;
  height: 100px;
  // text-align: center;
  margin: 0px auto 40px;
  img {
    width: 100%;
    height: 100%;
  }
}

</style>