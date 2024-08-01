import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myapp',
  appName: 'my-app',
  webDir: 'build',

  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },

  server: {
    url: 'http://192.168.0.23:3000',
    cleartext: true,
  },
};

export default config;
