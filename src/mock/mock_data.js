export const mockData = {
  "categories": [
    {
      "id": "cloud",
      "name": "云服务",
      "icon": "☁️",
      "order": 0,
      "sites": [
        {
          "id": "cloudflare",
          "name": "Cloudflare",
          "url": "https://dash.cloudflare.com",
          "description": "全球CDN和网络安全服务",
          "icon": "/sitelogo/www.cloudflare.com.ico"
        },
        {
          "id": "vercel",
          "name": "Vercel",
          "url": "https://vercel.com",
          "description": "前端部署平台",
          "icon": "/sitelogo/vercel.com.ico"
        },
        {
          "id": "aws",
          "name": "AWS",
          "url": "https://aws.amazon.com",
          "description": "亚马逊云服务",
          "icon": "/sitelogo/aws.amazon.com.ico"
        },
        {
          "id": "aliyun",
          "name": "阿里云",
          "url": "https://www.aliyun.com",
          "description": "阿里巴巴云计算",
          "icon": "/sitelogo/www.aliyun.com.ico"
        },
        {
          "id": "tencent-cloud",
          "name": "腾讯云",
          "url": "https://cloud.tencent.com",
          "description": "腾讯云计算服务",
          "icon": "/sitelogo/cloud.tencent.com.ico"
        },
        {
          "id": "huawei-cloud",
          "name": "华为云",
          "url": "https://www.huaweicloud.com",
          "description": "华为云计算服务",
          "icon": "/sitelogo/www.huaweicloud.com.ico"
        },
        {
          "id": "site-1759283594506",
          "name": "莱卡云",
          "url": "https://www.lcayun.com/",
          "description": "vps推荐",
          "icon": "https://th.bing.com/th/id/ODF.f2W4ziBCp_KmTdX1umO6Fg?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1759283987689",
          "name": "雨云",
          "url": "https://app.rainyun.com/dashboard",
          "description": "vps推荐",
          "icon": "https://th.bing.com/th/id/ODF.M1L_7Ulq5Ersbur82AaZgQ?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1761196230372",
          "name": "零零壹云计算",
          "url": "https://www.001yun.net/",
          "description": "vps推荐",
          "icon": "https://www.001yun.net/upload/logo-colours.png"
        },
        {
          "id": "site-1759261271303",
          "name": "racknerd",
          "url": "https://racknerd.com/",
          "description": "vps推荐",
          "icon": "https://xshuffle.me/sitelogo/racknerd.com.ico"
        },
        {
          "id": "site-1759844424748",
          "name": "Virtual Servers",
          "url": "https://nerdvm.racknerd.com/home.php",
          "description": "racknerd vps后台",
          "icon": "https://xshuffle.me/sitelogo/racknerd.com.ico"
        },
        {
          "id": "site-1759283690198",
          "name": " Evoxt",
          "url": "https://console.evoxt.com/login",
          "description": "vps推荐",
          "icon": "https://th.bing.com/th/id/ODF.OzehLmO2M4fh--WpmnbaoQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1759713226925",
          "name": "bytevirt",
          "url": "https://bytevirt.com/index.php",
          "description": "vps推荐",
          "icon": "data:image/webp;base64,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"
        },
        {
          "id": "site-1763561809210",
          "name": "DogYun ",
          "url": "https://www.dogyun.com/",
          "description": "狗云 vps推荐",
          "icon": "https://th.bing.com/th/id/ODF.xNit1QAXi2ahBglUACKkuQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2"
        },
        {
          "id": "site-1763736073644",
          "name": "vmiss",
          "url": "https://app.vmiss.com/",
          "description": "vps推荐",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADn0lEQVR4AaxWA9BjTRDMb9s427Zt27ZVONu2bdu2bdv8jJnXt1O5ytbe20NSX6o66LfTPauZeD76tQbffjabyn82m8d+NsvZ++ls565CyBvcFU6eyRgZ64mx14zwuJ/NwbjPZjtBCvhIBEmMxAZuvBhffjobfdTMIkQ0EEisaIiWf+ZTEUct6zERiQmIlmh+nPnMyBQq6L4CYhj3RfuDM495czOJd6/EaHzl57IHvh2jr3zl8pfDEojg5wqZ1hDq7yW0PsiovIMQazG9N0a83rpqiBvIaa+5m3DlJSGSGCefEfY8JNwMIhAzVt8mJF/J77wdxhWVO+uP8ZdzHMy8yngRweh4OBq/LjBnnHoVYeG1aIREMcpstychnrrC+VdkMPoc4WYwI8kKLW5D04OMsGhG1nXWcUHi7ZHS6Y95tvWMCGJkWKtFM6rvVXfa933Eedkexuc2PSnbUr/9OXB7HzNmXmGD2/eIcfkV4+u57pjfFjCCIhkFN7tXQbw9pbbR3h0PGAceRUMyLbrl3Se4wV6C4ziYcJFcnKDlQfuWLLtJGHKGbIdxr+f7+c7d5xHsE1l+0y7y20LGwzDvuEhykFjt/6+ag+D8C3tsv1OEpTfIVhPueqSdjrugZyH7+/diy8G7oI0EdfcSRpkcWh1klN7mNhp4mrDYnkCIR97SrzGF2h82Z5JOPY9i/fzEM5aD5+IyrCFEEaPkVtNszW1vrdj7kFBtZ7Qrgbvy4/BjvQqnn5uHbPdDnSAr5NvIiiODy7uRsP2+l7vyivHtPJ1A7KWMLOsYPU8QXkUyRpwjvQVyEORHk/1aUCABwtfewwa/8Dq5uHnXCIU2m1z3k/bzkH41QWpD7g0M8fZdw5/ms8pOi0y4QKrCMe6Hai44yjub6rt1si8jHfy/hPGjir8VrMeGKpNEy+1JLLohq8AQb6MQTb6sBdoeIjXIXJUux71L94XCqWfeZ52OapOqu8zxa2/br/TgM4wF1wnibZRiWXYJPPOcIQczknxi3n2dq83KbSd17QjfaA6CbffNJMpaekG7w4QBpzlIvF3N6PgzRoHNDFWcDKHSFqFUq9xcSsXJVWbHi+tBjB/msb0Z2dqxdLJy26LxIpx8WHkz2q82/ftCB38vYh90iba2Y/sfkk9nsw+vR+1WEciuAW2SgexiwAqW0rlRSv9m+X9tBqLAUtp0TIZM1wy9xUxB5/Q/wc4pid3z/5Du+WIs3fPF5HXPAfXqb7fxSQ2sAAAAAElFTkSuQmCC"
        },
        {
          "id": "site-1764255433714",
          "name": "wap.ac",
          "url": "https://wap.ac/index.php",
          "description": "vps推荐",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEVHcExQXopOTJQ9V2kuXXswX3xFTZU8TVU4XHMzYX89WGlBQkFDRUJOQ4lgMbRZKLFfL7QtXHowX30tXHovXnxAQUE/QEBAQEBdLbRZKLFZKLFaKbIwXnxCQ0FeL7RZKbIuXXsvXntARUlAQUFAQUFZKLJgMbRdL68zXXk/QD88UV9CQ0NXNJfWUE29AAAALXRSTlMABQlWi34tJRZsRYpsHjuEcv/A96DF//KY//rM3LGfr+3Lnv/a61W+qfi6lZ6DFefHAAAA1klEQVR4Ae2NhWHFIBBAL4JLo8TdZf/5Suo79D84N/g3OK4LD+5jXefL/XTA8xF2CaXIZy4XUgHoN0ugnzIKQ8YixOMwUanJJEBeWMpK26LN+lFYszhkXmZMQ6Etyrwri9YBwHVY92E8hL03mmmauZ1c1LoUmwtA9/CTyJtNMxvh5EXZVcXHpIO+ivt4GDGblPy5CV5vp+Iw3lPzcMi2KLZgVfCA7Tleh/2ZmXlsMtNsRRHAF9QfEgcN+5imHpArbe6qWuELhxIKlChCiAvWIQpj63zy4h2QZxHqbyHmwQAAAABJRU5ErkJggg=="
        },
        {
          "id": "site-1764438232670",
          "name": "TapHip",
          "url": "https://taphip.com/",
          "description": "vps推荐",
          "icon": "https://th.bing.com/th/id/ODLS.A2450BEC-5595-40BA-9F13-D9EC6AB74B9F?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
        },
        {
          "id": "site-1759713912630",
          "name": "cloudcone",
          "url": "https://cloudcone.com/",
          "description": "vps推荐",
          "icon": "https://th.bing.com/th/id/ODF.E3Z5Z4DHTeokDEzJHZWDuQ?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1759314330178",
          "name": "name.com",
          "url": "https://www.name.com/",
          "description": "购买域名网站",
          "icon": "https://th.bing.com/th/id/ODL.f3b6524049fe50805274fd5d35c41e04?w=80&h=80&c=10&r=0&o=6&cb=B&pid=23.1&ucfimg=1"
        },
        {
          "id": "site-1760851061520",
          "name": "Spaceship",
          "url": "https://www.spaceship.com/zh/",
          "description": "购买域名网站",
          "icon": "https://th.bing.com/th/id/ODF.6IsOBgeiOcwksn0K-LVOiw?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        }
      ]
    },
    {
      "id": "dev-tools",
      "name": "工具箱",
      "icon": "🛠️",
      "order": 1,
      "sites": [
        {
          "id": "github",
          "name": "GitHub",
          "url": "https://github.com",
          "description": "全球最大开源平台",
          "icon": "/sitelogo/github.com.ico"
        },
        {
          "id": "site-1759284676002",
          "name": "FinalShell",
          "url": "https://www.hostbuf.com/",
          "description": "FinalShell  SSH\n",
          "icon": "https://img.pcsoft.com.cn/soft/202408/152946-66d0236a4987c.png"
        },
        {
          "id": "site-1759286158240",
          "name": "AdGuardHome",
          "url": "https://github.com/AdguardTeam/AdGuardHome?tab=readme-ov-file#automated-install-linux-and-mac",
          "description": "广告卫士团队\n",
          "icon": "https://tse2-mm.cn.bing.net/th/id/OIP-C.htDg1SUBQcldsF6LYSpluwAAAA?w=151&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
        },
        {
          "id": "site-1759479769662",
          "name": "1Panel",
          "url": "https://1panel.cn/",
          "description": "新一代运维面板",
          "icon": "https://dh.kejilion.pro/wp-content/uploads/2023/11/Snipaste_2023-11-09_22-26-03.png"
        },
        {
          "id": "site-1759479962120",
          "name": "宝塔面板",
          "url": "https://www.bt.cn/new/index.html",
          "description": "老牌运维面板",
          "icon": "https://www.bt.cn/static/new/images/logo_03.svg"
        },
        {
          "id": "site-1759713353307",
          "name": "实用的VPS选购指南",
          "url": "https://vpsls.com/",
          "description": "vps推荐",
          "icon": "https://vpsls.com/vpslog.png"
        },
        {
          "id": "site-1759837896779",
          "name": "彩虹易支付",
          "url": "https://www.kancloud.cn/net909/epay/2590611",
          "description": "彩虹易支付系统操作手册",
          "icon": "https://th.bing.com/th/id/ODF.UnqwNxgEjoI6Bct1F7sG9g?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1764430069468",
          "name": "flux-panel转发面板",
          "url": "https://github.com/bqlpfy/flux-panel",
          "description": "哆啦A梦转发面板",
          "icon": "https://avatars.githubusercontent.com/u/184593746?s=48&v=4"
        },
        {
          "id": "site-1764854694545",
          "name": "flux-panel转发面板",
          "url": "https://github.com/BrunuhVille/flux-panel",
          "description": "哆啦A梦转发面板 纪念版",
          "icon": "https://avatars.githubusercontent.com/u/55394446?s=48&v=4"
        },
        {
          "id": "site-1760769701031",
          "name": "NodePass",
          "url": "https://github.com/NodePassProject/npsh",
          "description": "NodePass  中转面板\n\n",
          "icon": "https://avatars.githubusercontent.com/u/209877006?s=48&v=4"
        },
        {
          "id": "site-1759859662803",
          "name": "极光面板",
          "url": "https://github.com/Aurora-Admin-Panel/deploy",
          "description": "服务器端口租用管理面板",
          "icon": "https://avatars.githubusercontent.com/u/73502459?s=48&v=4"
        },
        {
          "id": "site-1760237411412",
          "name": "無名の主页",
          "url": "https://github.com/imsyy/home",
          "description": "个人主页搭建",
          "icon": "https://avatars.githubusercontent.com/u/42232682?s=48&v=4"
        },
        {
          "id": "site-1760324871667",
          "name": "SSL 证书",
          "url": "https://httpsok.com/index?p=4V1j",
          "description": "轻松搞定SSL证书自动续期",
          "icon": "https://cdn.httpsok.com/assets/logo.png"
        },
        {
          "id": "site-1760973829783",
          "name": "SMS-Activate",
          "url": "https://sms-activate.io/",
          "description": "接码平台",
          "icon": "https://th.bing.com/th/id/ODF.ftpUGdnoGir4URUW27bx8A?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1760974383205",
          "name": "WindTerm 2.5.0",
          "url": "https://github.com/kingToolbox/WindTerm/releases/tag/2.5.0",
          "description": "SSH远程终端",
          "icon": "https://avatars.githubusercontent.com/u/51009775?s=48&v=4"
        },
        {
          "id": "site-1759870454198",
          "name": "v2rayN",
          "url": "https://github.com/2dust/v2rayN/releases/tag/7.12.7",
          "description": "app",
          "icon": "https://avatars.githubusercontent.com/u/31833384?s=48&v=4"
        },
        {
          "id": "site-1762072036055",
          "name": "hiddify",
          "url": "https://github.com/hiddify/hiddify-app",
          "description": "app",
          "icon": "https://th.bing.com/th/id/ODF.FS2QJ5UO8f0MOM3VA_bhWQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1761102202470",
          "name": "Matsuri 茉莉",
          "url": "https://github.com/MatsuriDayo/Matsuri",
          "description": "app",
          "icon": "https://avatars.githubusercontent.com/u/48624112?v=4"
        },
        {
          "id": "site-1762066916195",
          "name": "〔3X-UI〕中文优化版",
          "url": "https://github.com/gm-cx/3x-ui-cn?tab=readme-ov-file",
          "description": "〔3X-UI〕中文优化版搭建",
          "icon": "https://github.com/gm-cx/3x-ui-cn/raw/main/media/3X-UI.png"
        },
        {
          "id": "site-1762057375188",
          "name": "S-UI 面板",
          "url": "https://github.com/alireza0/s-ui",
          "description": "S-UI 面板搭建",
          "icon": "https://avatars.githubusercontent.com/u/12573084?s=48&v=4"
        },
        {
          "id": "site-1763128979191",
          "name": "荔枝 IP",
          "url": "https://www.lycheeip.com/order",
          "description": "住宅 IP",
          "icon": "https://th.bing.com/th/id/ODF.dkN3RPDC8GYArM8fGksXcg?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1760968976519",
          "name": "spiritLHLS",
          "url": "https://github.com/spiritLHLS/ecs",
          "description": "服务器测评项目",
          "icon": "https://avatars.githubusercontent.com/u/103393591?s=48&v=4"
        },
        {
          "id": "site-1763738752566",
          "name": "NodeQuality",
          "url": "https://github.com/LloydAsp/NodeQuality",
          "description": "vps测试脚本",
          "icon": "https://avatars.githubusercontent.com/u/131958103?s=48&v=4"
        },
        {
          "id": "site-1764855960135",
          "name": "LinuxMirrors",
          "url": "https://github.com/SuperManito/LinuxMirrors",
          "description": "一键安装Docker全家桶的脚本",
          "icon": "https://avatars.githubusercontent.com/u/68613938?s=48&v=4"
        }
      ]
    },
    {
      "id": "entertainment",
      "name": "娱乐休闲",
      "icon": "🎮",
      "order": 2,
      "sites": [
        {
          "id": "bilibili",
          "name": "哔哩哔哩",
          "url": "https://www.bilibili.com",
          "description": "弹幕视频网站",
          "icon": "/sitelogo/www.bilibili.com.ico"
        },
        {
          "id": "youtube",
          "name": "YouTube",
          "url": "https://www.youtube.com",
          "description": "油管\n\n",
          "icon": "/sitelogo/www.youtube.com.ico"
        },
        {
          "id": "site-1759479403219",
          "name": "TikTok",
          "url": "https://www.tiktok.com/",
          "description": "网页版\n",
          "icon": "https://tse1-mm.cn.bing.net/th/id/OIP-C.fx6v-A5MAT7NLoCSeE5cDQHaHa?w=153&h=180&c=7&r=0&o=7&cb=12&dpr=2&pid=1.7&rm=3"
        },
        {
          "id": "site-1759261655123",
          "name": "皮皮妖",
          "url": "https://www.pipiyao.cc/",
          "description": "在线观看适配，含枪版",
          "icon": "https://xshuffle.me/sitelogo/www.pipiyao.cc.ico"
        },
        {
          "id": "site-1763167855840",
          "name": "AGE动漫",
          "url": "https://www.agedm.io/",
          "description": "在线观看AGE动漫",
          "icon": "https://th.bing.com/th/id/ODF.73gimR8CUGR_HdJOWy5rTA?w=32&h=32&qlt=91&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1760238321812",
          "name": "观影GYING",
          "url": "https://www.gying.in/",
          "description": "在线观看观影GYING",
          "icon": "https://xshuffle.me/sitelogo/www.gying.in.ico"
        },
        {
          "id": "site-1763169128928",
          "name": "注视影视",
          "url": "https://gaze.run/",
          "description": "在线观看注视影视",
          "icon": "https://fre123.com/img/2baf9566838d72ed08e12b4b62a9016a.png"
        },
        {
          "id": "site-1759262086776",
          "name": "打字鸭",
          "url": "http://daziya.com/",
          "description": "免费打字练习平台",
          "icon": "https://tse2-mm.cn.bing.net/th/id/OIP-C.iPufXHh0zuR-ZKWS5u4F-gAAAA?w=146&h=150&c=7&r=0&o=7&cb=12&dpr=2&pid=1.7&rm=3&ucfimg=1"
        }
      ]
    },
    {
      "id": "category-1759282438196",
      "icon": "📱",
      "name": "邮箱直链",
      "order": 3,
      "sites": [
        {
          "id": "site-1759282587711",
          "name": "谷歌邮箱",
          "url": "https://mail.google.com/mail/",
          "description": "@gmail.com",
          "icon": "data:image/webp;base64,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"
        },
        {
          "id": "site-1759282764461",
          "name": "腾讯QQ邮箱",
          "url": "https://mail.qq.com/",
          "description": "@qq.com",
          "icon": "https://tse1-mm.cn.bing.net/th/id/OIP-C.hwOqgwaEuGxIDwUdPiucbAAAAA?w=115&h=120&c=7&r=0&o=5&dpr=2&pid=1.7"
        },
        {
          "id": "site-1759283028054",
          "name": "网易163邮箱",
          "url": "https://mail.163.com/",
          "description": "@163.com",
          "icon": "https://tse4-mm.cn.bing.net/th/id/OIP-C.-WAK6KHAocaYC0IM-87JUgAAAA?w=100&h=100&c=7&r=0&o=5&dpr=2&pid=1.7"
        },
        {
          "id": "site-1759478985538",
          "name": " Outlook",
          "url": "https://outlook.live.com/",
          "description": "微软Outlook邮箱",
          "icon": "https://dh.kejilion.pro/wp-content/uploads/2024/02/images-5.jpg"
        }
      ]
    },
    {
      "id": "category-1759262281396",
      "icon": "💻",
      "name": "博客网站",
      "order": 4,
      "sites": [
        {
          "id": "site-1759836495819",
          "name": "科技小露",
          "url": "https://www.kejixiaolu.com/tiktok.html",
          "description": "博客",
          "icon": "https://yt3.googleusercontent.com/QzWo0bQN1CZXU8BrfBBCiyQLSQKYfqjcj1N4bfTmxVCgbHYowOOfPrg27HIhfU8rK1c4NeWu=s160-c-k-c0x00ffffff-no-rj"
        },
        {
          "id": "site-1759841811584",
          "name": " 不良林 ",
          "url": "https://bulianglin.com/",
          "description": "博客",
          "icon": "https://bulianglin.com/head.png"
        },
        {
          "id": "site-1759836608857",
          "name": "奶油之家 ",
          "url": "https://naiyous.com/",
          "description": "博客",
          "icon": "https://naiyous.com/wp-content/uploads/2022/11/LOGO.png"
        },
        {
          "id": "site-1760237652802",
          "name": "凿壁偷光不算偷",
          "url": "https://www.99600000.xyz",
          "description": "个人主页导航站",
          "icon": "https://blog.99600000.xyz/favicon.ico"
        },
        {
          "id": "site-1762181060450",
          "name": "Vlong’s Tech Studio",
          "url": "https://2xxxai.com/",
          "description": "博客",
          "icon": "https://2xxxai.com/upload/68e14edf795b6.png"
        },
        {
          "id": "site-1759837021274",
          "name": "jcnf的导航站",
          "url": "https://ybfl.net/",
          "description": "导航站",
          "icon": "https://pic.ybfl.xyz/i/2022/09/27/yqm0ov-0.png"
        },
        {
          "id": "site-1759840445466",
          "name": "一点科技",
          "url": "https://1keji.net/c/5-category/5",
          "description": "博客",
          "icon": "http://1keji.net/uploads/default/original/1X/8890980b4aed595e16e5dd5c23e20b4b38918b0d.webp"
        },
        {
          "id": "site-1764599436310",
          "name": " 晓柒科技",
          "url": "https://www.xiaoqikeji.com/",
          "description": "博客",
          "icon": "https://www.faviconextractor.com/favicon/www.xiaoqikeji.com?larger=true"
        },
        {
          "id": "site-1765093844480",
          "name": "remio-home",
          "url": "https://index.remio.cc/",
          "description": "个人主页导航站",
          "icon": "https://avatars.githubusercontent.com/u/49872605?s=48&v=4"
        },
        {
          "id": "site-1765093899895",
          "name": "Mio 导航",
          "url": "https://nav.kasuie.cc/",
          "description": "导航站",
          "icon": "https://avatars.githubusercontent.com/u/49872605?s=48&v=4"
        },
        {
          "id": "site-1761188521015",
          "name": "FRE123",
          "url": "https://fre123.com/",
          "description": "导航站",
          "icon": "https://fre123.com/img/de8a069165967b269c0583488d68d32c.webp?format=webp&quality=80"
        },
        {
          "id": "site-1760411532139",
          "name": "豌豆",
          "url": "https://wandou.eu.org/",
          "description": "导航站",
          "icon": "https://wandou.eu.org/wp-content/uploads/2023/08/%E8%B1%8C%E8%B1%86%E5%8D%9A%E5%AE%A2-1.png"
        },
        {
          "id": "site-1759262400758",
          "name": "Navigation",
          "url": "https://xshuffle.me/",
          "description": "导航站",
          "icon": "https://xshuffle.me/logo.png"
        },
        {
          "id": "site-1759262515537",
          "name": "猫猫导航🐱",
          "url": "https://nav.maodeyu.fun/",
          "description": "导航站",
          "icon": "https://nav.maodeyu.fun/logo.png"
        },
        {
          "id": "site-1760151992831",
          "name": "66 Nav",
          "url": "https://66.088878.xyz/",
          "description": "导航站",
          "icon": "https://66.088878.xyz/logo.png"
        }
      ]
    },
    {
      "id": "category-1762065608255",
      "icon": "📁",
      "name": "搭建指南",
      "order": 5,
      "sites": [
        {
          "id": "site-1762123415191",
          "name": "哆啦A梦面板 Flux-Panel",
          "url": "https://www.typemylife.com/setup-doraemon-flux-panel-with-ix-vps-admin-guide/",
          "description": "哆啦A梦Flux Panel转发面板合租车主教程",
          "icon": "https://www.nodeseek.com/avatar/21286.png"
        },
        {
          "id": "site-1760770192004",
          "name": "NodePass & NPSH",
          "url": "https://naiyous.com/9270.html",
          "description": "面板搭建实操指南\n视频搭建过程:https://www.youtube.com/watch?v=PnN4Bw7yQYU&t=287s",
          "icon": "https://avatars.githubusercontent.com/u/209877006?s=48&v=4"
        },
        {
          "id": "site-1761967633850",
          "name": "sspanel uim面板",
          "url": "https://naiyous.com/7209.html",
          "description": "2025最新sspanel uim面板\n视频搭建过程:https://www.youtube.com/watch?v=Zr4ZvfqWXGM",
          "icon": "https://naiyous.com/wp-content/uploads/2022/11/LOGO.png"
        },
        {
          "id": "site-1762065146102",
          "name": "S-UI 面板",
          "url": "https://naiyous.com/8895.html",
          "description": "搭建实操指南",
          "icon": "https://naiyous.com/wp-content/uploads/2022/11/LOGO.png"
        },
        {
          "id": "site-1759836728394",
          "name": "异次元店铺系统",
          "url": "https://wiki.mcy.im/#/README",
          "description": "搭建实操指南",
          "icon": "https://wiki.mcy.im/favicon.ico"
        }
      ]
    },
    {
      "id": "category-1762075173804",
      "icon": "🌐",
      "name": "个人搭建",
      "order": 6,
      "sites": [
        {
          "id": "site-1764695266436",
          "name": "Android",
          "url": "http://91.208.109.65:3000/#",
          "description": "香港云服务2025.12.28",
          "icon": "https://avatars.githubusercontent.com/u/8361145?s=48&v=4"
        },
        {
          "id": "site-1765096897994",
          "name": "666导航🍁",
          "url": "https://w.699006.xyz/",
          "description": "Cloudflare 搭建",
          "icon": "https://ww.699006.xyz/logo.png"
        },
        {
          "id": "site-1763482869273",
          "name": "666导航🍁",
          "url": "https://ww.699006.xyz/",
          "description": "Vercel 搭建",
          "icon": "https://ww.699006.xyz/logo.png"
        },
        {
          "id": "site-1765096819317",
          "name": "666导航",
          "url": "https://www.699006.xyz/",
          "description": "Cloudflare 搭建",
          "icon": "https://ww.699006.xyz/logo.png"
        }
      ]
    },
    {
      "id": "category-1759287502073",
      "icon": "🔧",
      "name": "在线工具",
      "order": 7,
      "sites": [
        {
          "id": "site-1759713685717",
          "name": "ITDOG",
          "url": "https://www.itdog.cn/ping/",
          "description": "在线Ping IP\n",
          "icon": "https://th.bing.com/th/id/ODF.hqvoADar9r8amDkcaj6tkw?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1759287812619",
          "name": "IP 查询 ",
          "url": "https://ping0.cc/",
          "description": "查询IP纯净度",
          "icon": "https://th.bing.com/th/id/ODF.D9-8x7aRw_DGyOdq9APY_g?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1759287965072",
          "name": "IP 查询 ",
          "url": "https://iplark.com/",
          "description": "IP 检测",
          "icon": "https://xshuffle.me/sitelogo/iplark.com.ico"
        },
        {
          "id": "site-1759848037454",
          "name": "ip125",
          "url": "https://ip125.com/",
          "description": "IP 查询",
          "icon": "https://th.bing.com/th/id/ODF.Ej9md70otx1ya3x4k4QCsQ?w=32&h=32&qlt=90&pcl=fffffa&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
        },
        {
          "id": "site-1762702016969",
          "name": "IPinfo",
          "url": "https://ipinfo.io/",
          "description": "原生 IP 检测",
          "icon": "https://th.bing.com/th/id/ODL.3ad33b3ddc17bb85fc67e6d4ccb3d563?w=80&h=80&c=10&r=0&o=6&cb=B&pid=23.1&ucfimg=1"
        },
        {
          "id": "site-1764511771814",
          "name": "Speedtest",
          "url": "https://www.speedtest.net/",
          "description": "测速工具",
          "icon": "https://th.bing.com/th/id/ODF.UkCgjmb8Iah1hiRiuizE-Q?w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2"
        }
      ]
    }
  ],
  "title": "666导航🍁"
}
