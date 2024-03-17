export type EnvVar = "NODE_ENV" | "DOMAIN";

export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;

      DOMAIN: string;

    }
  }
}
