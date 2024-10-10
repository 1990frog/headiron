<template>
  <div class="main">
    <div class="search">
      <div>
        <el-input v-model="google.keyword" placeholder="瞎JB查" class="input"
                  @keyup.enter.native="googleQuery"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="googleQuery" class="button">google</el-button>
      </div>
    </div>
    <div class="search">
      <div>
        <el-input v-model="baidu.keyword" placeholder="瞎JB查" class="input"
                  @keyup.enter.native="baiduQuery"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="baiduQuery" class="button">百度</el-button>
      </div>
    </div>
    <div class="bookmarks">
      <template v-for="(value,key,index) in bookmarks">
        <div class="box" :key="index">
          <span class="line">{{ index + 1 }} {{ key }}：</span>
          <template v-for="(sub_item,sub_index) in value">
            <span class="line" :key="sub_index">
                <el-link :key="index+'_'+sub_index" :href="sub_item.url" target="_blank"
                         style="color: powderblue;font-size: 20px;">{{ sub_item.name }}</el-link>
            </span>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      google: {
        keyword: '',
        url: "https://www.google.com/search?chrome=UTF-8&q=${keyword}&googleSearch=google"
      },
      baidu: {
        keyword: '',
        url: "https://www.baidu.com/baidu?tn=baidu&word=${keyword}"
      },
      bookmarks: {
        "normal": [
          {"name": "Google", "url": "https://www.google.com/"},
          {"name": "Google学术", "url": "https://scholar.google.com/"},
          {"name": "Wiki", "url": "https://zh.wikipedia.org/"},
          {"name": "Gmail", "url": "https://mail.google.com/mail/"},
          {"name": "ArchWiki", "url": "https://wiki.archlinux.org/"},
          {"name": "全历史", "url": "https://www.allhistory.com/"},
          {"name": "肌肉训练指南", "url": "https://musclewiki.cn/"},
          {"name": "终身教育平台", "url": "https://le.ouchn.cn/home"},
          {"name": "TBOX导航", "url": "https://www.tboxn.com/"},
          {"name": "Linux命令查询", "url": "https://wangchujiang.com/linux-command/"},
          {"name": "java全栈知识体系", "url": "https://pdai.tech/"},
          {"name": "正则大全", "url": "https://any86.github.io/any-rule/"},
          {"name": "开发者搜索", "url": "https://kaifa.baidu.com"},
          {"name": "Crx搜搜", "url": "https://www.crxsoso.com"},
          {"name": "小鸡IP工具箱  ", "url": "https://ipcheck.ing"},
        ],
        "developer": [
          {"name": "Github", "url": "https://github.com/"},
          {"name": "StackOverflow", "url": "https://stackoverflow.com/"},
          {"name": "DockerHub", "url": "https://hub.docker.com/"},
          {"name": "Maven", "url": "https://mvnrepository.com/"},
          {"name": "Hyprland", "url": "https://hyprland.org/"},
          {"name": "Suckless", "url": "https://dwm.suckless.org/"}
        ],
        "math": [
          {"name": "MathWiki", "url": "https://zh.wikipedia.org/zh-cn/Portal:%E6%95%B0%E5%AD%A6"},
          {"name": "3Blue1Brown", "url": "https://www.3blue1brown.com/"}
        ],
        "translate": [
          {"name": "DeepL", "url": "https://www.deepl.com/translator"},
          {"name": "Google翻译", "url": "https://translate.google.com/"},
          {"name": "有道翻译", "url": "https://fanyi.youdao.com/"}
        ],
        "tool": [
          {"name": "Google Drive", "url": "https://drive.google.com/"},
          {"name": "高德地图", "url": "https://ditu.amap.com/"},
          {"name": "网页里的电脑博物馆", "url": "http://www.dnbwg.com/"},
          {"name": "Wallhaven", "url": "https://wallhaven.cc/"},
          {"name": "JustMySocks", "url": "https://justmysocks.net"},
          {"name": "regex测试", "url": "https://tool.oschina.net/regex/"},
          {"name": "Json解析", "url": "https://www.json.cn/"}
        ],
        "read": [
          {"name": "起点", "url": "https://www.qidian.com/"},
          {"name": "Z-Library", "url": "https://zh.z-lib.fm/"},
          {"name": "鸠摩搜书", "url": "https://www.jiumodiary.com/#"},
          {"name": "编程中文书籍", "url": "https://github.com/justjavac/free-programming-books-zh_CN#%E5%85%8D%E8%B4%B9%E7%9A%84%E7%BC%96%E7%A8%8B%E4%B8%AD%E6%96%87%E4%B9%A6%E7%B1%8D%E7%B4%A2%E5%BC%95"},
        ],
        "news": [
          {"name": "BBC", "url": "https://www.bbc.com/news/world"},
          {"name": "华盛顿邮报", "url": "https://www.washingtonpost.com/"},
          {"name": "FT中文网", "url": "https://www.ftchinese.com/"},
          {"name": "南华", "url": "https://www.zaobao.com.sg/?ref=global"},
          {"name": "观察者", "url": "https://www.guancha.cn/"},
        ],
        "forum": [
          {"name": "逼乎", "url": "https://www.zhihu.com/"},
          {"name": "虎扑", "url": "https://www.hupu.com/"},
          {"name": "Reddit", "url": "https://www.reddit.com/"},
          {"name": "Discord", "url": "https://discord.com/"},
          {"name": "蓝鸟", "url": "https://twitter.com/"},
          {"name": "IG", "url": "https://www.instagram.com/"},
          {"name": "Flickr", "url": "https://www.flickr.com/"},
          {"name": "ChipHell", "url": "https://www.chiphell.com/"},
          {"name": "NGA玩家社区", "url": "https://bbs.nga.cn/"},
          {"name": "V2EX", "url": "https://www.v2ex.com/"},
          {"name": "家电论坛", "url": "https://www.jdbbs.com/forum.php"},
        ],
        "movie": [
          {"name": "YouTube", "url": "https://www.youtube.com/"},
          {"name": "BiliBili", "url": "https://www.bilibili.com/"},
          {"name": "Netflix", "url": "https://www.netflix.com/"},
          {"name": "RARBG", "url": "https://rargb.to/"},
        ],
        "music": [
          {"name": "Spotify", "url": "https://open.spotify.com/"},
          {"name": "YTMusic", "url": "https://music.youtube.com/"},
          {"name": "网易云音乐", "url": "https://music.163.com/"},
          {"name": "QQ音乐", "url": "https://y.qq.com/"}
        ],
        "shopping": [
          {"name": "淘宝", "url": "https://www.taobao.com/"},
          {"name": "狗东", "url": "https://www.jd.com/"},
          {"name": "Zfrontier", "url": "http://www.zfrontier.com/"}
        ],
        "study": [
          {"name": "ProcessOn", "url": "https://www.processon.com/"},
          {"name": "JDON", "url": "https://www.jdon.com/"},
          {"name": "mooc", "url": "https://www.imooc.com/"},
          {"name": "geektime", "url": "https://time.geekbang.org/"},
          {"name": "LeetCode", "url": "https://leetcode-cn.com/"},
          {"name": "炼数成金", "url": "http://www.dataguru.cn/"},
          {"name": "并发编程网", "url": "http://ifeve.com/"},
          {"name": "SegmentFault", "url": "https://segmentfault.com/"},
          {"name": "美团技术团队", "url": "https://tech.meituan.com/"},
          {"name": "infoQ", "url": "https://xie.infoq.cn/"},
          {"name": "掘金", "url": "https://juejin.cn/"},
          {"name": "Algorithms", "url": "https://algs4.cs.princeton.edu/10fundamentals/"},
          {"name": "中国色", "url": "http://zhongguose.com/"}
        ],
        "docs": [
          {"name": "Java", "url": "https://docs.oracle.com/en/java/"},
          {"name": "Presto", "url": "https://prestodb.io/docs/current/"},
          {"name": "Yarn", "url": "https://yarn.bootcss.com/"},
          {"name": "Hutool", "url": "https://www.hutool.cn/docs/#/"},
          {"name": "xxl-job", "url": "https://www.xuxueli.com/xxl-job/#/"},
          {"name": "MybatisPlus", "url": "https://baomidou.com/"},
          {"name": "SpringCloud", "url": "https://www.springcloud.cc/spring-cloud-greenwich.html"},
          {"name": "Groovy", "url": "http://www.groovy-lang.org/documentation.html"},
          {"name": "Greenplum", "url": "https://greenplum.org/"},
          {"name": "SqlServer", "url": "https://docs.microsoft.com/zh-cn/sql/sql-server/?view=sql-server-ver15/"},
          {"name": "nacos", "url": "https://nacos.io/zh-cn/index.html"},
          {"name": "presto", "url": "https://prestodb.io/"},
          {"name": "ECharts", "url": "https://echarts.apache.org/examples/zh/"}
        ],
        "work": [
          {"name": "微信", "url": "https://wx.qq.com/"},
          {"name": "OA", "url": "http://58.34.222.26:8088/seeyon/main.do?method=index"}
        ]
      }
    }
  },
  methods: {
    googleQuery() {
      window.open(this.google.url.replace('${keyword}', this.google.keyword), '_blank')
    },
    baiduQuery() {
      window.open(this.baidu.url.replace('${keyword}', this.baidu.keyword), '_blank')
    }
  }
}
</script>

<style scoped>
.main {
  margin: 10% auto;
  width: 1000px;
}

.search {
  margin: 0 auto 15px;
  width: 550px;
}

.search .input {
  width: 400px;
}

.search .button {
  width: 100px;
  margin-left: 10px;
}

.bookmarks {
  margin: 0 auto;
  width: 1000px;
  height: auto;
  clear: both;
}

.bookmarks .box {
  margin: 0 auto;
  width: 1000px;
  height: auto;
  text-align: left;
}

.bookmarks .box .line {
  font-size: 20px;
  margin-left: 10px;
  color: plum;
}
</style>