function computeSum(array1, array2) {
    var result = [];
    var maxLength = Math.max(array1.length, array2.length);
    for (var i = 0; i < maxLength; i++) {
        var value1 = array1[i] || 0;
        var value2 = array2[i] || 0;
        result.push(value1 + value2);
    }
    return result;
}
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var output = computeSum(array1, array2);
console.log(output); 