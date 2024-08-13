<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

// 获取是否为移动端
const isMobile = () => {
  const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return !!flag
}

// 获取是否为微信浏览器
const isWechat = () => {
  const flag = navigator.userAgent.match(/MicroMessenger/i)
  return !!flag
}
// 获取是否为QQ浏览器
const isQQBrowser = () => {
  const flag = navigator.userAgent.match(/QQBrowser/i)
  return !!flag
}
// 获取是否为QQ浏览器
const isSafari = () => {
  const flag = navigator.userAgent.match(/Safari/i)
  return !!flag
}
// 获取是否为QQ浏览器
const isChrome = () => {
  const flag = navigator.userAgent.match(/Chrome/i)
  return !!flag
}

// 获取是否为企业微信
const isWechatWork = () => {
  const flag = navigator.userAgent.match(/WeWork/i)
  return !!flag
}

console.log(isMobile())
console.log(isWechatWork())
console.log(isChrome())

// 获取页面的宽度
const deviceWidth = document.documentElement.clientWidth
// 获取页面的高度
const deviceHeight = document.documentElement.clientHeight

console.log(deviceWidth, deviceHeight)
</script>

<template>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
