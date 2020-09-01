// code snippet

function factorial(n) {

    if(n==0 || n==1){
        return 1;
    }
    return factorial(n-1) * n;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}