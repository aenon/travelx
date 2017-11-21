// travelx - react and alt.js app showing travel destinations

// alt.js - require alt, a flux compliant library for JavaScript applications

let Alt = require('alt');
let alt = new Alt();

// optional: require chromeDebug if using Google Chrome
let chromeDebug = require('alt/utils/chromeDebug')
chromeDebug(alt);

module.exports = alt;
