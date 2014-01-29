# Autogen
## Warning! This is not a serious project
Autogen is a random sentence generator. It gets a dictionary with words and a simple grammar and builds a sentence out
of it.

##Example
### Rule

    Autogen.dictionary.rules.push(['The ', 'Noun', ' ', 'Verb', ' the ', 'Adjective', ' ', 'Noun']);

This adds a new rule to the dictionary. It says: Print "The", then a noun, then a space, then a verb, then " the "
again, then an adjective, one last space and a secound noun.

When Autogen reads the sentence, it goes through every string a the rule, looks if there is an array with that name in
the dictionary. If so, it inserts a random value out of that array. If not, it inserts the string directly.

### Fill the dictionary
To fill the dictionary, you add array to Autogen.dictionary.

    Autogen.dictionary.Noun = ['cat', 'internet', 'blog']
    Autogen.dictionary.Verb = ['eats', 'destroyes', 'celebrates']
    Autogen.dictionary.Verb = ['red', 'lazy', 'happy']

### Output
Running Autogen.gen() on the current example might output one of the following sentence:

    The cat destroys the happy blog.

Or something else maybe. It usually gets funnier the bigger the dictionary is.

## Known issues
* Many german examples in code
* We need a native english speaker for the english Proverbrecombinator

## Future functionality
* Weighted arrays to influence the random selection
