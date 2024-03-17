import type { AxiosRequestConfig } from "axios";

export interface FetchDataParams {
  headers?: AxiosRequestConfig["headers"];
  body?: string | {} | [];
}

export interface StatusMessages {
  [key: number]: string;
}
