import config from '@/config'
import axios from '@/utils/http'

const{ publicPath } = config

const cooperate = {

    getCooperateDetail (params) {
        
        return axios.post(publicPath.dev+'/companyInfoWeb/getCooperateDetail',params);
    },

}

export default cooperate;