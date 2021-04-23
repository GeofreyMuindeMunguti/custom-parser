function resolveConditional(conditional, list) {
  let items = conditional.split("==");
  return list[items[0]] === parseInt(items[1]) ? true : false;
}

function parser(s, l) {
/*
This function takes a string of a conditional statment 
and an object of key value pairs
representing the variables in use inside the string, parses it
and returns a value
*/
  let lexical = {};

  let tokens = s.match(/(?<=if[(]\s*).*?(?=\s*\))/gs);
  // This RegEx returns the list of strings within an if block

  let list = tokens[0].split(",");

  list.forEach((item, index) => {
    let conditional_index = 0;
    let truly_index = 1;
    let falsely_index = 2;

    if (index == conditional_index) {
      lexical.conditional = item;
    }
    if (index == truly_index) {
      if (item.includes("if")) {
        // If this is tru, the result is not an integer rather a conditional, reformat it well for recursive parsing
        lexical.truly =
          item +
          "," +
          list[truly_index + 1] +
          ", " +
          list[truly_index + 2] +
          ")";
        falsely_index + 2;
      } else {
        lexical.truly = parseInt(item);
      }
    }

    if (index == falsely_index) {
      if (item.includes("if")) {
        // If this is tru, the result is not an integer rather a conditional, reformat it well for recursive parsing
        lexical.falsely =
          item +
          "," +
          list[falsely_index + 1] +
          "," +
          list[falsely_index + 2] +
          ")";
      } else {
        lexical.falsely = parseInt(item);
      }
    }
  });

  if (resolveConditional(lexical.conditional, l)) {
    to_return = lexical.truly;
  } else {
    to_return = lexical.falsely;
  }

  if (Number.isInteger(to_return)) {
    return to_return;
  } else {
    return parser(to_return, l);
  }
}

function operate(parts, l, result) {
  let result2 = 0;

  parts.forEach((part, index) => {
    if (part.includes(")-")) {
      let parts = part.split("-");
      result2 = parser(parts[0], l);
      parts.forEach((part) => {
        result2 = subtract(part, l, result2);
      });
    } else {
      result += parser(part, l);
    }
  });
  return result + result2;
}

function subtract(part, l, result) {
  result -= parser(part, l);
  return result;
}

function run(s, l) {
/*
This function takes a string of a conditional statment
 and an object with key value pairs
of the variables in use in the string, parses it and returns 
a result.
Example

run("if (var_1 == 2, 0, if (var_2 == 4, 15, 0))+ if (var_2 == 3, 5, 0)- if (var_4 == 2, 0, 5)+ if (var_3 == 3, 5, 0)", {
     var_1: 1,
     var_2: 4,
     var_3: 3,
     var_4: 5
})

Result: 15
*/
  let parts = [];
  let characters = s.split("");
  let sc = "";

  characters.forEach((c) => {
    c != " " ? (sc += c) : null;
  });

  sc.includes("+") ? (parts = sc.split("+")) : parts.push(sc);

  let answer = operate(parts, l, 0);
  
  return answer;
}

module.exports = {
  run,
  parse: this.parse,
};
