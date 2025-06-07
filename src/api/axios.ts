import axios, {AxiosError, AxiosInstance, AxiosResponse}  from "axios";
//token
const authAxios:AxiosInstance = axios.create({
    baseURL:'',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    timeout: 30000
})

authAxios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error:AxiosError)=>{
        return Promise.reject(error);
    }
)
authAxios.interceptors.response.use(
    (response: AxiosResponse)=>{
        return response;
    },
    (error: AxiosError)=>{
        if(error.response?.status === 401){
            window.location.href = '/login';
        }
        return Promise.reject(error)
    }
);

//no token 

const unAuthAxios:AxiosInstance = axios.create({
    baseURL:'',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    timeout: 30000
})

export {authAxios,unAuthAxios};
