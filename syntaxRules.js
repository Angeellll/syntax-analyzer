const syntaxRules = {

    // COMMENTS
    "SINGLELINE_COMMENT": [   
        ["SINGLELINE_COMMENT"]
    ],

    "MULTILINE_COMMENT": [   
        ["MULTILINE_COMMENT"]
    ],

    // DECLARATION STATEMENTS
    "INTEGER_DATATYPE_KEYWORD": [
        // int num = 10;
        ["INTEGER_DATATYPE_KEYWORD", "IDENTIFIER", "ASSIGNMENT_OPERATOR", "INTEGER_NUMBER", "SEMICOLON_DELIMETER"],
        // int num;
        ["INTEGER_DATATYPE_KEYWORD", "IDENTIFIER", "SEMICOLON_DELIMETER"],
    ],
    "CHARACTER_DATATYPE_KEYWORD": [
        // char a = "M";
        ["CHARACTER_DATATYPE_KEYWORD", "IDENTIFIER", "ASSIGNMENT_OPERATOR", "OPEN_QUOTATION_SYMBOL", "STRING_LITERAL", "CLOSE_QUOTATION_SYMBOL", "SEMICOLON_DELIMETER"],
        // char a;
        ["CHARACTER_DATATYPE_KEYWORD", "IDENTIFIER", "SEMICOLON_DELIMETER"],
    ],
    "STRING_DATATYPE_KEYWORD": [
        // str a = "rawr"
        ["STRING_DATATYPE_KEYWORD", "IDENTIFIER", "ASSIGNMENT_OPERATOR", "OPEN_QUOTATION_SYMBOL", "STRING_LITERAL", "CLOSE_QUOTATION_SYMBOL", "SEMICOLON_DELIMETER"],
        // str a;
        ["STRING_DATATYPE_KEYWORD", "IDENTIFIER", "SEMICOLON_DELIMETER"],
    ],
    "DECIMAL_DATATYPE_KEYWORD": [
        // dec a = 1.2;
        ["DECIMAL_DATATYPE_KEYWORD", "IDENTIFIER", "ASSIGNMENT_OPERATOR", "DECIMAL_NUMBER", "SEMICOLON_DELIMETER"],
        // dec a;
        ["DECIMAL_DATATYPE_KEYWORD", "IDENTIFIER", "SEMICOLON_DELIMETER"],
    ],
    "BOOLEAN_DATATYPE_KEYWORD": [
        // boolean a = true;
        ["BOOLEAN_DATATYPE_KEYWORD", "BOOLEAN_IDENTIFIER", "ASSIGNMENT_OPERATOR", "TRUE_BOOLEAN_RESERVED_WORD", "SEMICOLON_DELIMETER"],
        // boolean a = false;
        ["BOOLEAN_DATATYPE_KEYWORD", "BOOLEAN_IDENTIFIER", "ASSIGNMENT_OPERATOR", "FALSE_BOOLEAN_RESERVED_WORD", "SEMICOLON_DELIMETER"],
        // boolean a;
        ["BOOLEAN_DATATYPE_KEYWORD", "BOOLEAN_IDENTIFIER", "SEMICOLON_DELIMETER"],
    ],

    // OUTPUT STATEMENTS
    "SHOW_KEYWORD": [
        // show("Hello");
        ["SHOW_KEYWORD", "OPEN_PARENTHESIS_BRACKET", "OPEN_QUOTATION_SYMBOL", "STRING_LITERAL", "CLOSE_QUOTATION_SYMBOL", "CLOSE_PARENTHESIS_BRACKET", "SEMICOLON_DELIMETER"],
        // show("Hello", rawr);
        ["SHOW_KEYWORD", "OPEN_PARENTHESIS_BRACKET", "OPEN_QUOTATION_SYMBOL", "STRING_LITERAL", "CLOSE_QUOTATION_SYMBOL", "COMMA_DELIMETER", "IDENTIFIER", "CLOSE_PARENTHESIS_BRACKET", "SEMICOLON_DELIMETER"],
        // show(rawr);
        ["SHOW_KEYWORD", "OPEN_PARENTHESIS_BRACKET", "IDENTIFIER", "CLOSE_PARENTHESIS_BRACKET", "SEMICOLON_DELIMETER"],
    ],
};

module.exports = { syntaxRules };
