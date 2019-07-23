<template>
  <Main :searchBar="true">
    {{this.information.informationId}}
    <br />
    {{this.information.informationName}}
    <br />
    {{this.information.informationType}}
    <br />
    {{this.information.source}}
    <br />
    {{this.information.createTime}}
    <br />
  </Main>
</template>
<script>
import Main from "@/components/main";
// import information from "@/api/information"
import { getInformationInfo } from "@/services";
import { constants } from "crypto";
export default {
  data() {
    return {
      queryCondition: {
        id: ""
      },
      information: {
        informationId: "",
        informationName: "",
        informationType: 1,
        source: "",
        createTime: ""
      }
    };
  },
  components: {
    Main
  },
  mounted() {
    this.queryCondition.id = this.$route.query.informationId;
    this.GetInformationDetail();
  },

  methods: {
    GetInformationDetail() {
      getInformationInfo(this.queryCondition).then(res => {
        if (res.data.isSuccess) {
          this.information = res.data.data;
        } else {
          this.$Message.info(res.data.msg);
        }
      });
    }
  }
};
</script>
<style>
</style>
