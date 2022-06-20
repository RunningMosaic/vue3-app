import { AxiosInstance, AxiosRequestConfig, AxiosResponse, } from 'axios';
import { IRequestConfig } from '../../contract';

/**
 * 全局拦截器
 * 
 */
export class GlobalInterceptor {
  constructor(
    private m_Instance: AxiosInstance,
    private m_Option: IRequestConfig
  ) { }

  /**
   * 请求拦截器
   * 
   */
  public request() {
    this.m_Instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return res;
      },
      (err: any) => err
    );
  }

  /**
   * 响应拦截器
   * 
  */
  public response() {
    this.m_Instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');
        return res.data;
      },
      (err: any) => err
    );
  }
}