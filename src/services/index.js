import config from '@/config'

import HttpRequest from '@/libs/axios'


const publicPath = process.env.NODE_ENV === 'development' ? config.publicPath.dev : process.env.VUE_APP_TITLE === 'preview' ? config.publicPath.preview : config.publicPath.pro;
const axios = new HttpRequest(publicPath)


export const queryCollectedAndHistory = (data) => {
  return axios.request({
    url: `/searchWeb/queryCollectedAndHistory`,
    data,
    method: 'post'
  });
}
export const collected = (data) => {
  return axios.request({
    url: `/collectedWeb/collected`,
    data,
    method: 'post'
  });
}

export const getCompanyInfoByNo = (data) => {
  return axios.request({
    url: `/companyInfoWeb/getCompanyInfoByNo`,
    data,
    method: 'post'
  });
}
export const getCooperateDetail = (data) => {
  return axios.request({
    url: `/companyInfoWeb/getCooperateDetail`,
    data,
    method: 'post'
  });
}
export const queryCompany = (data) => {
  return axios.request({
    url: '/searchWeb/queryCompany',
    data,
    method: 'post'
  })
}
export const queryInformation = (data) => {
  return axios.request({
    url: `/searchWeb/queryInformation`,
    data,
    method: 'post'
  });
}
export const getInformationInfo = (data) => {
  return axios.request({
    url: `/informationWeb/getInformationInfo`,
    data,
    method: 'post'
  });
}