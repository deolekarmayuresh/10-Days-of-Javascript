// code snippet

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let i=0; i < s.length; i++){
        let char = s[i];
        if('aeiou'.includes(char)){
            console.log(char);
        }
    }

    let j=0;
    while(j < s.length) {
        let char = s[j];
        if(!'aeiou'.includes(char)){
            console.log(char);
        }
        j++;
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}