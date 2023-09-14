
let arr = ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]
let AM = [];
let PM = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i].charAt(5) == 'A')
        AM.push(arr[i].split('-'));
    else
        PM.push(arr[i].split('-'));
}
// console.log(PM.sort());
let total = new Array(AM.sort() + ',' + PM.sort());
console.log(total);
total = total[0].split(',');
for (var i = 0; i < total.length; i++) {
    if (total[i].charAt(5) == 'P') {
        if (total[i].slice(0, 2) !== '12') {
            total[i] = total[i].replace(total[i].slice(0, 2), total[i].slice(0, 2) * 1 + 12);
        }
    }
    else
        if (total[i].slice(0, 2) == '12') {
            total[i] = total[i].replace('12', '00')
        }
    total[i] = total[i].slice(0, 2) * 60 + total[i].slice(3, 5) * 1;
}
console.log(total);
let local = longest = 0;

for (let i = 1; i < total.length - 1; i = i + 2) {
    console.log(total[i],total[i+1]);
    local = total[i + 1] - total[i];
    if (local > longest)
        longest = local;

}
console.log(Math.trunc(longest/60)+':'+longest%60);