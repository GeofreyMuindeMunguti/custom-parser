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

    let depth = matrix.length;
    
    let result = [];
    
    matrix[0].forEach(item=>{
        for(var i=1; i<depth; i++){
         matrix[i].forEach(inner_item=>{
           result.push(item + " " + inner_item)
       })
     }
    })
    
   return result;
}
 

module.exports = {
    generate
}