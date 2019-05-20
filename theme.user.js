// ==UserScript==
// @name         Multi Theme
// @namespace    https://upload.multizone.pw/*
// @version      0.2.8
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
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==
/* global $ */
/* eslint-disable no-multi-spaces, curly */

// Array of custom images
// const images = [
//     {
//         "name": "Pepe Mountain",
//         "url": "https://public.b-cdn.net/static/101918.png"
//     },
//     {
//         "name": "Pepe Street",
//         "url": "https://public.b-cdn.net/static/101914.png"
//     }
// ];
$.getJSON('https://raw.githubusercontent.com/Ryahn/customtheme/master/images.json', {}, function(data) {
    GM_setValue('imageData', data);
});
const images = GM_getValue('imageData');

// Create selection
let s = $('<select id="imageSelect" class="imageSelect" />');
s.prepend('<option/>');
s.append($('<option>').attr('value', 'default').text('Default'));

// Add images to selection
$(images).each(function() {
    s.append($('<option>').attr('value', this.url).text(this.name));
});

// Create list item to append to navbar
let li = $('<li/>');
li.html(s);

// Append selection to navbar
$('#navbar > ul ').append(li);

let b = $('<button/>').attr({id: 'clearCache', class: 'btn btn-danger clearCache'}).text('Clear Cache');
let li1 = $('<li/>');
li1.html(b);

// Append selection to navbar
$('#navbar > ul ').append(li1);

// Check if we already have a saved selection else, set to a default one
if (GM_getValue('image') == 'default' || !GM_getValue('image') || GM_getValue('image') == '' || GM_getValue('image') == null) {
    $('body').css({
        'background': '#181a1d',
        'background-color': '#181a1d',
    });
} else {
    $('body').css({
        'background': 'linear-gradient(0deg,rgba(0, 0, 0, .56),rgba(0, 0, 0, .56)),url(' + GM_getValue('image') + ')',
        'background-size': 'cover',
    });
}

// Change background on selection and save to reuse
$('#imageSelect').change(function() {
    if ($(this).val() === 'default') {
        $('body').css({
            'background': '#181a1d',
            'background-color': '#181a1d',
        });
    } else {
        GM_setValue('image', $(this).val());
        $('body').css({
            'background': 'linear-gradient(0deg,rgba(0, 0, 0, .56),rgba(0, 0, 0, .56)),url(' + $(this).val() + ')',
            'background-size': 'cover',
        });
    }
});

$('#clearCache').click(function() {
    GM_deleteValue('image');
    GM_deleteValue('imageData');
    location.reload();
});


//Get custom theme
let newCSS = GM_getResourceText("customCSS");

//Load theme
GM_addStyle('body {\n\r\
    background: #181a1d;\n\r\
    background-color: #181a1d;\n\r\
    background-size: cover;\n\r\
    color: #ababab;\n\r\
}\n\r'+ newCSS);
