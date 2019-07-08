
    <template>
    <Menu mode="horizontal" theme="light" @on-select="onSelect(e)" :active-name="activeItem">
        <MenuItem name="1" to="/searchcompany">
            公司
        </MenuItem>
        <MenuItem name="2" to="/searchindustry">
            行业
        </MenuItem>
        <MenuItem name="3" to="/searchregionc">
            区域 
        </MenuItem>
        <MenuItem name="4" to="/searchreport">
            资讯报告
        </MenuItem>
        <MenuItem name="5" to="/searchpolicy">
            政策文件
        </MenuItem>
    </Menu>
</template>
<script>
export default {
  name: 'TabPane',
  props: {
    activeItem: {
        type: String,
        default: "0"
    }
  },
  methods: {
    onSelect(e) {
      this.$emit("on-select", e)
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
.ivu-menu-horizontal.ivu-menu-light:after {
    height: 0px;
}
</style>
