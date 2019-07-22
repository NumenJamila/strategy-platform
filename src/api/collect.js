import config from '@/config'
import axios from '@/utils/http'

const{ publicPath } = config

const collect = {

    collected (params) {
        
        return axios.post(publicPath.dev+'/collectedWeb/collected',params);
    },

}

export default collect;