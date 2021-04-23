const custom_parser = require('./parsers/customparser');
const matrix_concatenator = require('./utils/matrix_concatenator');


function main(){
    // Entry point of this applciation

    let concatenated_matrix = matrix_concatenator.generate([
        [1, 2, 3],
        [4, 5, 6]
    ]
    )

    let resolved_parser_message = custom_parser.run("if (var_1 == 2, 0, if (var_2 == 4, 15, 0))+ if (var_2 == 3, 5, 0)- if (var_4 == 2, 0, 5)+ if (var_3 == 3, 5, 0)", {
        var_1: 1,
        var_2: 4,
        var_3: 3,
        var_4: 5
   })

    console.log(concatenated_matrix)
    console.log(resolved_parser_message)
}


main()