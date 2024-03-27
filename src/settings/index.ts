import devUrls from "./urls.dev.json";
import generalUrls from "./urls.general.json";
import prodUrls from "./urls.prod.json";

const envUrls = process.env.NODE_ENV === "development" ? devUrls : prodUrls;

const urls = {
  ...envUrls,
  api: {
    ...envUrls.api,
    ...generalUrls.api,
  },
};

export { urls };
