/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
    'use strict';

    var options = {
        id: 'chrome.sockets.tcp.xhr',
        bounds: {
            width: Math.round(screen.availWidth / 2),
            height: screen.availHeight
        }
    };

    chrome.app.window.create('test.html', options);
});
