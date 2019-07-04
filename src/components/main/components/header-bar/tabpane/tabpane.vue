
    <template>
    <Menu mode="horizontal" theme="light" @on-select="onSelect(e)">
        <MenuItem name="1" to="/search">
            公司
        </MenuItem>
        <MenuItem name="2" to="/search">
            行业
        </MenuItem>
        <MenuItem name="3" to="/search">
            区域 
        </MenuItem>
        <MenuItem name="4" to="/search">
            资讯报告
        </MenuItem>
        <MenuItem name="5" to="/search">
            政策文件
        </MenuItem>
    </Menu>
</template>
<script>
export default {
  name: 'tabPane',
  
  methods: {
    onSelect(e) {
      console.log(e)
    }
  }
}
</script>
<style lang="less">
.ivu-menu-horizontal {
    height: 50px !important;
    line-height: 50px !important;
    border: 0 !important;
}
</style>
