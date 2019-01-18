let data = ["Brian", "Ted", "John", "Mike"];
let result = [];    //where we want to store the result

//create a funcion that will wrap everything with an 
//li element and put it on the doc
function wrapWithLI(items) {
    let i = 0,
        res = [];

    for (i=0; i<items.length; i++) {
        res.push(`<li>${items[i]}</li>`);
    }

    return res;
}

console.log(wrapWithLI(data));
