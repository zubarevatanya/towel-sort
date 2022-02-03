
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = []
  if(!matrix){
    return result
  }
  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i]
    if (i % 2 === 1) {
      arr = arr.reverse()
    }
    result = result.concat(arr)
  }
  return result;

}

