import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: true,
    compact:true
  },
  routes: [
    {path: '/', component: '@/pages/index',name:'首页',hideInMenu:true},
    {path: '/story/:id', component: '@/pages/story/index', name:'故事'}
  ],
  fastRefresh: {},
  layout: {
    name: 'Ant Design',
    locale: false,
    layout: 'side'
  },
  mfsu: {}
});


