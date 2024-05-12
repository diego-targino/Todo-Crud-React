import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class AxiosClient {
  static baseUrl: string = import.meta.env.VITE_TODOS_API_URL || "";

  static async get<TResponse>(
    uri: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    return await axios.get<TResponse>(this.baseUrl + uri, config);
  }

  static async post<TResponse>(
    uri: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    return await axios.post<TResponse>(this.baseUrl + uri, data, config);
  }

  static async put<TResponse>(
    uri: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    return await axios.put<TResponse>(this.baseUrl + uri, data, config);
  }

  static async delete<TResponse>(
    uri: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    return await axios.delete<TResponse>(uri, config);
  }
}
