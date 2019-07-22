import config from '@/config'
import axios from '@/utils/http'

const{ publicPath } = config

const browseHitory = {

    queryCollectedAndHistory (params) {
        
        return axios.post(publicPath.dev+'/searchWeb/queryCollectedAndHistory',params);
    }

}

export default browseHitory;