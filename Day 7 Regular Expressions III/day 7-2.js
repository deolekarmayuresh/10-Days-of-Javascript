// code snippet Day 7: Regular Expressions III

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    
    /*
     * Do not remove the return statement
     */
    return RegExp('\\d+','g');
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}