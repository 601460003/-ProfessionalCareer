
// 这是域名
export const API_URI = 'https://www.XXX.com/test'
let token = "";
function fetchApi(type, params, method='POST') {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${API_URI}/${type}`,
            data: params,
            methods: method || 'GET',
            header: {
                'content-type': 'json',token
            },
            success: resolve,
            fail: reject
        })
    })
}
function setToken(t){
    token = t
}
module.exports = {fetchApi,setToken}

