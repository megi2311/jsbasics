function area(x1,y1,x2,y2){
let lenght=Math.abs(x1-x2)
let width=Math.abs(y1-y2)
let area=lenght * width
let perimeter= 2* (lenght + width)
console.log(area.toFixed(2))
console.log(perimeter.toFixed(2))
}
area()