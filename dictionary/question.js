// 2014 by EDave
// released to the public domain
/*jslint browser: true*/
/*global AutoGen*/
(function () {
    "use strict";
    var dict = AutoGen.dictionary = { rules: [] },
        arg = function (name) {
            return location.search.slice(1).split('&').indexOf(name) !== -1;
        };

    dict.options = {
        name: 'Question builder',
        version: '2014-02',
        licence: {
            copyright: '2014 by EDave',
            licence: 'released to the public domain',
            inspiredBy: '<a href="http://www.sinnfragenkombinator.de/">sinnfragenkombinator.de</a>'
        },
        additional: ''
    };

    if (!arg('no-singular')) {
        dict.rules.push(['Is', ' ', 'Singular', ' ', 'Part2', '?']);
        dict.Singular = [
            'life',
            'time',
            'god',
            'facebook',
            'discrimination',
            'america',
            'europe',
            'the question generator',
            'fantasy',
            'history',
            'science',
            'school',
            'thinking',
            'the future',
            'the past',
            'democracy',
            'anarchy',
            'integration',
            'humanity',
            'work',
            'the NATO',
            'culture',
            'magic',
            'the apocalipse',
            'the paradise',
            'knowledge',
            'literature',
            'power',
            'the internet',
            'death',
            'china',
            'the president',
            'terror',
            'the pope',
            'fear',
            'reality',
            'the UN',
            'surveillance',
            'government',
            'emancipation',
            'everything',
            'wealth',
            'technology'
        ];

        if (arg('no-censorship')) {
            dict.Singular.push(
                'porn',
                'sex',
                'abortion'
            );
        }
    }

    if (!arg('no-plural')) {
        dict.rules.push(['Are', ' ', 'Plural', ' ', 'Part2', '?']);
        dict.Plural = [
            'aliens',
            'cats',
            'teenagers',
            'immigrants',
            'junkies',
            'drones',
            'weapons',
            'politics',
            'insects'
        ];
    }

    dict.Part2 = [
        'wrong',
        'sustainable',
        'good',
        'right',
        'sexy',
        'idyllic',
        'obsolete',
        'annoying',
        'bad for your health',
        'balanced',
        'organic',
        'perfect',
        'melancolic',
        'nessisary',
        'fun',
        'bad for the climate',
        'possible',
        'overrrated',
        'dead',
        'social',
        'a sin',
        'out',
        'popular',
        'subpar',
        'to blame',
        'beyond remedy',
        'dangerous',
        'blessing or curse',
        'matter of taste'
    ];

    AutoGen.balanceRules();
}());
