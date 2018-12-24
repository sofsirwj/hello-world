import axios from 'axios';

const supportMethods = ['GET', 'POST', 'PUT', 'DELETE'];
const baseUrl = 'https://www.sofsir.com/api';

const request = (config) => {
    let {method, url, data} = config;
    if(!(method && url)){
        return Promise.reject('method and url are required for doing api request');
    }
    if(supportMethods.indexOf(method.toUpperCase()) === -1){
        return Promise.reject(`${method} is not supported`);
    }
    let payload = {
        method,
        url: baseUrl + url
    };
    if(data){
        if(method.toUpperCase() === 'GET'){
            payload.params = data;
        }else{
            payload.data = data;
        }
    }
    return new Promise((resolve, reject) => {
        axios(payload)
        .then(function(resp) {
            resolve(resp.data);
        })
        .catch(function(error) {
            reject(error);
        });
    });
};

const get = (url, data) => {
    return request({
        method: 'GET',
        url,
        data
    });
};

const post = (url, data) => {
    return request({
        method: 'POST',
        url,
        data
    });
};

const put = (url, data) => {
    return request({
        method: 'PUT',
        url,
        data
    });
};

const del = (url, data) => {
    return request({
        method: 'DELETE',
        url,
        data
    });
};

const api = {
    get,
    post,
    put,
    delete: del
}

export default api;