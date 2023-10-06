function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

const rows = [];
const columns = []
function getColAndRows(matrix, val=0){
    for(let i=0; i<matrix.length; i++){
        const indexedOfZero = getAllIndexes(matrix[i], val);
        if(indexedOfZero.length){
            rows.push(i)
            for(const item of indexedOfZero){
                columns.push(item);
            }
        }
    }
    return [rows, columns]
}

function setZeros(matrix){
    const setMatrix =  getColAndRows(matrix);

    // i = 0, row array
    for(let j=0; j<setMatrix[0].length; j++){
        const itemLen = matrix[0].length;
        const newItem = Array(itemLen).fill(0);
        matrix[setMatrix[0][j]] = [...newItem];
    }

    // i = 1, column array
    for(let j=0; j<setMatrix[1].length; j++){
        const len = matrix.length;
        for(let k=0; k<len; k++){
            matrix[k][setMatrix[1][j]] = 0; 
        }
    }
    return matrix;
}

console.log(setZeros([
    [1,1,1,0],
    [1,1,1,5],
    [1,1,1,3]
  ]))
