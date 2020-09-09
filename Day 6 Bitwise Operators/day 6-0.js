function getMaxLessThanK(n, k) {
    // let max = 0;

    // for(let i=0; i<n; i++){
    //     for(let j=i+1; j<n; j++){
    //         let bit = i & j;

    //         if(bit<k && bit>max){
    //             max = bit;
    //         }
    //     }
    // }

    // return max;

    if((k-1 | k) <= n){
        return k-1;
    }else{
        return k-2;
    }
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}