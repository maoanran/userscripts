// ==UserScript==
// @name           noGoogleRedirect
// @namespace      maoanran@gmail.com
// @description    fuck google search page redirection
// @include        http://www.google.*/search*
// @include        https://www.google.*/search*
// @include        http://encrypted.google.*/search*
// @include        https://encrypted.google.*/search*
// @updateURL      https://github.com/maoanran/userscripts/raw/master/noGoogleRedirect.user.js
// @grant          none
// ==/UserScript==
(function () {
  window.addEventListener('load', function () {
    document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll('h3.r > a'), function (elem) {
      elem.href = elem.href.replace(/.*\/interstitial\?url=/, '');
      elem.onmousedown = function () {};
    });
  });
}) ();
