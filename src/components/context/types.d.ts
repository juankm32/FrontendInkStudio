import type { LoginContent } from "@/content/functions/types";
import type { HeaderContent, HomeContent } from "@/content/messages/types";

export interface IntlContextContent {
  headerContent: HeaderContent;
  homeContent: HomeContent;
  loginContent: LoginContent;
}
