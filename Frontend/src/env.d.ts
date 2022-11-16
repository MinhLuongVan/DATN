interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string;
    readonly VITE_CLIENT_URL: string;
    // more env variables...
    readonly VITE_NAME_COOKIE: string;
    readonly VITE_CLIENT_ID: string;
    readonly VITE_NAME_ID: string;

  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }