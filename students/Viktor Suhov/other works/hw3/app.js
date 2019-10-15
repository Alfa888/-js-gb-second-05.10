'use strict'

function makeGETRequest (url, callback) {
    var xhr;
    if (windows.XMLHttpRequest) {
        xhr = new XMLHttpRequest ();
    } else if (windows.ActiveXObject) {
        xhr = new ActiveXObject ("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

