import type { FetchError } from "@/errors";
import { getData } from "@/utils";
import { FETCH_STATUS } from "@/utils/dataFetch/status";
import type { FetchDataParams } from "@/utils/dataFetch/types";
import { useEffect, useState } from "react";

interface Return<T> {
  data: T | null;
  status: FETCH_STATUS;
  error: string | null;
}

interface Props extends Omit<FetchDataParams, "body"> {
  condition?: boolean;
}

export const useGetData = <T>(
  url: string,
  { headers, condition = true }: Props | undefined = {}
): Return<T> => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FETCH_STATUS>(FETCH_STATUS.INACTIVE);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData<T>(url, { headers }).catch((err: FetchError) =>
        setError(err.message)
      );

      res && setData(res);
    };

    const clearData = () => {
      setData(null);
      setStatus(FETCH_STATUS.INACTIVE);
      setError(null);
    };

    condition && fetchData();

    return () => clearData();
  }, [url, headers, condition]);

  return { data, status, error };
};
