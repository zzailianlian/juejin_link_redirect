// ==UserScript==
// @name         Juejin link address redirect
// @name:zh-CN   掘金链接跳转重定向
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  掘金直接跳转，不需要手动点击【继续访问】
// @author       You
// @match        https://link.juejin.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=juejin.cn
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const originUrl = window.location.href
  const targetUrl = originUrl.split('target=')[1]
  console.log('targetUrl', targetUrl, decodeURIComponent(targetUrl));
  if (targetUrl) {
    window.location.href = decodeURIComponent(targetUrl)
  }

})();