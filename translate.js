function translate(tokens) {

  let code = "";

  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i].type) {
      case "MAIN_FUNCTION_DECLARATION":
        code += `\nconst prompt = require('prompt-sync')();\n function main`;
        break;
      case "IDENTIFIER":
        if (tokens[i - 2].token === "for") break;
        else code += tokens[i].token;
        break;
      case "INTEGER_DATATYPE_KEYWORD":
        code += `let `;
        break;
      case "STRING_DATATYPE_KEYWORD":
        code += `let `;
        break;
      case "ASSIGNMENT_OPERATOR":
        code += ` = `;
        break;
      case "ADDITION_OPERATOR":
        code += ` + `;
        break;
      case "INTEGER_NUMBER":
        if (
          tokens[i + 1].type === "TERNARY_OPERATOR" ||
          tokens[i - 1].type === "TERNARY_OPERATOR"
        )
          break;
        else code += `${tokens[i].token}`;
        break;
      case "DECIMAL_NUMBER":
        code += `${tokens[i].token}`;
        break;
      case "SEMICOLON_DELIMETER":
        code += `;\n`;
        break;
      case "SHOW_KEYWORD":
        code += `console.log`;
        break;
      case "OPEN_PARENTHESIS_BRACKET":
        if (tokens[i - 1].token === "for") break;
        else code += `${tokens[i].token}`;
        break;
      case "CLOSE_PARENTHESIS_BRACKET":
        if (tokens[i - 2].token === "...") break;
        else code += `${tokens[i].token}`;
        break;
      case "OPEN_QUOTATION_SYMBOL":
        code += `"`;
        break;
      case "CLOSE_QUOTATION_SYMBOL":
        code += `"`;
        break;
      case "STRING_LITERAL":
        code += tokens[i].token;
        break;
      case "ENTER_KEYWORD":
        code += `prompt`;
        break;
      case "FOR_KEYWORD":
        code += `  for (${tokens[i + 2].token}; ${tokens[i + 2].token} <= ${tokens[i + 6].token
          }; ${tokens[i + 2].token}++) \n`;
        break;
      case "CLOSE_CURLY_BRACKET":
        code += `  }\n`;
        break;
        case "OPEN_CURLY_BRACKET":
        code += `  {\n`;
        break;
      case "FIXED_CONSTANT":
        code += `  const`;
        break;
      case "JOB_FUNCTION_KEYWORD":
        code += `  function`;
        break;
      case "OPEN_PARENTHESIS_PARAMETER":
        code += `${tokens[i].token}`;
        break;
      case "CLOSE_PARENTHESIS_PARAMETER":
        code += `${tokens[i].token}`;
        break;
      case "JOB_PARAMETER_IDENTIFIER":
        code += `${tokens[i].token}`;
        break;
      case "JOB_IDENTIFIER":
        code += ` ${tokens[i].token} `;
        break;
      case "COMMA_DELIMETER":
        code += `${tokens[i].token}`;
        break;
      case "RETURN_KEYWORD":
        code += `return `;
        break;
      default:
        break;
    }
  }

  //console.log(code);

  eval(code);
  main();
}

module.exports = { translate };
