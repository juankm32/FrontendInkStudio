import { FetchError } from "@/errors";
import type { AxiosError } from "axios";
import axios from "axios";
import { getFetchStatus } from "./status";
import type { FetchDataParams } from "./types";

export const getData = async <T>(
  url: string,
  optParams?: Omit<FetchDataParams, "body">
) => {
  try {
    const response = await axios<T>({
      method: "get",
      url,
      ...(optParams && {
        headers: optParams.headers,
      }),
    });

    return response.data || ({ status: "ok" } as T);
  } catch (err) {
    const error = err as AxiosError;

    const status = error.response?.status;

    if (status) {
      const errorMessage = `Error ${error.status}: ${error.message}`;
      throw new FetchError(errorMessage, getFetchStatus(status));
    }

    throw new FetchError(error.message);
  }
};
