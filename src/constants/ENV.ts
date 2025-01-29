import packageJson from '../../package.json';

export const ENV = {
  ENDPOINT: import.meta.env.VITE_APP_BASE_ENDPOINT,
  NODE_ENV: import.meta.env.VITE_APP_NODE_ENV,
  GOOGLE_CLIENT_ID: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
  GOOGLE_MAP_KEY: import.meta.env.VITE_APP_GOOGLE_MAP_KEY,
  ENV_TYPE: import.meta.env.VITE_APP_ENV,
  VERSION: packageJson.version,
  FIREBASE: {
    API_KEY: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    AUTH_DOMAIN: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    MESSAGE_SENDER_ID: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    MEASUREMENT_ID: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
    VAPID_KEY: import.meta.env.VITE_APP_FIREBASE_VAPID_KEY,
  },
};
