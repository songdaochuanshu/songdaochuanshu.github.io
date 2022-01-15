/*
 * @Descripttion:
 * @version:
 * @Author: 松岛川树
 * @Date: 2022-01-12 16:46:19
 * @LastEditors: 松岛川树
 * @LastEditTime: 2022-01-15 17:40:20
 * @FilePath: \umi-index\.umirc.ts
 */
import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index/index' }],
  fastRefresh: {},
  ssr: {},
  exportStatic: {},
  extraPostCSSPlugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        //'last 2 versions', // 所有主流浏览器最近2个版本
      ],
      grid: true,
    }),
  ],
});
