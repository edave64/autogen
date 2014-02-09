/*jslint browser: true*/

// AutoGen - A random sentence generator
// 
// 2011 by EDave
// released to pulic domain (because of the very small effort and use)
//
// Usage:
// The object autoGen.dictionary is filled by an external dictionary file.
// This dictionary file defines rules and words (or groups of words) that will
// be used to generate the sentences.
// The templates for generation are stored in the array
// ''autoGen.dictionary.rules''. The words itself are stored in any other
// attribute of ''autoGen.dictionary''.
//
// A simple rule could look like this:
//   ['Test1', 'or', 'Test2', '?']
//
// The complete dictionary could look like this:
//   autoGen.dictionary = {
//     rules: [['Test1', ' or ', 'Test2', '?']],
//     Test1: ['Apple', 'Truth', 'To be'],
//     Test2: ['Pear',  'Dare',  'not to be']
//   };
// 
// To generate a sentence, you have to call:
//   autoGen.gen()
//
// ''gen()'' will then pick a random rule and loops throught every element of
// it. If the string is a key of the dictionary, a random element of the
// respective array is taken and inserted. Otherwise, the string of the rule is
// inserted.
//
// So, a generated sentence could look like this:
//   Apple or not to be?
//
// Have fun playing with it.
//
// Upcoming features:
// * weigthable random
// * more dynamic rulesets
// * ability to avoid specific combinations
//

window.AutoGen = (function () {
    "use strict";

    // Picks a random element from the array
    var pick,
        each = function (ary, iter) {
            [].every.call(ary, function (k, v, a) {
                iter(k, v, a);
                return true;
            });
        },
        self = {
            dictionary : { rules: [] },

            gen: function () {
                if (self.dictionary.rules.length === 0) {
                    return '';
                }
                var dict = self.dictionary, keys = [], rules = pick(dict.rules, keys), sentence = '';

                each(rules, function (rule) {
                    sentence += dict[rule] ? pick(dict[rule], keys) : rule;
                });
                location.hash = keys.join('&');
                return sentence;
            },

            // autoGen.pushMethod(*args)
            //
            // Generates a new method, which will take multiple arrays and push
            // there values into the dictionary's arrays specified in *args.
            //
            // Example:
            //  var dict = autoGen.dictionary = { rules: ['Test1', ' ', 'Test2'], Test1: [], Test2: [] }
            //  autoGen.pushMethod('Test1', 'Test2')(
            //    ['Das', 'ist'],
            //    ['Das', 'Haus'],
            //    ['vom', 'Nikolaus']
            //  );
            //  dict.Test1 //=> ['Das', 'Das', 'vom']
            //  dict.Test2 //=> ['ist', 'Haus', 'Nikolaus']
            pushMethod: function () {
                var assignments = arguments;
                return function () {
                    each(arguments, function (list) {
                        each(assignments, function (v, key) {
                            if (list[key] !== undefined) {
                                self.dictionary[v].push(list[key]);
                            }
                        });
                    });
                };
            },

            initUI: function () {
                var p = document.getElementById("gen_placement"),
                    footer = document.getElementById("footnotes_dictionary"),
                    newSentence = function () {
                        p.innerHTML = self.gen();
                    },
                    loadSentence = function () {
                        var keys = location.hash.slice(1).split('&'),
                            dict = self.dictionary,
                            rules = dict.rules instanceof self.WeigthedArray ? dict.rules.ary[keys[0]] : dict.rules[keys[0]],
                            sentence = '',
                            i = 0;

                        each(rules, function (rule) {
                            sentence += dict[rule] ? dict[rule][keys[(i += 1)]] : rule;
                            return true;
                        });
                        p.innerHTML = sentence;
                    },
                    opts = self.dictionary.options;

                document.body.addEventListener("keypress", function (e) {
                    if (e.keyCode === 13) {
                        newSentence();
                    }
                });

                footer.innerHTML = '(' + opts.name + ' ' + opts.version + ') ' + opts.licence.copyright + ' ' +
                    opts.licence.licence + '<br />';
                footer.innerHTML += 'Inspired by ' + opts.licence.inspiredBy + '<br />';
                footer.innerHTML += opts.additional;

                window.addEventListener('popstate', function () {
                    loadSentence();
                });

                if (navigator.userAgent.indexOf('Trident') !== -1) { /* srsly, ie? not even 11? */
                    window.addEventListener('hashchange', function () {
                        loadSentence();
                    });
                }

                document.getElementById("button_next").addEventListener("click", newSentence);
                if (location.hash === "") {
                    newSentence();
                } else {
                    loadSentence();
                }
            },

            WeigthedArray: function () {
                this.ary = [];
                this.weights = {};
                this.weightSum = 0;
            },

            balanceRules: function () {
                this.dictionary.rules = this.dictionary.rules.reduce(function (obj, rules) {
                    var possibilities = 1;

                    each(rules, function (rule) {
                        if (self.dictionary[rule]) {
                            possibilities *= self.dictionary[rule].length;
                        }
                    });
                    obj.pushWithWeight(rules, possibilities);
                    return obj;
                }, new self.WeigthedArray());
            }
        },
        WeigthedArray = self.WeigthedArray,
        pWeigthedArray = WeigthedArray.prototype,
        pArray = Array.prototype,
        id = 0,
        getID = function (obj) {
            /*jslint nomen: true */
            if (typeof obj === 'object') {
                if (obj.__uniqueid === undefined) {
                    obj.__uniqueid = id += 1;
                }
                return 'O' + obj.__uniqueid;
            }

            /*jslint nomen: false */
            return (typeof obj) + obj.toString();
        },
        wrapAdd = function (oldMethod) {
            return function () {
                var self = this;
                oldMethod.apply(this.ary, arguments);
                pArray.every.call(arguments, function (val) {
                    if (self.weights[getID(val)] === undefined) {
                        self.weights[getID(val)] = 1;
                        self.weightSum += 1;
                    }
                });
                return true;
            };
        },
        wrapRemove = function (oldMethod) {
            return function () {
                var self = this;
                oldMethod.apply(this.ary, arguments);
                pArray.every.call(arguments, function (val) {
                    if (self.weights[getID(val)] !== undefined) {
                        self.weightSum -= self.weights[getID(val)];
                        delete self.weights[getID(val)];
                    }
                    return true;
                });
            };
        },
        wrapSubset = function (oldMethod) {
            return function () {
                var subAry = oldMethod.apply(this.ary, arguments),
                    self = this,
                    newWeigthed = new WeigthedArray();
                newWeigthed.ary = subAry;
                subAry.every(function (val) {
                    if (self.weights[getID(val)] !== undefined) {
                        newWeigthed.weights[getID(val)] = self.weights[getID(val)];
                    } else {
                        newWeigthed.weights[getID(val)] = 1;
                    }
                    newWeigthed.weightSum += newWeigthed.weights[getID(val)];
                });
            };
        };

    pick = function (ary, keys) {
        var key, i = 0;
        if (ary instanceof self.WeigthedArray) {
            do {
                key = ary.pick();
            } while ((i += 1) < 10 && keys.indexOf(key) !== -1);
        } else {
            do {
                key = Math.round((ary.length - 1) * Math.random());
            } while ((i += 1) < 10 && keys.indexOf(key) !== -1);
        }
        if (keys) {
            keys.push(key);
        }
        if (ary instanceof self.WeigthedArray) {
            return ary.ary[key];
        }
        return ary[key];
    };

    pWeigthedArray.push = wrapAdd(pArray.push);
    pWeigthedArray.unshift = wrapAdd(pArray.unshift);
    pWeigthedArray.concat = function () {
        pArray.every.call(arguments, function (val) {
            if (val instanceof Array) {
                this.push.apply(this, val);
            } else {
                this.push(val);
            }
        });
    };
    pWeigthedArray.shift = wrapRemove(pArray.shift);
    pWeigthedArray.pop = wrapRemove(pArray.pop);
    pWeigthedArray.filter = wrapSubset(pArray.filter);
    pWeigthedArray.pick = function () {
        var randIndex = Math.random() * this.weightSum,
            id;
        for (id in this.weights) {
            if (this.weights.hasOwnProperty(id)) {
                randIndex -= this.weights[id];
                if (randIndex <= 0) {
                    return this.indexById(id);
                }
            }
        }
        return null;
    };
    pWeigthedArray.indexById = function (id) {
        var obj, key;
        for (key in this.ary) {
            if (this.ary.hasOwnProperty(key)) {
                obj = this.ary[key];
                if (getID(obj) === id) {
                    return key;
                }
            }
        }
        return null;
    };
    pWeigthedArray.pushWithWeight = function (element, weight) {
        this.ary.push(element);
        this.weights[getID(element)] = weight;
        this.weightSum += weight;
    };

    return self;
}());
