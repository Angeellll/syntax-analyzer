const lexerModule = require('./lexer');
const lexer = lexerModule.lexer;

const syntaxRulesModule = require('./syntaxRules');
const syntaxRules = syntaxRulesModule.syntaxRules;


const translateModule = require('./translate.js');
const translate = translateModule.translate;


let correctSyntax = 0;

function syntaxAnalyzer(tokens) {

    let index = 0;
    let correct = true;
    let currentRules;
    let errorToken = []
    let errorIndex = 0

    // console.log(syntaxRules)
    // console.log(tokens)
    while (index < tokens.length) {
        if (!currentRules) {
            if (syntaxRules[tokens[index].type]) currentRules = syntaxRules[tokens[index].type];
            else {
                correct = false;
                if (tokens[index].type === "NO_MAIN_FUNCTION") {
                    console.log("\nNo main function!\n")
                } else if (tokens[index].type === "NO_BODY") {
                    console.log("\nNo statements inside main function!\n")
                } else if ( tokens[index].type === "UNDECLARED_VARIABLE") {
                    console.log("\nSyntax error. Variable `" + tokens[index].token + "` at line " + tokens[index].line + " is not declared!.\n");
                } else console.log("\nSyntax error. Unexpected token `" + tokens[index].token + "` at line " + tokens[index].line + ".\n");
                break;
            }
        }

        correct = false;
        for (let x = 0; x < currentRules.length; x++) {
            for (let y = 0; y < currentRules[x].length; y++) {
                if (currentRules[x][y] === tokens[index + y].type) {
                    correct = true;
                }
                else {
                    errorToken = tokens[index + y].token;
                    errorIndex = index + y
                    correct = false;
                    break;
                }
            }

            if (correct) {
                index += currentRules[x].length;
                currentRules = null;
                break;
            }
        }   



        if (!correct) {

            if ( tokens[errorIndex].type === "VARIABLE_ALREADY_DECLARED") {
                console.log("\nSyntax error. Variable `" + tokens[errorIndex].token + "` at line " + tokens[index].line + " already declared!.\n");
            } else if ( tokens[errorIndex].type === "UNDECLARED_VARIABLE") {
                console.log("\nSyntax error. Variable `" + tokens[errorIndex].token + "` at line " + tokens[index].line + " is not declared!.\n");
            } else if (tokens[errorIndex].type === "CLOSE_PARENTHESIS_BRACKET" || tokens[errorIndex].type === "INTEGER_NUMBER") {
                console.log("\nExpected token `;` after `" + errorToken + "` at line " + tokens[index].line + ".\n");
            } else if (tokens[errorIndex + 1].type === "OPEN_QUOTATION_SYMBOL" || tokens[errorIndex + 1].type && tokens[errorIndex + 1].type.includes("OPERATOR") ) {
                console.log("\nExpected token `;` at line " + tokens[index].line + ".\n");
            } else if (tokens[errorIndex-1].type === "IDENTIFIER" || tokens[errorIndex - 1].type === "INTEGER_NUMBER" ) {
                console.log("\nSyntax error. Unexpected token `" + tokens[errorIndex - 1].token + "` at line " + tokens[index].line + ".\n");
            } else if (tokens[errorIndex].type === "INTEGER_NUMBER" || tokens[errorIndex].type === "INVALID" ) {
                console.log("\nSyntax error. Unexpected token `" + tokens[errorIndex].type + "` at line " + tokens[index].line + ".\n");
            } else console.log("\nSyntax error. Unexpected token `" + tokens[errorIndex].token  + "` at line " + tokens[index].line + ".\n");
            break;
        } 
    }

    if (correct) {
        correctSyntax = 1;
        // console.log("\nSyntactically correct.\n");
    } 
}



const fs = require("fs");

let code;

// const prompt = require('prompt-sync')();
// console.log("\n")
// const openFile = prompt("Run file: ");

// fs.readFile("./" + openFile, "utf-8", (err, data) => {
fs.readFile("./sample.ls", "utf-8", (err, data) => {    
    if (err) {
        throw err;
    }
    code = data;
    const source = lexer(code);
    syntaxAnalyzer(source);
    if (correctSyntax === 1) translate(source);
});


