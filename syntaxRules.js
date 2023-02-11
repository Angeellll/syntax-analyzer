// IDENTIFIER
const id = "IDENTIFIER";

// COMMENTS
const comments = ["SINGLELINE_COMMENT", "MULTILINE_COMMENT"];

// ASSIGNMENT OPERATORS
const assignments = [
    "ASSIGNMENT_OPERATOR",
    "ADDITION_ASSIGNMENT_OPERATOR",
    "SUBTRACTION_ASSIGNMENT_OPERATOR",
    "MULTIPLICATION_ASSIGNMENT_OPERATOR",
    "DIVISION_ASSIGNMENT_OPERATOR",
    "MODULUS_ASSIGNMENT_OPERATOR",
];

// RELATIONAL OPERATORS
const relationals = [
    "GREATER_THAN_OPERATOR",
    "LESS_THAN_OPERATOR",
    "EQUALITY_OPERATOR",
    "LESS_THAN_OR_EQUAL_OPERATOR",
    "GREATER_THAN_OR_EQUAL_OPERATOR",
    "NOT_EQUAL_OPERATOR",
];

// ARITHMETIC OPERATORS
const arithmetic = [
    "ADDITION_OPERATOR",
    "SUBTRACTION_OPERATOR",
    "MULTIPLICATION_OPERATOR",
    "DIVISION_OPERATOR",
    "MODULUS_OPERATOR",
];

// DELIMETERS
const delimeters = ["SEMICOLON_DELIMETER", "COMMA_DELIMETER"];

// STRING
const string = [
    "OPEN_QUOTATION_SYMBOL",
    "STRING_LITERAL",
    "CLOSE_QUOTATION_SYMBOL",
];

// NUMBERS
const numbers = [
    "INTEGER_NUMBER",
    "DECIMAL_NUMBER",
    "NEGATIVE_INTEGER_NUMBER",
    "NEGATIVE_DECIMAL_NUMBER",
];

// BRACKETS
const brackets = [
    "OPEN_PARENTHESIS_BRACKET",
    "CLOSE_PARENTHESIS_BRACKET",
    "OPEN_CURLY_BRACKET",
    "CLOSE_CURLY_BRACKET",
];

// KEYWORDS
const keywords = [
    "SHOW_KEYWORD",
    "ENTER_KEYWORD",
    "IF_KEYWORD",
    "ELSE_KEYWORD",
    "RESERVED_WORD",
    "FOR_KEYWORD",
    "IN_KEYWORD",
    "TERNARY_OPERATOR",
    "WHILE_KEYWORD",
    "FIXED_CONSTANT",
    "CONSTANT_IDENTIFIER",
    "MAIN_FUNCTION_DECLARATION"
];

// DATA TYPE KEYWORD
const numberDatatypes = [
    "INTEGER_DATATYPE_KEYWORD",
    "DECIMAL_DATATYPE_KEYWORD",
];

const stringDatatypes = [
    "STRING_DATATYPE_KEYWORD",
    "CHARACTER_DATATYPE_KEYWORD",
];

const boolean = [
    "BOOLEAN_DATATYPE_KEYWORD",
    "BOOLEAN_IDENTIFIER",
    "TRUE_BOOLEAN_RESERVED_WORD",
    "FALSE_BOOLEAN_RESERVED_WORD",
];

const syntaxRules = [];

// for number declarations
for (let i = 0; i < numberDatatypes.length; i++) {

    syntaxRules[numberDatatypes[i]] = [];

    for (let j = 0; j < numbers.length; j++) {
        syntaxRules[numberDatatypes[i]].push([
            numberDatatypes[i],
            id,
            assignments[0],
            numbers[j],
            delimeters[0],
        ]);

        for (let k = 0; k < arithmetic.length; k++) {
            // id + num;
            syntaxRules[numberDatatypes[i]].push([
                numberDatatypes[i],
                id,
                assignments[0],
                id,
                arithmetic[k],
                numbers[j],
                delimeters[0],
            ]);

            // num + id;
            syntaxRules[numberDatatypes[i]].push([
                numberDatatypes[i],
                id,
                assignments[0],
                numbers[j],
                arithmetic[k],
                id,
                delimeters[0],
            ]);

            // int num = 10 + 32;
            syntaxRules[numberDatatypes[i]].push([
                numberDatatypes[i],
                id,
                assignments[0],
                numbers[j],
                arithmetic[k],
                numbers[j],
                delimeters[0],
            ]);


            // id + id;
            syntaxRules[numberDatatypes[i]].push([
                numberDatatypes[i],
                id,
                assignments[0],
                id,
                arithmetic[k],
                id,
                delimeters[0],
            ]);

            for (let l = 0; l < numbers.length; l++) {

                // int num = 1 + 2.2;
                syntaxRules[numberDatatypes[i]].push([
                    numberDatatypes[i],
                    id,
                    assignments[0],
                    numbers[l],
                    arithmetic[k],
                    numbers[j],
                    delimeters[0],
                ]);

                for (let a1 = 0; a1 < arithmetic.length; a1++) {
                    // int num = 10 + 32 + 32;
                    for (let a2 = 0; a2 < numbers.length; a2++) {
                        syntaxRules[numberDatatypes[i]].push([
                            numberDatatypes[i],
                            id,
                            assignments[0],
                            numbers[j],
                            arithmetic[k],
                            numbers[l],
                            arithmetic[a1],
                            numbers[a2],
                            delimeters[0],
                        ]);


                        for (let a3 = 0; a3 < arithmetic.length; a3++) {
                            // int num = 10 + 32 + 32;
                            for (let a4 = 0; a4 < numbers.length; a4++) {
                                syntaxRules[numberDatatypes[i]].push([
                                    numberDatatypes[i],
                                    id,
                                    assignments[0],
                                    numbers[j],
                                    arithmetic[k],
                                    numbers[l],
                                    arithmetic[a1],
                                    numbers[a2],
                                    arithmetic[a3],
                                    numbers[a4],
                                    delimeters[0],
                                ]);
                            }
                        }
                    }
                }

                // int number = enter("Enter number: ");
                syntaxRules[numberDatatypes[i]].push([
                    numberDatatypes[i],
                    id,
                    assignments[0],
                    keywords[1],
                    brackets[0],
                    ...string.values(),
                    brackets[1],
                    delimeters[0],
                ]);

                // int num = enter(num);
                syntaxRules[numberDatatypes[i]].push([
                    numberDatatypes[i],
                    id,
                    assignments[0],
                    keywords[1],
                    brackets[0],
                    numberDatatypes[i],
                    brackets[1],
                    delimeters[0],
                ]);
            }
        }


    }

    for (let a = 0; a < assignments.length; a++)
        //     int AO1 += y;
        syntaxRules[numberDatatypes[i]].push([
            numberDatatypes[i],
            id,
            assignments[a],
            id,
            delimeters[0],
        ]);



    syntaxRules[numberDatatypes[i]].push([numberDatatypes[i], id, delimeters[0]]);
    syntaxRules[numberDatatypes[i]].push([numberDatatypes[i], id, assignments[0], id, delimeters[0]]);
}

// for string declarations
for (let i = 0; i < stringDatatypes.length; i++) {

    syntaxRules[stringDatatypes[i]] = [];

    syntaxRules[stringDatatypes[i]].push([
        stringDatatypes[i],
        id,
        assignments[0],
        ...string.values(),
        delimeters[0],
    ]);

    // char var1 = enter("Enter words");
    syntaxRules[stringDatatypes[i]].push([
        stringDatatypes[i],
        id,
        assignments[0],
        keywords[1],
        brackets[0],
        ...string.values(),
        brackets[1],
        delimeters[0],
    ]);

    // char var1 = enter(char);
    syntaxRules[stringDatatypes[i]].push([
        stringDatatypes[i],
        id,
        assignments[0],
        keywords[1],
        brackets[0],
        stringDatatypes[i],
        brackets[1],
        delimeters[0],
    ]);

    syntaxRules[stringDatatypes[i]].push([stringDatatypes[i], id, delimeters[0]]);
}

// for boolean declarations
for (let i = 0; i < 1; i++) {
    syntaxRules[boolean[i]] = [];
    syntaxRules[boolean[i]].push([
        boolean[0],
        boolean[1],
        assignments[0],
        boolean[2],
        delimeters[0],
    ]);
    syntaxRules[boolean[i]].push([
        boolean[0],
        boolean[1],
        assignments[0],
        boolean[3],
        delimeters[0],
    ]);
    syntaxRules[boolean[i]].push([boolean[0], boolean[1], delimeters[0]]);
}

// for output statements
for (let i = 0; i < 1; i++) {
    syntaxRules[keywords[i]] = [];
    syntaxRules[keywords[i]].push([
        keywords[0],
        brackets[0],
        ...string.values(),
        brackets[1],
        delimeters[0],
    ]);

    syntaxRules[keywords[i]].push([
        keywords[0],
        brackets[0],
        ...string.values(),
        delimeters[1],
        id,
        brackets[1],
        delimeters[0],
    ]);

    syntaxRules[keywords[i]].push([
        keywords[0],
        brackets[0],
        id,
        brackets[1],
        delimeters[0],
    ]);

    syntaxRules[keywords[i]].push([
        keywords[0],
        brackets[0],
        ...string.values(),
        delimeters[1],
        id,
        delimeters[1],
        ...string.values(),
        brackets[1],
        delimeters[0],
    ]);
}

// smth like i = num + num;
for (let i = 0; i < 1; i++) {
    syntaxRules[id] = [];

    for (let j = 0; j < assignments.length; j++) {
        // num = num;
        syntaxRules[id].push([id, assignments[j], id, delimeters[0]]);

        for (let k = 0; k < arithmetic.length; k++) {
            // num = num + num;
            syntaxRules[id].push([
                id,
                assignments[0],
                id,
                arithmetic[k],
                id,
                delimeters[0],
            ]);


            for (let l = 0; l < numbers.length; l++) {
                // num = 10;
                syntaxRules[id].push([id, assignments[j], numbers[l], delimeters[0]]);

                for (let m = 0; m < numbers.length; m++) {

                    syntaxRules[id].push([
                        id,
                        assignments[0],
                        numbers[l],
                        arithmetic[k],
                        numbers[m],
                        delimeters[0],
                    ]);

                    // num2 = num1 + 1;
                    syntaxRules[id].push([
                        id,
                        assignments[0],
                        id,
                        arithmetic[k],
                        numbers[m],
                        delimeters[0],
                    ]);

                    syntaxRules[id].push([
                        id,
                        assignments[0],
                        numbers[m],
                        arithmetic[k],
                        id,
                        delimeters[0],
                    ]);


                    for (let n = 0; n < arithmetic.length; n++) {

                        for (let o = 0; o < numbers.length; o++) {

                            syntaxRules[id].push([
                                id,
                                assignments[0],
                                numbers[l],
                                arithmetic[k],
                                numbers[m],
                                arithmetic[n],
                                numbers[o],
                                delimeters[0],
                            ]);
                        }
                    }
                }

            }
        }
    }
}
//    if (a >= b) {
for (let i = 0; i < relationals.length; i++) {
    syntaxRules[keywords[2]] = [];
    syntaxRules[keywords[3]] = [];
    syntaxRules[keywords[5]] = [];
    syntaxRules[keywords[8]] = [];

    for (let j = 0; j < relationals.length; j++) {
        syntaxRules[keywords[2]].push([
            keywords[2],
            brackets[0],
            id,
            relationals[j],
            id,
            brackets[1],
            brackets[2],
        ]);

        syntaxRules[keywords[3]].push([
            keywords[3],
            keywords[4],
            brackets[0],
            id,
            relationals[j],
            id,
            brackets[1],
            brackets[2],
        ]);

        //    for ( i in 1…num1){

        syntaxRules[keywords[5]].push([
            keywords[5],
            brackets[0],
            id,
            keywords[6],
            numbers[0],
            keywords[7],
            id,
            brackets[1],
            brackets[2],
        ]);

        syntaxRules[keywords[5]].push([
            keywords[5],
            brackets[0],
            id,
            keywords[6],
            id,
            keywords[7],
            id,
            brackets[1],
            brackets[2],
        ]);

        //  while (True) {
        syntaxRules[keywords[8]].push([
            keywords[8],
            brackets[0],
            boolean[2],
            brackets[1],
            brackets[2],
        ]);
    }
    syntaxRules[keywords[3]].push([keywords[3], brackets[2]]);
}

// CONSTANT

for (let i = 0; i < 1; i++) {

    syntaxRules[keywords[9]] = [];

    for (let j = 0; j < numberDatatypes.length; j++) {

        for (let k = 0; k < numbers.length; k++) {
            syntaxRules[keywords[9]].push([
                keywords[9],
                numberDatatypes[k],
                keywords[10],
                assignments[0],
                numbers[k],
                delimeters[0],
            ]);
        }
    }

    for (let a = 0; a < stringDatatypes.length; a++) {
        syntaxRules[keywords[9]].push([
            keywords[9],
            stringDatatypes[a],
            keywords[10],
            assignments[0],
            ...string.values(),
            delimeters[0],
        ]);
    }
}

syntaxRules[comments[0]] = [];
syntaxRules[comments[0]].push([comments[0]]);

syntaxRules[comments[1]] = [];
syntaxRules[comments[1]].push([comments[1]]);

syntaxRules[brackets[3]] = [];
syntaxRules[brackets[3]].push([brackets[3]]);

syntaxRules[keywords[11]] = [];
syntaxRules[keywords[11]].push([keywords[11], brackets[2]]);


module.exports = { syntaxRules };
