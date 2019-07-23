<template>
  <Layout style="height: 100%" class="main">
    <Layout>
      <Header class="header-con">
        <div class="header-bar">
          <div class="custom-content-con">
            <user
              :message-unread-count="2"
              nickName="NickName"
              user-avatar=""
            />
            <Menu
              mode="horizontal"
              theme="light"
            >
              <MenuItem name="1" to="/searchcompany">公司</MenuItem>
              <MenuItem name="2" to="/searchindustry">行业</MenuItem>
              <MenuItem name="3" to="/searchregionc">区域</MenuItem>
              <MenuItem name="4" to="/searchreport">资讯报告</MenuItem>
              <MenuItem name="5" to="/searchpolicy">政策文件</MenuItem>
            </Menu>
          </div>
        </div>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <div class="home">
              <div class="search-logo-wrapper">
                <MySearchLogo class="my-search-logo"></MySearchLogo>
                <HomeSearchBar @doSearch="doSearch" class="home-search-bar"></HomeSearchBar>
              </div>
              <div class="layout-footer-center">
                <div class="qrCode">
                  <img src="@/assets/img/index-qr-code.png" alt />
                  <p>官方小程序</p>
                </div>
                <div>网站备案/许可证号：鲁ICP备09897989号 Copyright@2015-2030海尔集团 All Right Resevivel</div>
              </div>
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
// @ is an alias to /src
import User from "@/components/main/components/user";
import MySearchLogo from "@/components/searchBar/MySearchLogo.vue";
import HomeSearchBar from "@/components/searchBar/HomeSearchBar.vue";
export default {
  name: "home",
  components: {
    MySearchLogo,
    HomeSearchBar,
    User,
  },
 methods: {
    doSearch(searchText) {
       this.$router.push({
        path: '/searchCompany',
        query: {
          companyName: searchText
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.main{
  .logo-con{
    height: 50px;
    padding: 10px;
    img{
      height: 44px;
      width: auto;
      display: block;
      margin: 0 auto;
    }
  }
  .header-con{
    background: #fff;
    padding: 0 20px;
    width: 100%;
    border-bottom: 1px solid #999;
    box-shadow: 0 0 5px #888;
    box-sizing: border-box;
  }
  .main-layout-con{
    height: 100%;
    overflow: hidden;
  }
  .main-content-con{
    height: ~"calc(100% - 60px)";
    overflow: hidden;
  }
  .tag-nav-wrapper{
    padding: 0;
    height:40px;
    background:#F0F0F0;
  }
  .content-wrapper{
    padding: 18px;
    height: ~"calc(100% - 80px)";
    overflow: auto;
  }
}
.header-bar{
  width: 100%;
  height: 100%;
  position: relative;
  .custom-content-con{
    float: right;
    height: auto;
    padding-right: 20px;
    line-height: 40px;
    & > *{
      float: right;
    }
  }
}
.home {
  width: 100%;
  height: 100%;
  // min-height: 480px;
  position: relative;
}
.search-logo-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -130%)
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
.ivu-menu-horizontal {
  height: 38px;
  line-height: 40px;
  border: 0;
}
.ivu-layout-header {
    height: 40px;
    line-height: 40px;
}
</style>