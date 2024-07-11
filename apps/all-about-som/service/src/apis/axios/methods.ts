// Utils
import { axiosInstance, createAxiosInstance } from '@apis/axios';

// Typings
import { ParamsType } from './typings/axios';

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
