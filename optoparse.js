/*jslint browser: true*/
(function () {
    "use strict";

    var opts = window.Opts = {},
        extractArray = function (str) {
            return str.split('&').filter(function (substr) {
                return substr.indexOf('=') === -1;
            });
        },
        extractObj = function (str) {
            return str.split('&').reduce(function (obj, val) {
                val = val.split('=');
                if (val.length > 1) {
                    obj[val.shift()] = val.join('=');
                }
                return obj;
            }, {});
        };
    opts.getArray = function () {
        return extractArray(location.search.slice(1));
    };
    opts.getHas = function (val) {
        return opts.getArray().indexOf(val) !== -1;
    };
    opts.getObj = function () {
        return extractObj(location.search.slice(1));
    };
    opts.hashArray = function () {
        return extractArray(location.hash.slice(1));
    };
    opts.hashHas = function (val) {
        return opts.hashArray().indexOf(val) !== -1;
    };
    opts.hashObj = function () {
        return extractObj(location.hash.slice(1));
    };
}());
