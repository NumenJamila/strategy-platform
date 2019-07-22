import config from '@/config'
import axios from '@/utils/http'

const{ publicPath } = config

const information = {

    queryInformation (params) {
        
        return axios.post(publicPath.dev+'/searchWeb/queryInformation',params);
    },

    getInformationDetail(params){
        return axios.post(publicPath.dev+'/informationWeb/getInformationInfo',params)
    }

}

export default information;