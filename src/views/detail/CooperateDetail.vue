<template>
    <Main :searchBar="true">
        {{this.cooperate.cooperateText}}<br/>
        {{this.cooperate.cooperateDate}}<br/>
        {{this.cooperate.background}}<br/>
        {{this.cooperate.cooperFlow}}<br/>
        {{this.cooperate.firstPartyNo}}<br/>
        {{this.cooperate.firstPartyName}}<br/>
        {{this.cooperate.fpMobile}}<br/>
        {{this.cooperate.fpEmail}}<br/>
        {{this.cooperate.fpOfficePhone}}<br/>
        {{this.cooperate.secondPartyNo}}<br/>
        {{this.cooperate.secondPartyName}}<br/>
        {{this.cooperate.spMoblie}}<br/>
        {{this.cooperate.spEmail}}<br/>
        {{this.cooperate.spOfficePhone}}<br/>
        {{this.cooperate.cooperateStatus}}<br/>
    </Main>
</template>
<script>
import Main from "@/components/main";
// import cooperate from "@/api/cooperate"
import { getCooperateDetail } from '@/services';
import { constants } from 'crypto';
export default {
    data() {
        return {
            queryCondition:{
                id :""
            },
            cooperate:{
                cooperateContext:"",
                cooperateDate:"",
                background:"",
                cooperFlow:"",
                firstPartyNo:"",
                firstPartyName:"",
                fpMobile:"",
                fpEmail:"",
                fpOfficePhone:"",
                secondPartyNo:"",
                secondPartyName:"",
                spMoblie:"",
                spEmail:"",
                spOfficePhone:"",
                cooperateStatus:"",
            }
        }
  },
  components: {
    Main
  },
  created() {
    this.queryCondition.id = this.$route.query.id;
    console.log(this.queryCondition.id);
    this.getCooperateDetail();
  },

  methods: {
      getCooperateDetail(){
          getCooperateDetail(this.queryCondition).then(res=>{
              if(res.data.isSuccess){
                  console.log("成功");
                  console.log(res.data.data);
                  this.cooperate = res.data.data;
              }else{
                  console.log(res.data.msg);
              }
          })
             
      }
  }
}

</script>
<style>

</style>
