import config from '@/config'
import axios from '@/utils/http'

const{ publicPath } = config

const companyinfo = {

    queryCompany (params) {
        
        return axios.post(publicPath.dev+'/searchWeb/queryCompany',params);
    },

    getCompanyInfo(params){
        return axios.post(publicPath.dev+'/companyInfoWeb/getCompanyInfoByNo',params);
    }
}

export default companyinfo;