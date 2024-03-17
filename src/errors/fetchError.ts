import { FETCH_STATUS } from "@/utils/dataFetch/status";

export class FetchError extends Error {
  fetchStatus: FETCH_STATUS;

  constructor(message: string, fetchStatus?: FETCH_STATUS) {
    super(message);
    this.name = "[FetchError]";
    this.fetchStatus = fetchStatus || FETCH_STATUS.ERROR;

    Object.setPrototypeOf(this, FetchError.prototype);
  }
}
