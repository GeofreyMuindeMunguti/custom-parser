function generate(matrix){
    /*
    This function takes a matrix and returns an array of the concatenated
    Matrix. Example
        
    generate([
            [1,2],
            [3,4]
    ])

    Returns: ['1 3', '1 4', '2 3', '2 4']
 
    */

    let first_item = matrix[0];
    
    let result = [];
    
    matrix[0].forEach(item=>{
        matrix.forEach(inner_item=> {
            if(inner_item != first_item) {
                inner_item.forEach(value=> {
                    result.push(item + " " + value)
                })
            }
        })
    })
    
   return result;
}


function generateConcat(matrix) {
    // Length of arrays (2).
    // What are their lengths(2)
    
}
 

module.exports = {
    generate
}