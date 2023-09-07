function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (scripts.length > 1)
        return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
    
    return scripts.length == 0 ? "none" : scripts[0].name;
}
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl