/*
 * @Descripttion:
 * @version:
 * @Author: 松岛川树
 * @Date: 2022-01-12 16:46:19
 * @LastEditors: MiKin
 * @LastEditTime: 2022-01-20 18:09:26
 * @FilePath: \umi-index\.umirc.ts
 */
import { defineConfig } from 'umi';
export default defineConfig({
  links: [
    {
      rel: 'icon',
      href: 'https://avatars.githubusercontent.com/u/81367559?v=4',
    },
  ],
  title: '松岛川树',
  metas: [
    {
      name: 'keywords',
      content: '松岛川树,松岛,川树,松岛川树的博客',
    },
    {
      name: 'description',
      content: '松岛川树的博客',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index/index',
      title: '松岛川树',
    },
  ],
  fastRefresh: {},
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
