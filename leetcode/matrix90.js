var rotate = function(matrix) {
    const n = matrix.length;
    for(let i=0; i<n/2; i++){
        for(let j=i; j<n-1-i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-1-i][j];
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
            matrix[j][n-1-i] = temp;
        }
    }
    console.log(matrix);
};

rotate( [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ])