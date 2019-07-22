<template>
<Main searchBar @mainSearch="searchInformation">
    <div class="search-page customize-container-center">
      <!-- <div class="tab-pane-title">{{this.queryCondition.informationName}}</div>  -->
      <tabItemBar :whichItem="whichItem" @tabClick="tabClick"></tabItemBar>
        <Menu active-name="1">
            <MenuGroup title="收藏记录">
                <MenuItem name="1">
                    <Icon type="ios-analytics" />
                    公司
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="md-chatbubbles" />
                    资讯
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-stats" />
                    行业报告
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="md-document" />
                    政策文件
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="浏览历史">
                <MenuItem name="5">
                    <Icon type="ios-analytics" />
                    公司
                </MenuItem>
                <MenuItem name="6">
                    <Icon type="md-chatbubbles" />
                    资讯
                </MenuItem>
                <MenuItem name="7">
                    <Icon type="ios-stats" />
                    行业报告
                </MenuItem>
                <MenuItem name="8">
                    <Icon type="md-document" />
                    政策文件
                </MenuItem>
            </MenuGroup>
        </Menu>
    </div>
</Main>
</template>
<script>
import Main from "@/components/main";
import tabItemBar from "@/components/tabItemBar";
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>
