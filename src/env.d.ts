// https://stackoverflow.com/questions/66039933/typescript-types-for-import-meta-env

interface ImportMetaEnv {
  VITE_WEBSITE_NAME: string;
  VITE_BASE_HREF: string;
  VITE_APP_HOST: string;
  VITE_APP_PREFIX: string;
}
