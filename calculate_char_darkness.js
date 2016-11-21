var calculateDarkness = function(char) {
    var canvas = document.createElement('CANVAS');
    canvas.width = 100;
    canvas.height = 100;
    var ctx = canvas.getContext('2d');
    // ctx.font = '30px Courier';
    ctx.font = '30px Monaco';
    ctx.fillText(char, 10, 50);

    var imageData = ctx.getImageData(0, 0, 100, 100);
    return imageData.data.reduce(function(a, b) {return a + b;});
};


var ary = [];
for(var i = 32; i < 127; i++) {
    ary.push(i);
}

var sortedAry = ary.map(function(i) {
   return [String.fromCharCode(i), calculateDarkness(String.fromCharCode(i))];
}).sort(function (a, b) {
    return a[1] - b[1];
});

var minDistance = 100000;
var maxDistance = 0;
for (var i = 0; i < sortedAry.length - 1; i++) {
    var a = sortedAry[i];
    var b = sortedAry[i + 1];
    // if (a[1] == b[1]) continue;
    minDistance = Math.min(b[1] - a[1], minDistance);
    maxDistance = Math.max(b[1] - a[1], maxDistance);

    a.push(b[1] - a[1]);
}

var s = '';

for (var i = 0; i < sortedAry.length; i++) {
    var a = sortedAry[i];
    s += Array(parseInt((a[2] || minDistance) / minDistance) + 1).join(a[0]);
}

console.log(s);

