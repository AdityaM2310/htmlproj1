var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counts = {};
arr1.forEach(function(item) {
    if (counts[item]) {
        counts[item]++;
    } else {
        counts[item] = 1;
    }
});
var mostFrequentItem;
var highestCount = 0;
for (var item in counts) {
    if (counts[item] > highestCount) {
        mostFrequentItem = item;
        highestCount = counts[item];
    }
}
console.log(mostFrequentItem + " (" + highestCount + " times)");
