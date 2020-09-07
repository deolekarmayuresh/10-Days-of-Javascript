// code snippet day 4

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
    let rectangle = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }

    //console.log(rectangle);
    return rectangle;
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}