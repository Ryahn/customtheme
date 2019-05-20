// ==UserScript==
// @name         Multi Theme
// @namespace    https://upload.multizone.pw/*
// @version      0.1.12
// @description  Custom theme
// @author       Ryahn
// @contributor  Ryahn
// @match        *://*.multizone.pw/*
// @updateURL    https://raw.githubusercontent.com/Ryahn/customtheme/master/theme.meta.js
// @downloadURL  https://raw.githubusercontent.com/Ryahn/customtheme/master/theme.user.js
// @supportURL   https://github.com/Ryahn/customtheme/issues
// @resource     customCSS https://raw.githubusercontent.com/Ryahn/customtheme/master/theme.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==


const images = [
    'https://public.b-cdn.net/static/101914.png', //Pinguino47
    'https://public.b-cdn.net/static/101918.png' //Pinguino47
];
//Get custom theme
let newCSS = GM_getResourceText("customCSS");
//Load theme
GM_addStyle(newCSS);
GM_addStyle('body {\
    background: #181a1d;\
    background-color: #181a1d;\
    background-size: cover;\
    color: #ababab;\
    background:linear-gradient(0deg,rgba(0, 0, 0, .56),rgba(0, 0, 0, .56)),url(' + images[Math.floor(Math.random() * images.length)] + ');\
}');