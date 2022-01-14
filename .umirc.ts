/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2022-01-12 16:46:19
 * @LastEditors: 松岛川树
 * @LastEditTime: 2022-01-14 15:23:49
 * @FilePath: \umi-index\.umirc.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  ssr: {},
  exportStatic: {},
});
