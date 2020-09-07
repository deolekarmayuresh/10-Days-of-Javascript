// code snippet Day 4: Count Objects

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let counter = 0;
    
    // objects.getCount(function(o) {
    //     if(o.x == o.y){
    //         counter += 1;
    //     }
    // });

    // return counter;

    for(let o in objects){
        if(objects[o].x == objects[o].y) {
            counter += 1;
        }
    }
    return counter;
}


function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}