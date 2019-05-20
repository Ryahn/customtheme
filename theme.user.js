// ==UserScript==
// @name         Multi Theme
// @namespace    https://upload.multizone.pw/*
// @version      0.1.9
// @description  Custom theme
// @author       Ryahn
// @contributor  Ryahn
// @match        *://*.multizone.pw/*
// @updateURL    https://raw.githubusercontent.com/Ryahn/customtheme/master/theme.meta.js
// @downloadURL  https://raw.githubusercontent.com/Ryahn/customtheme/master/theme.user.js
// @supportURL   https://github.com/Ryahn/customtheme/issues
// @require      customCSS https://raw.githubusercontent.com/Ryahn/customtheme/master/theme.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==


//Get custom theme
let newCSS = GM_getResourceText("customCSS");
//Load theme
GM_addStyle(newCSS);