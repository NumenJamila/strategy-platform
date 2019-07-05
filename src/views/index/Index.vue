<template>
  <Main  tabPane="true">
    <div class="home">
      <MySearchLogo class="my-search-logo"></MySearchLogo>
      <HomeSearchBar class="home-search-bar"></HomeSearchBar>
      <div class="qrCode">
        <img src="@/assets/img/index-qr-code.png" alt />
        <p>官方小程序</p>
      </div>
      <Footer
        class="layout-footer-center"
      >网站备案/许可证号：鲁ICP备09897989号 Copyright@2015-2030海尔集团 All Right Resevivel</Footer>
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
  // height: 900px;
}
.my-search-logo {
  margin: 60px auto 30px;
}
.home-search-bar {
  margin: auto;
}
.qrCode {
  width: 128px;
  height: 128px;
  text-align: center;
  margin: 80px auto 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
.layout-footer-center {
  text-align: center;
}
</style>