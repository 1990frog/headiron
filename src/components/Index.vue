<template>
    <div class="main">
        <div style="margin-top: 10px;">
            <div style="margin:0 auto;width:550px;border: 1px solid green">
                <el-input v-model="google.keyword" placeholder="请输入内容" style="width: 400px;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="googleQuery" style="width: 100px">google
                </el-button>
            </div>
        </div>
        <div style="margin-top: 10px;">
            <div style="margin:0 auto;width:550px">
                <el-input v-model="baidu.keyword" placeholder="请输入内容" style="width: 400px;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="baiduQuery" style="width: 100px">百度</el-button>
            </div>
        </div>
        <div>
            <template v-for="(value,key,index) in bookmarks">
                {{ index + 1 }} {{ key }}：
                <template v-for="item in value">
                    {{ item.name }}
                </template>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index.vue",
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
                "search": [
                    {"name": "Google", "url": "https://www.google.com/"},
                    {"name": "Wiki", "url": "https://zh.wikipedia.org/"},
                    {"name": "Gmail", "url": "https://mail.google.com/mail/"},
                    {"name": "Github", "url": "https://github.com/"},
                    {"name": "Gitee", "url": "https://gitee.com/"}
                ],
                "translate": [
                    {"name": "Google翻译", "url": "https://translate.google.com/"},
                    {"name": "有道翻译", "url": "https://http://fanyi.youdao.com/"}
                ],
                "tool": [
                    {"name": "高德地图", "url": "https://ditu.amap.com/"},
                    {"name": "A, Chizi!", "url": "http://achizi.com/"},
                    {"name": "网页里的电脑博物馆", "url": "http://www.dnbwg.com/"},
                    {"name": "Json.cn", "url": "https://www.json.cn/"},
                    {"name": "StackOverflow", "url": "https://stackoverflow.com/"},
                    {"name": "wallhaven", "url": "https://wallhaven.cc/"},
                    {"name": "压图", "url": "https://tinypng.com/"}
                ],
                "forum": [
                    {"name": "起点", "url": "https://www.qidian.com/"},
                    {"name": "知乎", "url": "https://www.zhihu.com/"},
                    {"name": "Chiphell", "url": "https://www.chiphell.com/"},
                    {"name": "观察者", "url": "https://www.guancha.cn/"},
                    {"name": "Flickr", "url": "https://www.flickr.com/"},
                    {"name": "耳机爱好者", "url": "http://www.headphoneclub.com/"},
                    {"name": "NGA玩家社区", "url": "https://bbs.nga.cn/"},
                    {"name": "reddit", "url": "https://www.reddit.com/"},
                    {"name": "V2EX", "url": "https://www.v2ex.com/"},
                    {"name": "知轩藏书", "url": "http://www.zxcs.me/"},
                    {"name": "家电论坛", "url": "https://www.jdbbs.com/forum.php"},
                    {"name": "Just My Socks", "url": "https://justmysocks1.net"},
                    {"name": "openwrt", "url": "http://www.openwrt.org.cn/bbs/forum.php"},
                ],
                "movie": [
                    {"name": "YouTube", "url": "https://www.youtube.com/"},
                    {"name": "BiliBili", "url": "https://www.bilibili.com/"},
                    {"name": "网易云音乐", "url": "https://music.163.com/"}
                ],
                "shopping": [
                    {"name": "淘宝", "url": "https://www.taobao.com/"},
                    {"name": "狗东", "url": "https://www.jd.com/"},
                    {"name": "Amazon", "url": "https://www.amazon.cn/"},
                    {"name": "Zfrontier", "url": "http://www.zfrontier.com/"}
                ],
                "study": [
                    {"name": "mooc", "url": "https://www.imooc.com/"},
                    {"name": "geektime", "url": "https://time.geekbang.org/"},
                    {"name": "LeetCode", "url": "https://leetcode-cn.com/"},
                    {"name": "炼数成金", "url": "http://www.dataguru.cn/"},
                    {"name": "Manning | Home", "url": "https://www.manning.com/"},
                    {"name": "并发编程网", "url": "http://ifeve.com/"},
                    {"name": "VisuAlgo", "url": "https://visualgo.net/en"},
                    {"name": "ProcessOn", "url": "https://www.processon.com/"},
                    {"name": "C语言中文网", "url": "http://c.biancheng.net/cpp/"},
                    {"name": "SegmentFault", "url": "https://segmentfault.com/"}
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
    border: 1px solid red;
    width: 1000px;
    height: 1000px;
}
</style>