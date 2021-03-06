// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式


module.exports = {
  base: '/vuepress-blog/',
  title: 'labee小新',
  description: 'just do a coder',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: 'labee小新' }],
    ['meta', { name: 'keywords', content: 'vuepress介绍,vuepress说明,labee小新, houyaxin' }],
    ['script',{},`var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?6faf9fb6810171133ba461eaf3866a1d";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format('LLLL')
        }
      }
    ],
    [
      '@vuepress/pwa',{
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav:require('./nav'),
    // nav: [
    //   { text: "主页", link: "/", icon: "reco-home" },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: '关于', link: '/about/' },
    //   {
    //     text: "项目",
    //     icon: 'iconfont icon-tools',
    //     items: [
    //       { text: '电商后台管理系统 V：1.2.0', link: 'https://github.com/houyaxin/vue_shop', icon: "iconfont icon-vue" },
    //       { text: "康巴文旅模块", link: "https://github.com/houyaxin/kb_app", icon: "iconfont icon-vue" },
    //       { text: "coderwhy电商商城h5", link: "https://github.com/houyaxin/supermarket", icon: "reco-wechat" },
    //       { text: '资阳网站', link: 'https://www.zyrb.com.cn/', icon: "iconfont icon-wangyiyunyinle" },

    //     ]
    //   },
    //   // { text: "时间线", link: "/timeline/", icon: "reco-date" },
    //   // { text: 'External', link: 'https://google.com' },
    // ],
    sidebar: 'auto'
  },
}