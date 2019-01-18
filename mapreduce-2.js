let data = ["Brian", "Ted", "John", "Mike"];
let result = [];    //where we want to store the result

function wrapItems(items, func) {
    let i = 0,
        res = [];

    for (i=0; i<items.length; i++) {
        res.push(func(items[i]));
    }

    return res;
}

function divs(item) {
    return `<div>${item}</div>`;
}

console.log(wrapItems(data, divs));
console.log(wrapItems(data, item => `<p>${item}</p>`));

console.log(data.map(function(item, idx) {
    return `<span class="${(idx % 2) ? "alternate" : "normal"}">${item}</span>`;
}));