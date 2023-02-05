const lexerModule = require('./lexer');
const lexer = lexerModule.lexer;

const syntaxRulesModule = require('./syntaxRules');
const syntaxRules = syntaxRulesModule.syntaxRules;

function syntaxAnalyzer(tokens) {

    console.log(tokens);
    let index = 0;
    let correct = true;
    let currentRules;

    while (index < tokens.length) {
        if (!currentRules) {
            if (syntaxRules[tokens[index].type]) currentRules = syntaxRules[tokens[index].type];
            else {
                correct = false;
                console.log("Syntax error at line " + tokens[index].line);
                break;
            }
        }

        correct = false;
        for (let x = 0; x < currentRules.length; x++) {
            for (let y = 0; y < currentRules[x].length; y++) {
                if (currentRules[x][y] === tokens[index + y].type) correct = true;
                else {
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
            console.log("Syntax error at line " + tokens[index].line);
            break;
        }
    }
}

function constructParseTree(tokens, syntaxRules) {
    let currentTokenIndex = 0;
    let currentRule = syntaxRules;
    let currentNode = { name: "Program", children: [] };
  
    function parse() {
      if (currentTokenIndex >= tokens.length) {
        return true;
      }
  
      for (const rule of currentRule) {
        let newNode = { name: rule[0], children: [] };
        currentNode.children.push(newNode);
        let previousTokenIndex = currentTokenIndex;
        for (const subRule of rule.slice(1)) {
          if (subRule === tokens[currentTokenIndex].type) {
            currentTokenIndex++;
          } else {
            newNode.children = [];
            currentNode.children.pop();
            currentTokenIndex = previousTokenIndex;
            break;
          }
        }
  
        if (newNode.children.length === rule.slice(1).length) {
          currentNode = newNode;
          if (parse()) {
            currentNode = currentNode.parent;
            return true;
          }
          currentNode = newNode.parent;
        }
      }
  
      return false;
    }
  
    parse();
    return currentNode;
  }
  


const fs = require("fs");

let code;

fs.readFile("./sample.ls", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  code = data;
  const program = lexer(code);
  syntaxAnalyzer(program);
});



