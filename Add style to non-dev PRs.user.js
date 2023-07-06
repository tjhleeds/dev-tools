// ==UserScript==
// @name         Add style to non-dev PRs
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add styles to Azure DevOps PRs which are not targetting the dev branch, so they are more visible
// @author       Tim Hilton (tim.hilton@audacia.co.uk)
// @match        https://dev.azure.com/audacia/_git/Gleadell.Ultra/pullrequests?_a=mine
// @icon         https://www.google.com/s2/favicons?sz=64&domain=azure.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        Array.from(document.querySelectorAll('span.monospaced-xs.padding-horizontal-4'))
            .filter(e => e.innerText !== 'dev')
            //.forEach(e => e.classList.add("target-branch-not-dev"));
            .forEach(e => {
                e.style.border = '10px solid red';
            });
    }, 1000);
})();