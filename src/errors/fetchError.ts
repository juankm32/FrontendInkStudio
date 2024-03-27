import { FETCH_STATUS } from "@/utils/dataFetch/status";

export class FetchError extends Error {
  fetchStatus: FETCH_STATUS;
  response: any;

  constructor(message: string, response?: any, fetchStatus?: FETCH_STATUS) {
    super(message);
    this.name = "[FetchError]";
    this.response = response;
    this.fetchStatus = fetchStatus || FETCH_STATUS.ERROR;

    Object.setPrototypeOf(this, FetchError.prototype);
  }
}
