import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { mapErrorResponse } from "./mapErrorResponse";

export class AxiosClient {
  static baseUrl: string = import.meta.env.VITE_TODOS_API_URL || "";

  static async get<TResponse>(
    uri: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.get<TResponse>(this.baseUrl + uri, config);
    } catch (error: any) {
      return mapErrorResponse(error);
    }
  }

  static async post<TResponse>(
    uri: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.post<TResponse>(this.baseUrl + uri, data, config);
    } catch (error: any) {
      return mapErrorResponse(error);
    }
  }

  static async put<TResponse>(
    uri: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.put<TResponse>(this.baseUrl + uri, data, config);
    } catch (error: any) {
      return mapErrorResponse(error);
    }
  }

  static async delete<TResponse>(
    uri: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.delete<TResponse>(this.baseUrl + uri, config);
    } catch (error: any) {
      return mapErrorResponse(error);
    }
  }
}
