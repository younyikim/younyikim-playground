import axios from 'axios';

// Utils
import { axiosInstance, createAxiosInstance } from '@apis/axios';

// Typings
import { ParamsType } from './typings/axios';
import { routes } from '@utils/router';
import { apiEndpoints } from '@apis/endpoints';

// 토큰 갱신 요청 중복 방지를 위해 현재 진행 중인 요청을 저장하는 변수
let refreshTokenPromise: Promise<unknown> | null = null;

// axios 응답 interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // 에러가 발생한 요청
    const originalRequest = error.config;

    // Unauthorized 에러
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // 현재 진행 중인 토큰 갱신 요청이 없으면 새로운 토큰 갱신 요청 생성
      if (!refreshTokenPromise) {
        refreshTokenPromise = post(apiEndpoints.auth.token).then(() => {
          refreshTokenPromise = null;
        });
      }

      // 토큰 갱신 요청이 완료되면 원래의 요청을 재시도
      return refreshTokenPromise
        .then(() => {
          // 에러가 발생했던 기존 요청을 다시 시도
          axios(originalRequest);
        })
        .catch(() => {
          // 토큰 갱신에 실패한 경우 로그인 페이지로 리다이렉트
          const currentPath = window.location.pathname;

          if (currentPath !== routes.admin.signIn) {
            window.location.pathname = routes.admin.signIn;
          }

          return Promise.reject(error);
        });
    }
  },
);

/**
 * @description Axios GET 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {ParamsType} [params.params] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const get = <T>(url: string, params?: ParamsType, baseURL?: string) => {
  const instance = baseURL ? createAxiosInstance(baseURL) : axiosInstance;

  return instance
    .get<T>(url, { params })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`GET :: ${url} Failed!`);
      return Promise.reject(error);
    });
};

/**
 * @description Axios POST 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {ParamsType} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const post = <T>(url: string, data?: ParamsType, baseURL?: string) => {
  const instance = baseURL ? createAxiosInstance(baseURL) : axiosInstance;

  return instance
    .post<T>(url, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`POST :: ${url} Failed!`);
      return Promise.reject(error);
    });
};

/**
 * @description Axios PUT 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {ParamsType} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const put = <T>(url: string, data?: ParamsType, baseURL?: string) => {
  const instance = baseURL ? createAxiosInstance(baseURL) : axiosInstance;

  return instance
    .put<T>(url, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`PUT :: ${url} Failed!`);
      return Promise.reject(error);
    });
};

/**
 * @description Axios PATCH 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {ParamsType} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const patch = <T>(url: string, data?: ParamsType, baseURL?: string) => {
  const instance = baseURL ? createAxiosInstance(baseURL) : axiosInstance;

  return instance
    .patch<T>(url, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`PATCH :: ${url} Failed!`);
      return Promise.reject(error);
    });
};

/**
 * @description Axios DELETE 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {ParamsType} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const remove = <T>(url: string, data?: ParamsType, baseURL?: string) => {
  const instance = baseURL ? createAxiosInstance(baseURL) : axiosInstance;

  return instance
    .delete<T>(url, { data })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`DELETE :: ${url} Failed!`);
      return Promise.reject(error);
    });
};

export { get, post, put, patch, remove };
