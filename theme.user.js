// ==UserScript==
// @name         Multi Theme
// @namespace    https://upload.multizone.pw/*
// @version      0.1.8
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

(function() {
    'use strict';

    //Get custom theme
     let newCSS = GM_getResourceText("customCSS");
     //Load theme
     GM_addStyle(newCSS);
    //  let $head = $('head');
    //  let $last = $head.find('link[rel="stylesheet"]:last');
    //  let link = '<link rel="stylesheet" href="https://raw.githubusercontent.com/Ryahn/customtheme/master/theme.css" type="text/css">';

    //  if ($last.length) {
    //      $last.after(link);
    //  } else {
    //      $head.append(link);
    //  }
})(); 