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
    var pick = function (ary, keys) {
            var key = Math.round((ary.length - 1) * Math.random()), i = 0;
            do {
                key = Math.round((ary.length - 1) * Math.random());
            } while ((i += 1) < 10 && keys.indexOf(key) !== -1);
            if (keys) {
                keys.push(key);
            }
            return ary[key];
        },
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
                var p = document.getElementById("proverb-placement"),
                    newSentence = function () {
                        p.innerHTML = self.gen();
                    },
                    loadSentence = function () {
                        var keys = location.hash.slice(1).split('&'),
                            dict = self.dictionary,
                            rules = dict.rules[keys[0]],
                            sentence = '',
                            i = 0;

                        each(rules, function (rule) {
                            sentence += dict[rule] ? dict[rule][keys[(i += 1)]] : rule;
                            return true;
                        });
                        p.innerHTML = sentence;
                    };

                document.body.addEventListener("keypress", function (e) {
                    if (e.keyCode === 13) {
                        newSentence();
                    }
                });

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
            }
        };

    return self;
}());
