import axios from "axios";

// 攔截 HTTP 請求和響應 進行 token 的檢查和刷新
axios.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    // 判斷是否為 token 過期的錯誤
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // 發送刷新 token 的請求
      return axios
        .post("/token", {
          refreshToken: localStorage.refreshToken,
        })
        .then((response) => {
          if (response.status === 200) {
            // 刷新成功，將新的 token 保存到本地
            localStorage.token = response.data.token;
            // 更新 axios 的頭部信息
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${localStorage.token}`;
            // 重新發送之前的請求
            return axios(originalRequest);
          }
        })
        .catch((error) => {
          console.log(error);
          // 刷新失敗，跳轉到登錄頁面
          // router.push("/login");
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export default axios;
