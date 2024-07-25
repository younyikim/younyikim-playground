import axios from 'axios';
import qs from 'qs';

/**
 * @description API endpoints의 기본 경로
 */
const apiUrl = import.meta.env.VITE_API_URL;

/**
 * @description baseUrl을 기반으로 Axios Instance를 생성하는 함수
 * @param baseUrl
 */
const createAxiosInstance = (baseUrl?: string) => {
  return axios.create({
    baseURL: baseUrl ?? apiUrl,
    paramsSerializer: (params) => qs.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};

/**
 * @description Default Axios Instance
 * @param baseUrl
 */
const axiosInstance = createAxiosInstance();

export { apiUrl, axiosInstance, createAxiosInstance };
