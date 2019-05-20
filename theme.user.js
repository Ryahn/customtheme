// ==UserScript==
// @name         Multi Theme
// @namespace    https://upload.multizone.pw/*
// @version      0.5
// @description  Custom theme
// @author       Ryahn
// @contributor  Ryahn
// @match        *://*.multizone.pw/*
// @updateURL    https://github.com/Ryahn/customtheme/raw/master/theme.meta.js
// @downloadURL  https://github.com/Ryahn/customtheme/raw/master/theme.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     let $head = $('head');
     let $last = $head.find('link[rel="stylesheet"]:last');
     let link = '<link rel="stylesheet" href="https://github.com/Ryahn/customtheme/raw/master/theme.css" type="text/css">';

     if ($last.length) {
         $last.after(link);
     } else {
         $head.append(link);
     }
})(); 