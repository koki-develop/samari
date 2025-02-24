declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly BUN_PUBLIC_FIREBASE_API_KEY: string;
    readonly BUN_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    readonly BUN_PUBLIC_FIREBASE_PROJECT_ID: string;
    readonly BUN_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    readonly BUN_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly BUN_PUBLIC_FIREBASE_APP_ID: string;

    readonly BUN_PUBLIC_CONTACT_FORM_URL: string;
    readonly BUN_PUBLIC_FEATURE_REQUEST_FORM_URL: string;
  }
}
