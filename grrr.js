
const keywords = {
    "int": "DATA_TYPE",
    "dec": "DATA_TYPE",
    "str": "DATA_TYPE",
    "=": "ASSIGNMENT_OPERATOR",
    "if": "IF_KEYWORD",
    "(": "OPEN_PARENTHESIS",
    ")": "CLOSE_PARENTHESIS",
    "<": "LESS_THAN_OPERATOR"
}

function lexicalAnalyzer(codes)  {
    const tokens = [];

    codes.forEach((code, index) => {
        const words = code.split(" ");
        words.forEach(word => {
            if (!isNaN(parseFloat(word))) tokens.push({ token: "NUMBER", value: word, line: index + 1 });
            else if (keywords[word]) tokens.push({ token: keywords[word], value: word, line: index + 1 });
            else tokens.push({ token: "IDENTIFIER", value: word, line: index + 1 });
        })
    })

    return tokens;
}

const program = [
    "if ( num < 2 "
]

const syntaxRules = {
    "DATA_TYPE": [
        ["DATA_TYPE", "IDENTIFIER", "ASSIGNMENT_OPERATOR", "ASSIGNMENT_OPERATOR"],
        ["DATA_TYPE", "IDENTIFIER", "ASSIGNMENT_OPERATOR", "NUMBER"],
    ],
    "IF_KEYWORD": [
        ["IF_KEYWORD", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS"],
        ["IF_KEYWORD", "OPEN_PARENTHESIS", "IDENTIFIER", "LESS_THAN_OPERATOR", "NUMBER", "CLOSE_PARENTHESIS"]
    ]
}

function syntaxAnalyzer(tokens) {

    let index = 0;
    let correct = true;

    let currentRules;

    while (index < tokens.length) {
        if (!currentRules) {
            if (syntaxRules[tokens[index].token]) currentRules = syntaxRules[tokens[index].token];
            else {
                correct = false;
                break;
            }
        }

        correct = false;
        for (let x = 0; x < currentRules.length; x++) {
            for (let y = 0; y < currentRules[x].length; y++) {
                if (currentRules[x][y] === tokens[index + y].token) correct = true;
                else {
                    correct = false;
                    break;
                }
            }

            if (correct) {
                index += currentRules[x].length;
                break;
            }
        }   

        
        if (!correct) {
            console.log("Syntax error at line " + tokens[index].line);
            break;
        } else currentRules = null;
    }
}

syntaxAnalyzer(lexicalAnalyzer(program));

