<template>
  <div class="examples">
    <div class="examples-header" @click="handleHeaderClick">
      <p class="button-img">
        <img :src="!isShow?buttonImgUrl:closeImgUrl" alt>
      </p>
      <p>三维模型库</p>
    </div>
    <div class="examples-content">
      <section class="examples-menu" v-if="isShow">
        <Tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></Tree>
      </section>
      <div class="examples-pages">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { Tree } from "element-ui";
import buttonImg from "./assets/button.png"
import closeImg from './assets/close.png'
export default {
  name: "app",
  data() {
    return {
      data: [
        {
          label: "机械制图习题集",
          children: [
            {
              label: "第5章 轴测图",
              children: [
                {
                  label: "5-28-1",
                  router: "/ch5281"
                },
                {
                  label: "5-28-2",
                  router: "/ch5282"
                },
                {
                  label: "5-28-3",
                  router: "/ch5283"
                },
                {
                  label: "5-28-4",
                  router: "/ch5284"
                },
                {
                  label: "5-28-5",
                  router: "/ch5285"
                },
                {
                  label: "5-28-6",
                  router: "/ch5286"
                },
                {
                  label: "5-29-1",
                  router: "/ch5291"
                },
                {
                  label: "5-29-2",
                  router: "/ch5292"
                },
                {
                  label: "5-29-3",
                  router: "/ch5293"
                },
                {
                  label: "5-29-4",
                  router: "/ch5294"
                }
              ]
            }
          ]
        }
      ],
      isShow: false,
      defaultProps: {
        children: "children",
        label: "label"
      },
      buttonImgUrl: buttonImg,
      closeImgUrl: closeImg
    };
  },
  methods: {
    IsPC() {
      var userAgentInfo = navigator.userAgent
      var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ]
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    },
    handleNodeClick(data) {
      // console.log(data, this.$route)
      if (data.hasOwnProperty("router")) {
        // this.$router.go('www.baidu.com')
        // console.log(data.router)
        this.$router.push({ path: data.router })
        !this.IsPC() ? location.reload() : null
      }
    },
    handleHeaderClick() {
      this.isShow = !this.isShow
    }
  },
  components: {
    Tree
  }
}
</script>
<style>
* {
  margin: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol,
li {
  list-style: none;
}
a {
  color: #657180;
  text-decoration: none;
}
html,
body,
.examples {
  width: 100%;
  height: 100%;
  color: #657180;
}
body {
  background: #eee;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", SimSun, sans-serif;
  background: #fff;
}
.examples-header {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background: #f3f6fb;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  border-bottom: solid 1px #dfe2e7;
  padding: 15px 15px 15px 30px;
  line-height: 25px;
}
.examples-header > p.button-img {
  margin-right: 5px;
}
.examples-header > p.button-img > img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.examples-header .title {
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
}
.examples-content {
  width: 100%;
  height: 100%;
  padding-top: 52px;
  overflow: hidden;
}
.examples-menu {
  float: left;
  width: 230px;
  height: 100%;
  border-right: solid 1px #dfe2e7;
  padding: 10px 30px;
}
.examples-menu .examples-menu-item {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
}
.examples-menu .examples-menu-item > a {
  display: block;
  width: 100%;
  height: 100%;
}
.examples-menu .examples-menu-title {
  display: block;
  width: 100%;
  padding: 6px 0;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}
.examples-menu .examples-menu-item:hover > a {
  color: #39f;
}
.examples-pages {
  height: 100%;
  overflow: hidden;
}
.example-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.example-loading::before {
  content: "";
  border-radius: 100%;
  margin: 2px;
  border: 3px solid #20a0ff;
  border-bottom-color: transparent;
  height: 36px;
  width: 36px;
  display: inline-block;
  animation: loading-rotate 0.75s 0s linear infinite;
  vertical-align: middle;
}
.example-loading::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
@keyframes loading-rotate {
  0% {
    transform: rotate(0) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.6);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
