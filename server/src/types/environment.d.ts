export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE__URL: string;
      DATABASE__USERNAME: string;
      DATABASE__PASSWORD: string;
      DATABASE__NAME: string;
    }
  }
}
