// ==UserScript==
// @name         Annoying Orange Countdown for Leechblock
// @version      2025-08-15
// @description  replaces Leechblock's boring countdown with the Annoying Orange one
// @author       Pacola
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

console.log("hey!")
var leechblockTimer = document.body.getElementsByClassName("leechblock-timer");

GM_addStyle(`
  @font-face {
    font-family: OrangeFont;
    src: url("https://rawcdn.githack.com/PacolaYes/annoying-orange-leechblock/8ff8957d47f26bb39db4e2e36f0d0cfae0c75485/assets/GothamRoundedMedium.otf") format("opentype");
  }

  #annoying-orange-timer {
      color: black !important;
      position: fixed !important;
      width: 244px !important;
      text-align: center !important;
      inset: auto !important;
      top: 45px !important;
      right: -20px !important;
      left: auto !important;
      bottom: auto !important;
      font-family: OrangeFont !important;
      font-size: 1.5em !important;
      background: transparent !important;
      padding: 0 !important;
      margin: 0 !important;
      border: none !important;
  }

  #annoying-orange-timer:before {
      content: url("https://github.com/PacolaYes/annoying-orange-leechblock/blob/main/assets/annoying%20orange%20countdown.png?raw=true");
      position: absolute;
      left: -35px;
      top: -33px;
      z-index: -255;
  }
`);

var timerElement
var delayTime = 0;

setTimeout(function() {
    'use strict';

    if (timerElement) { return }

    if (leechblockTimer && leechblockTimer[0]) {
        timerElement = leechblockTimer[0];
        timerElement.id = "annoying-orange-timer";
    }
    console.log("go!");
}, 500);
