// 2011-2014 by EDave
// released under Creative Commons Attribution/Share-Alike
// http://creativecommons.org/licenses/by-sa/3.0/deed.de
// (because it is most proverbs are taken from wikiquote)
/*jslint browser: true*/
/*global AutoGen*/
(function () {
    "use strict";
    var dict = AutoGen.dictionary = { rules: [] },
        arg = function (name) {
            return location.search.slice(1).split('&').indexOf(name) !== -1;
        };

    dict.options = {
        name: 'Sprichwortrekombinator',
        version: '2014-02',
        licence: {
            copyright: '2014 by EDave',
            licence: 'released under <a href="http://creativecommons.org/licenses/by-sa/3.0/deed.de">Creative Commons Attribution/Share-Alike</a>',
            inspiredBy: '<a href="http://sprichwortrekombinator.de">sprichwortrekombinator.de</a>'
        },
        additional: 'Sprichwörter von <a href="http://de.wikiquote.org/Deutsche_Sprichwörter">Wikiquote</a><br />' +
            'Vorschläge und Fredrick Freekowtski\'s E-Mail-Addresse bitte an: spam-catcher[at]xcvbnm[punkt]org'
    };

    if (!arg('no-singular')) {
        dict.rules.push(['Singular1', ' ', 'Singular2', '.']);
        dict.Singular1 = [];
        dict.Singular2 = [];
        AutoGen.pushMethod('Singular1', 'Singular2')(
            ['Adel', 'verpflichtet'],
            ['Aller Anfang', 'ist schwer'],
            ['Alles Gute', 'kommt von oben'],
            ['Alles, was einen Anfang hat', 'hat auch ein Ende'],
            ['Alte Liebe', 'rostet nicht'],
            ['Alter', 'geht vor Schönheit'],
            ['Alter', 'schützt vor Torheit nicht'],
            ['Auch ein blindes Huhn', 'findet auch mal ein Korn'],
            ['Angst', 'verleiht Flügel'],
            ['Arbeit', 'zieht Arbeit mit sich'],
            ['Auch der Tüchtige', 'braucht Glück'],
            ['Der Apfel', 'fällt nicht weit vom Stamm'],
            ['Der Appetit', 'kommt beim Essen'],
            /*['Der April', 'macht was er will'], "er" macht einiges kapput */
            ['Die Axt im Hause', 'erspart den Zimmermann'],
            ['Blut', 'ist dicker als Wasser'],
            ['Blinder Eifer', 'schadet nur'],
            ['Borgen', 'bringt Sorgen'],
            ['Der frühe Vogel', 'fängt den Wurm'],
            ['Die Katze', 'lässt das Mausen nicht'],
            ['Der Teufel', 'scheißt immer auf den größten Haufen'],
            ['Das letzte Hemd', 'hat keine Taschen'],
            ['Das Leben', 'ist kein Ponyhof'],
            ['Der erste Eindruck', 'zählt'],
            ['Der Esel', 'nennt sich immer zuerst'],
            ['Der Glaube', 'kann Berge versetzen'],
            ['Der Klügere', 'gibt nach'],
            ['Der Mensch', 'lebt nicht vom Brot allein'],
            ['Der Ton', 'macht die Musik'],
            ['Die Zeit', 'heilt alle Wunden'],
            ['Der Zweck', 'heiligt die Mittel'],
            ['Der Fisch', 'stinkt vom Kopf her'],

            ['Der Schuster', 'hat die schlechtesten Schuhe'],
            ['Die Tat', 'wirkt mächtiger als das Wort'],
            ['Der Blitz', 'schlägt nirgens zweimal ein'],
            ['Die Hoffnung', 'stirbt zuletzt'],
            ['Den letzten', 'beißen die Hunde'],
            ['Ein gutes Gewissen', 'ist ein sanftes Ruhekissen'],
            ['Ein rollender Stein', 'setzt kein Moos an'],
            ['Eigenlob', 'stinkt'],
            ['Eine Schwalbe', 'macht noch keinen Sommer'],
            ['Ein gebranntes Kind', 'scheut das Feuer'],
            ['Einsicht', 'ist der erste Schritt zur Besserung'],
            ['Ein leichter Schlag auf den Hinterkopf', 'erhöht das Denkvermögen'],
            ['Ein schlafender Fuchs', 'fängt kein Huhn'],
            ['Ein Unglück', 'kommt selten allein'],
            ['Ein voller Bauch', 'studiert nicht gern'],
            ['Ein Bild', 'sagt mehr als tausend Worte'],
            ['Geld', 'regiert die Welt'],
            ['Guter Rat', 'ist teuer'],
            ['Gut Ding', 'will Weile haben'],
            ['Geteiltes Leid', 'ist halbes Leid'],
            ['Geteilte Freude', 'ist doppelte Freude'],
            ['Hochmut', 'kommt vor dem Fall'],
            ['Hunger', 'ist der beste Koch'],
            ['Irren', 'ist menschlich'],
            ['Jede Münze', 'hat zwei Seiten'],
            ['Jedes Böhnchen', 'gibt ein Tönchen'],
            ['Jammern', 'füllt keine Kammern'],
            ['Kindermund', 'tut Wahrheit kund'],
            ['Keine Antwort', 'ist auch eine Antwort'],
            ['Kleinvieh', 'macht auch Mist'],
            ['Kapital', 'hat keine Moral'],
            ['Lachen', 'ist die beste Medizin'],
            ['Liebe', 'geht durch den Magen'],
            ['Lesen', 'bildet'],
            ['Morgenstund', 'hat Gold im Mund'],
            ['Müssiggang', 'ist aller Laster anfang'],
            ['Nicht alles, was glänzt', 'ist Gold'],
            ['Not', 'macht erfinderisch'],
            ['Ordnung', 'ist das halbe Leben'],
            ['Politik', 'verdirbt den Charakter'],
            ['Papier', 'ist geduldig'],
            ['Probieren', 'geht über studieren'],
            ['Rache', 'ist süß'],
            ['Rom', 'wurde nicht an einem Tag erbaut'],
            ['Reden ist Silber, Schweigen', 'ist Gold'],
            ['Sport', 'ist Mord'],
            ['Sauer', 'macht lustig'],
            ['Steter Tropfen', 'höhlt den Stein'],
            ['Stillstand', 'ist Rückschritt'],
            ['Übermut', 'tut selten gut'],
            ['Übung', 'macht den Meister'],
            ['Unkraut', 'vergeht nicht'],
            ['Vorsicht', 'ist die Mutter der Porzellankiste'],
            ['Wer anderen eine Grube gräbt', 'fällt selbst hinein'],
            ['Wer im Glasshaus sitzt', 'sollte nicht mit Steinen werfen'],
            ['Wer A sagt', 'muss auch B sagen'],
            ['Wer Wind säht', 'wird Sturm ernten'],
            ['Wer niemals anfängt', 'wird auch nie etwas zustande bringen'],
            ['Wer rastet, der', 'rostet'],
            ['Wer Ordnung hält', 'ist nur zu faul zum suchen'],
            ['Wer am Fluss baut', 'muss mit nassen Füßen rechnen'],
            ['Wer nicht hören will', 'muss fühlen'],
            ['Was lange währt', 'wird endlich gut'],
            ['Was einen nicht umbringt', 'macht einen stärker'],
            ['Wer zuletzt lacht', 'lacht am besten'],
            ['Was ich nicht weiß', 'macht mich nicht heiß'],
            ['Was dem einen recht ist', 'ist dem anderen billig'],
            ['Wer die Wahl hat', 'hat die Qual'],
            ['Was nicht ist', 'kann noch werden'],
            ['Wer den Teufel reinlegen will', 'muss früh aufstehen'],
            [/*das*/ undefined, 'schlägt dem Fass den Boden aus'],
            ['Wer nicht wagt', /* der nicht gewinnt */ undefined],
            ['Dummheit', 'tut weh'],
            ['Einbildung', 'ist auch eine Bildung'],
            ['Geiz', 'ist die größte Armut'],
            ['Geld allein', 'macht nicht glücklich'],
            ['Heiter', 'kommt weiter'],
            ['Heute', 'ist die beste Zeit'],
            ['Jeder', 'kehrt vor seiner eigenen Tür'],
            ['Kein Rauch', 'ohne Feuer'],
            ['Liebe', 'macht blind'],
            ['Neid', 'ist die ehrlichste Form der Anerkennung'],
            ['Schlaf', 'ist die beste Medizin'],
            ['Viel', 'hilft viel'],
            ['Wahltag', 'ist Zahltag'],
            ['Wer nichts wird', 'wird Wirt'],
            ['Wer flüstert', 'lügt'],
            ['Wissen', 'ist Macht'],
            ['Dankbarkeit', 'kostet nichts'],
            ['Das Auge', 'isst mit'],
            ['Dein Schicksal', 'bestimmt dein Leben'],
            ['Der Knochen', 'kommt nicht zum Hund'],
            ['Einmal', 'ist keinmal'],
            ['Die Kuh', 'macht Muh'],
            ['Faulheit', 'ist die Triebfeder des Fortschritts'],
            ['Geben', 'ist besser als nehmen'],
            ['Geiz', 'ist geil']
        );
        /* Bild bildet */
        /* Der Lauscher an der Wand hört nur die eigene Schand */

        if (arg('questionalble')) {
            AutoGen.pushMethod('Singular1', 'Singular2')(
                ['Arbeit', 'adelt'], /* Nazi verbindung */
                ['Stadtluft', 'macht frei'] /* könnte zu "Arbeit macht frei" führen */
            );
        }
    }

    if (!arg('no-plural')) {
        AutoGen.dictionary.rules.push(['Plural1', ' ', 'Plural2', '.']);
        dict.Plural1 = [];
        dict.Plural2 = [];
        AutoGen.pushMethod('Plural1', 'Plural2')(
            ['Alle Wege', 'führen nach Rom'],
            ['Ausnahmen', 'bestätigen die Regel'],
            ['Alte Füchse', 'gehen schwer in die Falle'],
            ['Die dümmsten Bauern', 'haben die dicksten Kartoffeln'],
            ['Die Letzten', 'werden die Ersten sein'],
            ['Gegensätze', 'ziehen sich an'],
            ['Getroffene Hunde', 'bellen'],
            ['Gottes Wege', 'sind unergründlich'],
            ['Hunde die bellen', 'beißen nicht'],
            ['Kleine Sünden', 'bestraft der liebe Gott sofort'],
            ['Kleine Geschenke', 'erhalten die Freundschaft'],
            ['Kleider', 'machen Leute'],
            ['Kinder und Betrunkene', 'sagen die Wahrheit'],
            ['Lügen', 'haben kurze Beine'],
            ['Messer, Gabel, Schere, Licht', 'sind für kleine Kinder nicht'],
            ['Neue Besen', 'kehren gut'],
            ['Scherben', 'bringen Glück'],
            ['Selbst große Könige', 'gehen zu Fuß aufs Klo'],
            ['Schlafende Hunde', 'soll man nicht wecken'],
            ['Stille Wasser', 'sind tief'],
            ['Totgesagte', 'leben länger'],
            ['Vögel, die am Morgen singen', 'holt am Mittag die Katz'],
            ['Viele Köche', 'verderben den Brei'],
            ['Viele Jäger', 'sind des Hasen Tod'],
            ['Die Ratten', 'verlassen das sinkende Schiff'],
            ['Gottes Mühlen', 'mahlen langsam'],
            ['Neun Leben', 'hat die Katze'],
            ['Reisende', 'soll man nicht aufhalten'],
            ['Träume', 'sind Schäume'],
            ['Versesslichkeit und Faulheit', 'sind Geschwisterkinder']
        );
    }

    if (!arg('no-at')) {
        AutoGen.dictionary.rules.push(['At1', ' ', 'At2', '.']);
        dict.At1 = [];
        dict.At2 = [];
        AutoGen.pushMethod('At1', 'At2')(
            ['Am Abend', 'wird der faule fleißig'],
            ['An der Leine', 'fängt der Hund keinen Hasen'],
            ['Auf der Kanzel', 'ist der Mönch keusch'],
            ['Auf einem Bein', 'kann man nicht stehen'],
            ['Auf jeden Regen', 'folgt auch Sonnenschein'],
            ['Bei den Wölfen', 'lernt man das heulen'],
            ['Da', 'beißt die Maus keinen Faden ab'],
            ['Da', 'liegt der Hase im Pfeffer'],
            ['Im Wein', 'liegt die Wahrheit'],
            ['Im Dunkeln', 'ist gut munkeln'],
            ['Unter den Blinden', 'ist der Einäugige König'],
            ['Auch auf dem höchsten Thron', 'sitzt man auf dem eigenen Hintern'],
            ['Wenn der Kuchen spricht', 'schweigen die Krümmel'],
            ['Vor Gott', 'sind alle Menschen gleich'],
            ['In der Not', 'frisst der Teufel fliegen'],
            ['Wo gehobelt wird', 'fallen Spähne'],
            ['Auch in einer alten Kirche', 'kann man eine schöne Messe lesen'],
            ['Fünf Minuten vor der Zeit', 'ist des Soldaten Pünklichkeit'],
            ['Hinterher', 'ist man immer klüger'],
            ['In der Nacht', 'sind alle Katzen grau'],
            ['In der Kürze', 'liegt die Würze'],
            ['Ist die Katze aus Haus', 'tanzen die Mäuse auf dem Tisch']
        );

        if (arg('questionalble')) {
            AutoGen.pushMethod('At1', 'At2')(
                /* Oft mit Sex assoziiert */
                ['Auf alten Pferden', 'lernt man reiten'],
                ['Auf alten Pfannen', 'lernt man kochen'],
                ['Auf alten Schiffen', 'lernt man segeln']
            );
        }
    }

    if (arg('better-then')) {
        AutoGen.dictionary.rules.push(['better', ' ', 'then', '.']);
        dict.better = [];
        dict.then = [];
        AutoGen.pushMethod('better', 'then')(
            ['Besser arm dran', 'als Arm ab'],
            ['Besser den Spatz in der Hand', 'als die Taube auf dem Dach'],
            ['Besser ein Ende mit Schrecken', 'als ein Schrecken ohne Ende'],
            ['Besser spät', 'als nie'],
            ['Das Hemd ist mir näher', 'als der Rock'],
            ['Das Gerücht ist immer größer', 'als die Wahrheit'],
            ['Das Kücken will klüger sein', 'als die Henne']
        );
    }

    if (arg('list')) {
        AutoGen.dictionary.rules.push(['List1', ', ', 'List2', '.']);
        dict.List1 = [];
        dict.List2 = [];
        AutoGen.pushMethod('List1', 'List2')(
            ['Anfangen ist leicht', 'Beharren ist eine Kunst'],
            ['Arbeit bringt Brot', 'Faulenzen bringt Hungersnot'],
            ['Arbeite klug', 'nicht hart'],
            ['Außen hui', 'innen pfui'],
            ['Der Mensch denkt', 'Gott lenkt'],
            ['Ende gut', 'alles gut'],
            ['Klappe zu', 'Affe tot'],
            ['Trautes Heim', 'Glück allein'],
            ['Pech im Spiel', 'Glück in der Liebe']
        );
    }
    /* Einem nackten Mann kann man nicht in die Taschen greifen */
    /* dem Glücklichen schlägt keine Stunde */
    /* Einem Geschenkten Gaul schaut man nicht ins Maul */
    /* Vorfreude ist die schönste Freude */

    AutoGen.balanceRules();
}());
