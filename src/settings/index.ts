import devUrls from "./urls.dev.json";
import prodUrls from "./urls.prod.json";

const urls = process.env.NODE_ENV === "development" ? devUrls : prodUrls;

export { urls };
