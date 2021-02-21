
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if (matrix === undefined || matrix.length === 0) {

    // if (matrix.length === 0) {
        return [];
    } else {
        let arr = new Array();
        let numberOfItems = matrix.length;

        for (let i = 0; i < numberOfItems; i++) {
            let n = matrix[i].length;
            if (i % 2 === 0) {
                for (let j = 0; j < n; j++) {
                    arr.push(matrix[i][j]);
                }
            } else {
                for (let k = n - 1; k >= 0; k--) {
                    arr.push(matrix[i][k]);
                }
            }
        }
        return arr;
    }

};