/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_WEBSITE_NAME: string;
  readonly VITE_BASE_HREF: string;
  readonly VITE_APP_HOST: string;
  readonly VITE_APP_PREFIX: string;
  readonly MODE: 'standalone' | 'vcd';
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
