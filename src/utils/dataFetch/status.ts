import type { StatusMessages } from "./types";

export enum FETCH_STATUS {
  INACTIVE,
  LOADING,
  SUCCESS,
  NOT_FOUND,
  UNAUTHORIZED,
  INVALID,
  CONFLICT,
  ERROR,
}

export const getFetchStatus = (resStatus: number): FETCH_STATUS => {
  let fetchStatus;

  switch (resStatus) {
    case 401:
      {
        fetchStatus = FETCH_STATUS.UNAUTHORIZED;
      }
      break;

    case 404:
      {
        fetchStatus = FETCH_STATUS.NOT_FOUND;
      }
      break;

    case 409:
      {
        fetchStatus = FETCH_STATUS.CONFLICT;
      }
      break;

    default: {
      fetchStatus = FETCH_STATUS.ERROR;
    }
  }

  return fetchStatus;
};

export const handleStatusMessage = (
  status: FETCH_STATUS,
  messages?: StatusMessages
): string => {
  return (messages && messages[status]) || "";
};
