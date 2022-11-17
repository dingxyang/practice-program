import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Esun Demo',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Qr Code',
      path: '/qrcode',
      component: './QrCode',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
